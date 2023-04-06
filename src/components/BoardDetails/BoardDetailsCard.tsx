import {View, Text, ScrollView, TouchableOpacity} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import {Card, Icon} from '@rneui/themed';
import Tasks from './Tasks';
import styles from './styles';
import {deleteGroup, useAppDispatch, useAppSelector} from '../../Redux/store';
import {fetchGroups} from '../../Redux/store';
import {useNavigation} from '@react-navigation/native';
import {BoardScreenNavigationProps} from '../../navigation/navigationTypes';
type Props = {
  description: string;
  boardId: string;
};
const BoardDetailsCard = ({description, boardId}: Props) => {
  const dispatch = useAppDispatch();
  const navigation = useNavigation<BoardScreenNavigationProps>();
  const {groups, loading, error} = useAppSelector(state => state.groups);
  useEffect(() => {
    dispatch(fetchGroups(boardId));
  }, [dispatch]);

  return (
    <View>
      <View style={{padding: 10}}>
        <Text style={styles.cardTitle}>{description}</Text>
      </View>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.ScrollView}>
        {groups.map((group, index) => (
          <View key={index}>
            <View style={styles.container}>
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate('GroupForm', {
                    boardId: group.boardId,
                    groupId: group.groupId,
                  })
                }
                style={[
                  styles.subContainer,
                  {backgroundColor: `${group.color}`},
                ]}>
                <Text style={styles.groupName}>{group.name}</Text>
              </TouchableOpacity>
              <View style={styles.iconsContainer}>
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate('TaskForm', {groupId: group.groupId})
                  }>
                  <Icon
                    style={styles.plusIcon}
                    name="plus"
                    type="antdesign"
                    color="white"
                    size={30}
                  />
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => dispatch(deleteGroup(group.groupId))}>
                  <Icon
                    name="delete"
                    type="antdesign"
                    color="white"
                    size={25}
                  />
                </TouchableOpacity>
              </View>
            </View>
            <View style={{margin: 10, marginVertical: 0}}>
              <Tasks groupId={group.groupId} />
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default BoardDetailsCard;
