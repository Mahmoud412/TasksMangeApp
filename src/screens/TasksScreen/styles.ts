import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1C1A1D',
    height: '100%',
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 10,
    marginVertical: 15,
  },
  title: {
    color: 'white',
    marginHorizontal: 20,
    fontSize: 19,
    fontWeight: 'bold',
  },
  nameInput: {
    padding: 20,
    backgroundColor: '#46444D',
    margin: 10,
    borderRadius: 8,
    color: 'white',
    fontSize: 18,
  },
  descriptionInput: {
    padding: 15,
    color: 'white',
    fontSize: 18,
  },
  descriptionInputContainer: {
    height: '70%',
    backgroundColor: '#46444D',
    borderRadius: 8,
    margin: 10,
  },
  button: {
    marginLeft: 10,
    marginRight: 10,
    borderRadius: 15,
    margin: 10,
    backgroundColor: '#c0a8ea',
  },
  buttonTitleStyle: {
    color: '#6831AA',
    fontWeight: 'bold',
  },
});
