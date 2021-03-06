import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {Image, ImageBackground, Text, View, ScrollView} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import Button from '../../components/Button/Button';

import {styles} from './styles';

const HomeScreen = () => {
  const nav = useNavigation();

  useEffect(() => {
    (async () => {
      try {
        const userId = await AsyncStorage.getItem('@userId');
        const userType = await AsyncStorage.getItem('@userType');

        if (userId && userType) {
          nav.navigate('BottomTabNavigator');
        }
      } catch (e) {
        console.log(e);
      }

      SplashScreen.hide();
    })();
  }, [nav]);

  const handleSignUpPress = () => {
    nav.navigate('SignUpScreen');
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
      <ScrollView style={styles.scrollView}>
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
          <Button
            title="Entrar"
            onPress={handleLoginPress}
            style={styles.signInButton}
          />
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

export default HomeScreen;
