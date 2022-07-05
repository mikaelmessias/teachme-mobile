import {UserTypeEnum} from '../../generated/graphql';
import {SignUpAction, SignUpActionTypes, SignUpState} from './types';

const reducer = (state: SignUpState, action: SignUpAction) => {
  switch (action.type) {
    case SignUpActionTypes.SET_BASIC_DATA:
      return {
        ...state,
        basicData: action.payload.basicData,
        userType: action.payload.userType,
      };

    case SignUpActionTypes.SET_PERSONAL_DATA:
      return state.userType === UserTypeEnum.Padawan
        ? {
            ...state,
            personalData: action.payload.personalData,
          }
        : {
            ...state,
            personalData: action.payload.personalData,
            jedi: action.payload.jedi,
          };

    case SignUpActionTypes.SET_JEDI_SKILLS:
      return {
        ...state,
        skills: action.payload.skills,
      };

    case SignUpActionTypes.SET_JEDI_AVAILABILITY:
      return {
        ...state,
        availableDays: action.payload.availableDays,
      };
  }
};

export default reducer;
