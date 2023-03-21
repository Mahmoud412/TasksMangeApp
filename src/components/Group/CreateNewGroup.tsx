import {View, Text} from 'react-native';
import React, {useState} from 'react';
import {Input} from '@rneui/themed';

const CreateNewGroup = () => {
  const [name, setName] = useState('');
  return (
    <View>
      <View>
        <Input placeholder="Name" />
      </View>
      <Text>CreateNewGroup</Text>
    </View>
  );
};

export default CreateNewGroup;
