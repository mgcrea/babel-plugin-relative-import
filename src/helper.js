import {dirname, relative} from 'path';
import findPkg from 'find-pkg';
const root = process.cwd();

function transformRelativeToRootPath(path, filePath, rootPathSuffix = '') {
  const fileBase = dirname(filePath);
  if (startsWith(path, '~/')) {
    const withoutTilde = path.substring(2, path.length);
    if (startsWith(rootPathSuffix, '%/')) {
      const suffix = rootPathSuffix.substring(1, rootPathSuffix.length);
      const localRoot = dirname(findPkg.sync(fileBase));
      return './' + relative(fileBase, `${localRoot}${suffix}/${withoutTilde}`);
    }
    const suffix = '/' + rootPathSuffix.replace(/^(\/)|(\/)$/g, '');
    return './' + relative(fileBase, `${root}${suffix}/${withoutTilde}`);
  }
  if (typeof path === 'string') {
    return path;
  }
  throw new Error('ERROR: No path passed');
}

function startsWith(string, target) {
  let startsWithTarget = false;

  if (typeof string === 'string') {
    const firstCharactersOfString = string.substring(0, target.length);
    if (firstCharactersOfString === target) {
      startsWithTarget = true;
    }
  }

  return startsWithTarget;
}

export default {transformRelativeToRootPath, startsWith};
