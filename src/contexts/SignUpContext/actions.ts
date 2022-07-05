import {UserTypeEnum, WeekdaysEnum} from '../../generated/graphql';
import {SignUpActionTypes} from './types';

export const setUserBasicData = (
  name: string,
  email: string,
  userType: UserTypeEnum,
) => ({
  type: SignUpActionTypes.SET_BASIC_DATA,
  payload: {
    basicData: {
      name,
      email,
    },
    userType,
  },
});

export const setPersonalData = (
  id: number,
  birthdate: number,
  cpf: string,
  password: string,
  biography: string,
) => ({
  type: SignUpActionTypes.SET_PERSONAL_DATA,
  payload: {
    personalData: {birthdate, cpf, password, biography},
    jedi: {id},
  },
});

export const setJediSkills = (
  skills: {
    id: string;
    tech: {
      id: number;
      title: string;
      thumbnail: string;
    };
    price: number;
  }[],
) => ({
  type: SignUpActionTypes.SET_JEDI_SKILLS,
  payload: {
    skills,
  },
});

export const setJediAvailableDays = (availableDays?: WeekdaysEnum[]) => ({
  type: SignUpActionTypes.SET_PERSONAL_DATA,
  payload: {
    availableDays,
  },
});
