import {View, Text, ScrollView} from 'react-native';
import React from 'react';
import {Card, Icon} from '@rneui/themed';
import styles from './styles';
import {data} from '../../../assets/data';
const BoardCard = () => {
  return (
    <ScrollView>
      {data.map(item => (
        <Card key={item.id} containerStyle={styles.card}>
          <View>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.date}>{item.date}</Text>
            <Text style={styles.description}>{item.description}</Text>
          </View>

          <View style={styles.memberContainer}>
            <View style={styles.memberSubContainer}>
              <View>
                <Icon name="users" type="entypo" size={15} color="#d9b8f2" />
              </View>
              <Text style={styles.memberText}> 1 Member</Text>
            </View>
          </View>
        </Card>
      ))}
    </ScrollView>
  );
};

export default BoardCard;
