// navigation.d.ts

import {iRootStackParamList} from './interfaces/iRootStackParamList';

declare global {
  namespace ReactNavigation {
    interface RootParamList extends iRootStackParamList {}
  }
}
