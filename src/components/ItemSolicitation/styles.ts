import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderRadius: 10,
    borderColor: '#DBDBDB',
    borderWidth: 1,
    marginBottom: 12,
  },
  containerInfos: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    paddingVertical: 20,
  },
  logo: {
    width: 70,
    height: 70,
    alignSelf: 'center',
    borderRadius: 100,
    marginEnd: 15,
  },
  containerTexts: {
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
  containerButtons: {
    flexDirection: 'row',
  },
  touchable: {
    flex: 1,
    alignItems: 'center',
    borderColor: '#DBDBDB',
    borderTopWidth: 1,
    paddingVertical: 10,
  },
});
