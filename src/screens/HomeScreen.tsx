import {View, Text, TouchableOpacity, SafeAreaView} from 'react-native';
import React from 'react';
import Header from '../components/Home/header/Header';
import BoardCard from '../components/Home/Board/BoardCard';
import styles from '../components/Home/Board/styles';
import {Icon} from '@rneui/themed';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../navigation/Route';

export type HomeScreenNavigationProps = NativeStackNavigationProp<
  RootStackParamList,
  'Home'
>;

const HomeScreen = () => {
  const navigation = useNavigation<HomeScreenNavigationProps>();
  return (
    <SafeAreaView>
      <Header />
      <BoardCard />
      <View>
        <TouchableOpacity
          onPress={() => navigation.navigate('Board')}
          style={styles.buttonContainer}>
          <View style={styles.buttonSubContainer}>
            <View>
              <Icon name="plus" type="entypo" size={18} color="#915FDB" />
            </View>
            <Text style={styles.buttonText}> Create new board</Text>
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
