import {NativeStackScreenProps} from '@react-navigation/native-stack';

import {RootStackParamList} from '@routes';

import {AppStackParamList} from './AppStack';

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

export type AppScreenProps<TRouteName extends keyof AppStackParamList> =
  NativeStackScreenProps<AppStackParamList, TRouteName>;
