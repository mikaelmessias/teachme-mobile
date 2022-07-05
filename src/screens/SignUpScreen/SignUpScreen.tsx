import React, {useState} from 'react';
import {View, Text} from 'react-native';
import SignUpHeader from '../../components/SignUpHeader/SignUpHeader';
import styles from './styles';
import WelcomeIcon from '../../assets/svg/welcome.svg';
import Button from '../../components/Button/Button';
import {RadioButton, TextInput} from 'react-native-paper';
import useSignUp from '../../contexts/SignUpContext/useNavigation';
import {setUserBasicData} from '../../contexts/SignUpContext/actions';
import {useNavigation} from '@react-navigation/native';
import {UserTypeEnum} from '../../generated/graphql';

const SignUpScreen = () => {
  const {dispatch: signUpDispatch} = useSignUp();

  const [name, setName] = useState('Mikael Pereira Messias');
  const [email, setEmail] = useState('mikaelpmessias@gmail.com');
  const [userType, setUserType] = useState<UserTypeEnum>(UserTypeEnum.Padawan);

  const nav = useNavigation();

  const handleTextChange = (text: string) => {
    setName(text);
  };

  const handleEmailChange = (text: string) => {
    setEmail(text);
  };

  const handleUserTypeChange = (newUserType: string) => {
    setUserType(newUserType as UserTypeEnum);
  };

  const handleContinuePress = () => {
    signUpDispatch(setUserBasicData(name, email, userType));

    nav.navigate('SignUpPersonalDataScreen');
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
            label={'Nome completo'}
            placeholder="Digite seu nome completo"
            right={
              <TextInput.Icon name="account-circle-outline" color={'#333'} />
            }
            outlineColor={'#B5B5B5'}
            style={styles.input}
            value={name}
            onChangeText={handleTextChange}
          />

          <TextInput
            mode="outlined"
            label={'Email'}
            placeholder="Digite seu melhor email"
            right={<TextInput.Icon name="email-outline" color={'#333'} />}
            outlineColor={'#B5B5B5'}
            style={styles.input}
            value={email}
            onChangeText={handleEmailChange}
          />

          <View style={styles.userTypeSelectionContainer}>
            <Text style={styles.userTypeSelectionTitle}>
              O que você procura no Teach.me?
            </Text>
            <Text style={styles.userTypeSelectionSubtitle}>
              Escolha uma das opções abaixo
            </Text>

            <RadioButton.Group
              onValueChange={handleUserTypeChange}
              value={userType}
            >
              <View style={styles.radioGroup}>
                <View style={styles.radioButtonContainer}>
                  <RadioButton value={UserTypeEnum.Padawan} color="#6717D1" />
                  <Text style={styles.radioButtonLabel}>Preciso de ajuda</Text>
                </View>
                <View style={styles.radioButtonContainer}>
                  <RadioButton value={UserTypeEnum.Jedi} color="#6717D1" />
                  <Text style={styles.radioButtonLabel}>Quero ajudar</Text>
                </View>
              </View>
            </RadioButton.Group>
          </View>
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

export default SignUpScreen;
