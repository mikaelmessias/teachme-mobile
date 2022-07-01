import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  formContainer: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 36,
    marginTop: 90,
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
    color: '#2A2A2A',
  },
  formInputs: {},
  input: {
    backgroundColor: '#fff',
    fontSize: 16,
    marginBottom: 12,
  },
  userTypeSelectionContainer: {
    alignItems: 'center',
    marginVertical: 24,
  },
  userTypeSelectionTitle: {
    fontSize: 14,
    marginBottom: 6,
    color: '#686868',
    fontFamily: 'Wigrum-Regular',
  },
  userTypeSelectionSubtitle: {
    fontSize: 12,
    color: '#B0B0B0',
    marginBottom: 14,
    fontFamily: 'Wigrum-Regular',
  },
  radioGroup: {
    alignItems: 'center',
  },
  radioButtonLabel: {
    fontSize: 14,
    fontFamily: 'Wigrum-Regular',
  },
  radioButtonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  continueButton: {
    marginTop: 14,
  },
});

export default styles;
