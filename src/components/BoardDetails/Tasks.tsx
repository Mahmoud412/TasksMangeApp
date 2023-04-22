import {View, Text, ScrollView, TouchableOpacity} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Card, Icon} from '@rneui/themed';
import styles from './styles';
import {collection, query, where, onSnapshot} from 'firebase/firestore';
import {db} from '../../firebase/config';
import {
  deleteTask,
  fetchTasks,
  useAppDispatch,
  useAppSelector,
} from '../../Redux/store';
import {useNavigation} from '@react-navigation/native';
import {NewTaskScreenNavigationProps} from '../../navigation/navigationTypes';

type Props = {
  groupId: string;
};
const Tasks = ({groupId}: Props) => {
  const navigation = useNavigation<NewTaskScreenNavigationProps>();
  const dispatch = useAppDispatch();
  const [tasks, setTasks] = useState<any[]>([]);
  useEffect(() => {
    onSnapshot(
      query(collection(db, 'Tasks'), where('groupId', '==', groupId)),
      querySnapshot => {
        const data = querySnapshot.docs.map(doc => doc.data());
        setTasks(data);
      },
    );
  }, []);

  return (
    <ScrollView style={{height: '100%', marginBottom: 10}}>
      <View style={{marginVertical: 20}}>
        {tasks.map(item => (
          <TouchableOpacity
            key={item.id}
            onPress={() => {
              navigation.navigate('updateTask', {
                taskId: item.id,
                taskTitle: item.title,
                taskContent: item.content,
              });
            }}>
            <Card containerStyle={styles.taskCard}>
              <View
                style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <Text
                  style={[
                    styles.tasktitle,
                    item.completed ? styles.completed : null,
                  ]}>
                  {item.title}
                </Text>
                <TouchableOpacity onPress={() => dispatch(deleteTask(item.id))}>
                  <Icon name="delete" type="antdesgin" color="white" />
                </TouchableOpacity>
              </View>
              <Text style={styles.taskDate}>{item.createdAt}</Text>
              <Text style={styles.taskDescription}>{item.content}</Text>
            </Card>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
};

export default Tasks;
