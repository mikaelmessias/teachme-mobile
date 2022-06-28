import React from 'react';
import {View} from 'react-native';
import SignUpHeader from '../../components/SignUpHeader/SignUpHeader';
import styles from './styles';
import WelcomeIcon from '../../assets/svg/welcome.svg';
import Button from '../../components/Button/Button';
import {Text, TextInput} from 'react-native-paper';

const LoginScreen = () => {
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
            placeholder="Digite sua senha"
            right={
              <TextInput.Icon name="form-textbox-password" color={'#333'} />
            }
            outlineColor={'#B5B5B5'}
            style={styles.input}
          />
        </View>

        <Button
          title="Continuar"
          onPress={() => console.log('logando...')}
          style={styles.continueButton}
        />
      </View>
    </View>
  );
};

export default LoginScreen;
