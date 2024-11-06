import {User, UserAPI} from 'src/domain/User';

export interface AuthCredentials {
  token: string;
  user: User;
}

export interface AuthCredentialsAPI {
  auth: {
    type: string; // 'bearer'
    token: string; // 'MQ.Gm3bqSBe8hNlYzBEz_GyYRIhKZcd-bUX_InOboKUrMeLld5ZphY-mOURnA2y'
  };
  user: UserAPI;
}

export interface SignInData {
  username?: string;
  email?: string;
  password: string;
}

/**@description representação dos dados da API */
export interface SignUpDataAPI {
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  password: string;
}

export interface SignUpData {
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  password: string;
}
