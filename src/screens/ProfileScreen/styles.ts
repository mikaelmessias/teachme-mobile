import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'white',
    padding: 28
  },
  scrollView: {
  },
  editButton: {
    backgroundColor: 'white',
    padding: 8,
    marginBottom: 80,
    borderRadius: 50,
    borderColor: '#B5B5B5',
    borderWidth: 1,
    alignSelf: 'flex-end',
  },
  imgProfile: {
    width: 180,
    height: 180,
    borderRadius: 100,
    borderColor: 'white',
    borderWidth: 1,
    alignSelf: 'center',
    marginBottom: 16,
    shadowColor: '#171717',
    shadowOpacity: 0.5,
    shadowRadius: 3,
  },
  name: {
    fontSize: 32,
    fontWeight: '800',
    marginBottom: 2,
    alignSelf: 'center',

    color: 'black',
  },
  email: {
    fontSize: 18,
    marginBottom: 32,
    alignSelf: 'center',
    color: '#707070',
  },
  content: {
    borderColor: '#0000001F',
    borderRadius: 10,
    borderWidth: 1,
    padding: 12,
    marginBottom: 18
  },
  title: {
    fontSize: 12,
    marginBottom: 6,
    fontWeight: '800',
  },
  description: {
    fontSize: 14,
  }
});
