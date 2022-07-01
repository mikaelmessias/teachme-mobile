import React from 'react';
import {View, Text} from 'react-native';
import SignUpHeader from '../../components/SignUpHeader/SignUpHeader';
import styles from './styles';
import Button from '../../components/Button/Button';
import useSignUp from '../../contexts/SignUpContext/useNavigation';
// import {useNavigation} from '@react-navigation/native';

const SignUpPersonalDataScreen = () => {
  const {state: signUpState} = useSignUp();

  // const nav = useNavigation();

  const getUserName = () => {
    if (signUpState.userType === 'padawan') {
      return signUpState.padawan.name;
    } else {
      return signUpState.jedi.name;
    }
  };

  const getUserEmail = () => {
    if (signUpState.userType === 'padawan') {
      return signUpState.padawan.email;
    } else {
      return signUpState.jedi.email;
    }
  };

  const handleContinuePress = () => {};

  return (
    <View style={styles.container}>
      <SignUpHeader showBackButton />

      <View style={styles.contentContainer}>
        <View>
          <Text>Nome</Text>
          <Text>{getUserName()}</Text>
          <Text>Email</Text>
          <Text>{getUserEmail()}</Text>
        </View>

        <Button
          title="Continuar"
          onPress={handleContinuePress}
          style={styles.continueButton}
        />
      </View>
    </View>
  );
};

export default SignUpPersonalDataScreen;
