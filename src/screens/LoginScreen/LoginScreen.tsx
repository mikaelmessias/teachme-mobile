import React, {useState} from 'react';
import {View} from 'react-native';
import SignUpHeader from '../../components/SignUpHeader/SignUpHeader';
import styles from './styles';
import WelcomeIcon from '../../assets/svg/welcome.svg';
import Button from '../../components/Button/Button';
import {Text, TextInput} from 'react-native-paper';

const LoginScreen = () => {
  const [passwordSecureTextEntry, setPasswordSecureTextEntry] = useState(true);

  const handlePasswordBlur = () => {
    if (!passwordSecureTextEntry) {
      setPasswordSecureTextEntry(true);
    }
  };

  const handlePasswordIconPress = () => {
    setPasswordSecureTextEntry(!passwordSecureTextEntry);
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
          />
        </View>

        <Button
          title="Entrar"
          onPress={() => console.log('logando...')}
          style={styles.continueButton}
        />
      </View>
    </View>
  );
};

export default LoginScreen;
