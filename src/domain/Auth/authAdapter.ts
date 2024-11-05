import {userAdapter} from '../User/userAdapter';

import {AuthCredentials, AuthCredentialsAPI} from './authTypes';

function toAuthCredentials(
  authCredentialsAPI: AuthCredentialsAPI,
): AuthCredentials {
  return {
    token: authCredentialsAPI.auth.token,
    user: userAdapter.toUser(authCredentialsAPI.user),
  };
}

/**
 * @description converts from API reference to model reference
 */
export const authAdapter = {toAuthCredentials};
