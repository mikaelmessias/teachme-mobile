import React, {FunctionComponent, useState} from 'react';
import {View} from 'react-native';
import SignUpHeader from '../../components/SignUpHeader/SignUpHeader';
import styles from './styles';
import WelcomeIcon from '../../assets/svg/welcome.svg';
import Button from '../../components/Button/Button';
import {Text, TextInput} from 'react-native-paper';
import {useUserLoginLazyQuery} from '../../generated/graphql';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native';

const LoginScreen: FunctionComponent = () => {
  const [passwordSecureTextEntry, setPasswordSecureTextEntry] = useState(true);

  const nav = useNavigation();

  const [userLogin, {loading}] = useUserLoginLazyQuery();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handlePasswordBlur = () => {
    if (!passwordSecureTextEntry) {
      setPasswordSecureTextEntry(true);
    }
  };

  const handlePasswordIconPress = () => {
    setPasswordSecureTextEntry(!passwordSecureTextEntry);
  };

  const handleLoginPress = async () => {
    if (email && password) {
      try {
        const {data} = await userLogin({
          variables: {
            email: email,
            password: password,
          },
        });

        if (data && data.user_login) {
          try {
            await AsyncStorage.setItem(
              '@userId',
              data.user_login.id.toString(),
            );
            await AsyncStorage.setItem('@userType', data.user_login.userType);

            nav.navigate('NotificationScreen');
          } catch (asyncStorageError) {
            console.log(asyncStorageError);
          }
        } else {
          console.warn('Email ou senha inválidos');
        }
      } catch (requestError) {
        console.log(requestError);
      }
    } else {
      console.warn('Preencha o email e a senha');
    }
  };

  return (
    <View style={styles.container}>
      <SignUpHeader showBackButton />

      <View style={styles.formContainer}>
        <View style={styles.formDescription}>
          <WelcomeIcon style={styles.formDescriptionIcon} />
          <Text style={styles.formDescriptionMessage}>Bem vindo, jovem!</Text>
        </View>

        <View style={styles.formInputs}>
          <TextInput
            mode="outlined"
            label={'Email'}
            placeholder="Digite seu email"
            right={
              <TextInput.Icon name="account-circle-outline" color={'#333'} />
            }
            outlineColor={'#B5B5B5'}
            style={styles.input}
            value={email}
            onChangeText={setEmail}
          />

          <TextInput
            mode="outlined"
            label={'Senha'}
            placeholder="Digite uma senha"
            right={
              <TextInput.Icon
                onPress={handlePasswordIconPress}
                name={passwordSecureTextEntry ? 'eye' : 'eye-off'}
                color={'#333'}
              />
            }
            outlineColor={'#B5B5B5'}
            style={styles.input}
            secureTextEntry={passwordSecureTextEntry}
            onBlur={handlePasswordBlur}
            value={password}
            onChangeText={setPassword}
          />
        </View>

        <Button
          title="Entrar"
          onPress={handleLoginPress}
          style={styles.continueButton}
          loading={loading}
        />
      </View>
    </View>
  );
};

export default LoginScreen;
