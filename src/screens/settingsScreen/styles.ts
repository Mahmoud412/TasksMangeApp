import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  contaier: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-end',
  },
  subContaier: {
    height: '40%',
    width: '100%',
    backgroundColor: '#fff',
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
  },
});

export default styles;
