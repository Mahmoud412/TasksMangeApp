import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import Header from '../components/Home/header/Header';
import BoardCard from '../components/Home/Board/BoardCard';
import styles from '../components/Home/Board/styles';
import {Icon} from '@rneui/themed';

const HomeScreen = () => {
  return (
    <View>
      <Header />
      <BoardCard />
      <View>
        <TouchableOpacity style={styles.buttonContainer}>
          <View style={styles.buttonSubContainer}>
            <View>
              <Icon name="plus" type="entypo" size={18} color="#915FDB" />
            </View>
            <Text style={styles.buttonText}> Create new board</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HomeScreen;
