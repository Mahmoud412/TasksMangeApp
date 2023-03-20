import {View, Text, ScrollView, TouchableOpacity} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Card, Icon} from '@rneui/themed';
import styles from './styles';
import {data} from '../../../assets/data';
import {useNavigation} from '@react-navigation/native';
import {HomeScreenNavigationProps} from '../header/Header';
import {doc, getDoc} from 'firebase/firestore';
import {
  addDoc,
  collection,
  query,
  where,
  getDocs,
} from 'firebase/firestore/lite';
import {auth, db} from '../../.././firebase/config';
import {fetchBoards} from '../../../Redux/store';
import {useAppSelector, useAppDispatch} from '../../../Redux/store';
const BoardCard = () => {
  const dispatch = useAppDispatch();
  const navigation = useNavigation<HomeScreenNavigationProps>();
  const {boards, loading, error} = useAppSelector(state => state.boards);
  // const getBoards = async () => {
  //   const q = query(
  //     collection(db, 'Boards'),
  //     where('userId', '==', auth.currentUser?.uid),
  //   );
  //   const querySnapshot = await getDocs(q);
  //   const arr: any[] = [];
  //   querySnapshot.forEach(doc => {
  //     arr.push(doc.data());
  //   });
  //   setBoards(arr);
  // };
  console.log(boards);
  useEffect(() => {
    dispatch(fetchBoards());
  }, [dispatch]);
  return (
    <ScrollView>
      {boards.map(item => (
        <TouchableOpacity
          onPress={() =>
            navigation.navigate('Details', {
              title: item.title,
              description: item.description,
            })
          }>
          <Card key={item.userId} containerStyle={styles.card}>
            <View>
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.date}>{item.createdAt}</Text>
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
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

export default BoardCard;
