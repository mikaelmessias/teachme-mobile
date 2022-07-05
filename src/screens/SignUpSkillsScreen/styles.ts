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
  continueButton: {
    marginTop: 14,
  },
  formContainer: {
    paddingHorizontal: 32,
  },
  pickerItem: {
    fontSize: 16,
  },
  input: {
    backgroundColor: '#fff',
    fontSize: 16,
    marginBottom: 18,
  },
  addButton: {
    marginBottom: 32,
  },
  mySkillsAreaContainer: {},
  mySkillsAreaTitle: {
    fontSize: 20,
    fontFamily: 'Wigrum-Bold',
    color: '#2A2A2A',
    marginBottom: 12,
  },
  mySkillsAreaList: {
    height: 250,
    borderWidth: 1,
    borderRadius: 4,
    borderColor: '#B5B5B5',
  },
  mySkillsAreaListItem: {
    padding: 14,
    borderBottomWidth: 1,
    borderBottomColor: '#B5B5B5',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  mySkillsAreaListItemDescription: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  mySkillsAreaListItemIcon: {
    width: 20,
    height: 20,
  },
  mySkillsAreaListItemText: {
    fontSize: 14,
    color: '#2A2A2A',
    marginLeft: 8,
  },
  mySkillsAreaListItemButton: {
    margin: 0,
    padding: 0,
    backgroundColor: '#D1173D',
  },
});

const getPickerWrapperStyle = () => {
  return StyleSheet.create({
    default: {
      borderWidth: 1,
      borderRadius: 4,
      borderColor: '#B5B5B5',
      marginBottom: 12,
    },
  }).default;
};

export default {...styles, getPickerWrapperStyle};
