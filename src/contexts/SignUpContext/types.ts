import {UserTypeEnum, WeekdaysEnum} from '../../generated/graphql';

export enum SignUpActionTypes {
  SET_BASIC_DATA = '@SignUp/SET_BASIC_DATA',
  SET_PERSONAL_DATA = '@SignUp/SET_PERSONAL_DATA',
  SET_JEDI_SKILLS = '@SignUp/SET_JEDI_SKILLS',
  SET_JEDI_AVAILABILITY = '@SignUp/SET_JEDI_AVAILABILITY',
}

export interface SignUpState {
  userType?: UserTypeEnum;

  basicData?: {
    name: string;
    email: string;
  };

  personalData?: {
    birthdate: number;
    cpf: string;
    password: string;
    biography: string;
  };

  jedi?: {
    id: number;
  };

  skills?: {
    id: string;
    tech: {
      id: number;
      title: string;
      thumbnail: string;
    };
    price: number;
  }[];

  availableDays?: WeekdaysEnum[];
}

export type SignUpAction = {
  type: SignUpActionTypes;
  payload: SignUpState;
};

export interface SignUpContextType {
  state: SignUpState;
  dispatch: SignUpDispatch;
}

export type SignUpDispatch = (action: SignUpAction) => void;
export type SignUpProviderProps = {children: React.ReactNode};
