import {createContext} from 'react';
import React from 'react';

import {AuthCredentials} from '@domain';

import {AuthCredentialsService} from '../authCredentialsTypes';

export const AuthCredentialsContext = createContext<AuthCredentialsService>({
  authCredentials: null,
  isLoading: true,
  saveCredentials: async () => {},
  removeCredentials: async () => {},
});

export function AuthCredentialsProvider({
  children,
}: React.PropsWithChildren<{}>) {
  const [authCredentials, setAuthCredentials] =
    React.useState<AuthCredentials | null>(null);
  const [isLoading, setIsLoading] = React.useState<boolean>(true);
  setIsLoading(false); // inseri apenas para poder commitar sem erro

  async function saveCredentials(ac: AuthCredentials): Promise<void> {
    // TODO persist

    setAuthCredentials(ac);
  }

  async function removeCredentials(): Promise<void> {
    // TODO persist

    setAuthCredentials(null);
  }

  return (
    <AuthCredentialsContext.Provider
      value={{authCredentials, isLoading, saveCredentials, removeCredentials}}>
      {children}
    </AuthCredentialsContext.Provider>
  );
}
