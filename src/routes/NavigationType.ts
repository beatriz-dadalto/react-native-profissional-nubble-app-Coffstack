import {BottomTabScreenProps} from '@react-navigation/bottom-tabs';
import {CompositeScreenProps} from '@react-navigation/native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

import {AppStackParamList} from './AppStack';
import {AppTabBottomTabParamList} from './AppTabNavigator';
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

export type AppTabScreenProps<
  TRouteName extends keyof AppTabBottomTabParamList,
> = CompositeScreenProps<
  BottomTabScreenProps<AppTabBottomTabParamList, TRouteName>,
  NativeStackScreenProps<AppStackParamList, 'AppTabNavigator'>
>;
