import {UserTypeEnum} from '../../generated/graphql';
import {SignUpState} from './types';

export const SIGN_UP_INITIAL_STATE: SignUpState = {
  userType: UserTypeEnum.Padawan,
  basicData: {
    name: '',
    email: '',
  },
  personalData: {
    birthdate: 0,
    cpf: '',
    password: '',
    biography: '',
  },
  jedi: {
    id: 0,
  },
  skills: [],
  availableDays: [],
};
