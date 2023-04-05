import {View, Text, ScrollView, TouchableOpacity} from 'react-native';
import React, {useEffect, useState} from 'react';
import {data} from '../../assets/data';
import {Card} from '@rneui/themed';
import styles from './styles';
import {collection, query, where, onSnapshot} from 'firebase/firestore';
import {auth, db} from '../../firebase/config';

type Props = {
  groupId: string;
};
const Tasks = ({groupId}: Props) => {
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
  console.log('groupId', groupId);
  return (
    <ScrollView style={{height: '100%', marginBottom: 10}}>
      <View style={{marginVertical: 20}}>
        {tasks.map(item => (
          <TouchableOpacity key={item.id}>
            <Card containerStyle={styles.taskCard} key={item.id}>
              <View>
                <Text style={styles.tasktitle}>{item.title}</Text>
                <Text style={styles.taskDate}>{item.createdAt}</Text>
                <Text style={styles.taskDescription}>{item.content}</Text>
              </View>
            </Card>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
};

export default Tasks;
