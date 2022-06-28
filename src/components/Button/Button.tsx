import React, {FunctionComponent} from 'react';
import {StyleProp, Text, TouchableOpacity, ViewStyle} from 'react-native';
import styles from './styles';

interface iButtonProps {
  onPress: () => void;
  title: string;
  mode?: 'blue' | 'simple';
  style?: StyleProp<ViewStyle>;
}

const Button: FunctionComponent<iButtonProps> = props => {
  const {onPress, mode, style: PropStyle, title} = props;

  return (
    <TouchableOpacity
      style={[styles.getButtonContainerStyles(mode), PropStyle]}
      onPress={onPress}
    >
      <Text style={styles.getButtonTitleStyles(mode)}>{title}</Text>
    </TouchableOpacity>
  );
};

Button.defaultProps = {
  mode: 'simple',
};

export default Button;
