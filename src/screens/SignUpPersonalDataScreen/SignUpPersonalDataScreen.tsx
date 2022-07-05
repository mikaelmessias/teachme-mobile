import React, {useEffect, useState} from 'react';
import {View, Text, ScrollView, Keyboard} from 'react-native';
import SignUpHeader from '../../components/SignUpHeader/SignUpHeader';
import styles from './styles';
import Button from '../../components/Button/Button';
import useSignUp from '../../contexts/SignUpContext/useNavigation';
import {TextInput} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import moment from 'moment';
import {setPersonalData} from '../../contexts/SignUpContext/actions';

import {
  useCreateJediMutation,
  useCreatePadawanMutation,
} from '../../generated/graphql';

const SignUpPersonalDataScreen = () => {
  const {state: signUpState, dispatch: signUpDispatch} = useSignUp();

  const [createPadawan, {loading: isPadawanCreating}] =
    useCreatePadawanMutation();
  const [createJedi, {loading: isJediCreating}] = useCreateJediMutation();

  const nav = useNavigation();

  const [loading, setLoading] = useState(false);

  const [birthdate, setBirthdate] = useState(new Date().getTime());
  const [cpf, setCpf] = useState('42033392864');
  const [password, setPassword] = useState('teste@123');
  const [passwordConfirmation, setPasswordConfirmation] = useState('teste@123');
  const [biography, setBiography] = useState(
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec velit est, vehicula vel feugiat faucibus, vestibulum ut dolor. Nunc vitae viverra nisi. Nullam interdum auctor lorem, et consequat sem elementum eu. Sed fringilla hendrerit felis ut viverra. Praesent auctor turpis in pellentesque tempor',
  );
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const [passwordSecureTextEntry, setPasswordSecureTextEntry] = useState(true);
  const [confirmPasswordSecureTextEntry, setConfirmPasswordSecureTextEntry] =
    useState(true);

  useEffect(() => {
    console.log(isPadawanCreating, isJediCreating);
    setLoading(isPadawanCreating || isJediCreating);
  }, [isPadawanCreating, isJediCreating]);

  const getUserName = () => {
    if (signUpState.basicData) {
      return signUpState.basicData.name;
    }
  };

  const getUserEmail = () => {
    if (signUpState.basicData) {
      return signUpState.basicData.email;
    }
  };

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const handleDatePickerConfirm = (date: Date) => {
    Keyboard.dismiss();
    setBirthdate(date.getTime());
    handleDatePickerCancel();
  };

  const handleDatePickerCancel = () => {
    setDatePickerVisibility(false);
  };

  const handleBirthdateValue = () => {
    if (birthdate) {
      return moment(birthdate).format('DD/MM/YYYY');
    }

    return '';
  };

  const handlePasswordBlur = () => {
    if (!passwordSecureTextEntry) {
      setPasswordSecureTextEntry(true);
    }
  };

  const handlePasswordIconPress = () => {
    setPasswordSecureTextEntry(!passwordSecureTextEntry);
  };

  const handleConfirmPasswordBlur = () => {
    if (!confirmPasswordSecureTextEntry) {
      setConfirmPasswordSecureTextEntry(true);
    }
  };

  const handleConfirmPasswordIconPress = () => {
    setPasswordSecureTextEntry(!passwordSecureTextEntry);
  };

  const handleContinuePress = async () => {
    const variables = {
      name: signUpState.basicData!.name,
      email: signUpState.basicData!.email,
      cpf: cpf,
      password: password,
      birthdate: birthdate,
      biography: biography,
    };

    console.log(variables);

    try {
      if (signUpState.userType === 'padawan') {
        await createPadawan({variables});
        nav.navigate('SignUpFinishedScreen');
      } else {
        const {data} = await createJedi({variables});

        if (data && data.jedi_create) {
          signUpDispatch(
            setPersonalData(
              data.jedi_create.id,
              birthdate,
              cpf,
              password,
              biography,
            ),
          );
        }

        nav.navigate('SignUpSkillsScreen');
      }
    } catch (e) {
      console.log('Ocorreu uma falha ao criar o usuário');
    }
  };

  return (
    <View style={styles.container}>
      <SignUpHeader
        showBackButton
        disableBackButton={loading}
        disableLogoButton
      />

      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={handleDatePickerConfirm}
        onCancel={handleDatePickerCancel}
      />

      <View style={styles.contentContainer}>
        <View style={styles.pageTitle}>
          <Text style={styles.pageTitleText}>Dados pessoais</Text>
        </View>

        <ScrollView style={styles.formContainer}>
          <View style={styles.basicInfoCard}>
            <Text style={styles.basicInfoTitle}>Nome</Text>
            <Text style={styles.basicInfoText}>{getUserName()}</Text>
          </View>

          <View style={styles.basicInfoCard}>
            <Text style={styles.basicInfoTitle}>Email</Text>
            <Text style={styles.basicInfoText}>{getUserEmail()}</Text>
          </View>

          <TextInput
            mode="outlined"
            label={'Data de nascimento'}
            outlineColor={'#B5B5B5'}
            style={styles.input}
            value={handleBirthdateValue()}
            onPressIn={showDatePicker}
            disabled={loading}
          />

          <TextInput
            mode="outlined"
            label={'CPF'}
            outlineColor={'#B5B5B5'}
            style={styles.input}
            value={cpf}
            onChangeText={setCpf}
            disabled={loading}
          />

          <TextInput
            mode="outlined"
            label={'Digite uma senha'}
            placeholder={'Senha'}
            outlineColor={'#B5B5B5'}
            style={styles.input}
            value={password}
            onChangeText={setPassword}
            disabled={loading}
            secureTextEntry={passwordSecureTextEntry}
            onBlur={handlePasswordBlur}
            right={
              <TextInput.Icon
                onPress={handlePasswordIconPress}
                name="eye"
                color={'#333'}
              />
            }
          />

          <TextInput
            mode="outlined"
            label={'Confirme a senha'}
            placeholder={'Confirmação de senha'}
            outlineColor={'#B5B5B5'}
            style={styles.input}
            value={passwordConfirmation}
            onChangeText={setPasswordConfirmation}
            disabled={loading}
            secureTextEntry={confirmPasswordSecureTextEntry}
            onBlur={handleConfirmPasswordBlur}
            right={
              <TextInput.Icon
                onPress={handleConfirmPasswordIconPress}
                name={confirmPasswordSecureTextEntry ? 'eye' : 'eye-off'}
                color={'#333'}
              />
            }
          />

          <TextInput
            mode="outlined"
            label={'Biografia'}
            placeholder={
              'Escreva uma descrição que te defina em até 240 caracteres'
            }
            outlineColor={'#B5B5B5'}
            style={styles.input}
            value={biography}
            onChangeText={setBiography}
            multiline
            maxLength={240}
            disabled={loading}
          />

          <Button
            title="Continuar"
            onPress={handleContinuePress}
            style={styles.continueButton}
            loading={loading}
          />
        </ScrollView>
      </View>
    </View>
  );
};

export default SignUpPersonalDataScreen;
