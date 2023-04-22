import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    flex: 1,
  },
  textInputContainer: {
    marginVertical: 25,
  },
  titleInput: {
    padding: 20,
    borderRadius: 10,
    backgroundColor: '#46444D',
    margin: 10,
    fontWeight: 'bold',
    fontSize: 17,
    color: 'white',
  },
  contentTextInputContaier: {
    height: '65%',
    backgroundColor: '#46444D',
    margin: 10,
    borderRadius: 10,
  },
  contentInput: {
    borderRadius: 10,
    margin: 15,
    fontWeight: 'bold',
    fontSize: 17,
    color: 'white',
  },
  bottomContaier: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10,
  },
  taskTimerText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 17,
  },
  timerStatus: {
    color: 'lightgray',
    fontSize: 16,
    marginVertical: 5,
  },
  iconContainer: {
    margin: 10,
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 10,
    marginRight: 10,
  },
  button: {
    padding: 10,
    width: 200,
  },
  buttonStyle: {
    borderRadius: 15,
  },
  backIcon: {
    flexDirection: 'row',
    marginHorizontal: 10,
    top: 10,
  },
});

export default styles;
