import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import Logo from '../../assets/svg/logo-min.svg';
import styles from './styles';
import Icon from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';

interface iSignUpHeaderProps {
  showBackButton?: boolean;
}

const SignUpHeader = (props: iSignUpHeaderProps) => {
  const {showBackButton} = props;

  const nav = useNavigation();

  const handleGoBack = () => {
    nav.goBack();
  };

  return (
    <View style={styles.getContainerStyles(showBackButton)}>
      {showBackButton && (
        <TouchableOpacity onPress={handleGoBack}>
          <Icon name="arrow-back-circle-outline" size={32} color="#000" />
        </TouchableOpacity>
      )}

      <Logo fill={'#000'} />

      {showBackButton && (
        <Icon name="arrow-back-circle-outline" size={32} color="#FFF" />
      )}
    </View>
  );
};

export default SignUpHeader;
