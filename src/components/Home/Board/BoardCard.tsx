import {View, Text, ScrollView} from 'react-native';
import React from 'react';
import {Card, Icon} from '@rneui/themed';
import styles from './styles';

const BoardCard = () => {
  return (
    <ScrollView>
      <Card containerStyle={styles.card}>
        <View>
          <Text style={styles.title}>Title</Text>
          <Text style={styles.date}>21:20 PM 23/23/23</Text>
          <Text style={styles.description}>Board Discrptoon</Text>
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
      <Card containerStyle={styles.card}>
        <View>
          <Text style={styles.title}>Title</Text>
          <Text style={styles.date}>21:20 PM 23/23/23</Text>
          <Text style={styles.description}>Board Discrptoon</Text>
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
    </ScrollView>
  );
};

export default BoardCard;
