import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingVertical: 20,
    flexDirection: 'row',
    borderRadius: 10,
    borderColor: '#DBDBDB',
    borderWidth: 1,
    marginBottom: 12,
  },
  logo: {
    width: 70,
    height: 70,
    alignSelf: 'center',
    borderRadius: 100,
    marginEnd: 15,
  },
  containerInfos: {
    flexDirection: 'column',
  },
  title: {
    fontSize: 20,
    fontWeight: '900',
    color: 'black',
    marginBottom: 8,
  },
  date: {
    fontSize: 14,
    color: '#B5B5B5',
    marginBottom: 4,
  },
  status: {
    fontSize: 14,
    color: '#707070',
  },
});
