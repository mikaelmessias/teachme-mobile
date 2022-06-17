import React, {useState} from 'react';
import {SafeAreaView, View} from 'react-native';
import {Button, TextInput} from 'react-native-paper';

import {styles} from './styles';

const InitialScreen = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.inputsContainer}>
        <TextInput
          label="Digite seu nome completo"
          value={name}
          onChangeText={text => setName(text)}
          mode={'outlined'}
          style={styles.nameInputStyle}
        />
        <TextInput
          label="Digite seu melhor email"
          value={email}
          onChangeText={text => setEmail(text)}
          mode={'outlined'}
        />
      </View>
      <View>
        <Button
          icon="camera"
          mode="contained"
          onPress={() => console.log('Pressed')}
          style={{padding: 20}}>
          Press me
        </Button>
      </View>
    </SafeAreaView>
  );
};

export default InitialScreen;
