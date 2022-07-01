import React from 'react';
import {SignUpContextType} from './types';

const SignUpContext = React.createContext<SignUpContextType | undefined>(
  undefined,
);

export default SignUpContext;
