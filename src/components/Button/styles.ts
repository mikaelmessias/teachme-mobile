import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  loadingIcon: {
    marginLeft: 8,
  },
});

const getButtonContainerStyles = (
  mode: 'blue' | 'simple' = 'simple',
  disabled?: boolean,
) =>
  StyleSheet.create({
    default: {
      height: 55,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 50,
      backgroundColor: mode === 'blue' ? '#6717D1' : '#FFFFFF',
      borderColor: mode === 'blue' ? '#FFFFFF' : '#B5B5B5',
      borderWidth: 1,
      flexDirection: 'row',
      opacity: disabled ? 0.6 : 1,
    },
  }).default;

const getButtonTitleStyles = (mode: 'blue' | 'simple' = 'simple') =>
  StyleSheet.create({
    default: {
      fontSize: 16,
      fontFamily: 'Wigrum-Regular',
      color: mode === 'blue' ? '#FFFFFF' : '#2A2A2A',
    },
  }).default;

export default {...styles, getButtonContainerStyles, getButtonTitleStyles};
