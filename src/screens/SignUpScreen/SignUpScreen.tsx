import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {View} from 'react-native';
import {Button, Text} from 'react-native-paper';
import {styles} from './styles';

const SignUpScreen = () => {
  const nav = useNavigation();
  return (
    <View style={styles.container}>
      <Text>teste</Text>
      <Button onPress={() => nav.goBack()}>Voltar</Button>
    </View>
  );
};

export default SignUpScreen;
