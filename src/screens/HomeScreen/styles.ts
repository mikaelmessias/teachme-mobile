import { StyleSheet, ScrollView } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  scrollView: {
    padding: 38,
    justifyContent: 'space-between',
  },
  logo: {
    width: 261.24,
    height: 64.75,
    alignSelf: 'center',
  },
  descriptionGroup: {},
  description: {
    fontSize: 48,
    fontWeight: '600',
    color: 'white',
  },
  descriptionHighlight: {
    color: '#C5C5C5',
  },
  signUpButton: {
    marginBottom: 24,
    paddingVertical: 8,
    borderRadius: 50,
    borderColor: 'white',
    borderWidth: 1,
  },
  loginButton: {
    backgroundColor: 'white',
    padding: 8,
    marginBottom: 80,
    borderRadius: 50,
    borderColor: '#B5B5B5',
    borderWidth: 1,
  },
});
