import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {Icon} from '@rneui/themed';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../navigation/Route';
import {useNavigation} from '@react-navigation/native';
export type NewBoardScreenNavigationProps = NativeStackNavigationProp<
  RootStackParamList,
  'Board'
>;
const FormsHeader = () => {
  const navigation = useNavigation<NewBoardScreenNavigationProps>();
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,
        alignItems: 'center',
      }}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Icon name="back" type="antdesign" size={25} />
      </TouchableOpacity>
      <View style={{right: 130}}>
        <Text style={{textAlign: 'center', fontWeight: 'bold', fontSize: 18}}>
          Create new board
        </Text>
      </View>
    </View>
  );
};

export default FormsHeader;
