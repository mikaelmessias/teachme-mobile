import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  tabBar: {
    height: 74,
    paddingVertical: 12,
    paddingBottom: 10,
  },
});

const getTabLabelStyle = (isFocused: boolean) =>
  StyleSheet.create({
    default: {
      fontFamily: 'Wigrum-Bold',
      fontSize: 10,
      textTransform: 'uppercase',
      marginTop: 8,
      color: isFocused ? '#6717D1' : '#B5B5B5',
    },
  }).default;

export default {...styles, getTabLabelStyle};
