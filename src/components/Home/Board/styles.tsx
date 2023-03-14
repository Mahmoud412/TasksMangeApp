import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  card: {
    borderRadius: 10,
    backgroundColor: '#353138',
  },
  title: {
    color: 'white',
    fontSize: 20,
    fontWeight: '600',
    marginVertical: 4,
  },
  date: {
    color: 'lightgray',
    marginVertical: 4,
    fontWeight: '500',
  },
  description: {
    color: 'white',
    marginVertical: 4,
    fontSize: 17,
    fontWeight: '500',
  },
  memberContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  memberSubContainer: {
    backgroundColor: '#433B4B',
    borderRadius: 10,
    flexDirection: 'row',
    padding: 10,
  },
  memberText: {
    textAlign: 'center',
    color: '#BBB3C1',
  },
  buttonContainer: {
    margin: 20,
    alignSelf: 'flex-end',
    justifyContent: 'flex-end',
  },
  buttonSubContainer: {
    backgroundColor: '#D4BBFF',
    borderRadius: 10,
    flexDirection: 'row',
    padding: 10,
    alignItems: 'center',
  },
  buttonText: {
    textAlign: 'center',
    color: '#915FDB',
    fontWeight: 'bold',
  },
});

export default styles;
