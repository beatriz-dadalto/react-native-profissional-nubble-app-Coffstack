import {NativeStackScreenProps} from '@react-navigation/native-stack';

import {AppStackParamList} from './AppStack';
import {AuthStackParamList} from './AuthStack';

declare global {
  namespace ReactNavigation {
    interface RootParamList extends AuthStackParamList, AppStackParamList {}
  }
}

export type AppScreenProps<TRouteName extends keyof AppStackParamList> =
  NativeStackScreenProps<AppStackParamList, TRouteName>;

export type AuthScreenProps<TRouteName extends keyof AuthStackParamList> =
  NativeStackScreenProps<AuthStackParamList, TRouteName>;
