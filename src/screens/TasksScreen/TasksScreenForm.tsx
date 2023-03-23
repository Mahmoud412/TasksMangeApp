import {View, Text, TouchableOpacity, TextInput} from 'react-native';
import React from 'react';
import {Button, Icon} from '@rneui/themed';
import {styles} from './styles';

const TasksScreenForm = () => {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <TouchableOpacity>
          <Icon name="arrow-back" type="ionicons" size={30} color="white" />
        </TouchableOpacity>
        <Text style={styles.title}>Task</Text>
      </View>
      <View>
        <TextInput
          style={styles.nameInput}
          placeholder="Name"
          placeholderTextColor="darkgray"
          maxLength={15}
        />
      </View>
      <View style={styles.descriptionInputContainer}>
        <TextInput
          style={styles.descriptionInput}
          placeholder="Tab to add a content..."
          placeholderTextColor="darkgray"
          maxLength={200}
          multiline={true}
        />
      </View>
      <Button
        titleStyle={styles.buttonTitleStyle}
        title="Create"
        buttonStyle={styles.button}
      />
    </View>
  );
};

export default TasksScreenForm;
