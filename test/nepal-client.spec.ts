import { NepalClient } from '../src/index';
import { expect, assert } from 'chai';
import { describe } from 'mocha';
import * as sinon from 'sinon';
import { LocationContext } from '../src/types';

afterEach(() => {
  sinon.restore();
});


/*
 *
 */
describe('Nepal Client', (() => {
  /*
   * Base Libs
   */
  describe('base libraries', (() => {
    it('should give access to AIMSClient', (() => {
      expect(NepalClient.aims).to.exist;
    }));

    it('should give access to Client', (() => {
      expect(NepalClient.client).to.exist;
    }));

    it('should give access to Authenticate', (() => {
      expect(NepalClient.authenticate).to.exist;
    }));

  }));

  /*
   * Nepal Client
   */
  describe('when calling base methods', (() => {
    it('should set locationContext on client when calling setEnvironment', (() => {
      const spy: sinon.SinonSpy = sinon.stub(NepalClient.client, 'setLocationContext');
      NepalClient.setEnvironment('integration');
      expect(spy.calledWith('integration'));
    }));

    it('should throw an error with an invalid locationContext when call setEnvironment', (() => {
      // @ts-ignore
      assert.throws(() => NepalClient.setEnvironment('fake'), Error, 'Invalid locationContext.  Must be one of: [integration|production|development]');
    }));
  }));

  /*
   * Authentication
   */
  describe('when using authentication', (() => {
   
  }));
}));
