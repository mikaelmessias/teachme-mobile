import {StyleSheet} from 'react-native';

const getContainerStyles = (showBackButton = false) =>
  StyleSheet.create({
    default: {
      height: 90,
      flexDirection: 'row',
      justifyContent: showBackButton ? 'space-between' : 'center',
      alignItems: 'center',
      paddingHorizontal: 36,
      borderBottomWidth: 1,
      borderBottomColor: '#2A2A2A',
      backgroundColor: '#FFFFFF',
      position: 'absolute',
      width: '100%',
      zIndex: 1000,
    },
  }).default;

export default {getContainerStyles};
