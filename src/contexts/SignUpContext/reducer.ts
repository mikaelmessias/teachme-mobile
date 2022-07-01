import {SignUpAction, SignUpActionTypes, SignUpState} from './types';

const reducer = (state: SignUpState, action: SignUpAction) => {
  switch (action.type) {
    case SignUpActionTypes.BASIC_DATA_PADAWAN:
    case SignUpActionTypes.PERSONAL_DATA_PADAWAN:
    case SignUpActionTypes.BASIC_DATA_JEDI:
    case SignUpActionTypes.PERSONAL_DATA_JEDI:
    case SignUpActionTypes.ABILITIES_JEDI:
    case SignUpActionTypes.AVAILABILITY_JEDI:
      return action.payload;
  }
};

export default reducer;
