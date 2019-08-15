import { ALClient } from '@al/client';
import { AIMSClient } from '@al/aims';
import { Authenticate } from './nepal-authenticate';
import { LocationContext } from './types';

/*
 *
 */
class NepalClient {
  public client = ALClient;
  public aims = AIMSClient;
  public authenticate = Authenticate;

  /*
   *
   */
  constructor(locationContext: LocationContext = 'integration') {
    this.setEnvironment(locationContext);
  }

  /*
   *
   */
  public setEnvironment (env: LocationContext): void {
    if (!/integration|production|development/.test(env)) {
      throw new Error('Invalid locationContext.  Must be one of: [integration|production|development]');
    }
    this.client.setLocationContext(env);
  }

}

export const nepalClient = new NepalClient();
