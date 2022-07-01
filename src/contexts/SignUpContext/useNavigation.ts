import {useContext} from 'react';
import SignUpContext from './SignUpContext';

const useSignUp = () => {
  const context = useContext(SignUpContext);

  if (context === undefined) {
    throw new Error('useSignUp must be used within a SignUpProvider');
  }

  return context;
};

export default useSignUp;
