import {StyleSheet} from 'react-native';

const getButtonContainerStyles = (mode: 'blue' | 'simple' = 'simple') =>
  StyleSheet.create({
    default: {
      height: 55,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 50,
      backgroundColor: mode === 'blue' ? '#6717D1' : '#FFFFFF',
      borderColor: mode === 'blue' ? '#FFFFFF' : '#B5B5B5',
      borderWidth: 1,
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

export default {getButtonContainerStyles, getButtonTitleStyles};
