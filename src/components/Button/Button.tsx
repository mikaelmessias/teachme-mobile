import React, {FunctionComponent} from 'react';
import {StyleProp, Text, TouchableOpacity, ViewStyle} from 'react-native';
import {ActivityIndicator} from 'react-native-paper';

import styles from './styles';

interface iButtonProps {
  onPress: () => void;
  title: string;
  mode?: 'blue' | 'simple';
  style?: StyleProp<ViewStyle>;
  loading?: boolean;
  disabled?: boolean;
}

const Button: FunctionComponent<iButtonProps> = props => {
  const {onPress, mode, style: PropStyle, title, loading, disabled} = props;

  return (
    <TouchableOpacity
      style={[
        styles.getButtonContainerStyles(mode, disabled || loading),
        PropStyle,
      ]}
      onPress={onPress}
      disabled={disabled || loading}
    >
      <Text style={styles.getButtonTitleStyles(mode)}>{title}</Text>
      {loading && <ActivityIndicator size={16} style={styles.loadingIcon} />}
    </TouchableOpacity>
  );
};

Button.defaultProps = {
  mode: 'simple',
  loading: false,
  disabled: false,
};

export default Button;
