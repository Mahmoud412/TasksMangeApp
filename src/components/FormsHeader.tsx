import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';
import {Icon} from '@rneui/themed';

import {useNavigation} from '@react-navigation/native';
import {NewBoardScreenNavigationProps} from '../navigation/navigationTypes';

const FormsHeader = ({boardId}: string | any) => {
  const navigation = useNavigation<NewBoardScreenNavigationProps>();
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Icon name="back" type="antdesign" size={25} color="white" />
      </TouchableOpacity>
      <View style={[styles.longText, boardId.length > 1 && styles.shortText]}>
        <Text
          style={{
            textAlign: 'center',
            fontWeight: 'bold',
            fontSize: 18,
            color: 'white',
          }}>
          {boardId.length > 1 ? 'Edit Board' : 'Create New Board'}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    alignItems: 'center',
    marginVertical: 10,
  },
  longText: {
    right: 120,
  },
  shortText: {
    right: 150,
  },
});
export default FormsHeader;
