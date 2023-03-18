import {StyleSheet, ScrollView} from 'react-native';
import {create} from 'react-test-renderer';

const styles = StyleSheet.create({
  taskCard: {
    backgroundColor: '#252328',
    borderRadius: 10,
    borderColor: '#252328',
  },
  tasktitle: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  taskDate: {
    color: 'lightgray',
  },
  taskDescription: {
    color: 'white',
    fontWeight: '500',
    fontSize: 17,
  },
  cardTitle: {
    color: 'white',
    fontSize: 17,
    fontWeight: '600',
  },
  ScrollView: {
    marginVertical: 20,
    top: 10,
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  subContainer: {
    margin: 10,
    padding: 15,
    backgroundColor: 'blue',
    borderRadius: 10,
    width: 100,
    height: 50,
  },
  groupName: {
    color: 'white',
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
  },
  iconsContainer: {
    flexDirection: 'row',
    padding: 10,
    margin: 10,
    marginHorizontal: 80,
    left: 40,
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 40,
    backgroundColor: '#2A2831',
    justifyContent: 'space-between',
  },
  headerTitle: {
    top: 20,
    right: 120,
  },
  headerTitleText: {
    fontWeight: 'bold',
    fontSize: 18,
    color: 'white',
  },
  plusIcon: {
    marginRight: 20,
    backgroundColor: '#4A4156',
    borderRadius: 10,
  },
});

export default styles;
