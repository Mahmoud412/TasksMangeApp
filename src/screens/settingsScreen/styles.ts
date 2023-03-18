import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  contaier: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-end',
  },
  subContaier: {
    height: '50%',
    width: '100%',
    backgroundColor: '#181619',
  },
  headerView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    margin: 10,
    padding: 10,
  },
  buttonContaierStyle: {
    width: 350,
    padding: 10,
  },
  signOutButtonStyle: {
    backgroundColor: '#915FDB',
    borderRadius: 10,
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
});

export default styles;
