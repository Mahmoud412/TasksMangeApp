import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {Icon} from '@rneui/themed';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';
import {BoardScreenNavigationProps} from '../../navigation/navigationTypes';

type Props = {
  title: string;
};
const BoardDetailsHeader = ({title}: Props) => {
  const navigation = useNavigation<BoardScreenNavigationProps>();
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
          onPress={() => navigation.navigate('NewGroup')}>
          <Icon name="plus" type="antdesign" color="white" size={25} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default BoardDetailsHeader;
