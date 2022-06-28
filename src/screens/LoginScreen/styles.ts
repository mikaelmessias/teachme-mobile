import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  safeAreaView: {
    backgroundColor: '#FFFFFF',
  },
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  formContainer: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 36,
  },
  formDescription: {
    alignItems: 'center',
    marginBottom: 48,
  },
  formDescriptionIcon: {
    marginBottom: 32,
  },
  formDescriptionMessage: {
    fontSize: 32,
    fontFamily: 'Wigrum-Bold',
  },
  formInputs: {},
  input: {
    backgroundColor: '#fff',
    fontSize: 16,
    marginBottom: 18,
  },
  continueButton: {
    marginTop: 14,
  },
});

export default styles;
