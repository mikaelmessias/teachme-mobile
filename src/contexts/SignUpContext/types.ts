import {JediEntity, PadawanEntity} from '../../generated/graphql';

export enum SignUpActionTypes {
  BASIC_DATA_PADAWAN = '@SignUp/BASIC_DATA_PADAWAN',
  PERSONAL_DATA_PADAWAN = '@SignUp/PERSONAL_DATA_PADAWAN',
  BASIC_DATA_JEDI = '@SignUp/BASIC_DATA_JEDI',
  PERSONAL_DATA_JEDI = '@SignUp/PERSONAL_DATA_JEDI',
  ABILITIES_JEDI = '@SignUp/ABILITIES_JEDI',
  AVAILABILITY_JEDI = '@SignUp/AVAILABILITY_JEDI',
}

export interface SignUpState {
  jedi: JediEntity;
  padawan: PadawanEntity;
  userType: string;
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
