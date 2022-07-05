import React, {FunctionComponent} from 'react';
import {TouchableOpacity, View} from 'react-native';
import Logo from '../../assets/svg/logo-min.svg';
import styles from './styles';
import Icon from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';

interface iSignUpHeaderProps {
  showBackButton?: boolean;
  disableBackButton?: boolean;
  disableLogoButton?: boolean;
}

const SignUpHeader: FunctionComponent<iSignUpHeaderProps> = props => {
  const {showBackButton, disableBackButton, disableLogoButton} = props;

  const nav = useNavigation();

  const handleGoBack = () => {
    nav.goBack();
  };

  const handleLogoPress = () => {
    if (!disableLogoButton) {
      nav.navigate('HomeScreen');
    }
  };

  const getLogo = () => {
    if (disableLogoButton) {
      return <Logo fill={'#000'} />;
    }

    return <Logo fill={'#000'} onPress={handleLogoPress} />;
  };

  return (
    <View style={styles.getContainerStyles(showBackButton)}>
      {showBackButton && (
        <TouchableOpacity onPress={handleGoBack} disabled={disableBackButton}>
          <Icon name="arrow-back-circle-outline" size={32} color="#000" />
        </TouchableOpacity>
      )}

      {getLogo()}

      {showBackButton && (
        <Icon name="arrow-back-circle-outline" size={32} color="#FFF" />
      )}
    </View>
  );
};

SignUpHeader.defaultProps = {
  disableBackButton: false,
  disableLogoButton: false,
  showBackButton: false,
};

export default SignUpHeader;
