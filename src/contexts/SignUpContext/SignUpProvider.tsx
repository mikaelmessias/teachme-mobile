import React, {useReducer} from 'react';
import SignUpContext from './SignUpContext';
import signUpReducer from './reducer';
import {SignUpProviderProps} from './types';
import {SIGN_UP_INITIAL_STATE} from './utils';

const SignUpProvider = (props: SignUpProviderProps) => {
  const [state, dispatch] = useReducer(signUpReducer, SIGN_UP_INITIAL_STATE);
  const {children} = props;

  const value = {state, dispatch};

  return (
    <SignUpContext.Provider value={value}>{children}</SignUpContext.Provider>
  );
};

export default SignUpProvider;
