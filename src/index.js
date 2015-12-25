import pluginHelper from './helper';

export default ({types: t}) => {
  return {
    visitor: {
      ImportDeclaration(path, state) {
        const givenPath = path.node.source.value;
        const rootPathSuffix = state && state.opts && typeof state.opts.rootPathSuffix === 'string' ? state.opts.rootPathSuffix : '';
        if (pluginHelper.startsWith(givenPath, '~/')) {
          path.node.source.value = pluginHelper.transformRelativeToRootPath(givenPath, state.file.opts.filename, rootPathSuffix);
        }
      }
    }
  };
};
