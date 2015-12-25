import babelPlugin from '../src/index';
import * as babel from 'babel-core';
import {expect} from 'chai';

describe('plugin', () => {
  describe('Babel Plugin', () => {
    it('transforms the relative path into an absolute path', () => {
      const targetRequire = `./some/example.js`;
      const transformedCode = babel.transform("import SomeExample from '~/some/example.js';", {
        plugins: [babelPlugin]
      });

      expect(transformedCode.code).to.contain(targetRequire);
    });

    it('transforms the relative path into an absolute path with the configured root-path', () => {
      const targetRequire = `some/custom/root/some/example.js`;
      const transformedCode = babel.transform("import SomeExample from '~/some/example.js';", {
        plugins: [[
          babelPlugin, {
            rootPathSuffix: 'some/custom/root'
          }
        ]]
      });

      expect(transformedCode.code).to.contain(targetRequire);
    });
  });
});
