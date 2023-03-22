import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  iconContainer: {
    position: 'absolute',
    alignSelf: 'center',
    bottom: -10,
  },
  card: {
    padding: 15,
    borderRadius: 5,
    width: 56,
    height: 40,
    margin: 10,
    alignItems: 'center',
  },
  inputText: {
    padding: 15,
    backgroundColor: '#63616b',
    margin: 10,
    borderRadius: 5,
    color: 'white',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
  container: {
    backgroundColor: '#3c363f',
    height: 490,
    width: '90%',
    alignSelf: 'center',
    marginVertical: 205,
    borderRadius: 10,
  },
  subContainer: {
    margin: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
