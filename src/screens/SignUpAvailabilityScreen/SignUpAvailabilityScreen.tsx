import React from 'react';
import {View, Text} from 'react-native';
import SignUpHeader from '../../components/SignUpHeader/SignUpHeader';
import styles from './styles';
import Button from '../../components/Button/Button';
import useSignUp from '../../contexts/SignUpContext/useNavigation';
import {useNavigation} from '@react-navigation/native';

const SignUpAvailabilityScreen = () => {
  const {dispatch: signUpDispatch} = useSignUp();

  const nav = useNavigation();

  const handleContinuePress = () => {
    nav.navigate('SignUpFinishedScreen');
  };

  return (
    <View style={styles.container}>
      <SignUpHeader showBackButton disableLogoButton />

      <View style={styles.contentContainer}>
        <View style={styles.pageTitle}>
          <Text style={styles.pageTitleText}>Disponibilidade</Text>
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

export default SignUpAvailabilityScreen;
