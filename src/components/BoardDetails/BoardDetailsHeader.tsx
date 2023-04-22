import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {Icon} from '@rneui/themed';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';
import {BoardScreenNavigationProps} from '../../navigation/navigationTypes';

type Props = {
  title: string;
  boardId: string;
};
const BoardDetailsHeader: React.FC<Props> = ({title, boardId}: Props) => {
  const navigation = useNavigation<BoardScreenNavigationProps>();
  console.log('coming from header', boardId);
  return (
    <View>
      <View style={styles.headerContainer}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{top: 20, right: 20, marginRight: 20}}>
          <Icon color="white" name="arrow-back" type="ionicons" size={25} />
        </TouchableOpacity>
        <View style={styles.headerTitle}>
          <Text style={styles.headerTitleText}>{title}</Text>
        </View>
        <TouchableOpacity
          style={{alignSelf: 'center', top: 20}}
          onPress={() =>
            navigation.navigate('GroupForm', {boardId: boardId, groupId: ''})
          }>
          <Icon name="plus" type="antdesign" color="white" size={25} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default BoardDetailsHeader;
