import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 36,
    marginTop: 90,
  },
  messageContainer: {
    alignItems: 'center',
  },
  title: {
    fontSize: 26,
    fontFamily: 'Wigrum-Bold',
    color: '#2A2A2A',
  },
  description: {
    fontSize: 16,
    fontFamily: 'Wigrum-Regular',
    color: '#2A2A2A',
    textAlign: 'center',
    marginTop: 24,
  },
  messageIcon: {
    marginTop: 32,
    marginBottom: 62,
  },
  continueButton: {
    marginTop: 14,
  },
});

export default styles;
