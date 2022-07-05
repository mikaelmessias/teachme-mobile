import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  contentContainer: {
    flex: 1,
    marginTop: 90,
  },
  pageTitle: {
    height: 43,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#6717D1',
    marginBottom: 32,
  },
  pageTitleText: {
    color: '#FFFFFF',
    textTransform: 'uppercase',
    fontFamily: 'Wigrum-Bold',
  },
  continueButton: {
    marginTop: 14,
    width: '100%',
  },
  formContainer: {
    paddingHorizontal: 32,
    alignItems: 'center',
  },
  formLegend: {
    color: '#2A2A2A',
    fontFamily: 'Wigrum-Regular',
    fontSize: 14,
    marginBottom: 32,
  },
  daysSelectionFlatList: {
    marginBottom: 32,
    width: '100%',
  },
  flatListContentContainer: {},
  flatlistColumnWrapper: {
    flex: 1,
    justifyContent: 'space-evenly',
  },
  dayItemSubtitle: {
    fontFamily: 'Wigrum-Regular',
    fontSize: 18,
    color: '#FFFFFF',
    marginBottom: 8,
  },
  dayItemTitle: {
    fontFamily: 'Wigrum-Regular',
    fontSize: 12,
    color: '#FFFFFF',
    textTransform: 'uppercase',
  },
  flatListSeparator: {
    height: 26,
  },
});

const getDayItemContainer = (checked?: boolean, loading?: boolean) =>
  StyleSheet.create({
    default: {
      width: 90,
      height: 90,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: checked ? '#6717D1' : '#DBDBDB',
      opacity: loading ? 0.6 : 1,
    },
  }).default;

export default {...styles, getDayItemContainer};
