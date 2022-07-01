import {SignUpActionTypes} from './types';
import {SIGN_UP_INITIAL_STATE} from './utils';

export const createBasicDataPadawan = (name: string, email: string) => ({
  type: SignUpActionTypes.BASIC_DATA_PADAWAN,
  payload: {
    padawan: {...SIGN_UP_INITIAL_STATE.padawan, name, email},
    jedi: SIGN_UP_INITIAL_STATE.jedi,
    userType: 'padawan',
  },
});

export const createBasicDataJedi = (name: string, email: string) => ({
  type: SignUpActionTypes.BASIC_DATA_JEDI,
  payload: {
    padawan: SIGN_UP_INITIAL_STATE.padawan,
    jedi: {...SIGN_UP_INITIAL_STATE.jedi, name, email},
    userType: 'jedi',
  },
});
