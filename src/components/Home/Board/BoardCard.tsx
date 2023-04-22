import {View, Text, ScrollView, TouchableOpacity} from 'react-native';
import React, {useEffect, useMemo, useRef, useState} from 'react';
import {Card, Icon} from '@rneui/themed';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';
import {HomeScreenNavigationProps} from '../header/Header';
import {fetchBoards} from '../../../Redux/store';
import {useAppSelector, useAppDispatch} from '../../../Redux/store';
import {deleteBoard} from '../../../Redux/features/boardsSlice';
import LoadingScreen from '../../../screens/LoadingScreen';
import ErrorScreen from '../../../screens/ErrorScreen';
import ArrowDown from '../../ArrowDown';

const BoardCard: React.FC = () => {
  const dispatch = useAppDispatch();
  const navigation = useNavigation<HomeScreenNavigationProps>();
  const {boards, loading, error} = useAppSelector(state => state.boards);
  console.log('boards', boards);
  const handleDelete = async (boardId: string) => {
    dispatch(deleteBoard(boardId));
  };
  useEffect(() => {
    dispatch(fetchBoards());
  }, [dispatch]);

  if (loading) {
    return <LoadingScreen />;
  }

  // if (error) {
  //   return <ErrorScreen />;
  // }
  return (
    <ScrollView>
      {boards.length > 0 ? (
        <>
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
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                    }}>
                    <Text style={styles.title}>{item.title}</Text>
                    <View style={{flexDirection: 'row'}}>
                      <TouchableOpacity
                        onPress={() =>
                          navigation.navigate('Board', {baordId: item.boardId})
                        }>
                        <Icon
                          name="edit"
                          type="entypo"
                          color="#d9b8f2"
                          size={25}
                        />
                      </TouchableOpacity>
                      <TouchableOpacity
                        style={{marginHorizontal: 5}}
                        onPress={() => handleDelete(item.boardId)}>
                        <Icon
                          name="delete"
                          type="antdesgin"
                          color="#d9b8f2"
                          size={25}
                        />
                      </TouchableOpacity>
                    </View>
                  </View>
                  <Text style={styles.date}>{item.createdAt}</Text>
                  <Text style={styles.description}>{item.description}</Text>
                </View>

                <View style={styles.memberContainer}>
                  <View style={styles.memberSubContainer}>
                    <View>
                      <Icon
                        name="users"
                        type="entypo"
                        size={15}
                        color="#d9b8f2"
                      />
                    </View>
                    <Text style={styles.memberText}> 1 Member</Text>
                  </View>
                </View>
              </Card>
            </TouchableOpacity>
          ))}
        </>
      ) : (
        <View style={{margin: 10, alignItems: 'center', marginVertical: '70%'}}>
          <Text style={styles.noDataText}>
            No Boards Have been Created Yet!{' '}
          </Text>
          <ArrowDown />
        </View>
      )}
    </ScrollView>
  );
};

export default BoardCard;
