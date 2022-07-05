import React from 'react';
import {View, Text} from 'react-native';
import SignUpHeader from '../../components/SignUpHeader/SignUpHeader';
import styles from './styles';
import SignUpIcon from '../../assets/svg/sign-up-completed.svg';
import Button from '../../components/Button/Button';
import {useNavigation} from '@react-navigation/native';

const SignUpFinishedScreen = () => {
  const nav = useNavigation();

  const handleContinuePress = () => {
    nav.navigate('LoginScreen');
  };

  return (
    <View style={styles.container}>
      <SignUpHeader />

      <View style={styles.contentContainer}>
        <View style={styles.messageContainer}>
          <Text style={styles.title}>Obrigado por se cadastrar!</Text>
          <Text style={styles.description}>
            Para continuar, faça login com o email e senha que você acabou de
            criar!
          </Text>
          <SignUpIcon style={styles.messageIcon} />
        </View>

        <Button
          title="Ir para login"
          onPress={handleContinuePress}
          style={styles.continueButton}
          mode={'blue'}
        />
      </View>
    </View>
  );
};

export default SignUpFinishedScreen;
