import {SignUpState} from './types';

export const SIGN_UP_INITIAL_STATE: SignUpState = {
  jedi: {
    id: 0,
    cpf: '',
    email: '',
    name: '',
    password: '',
    createdAt: Date.now(),
    updatedAt: Date.now(),
  },
  padawan: {
    id: 0,
    cpf: '',
    email: '',
    name: '',
    password: '',
    createdAt: Date.now(),
    updatedAt: Date.now(),
  },
  userType: 'padawan',
};
