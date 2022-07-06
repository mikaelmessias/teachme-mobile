import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  input: {
    backgroundColor: '#fff',
    fontSize: 16,
    marginTop: 32,
    marginBottom: 32,
    marginHorizontal: 32,
  },
  carouselCard: {
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#DBDBDB',
    padding: 16,
  },
  jediInfo: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 24,
  },
  jediName: {
    fontSize: 18,
    fontFamily: 'Wigrum-Bold',
  },
  availableDayCard: {
    width: 66,
    height: 66,
    backgroundColor: '#6717D1',
    marginRight: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default styles;
