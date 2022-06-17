import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Image, ImageBackground} from 'react-native';
import {Button, Text} from 'react-native-paper';

import {styles} from './styles';

const InitialScreen = () => {
  const nav = useNavigation();
  return (
    <ImageBackground
      source={require('../../assets/bg.png')}
      resizeMode="cover"
      style={styles.container}>
      <Image
        style={styles.logo}
        source={require('../../assets/logo-light.png')}
      />
      <Text style={styles.description}>
        Acesse todos os nossos recursos fantásticos em poucos cliques
      </Text>
      <Button
        mode="contained"
        style={styles.signUpButton}
        onPress={() => nav.navigate('SignUpScreen')}>
        Criar uma conta
      </Button>
      <Button mode="outlined" style={styles.loginButton} color="#2A2A2A">
        Entrar
      </Button>
    </ImageBackground>
  );
};

export default InitialScreen;
