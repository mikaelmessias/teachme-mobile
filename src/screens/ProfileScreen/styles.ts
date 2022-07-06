import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  scrollView: {
    padding: 28,
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
    shadowOffset: {width: 1, height: 2},
    shadowColor: '#00000029',
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
    marginBottom: 18,
  },
  title: {
    fontSize: 12,
    marginBottom: 6,
    fontWeight: '800',
  },
  description: {
    fontSize: 14,
  },
  viewInfos: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  textButton: {
    marginBottom: 24,
    fontSize: 18,
    fontWeight: '800',
  },
});

export const stylesFlatList = StyleSheet.create({
  flatList: {
    borderColor: '#00000029',
    borderRadius: 20,
    borderWidth: 1,
    shadowColor: '#00000029',
    shadowOpacity: 0.5,
    shadowRadius: 3,
    paddingVertical: 18,
    marginBottom: 100, // perguntar sobre isso
  },
  content: {
    flexDirection: 'row',
    padding: 12,
  },
  logoTech: {
    width: 45,
    height: 45,
    borderRadius: 100,
    borderColor: 'white',
    borderWidth: 1,
    alignSelf: 'center',
    marginEnd: 25,
    elevation: 1,
  },
  contentDescription: {
    flexDirection: 'column',
  },
  title: {
    fontSize: 14,
    fontWeight: '900',
    marginBottom: 4,
    color: '#353535',
  },
  value: {
    fontSize: 14,
    fontWeight: '600',
    color: '#828282',
  },
});

export const stylesWeekDays = StyleSheet.create({
  flatList: {
    flexGrow: 1,
    alignItems: 'center',
    shadowColor: '#00000029',
    shadowOpacity: 0.5,
    shadowRadius: 3,
    marginBottom: 100, // perguntar sobre isso
  },
  item: {
    width: 95,
    height: 90,
    alignItems: 'center',
    paddingVertical: 22,
    margin: 5,
    marginBottom: 0,
    borderRadius: 5
  },
  weekInitial: {
    fontSize: 18,
    fontWeight: '500',
    marginBottom: 9,
    color: '#FFF',
  },
  weekName: {
    fontSize: 12,
    fontWeight: '500',
    color: '#FFF',
    fontFamily: 'Wigrum'
  },
});
