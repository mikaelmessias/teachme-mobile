import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {FunctionComponent} from 'react';
import {View} from 'react-native';
import {IconButton} from 'react-native-paper';
import styles from './styles';

const UserHeader: FunctionComponent = () => {
  const nav = useNavigation();

  const handleIconButtonPress = async () => {
    await AsyncStorage.removeItem('@userId');
    await AsyncStorage.removeItem('@userType');

    nav.navigate('LoginScreen');
  };

  return (
    <View style={styles.container}>
      <IconButton
        style={styles.userAvatarButton}
        icon="logout"
        color="#6717D1"
        onPress={handleIconButtonPress}
      />
    </View>
  );
};

export default UserHeader;
