import {View, Text, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import {Input, Button} from '@rneui/themed';

const NewboardForm = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  return (
    <View>
      <View
        style={{
          backgroundColor: '#46444D',
          margin: 10,
          borderRadius: 10,
        }}>
        <Input
          placeholder="Title"
          onChangeText={text => {
            setTitle(text);
          }}
          value={title}
          style={{color: 'white'}}
          maxLength={20}
        />
      </View>
      <View
        style={{
          padding: 10,
          backgroundColor: '#46444D',
          height: '74%',
          margin: 10,
          borderRadius: 10,
        }}>
        <Input
          placeholder="Description"
          onChangeText={text => {
            setDescription(text);
          }}
          value={description}
          style={{color: 'white'}}
          maxLength={200}
        />
      </View>
      <View>
        <Button
          title="Create"
          buttonStyle={{
            marginLeft: 10,
            marginRight: 10,
            backgroundColor: '#c0a8ea',
          }}
          disabled={!title || !description}
        />
      </View>
    </View>
  );
};

export default NewboardForm;
