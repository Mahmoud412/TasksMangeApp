import {View, Text, ScrollView, TouchableOpacity} from 'react-native';
import React, {useEffect, useMemo, useRef, useState} from 'react';
import {Card, Icon} from '@rneui/themed';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';
import {HomeScreenNavigationProps} from '../header/Header';
import {fetchBoards} from '../../../Redux/store';
import {useAppSelector, useAppDispatch} from '../../../Redux/store';
const BoardCard = () => {
  const dispatch = useAppDispatch();
  const navigation = useNavigation<HomeScreenNavigationProps>();
  const {boards, loading, error} = useAppSelector(state => state.boards);
  useEffect(() => {
    dispatch(fetchBoards());
  }, [dispatch]);
  return (
    <ScrollView>
      {boards.map(item => (
        <TouchableOpacity
          key={item.title}
          onPress={() =>
            navigation.navigate('Details', {
              title: item.title,
              description: item.description,
              boardId: item.boardId,
            })
          }>
          <Card containerStyle={styles.card}>
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
