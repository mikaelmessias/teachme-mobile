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
  formContainer: {
    flex: 1,
    paddingHorizontal: 36,
  },
  continueButton: {
    marginTop: 14,
    marginBottom: 32,
  },
  basicInfoCard: {
    padding: 12,
    backgroundColor: '#FFFFFF',
    marginBottom: 12,
    marginHorizontal: 4,
    marginTop: 4,
    elevation: 5,
  },
  basicInfoTitle: {
    fontFamily: 'Wigrum',
    fontSize: 12,
    color: '#B5B5B5',
  },
  basicInfoText: {
    fontFamily: 'Wigrum',
    fontSize: 14,
    color: '#2A2A2A',
  },
  input: {
    backgroundColor: '#fff',
    fontSize: 16,
    marginBottom: 12,
  },
});

export default styles;
