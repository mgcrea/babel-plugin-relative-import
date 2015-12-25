import pluginHelper from '../src/helper';
import path from 'path';
import {expect} from 'chai';

describe('helper', () => {

  describe('transformRelativeToRootPath', () => {
    it('returns a string', () => {
      const func = pluginHelper.transformRelativeToRootPath('');
      expect(func).to.be.a('string');
    });

    it('transforms given path relative root-path', () => {
      const result = pluginHelper.transformRelativeToRootPath('~/some/path');
      expect(result).to.equal('./some/path');
    });

    it('throws error if no string is passed', () => {
      expect(() => {
        pluginHelper.transformRelativeToRootPath();
      }).to.throw(Error);
    });
  });

  describe('transformRelativeToRootPath', () => {
    it('returns a string', () => {
      const func = pluginHelper.transformRelativeToRootPath('', __filename);
      expect(func).to.be.a('string');
    });

    it('transforms given path relative root-path', () => {
      const result = pluginHelper.transformRelativeToRootPath('~/some/path', __filename);
      expect(result).to.equal('./../some/path');
    });

    it('throws error if no string is passed', () => {
      expect(() => {
        pluginHelper.transformRelativeToRootPath();
      }).to.throw(Error);
    });
  });

  describe('transformWithRootPathSuffix', () => {
    it('returns a string', () => {
      const func = pluginHelper.transformRelativeToRootPath('', __filename, 'src');
      expect(func).to.be.a('string');
    });

    it('transforms given path relative root-path', () => {
      const result = pluginHelper.transformRelativeToRootPath('~/some/path', __filename, 'src');
      expect(result).to.equal('./../src/some/path');
    });

    it('throws error if no string is passed', () => {
      expect(() => {
        pluginHelper.transformRelativeToRootPath();
      }).to.throw(Error);
    });
  });

  describe('transformRelativeToClosestModule', () => {
    it('returns a string', () => {
      const func = pluginHelper.transformRelativeToRootPath('', __filename, '%/src');
      expect(func).to.be.a('string');
    });

    it('transforms given path relative root-path', () => {
      const otherModulePath = path.join(__dirname, '..', 'node_modules', 'mocha', 'index.js');
      const result = pluginHelper.transformRelativeToRootPath('~/some/path', otherModulePath, '%/src');
      expect(result).to.equal('./src/some/path');
    });

    it('throws error if no string is passed', () => {
      expect(() => {
        pluginHelper.transformRelativeToRootPath();
      }).to.throw(Error);
    });
  });

  describe('startsWith', () => {
    it('returns a boolean', () => {
      const func = pluginHelper.startsWith();
      expect(func).to.be.a('boolean');
    });

    it('check if a "~/" is at the beginning of the string', () => {
      const withoutTilde = pluginHelper.startsWith('some/path', '~/');
      const withTilde = pluginHelper.startsWith('~/some/path', '~/');
      expect(withoutTilde).to.be.false;
      expect(withTilde).to.be.true;
    });

    it('returns false if no string is passed', () => {
      const nothingPassed = pluginHelper.startsWith();
      const wrongTypePassed = pluginHelper.startsWith([]);
      expect(nothingPassed).to.be.false;
      expect(wrongTypePassed).to.be.false;
    });
  });
});
