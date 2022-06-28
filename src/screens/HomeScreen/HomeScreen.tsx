import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Image, ImageBackground, Text, View} from 'react-native';
import Button from '../../components/Button/Button';

import {styles} from './styles';

const HomeScreen = () => {
  const nav = useNavigation();

  const handleSignUpPress = () => {
    nav.navigate('HomeScreen');
  };

  const handleLoginPress = () => {
    nav.navigate('LoginScreen');
  };

  return (
    <ImageBackground
      source={require('../../assets/bg.png')}
      resizeMode="cover"
      style={styles.container}
    >
      <Image
        style={styles.logo}
        source={require('../../assets/logo-light.png')}
      />
      <View style={styles.descriptionGroup}>
        <Text style={styles.description}>Acesse todos os nossos</Text>
        <Text style={[styles.description, styles.descriptionHighlight]}>
          recursos fantásticos
        </Text>
        <Text style={styles.description}>em poucos cliques</Text>
      </View>
      <View>
        <Button
          mode="blue"
          title="Criar uma conta"
          onPress={handleSignUpPress}
          style={styles.signUpButton}
        />
        <Button title="Entrar" onPress={handleLoginPress} />
      </View>
    </ImageBackground>
  );
};

export default HomeScreen;
