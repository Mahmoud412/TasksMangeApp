import {View, Text, ScrollView, TouchableOpacity} from 'react-native';
import React, {useEffect} from 'react';
import {Card, Icon} from '@rneui/themed';
import BoardCard from '../Home/Board/BoardCard';
import {data} from '../../assets/data';
import {groupName} from '../../assets/data';
import Tasks from './Tasks';
import styles from './styles';
import {useAppDispatch, useAppSelector} from '../../Redux/store';
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
  }, [dispatch, groups]);
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
                style={[
                  styles.subContainer,
                  {backgroundColor: `${group.color}`},
                ]}>
                <Text style={styles.groupName}>{group.name}</Text>
              </TouchableOpacity>
              <View style={styles.iconsContainer}>
                <TouchableOpacity
                  onPress={() => navigation.navigate('TaskForm')}>
                  <Icon
                    style={styles.plusIcon}
                    name="plus"
                    type="antdesign"
                    color="white"
                    size={30}
                  />
                </TouchableOpacity>
                <TouchableOpacity>
                  <Icon
                    name="options"
                    type="simple-line-icon"
                    color="white"
                    size={25}
                  />
                </TouchableOpacity>
              </View>
            </View>
            <View style={{margin: 10, marginVertical: 0}}>
              <Tasks />
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default BoardDetailsCard;
