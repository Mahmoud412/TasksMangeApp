import {View, Text, ScrollView, TouchableOpacity} from 'react-native';
import React from 'react';
import {data} from '../../assets/data';
import {Card} from '@rneui/themed';
import styles from './styles';

const Tasks = () => {
  return (
    <ScrollView style={{height: '100%', marginBottom: 10}}>
      <View style={{marginVertical: 20}}>
        {data.map(item => (
          <TouchableOpacity key={item.id}>
            <Card containerStyle={styles.taskCard} key={item.id}>
              <View>
                <Text style={styles.tasktitle}>{item.title}</Text>
                <Text style={styles.taskDate}>{item.date}</Text>
                <Text style={styles.taskDescription}>{item.description}</Text>
              </View>
            </Card>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
};

export default Tasks;
