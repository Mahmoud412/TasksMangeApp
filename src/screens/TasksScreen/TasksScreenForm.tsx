import {View, Text, TouchableOpacity, TextInput} from 'react-native';
import React, {useState} from 'react';
import {Button, Icon} from '@rneui/themed';
import {styles} from './styles';
import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import {useCreateNewTasks} from '../../hooks/useCreateTasks';
import {RootStackParamList} from '../../navigation/Route';
import {NewTaskScreenNavigationProps} from '../../navigation/navigationTypes';
import LoadingScreen from '../LoadingScreen';
import ErrorScreen from '../ErrorScreen';
type TaskScreenRouteProp = RouteProp<RootStackParamList, 'TaskForm'>;

const TasksScreenForm: React.FC = () => {
  const {
    params: {groupId},
  } = useRoute<TaskScreenRouteProp>();
  const navigation = useNavigation<NewTaskScreenNavigationProps>();
  const [content, setContent] = useState<string>('');
  const [title, setTitle] = useState<string>('');
  const {loading, newTask} = useCreateNewTasks();
  const [error, setError] = useState('');
  console.log('groupId', groupId);

  const handleCreateNewTask = async () => {
    const result = await newTask(title, content, groupId);
    if (!result.success) {
      setError(
        result.error ||
          'SomeThing Went Wrong while we trying to create your Task',
      );
    }
    if (result.success) {
      navigation.goBack();
    }
  };

  if (loading) {
    return <LoadingScreen />;
  }

  if (error) {
    return <ErrorScreen />;
  }

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-back" type="ionicons" size={30} color="white" />
        </TouchableOpacity>
        <Text style={styles.title}>Task</Text>
      </View>
      <View>
        <TextInput
          style={styles.nameInput}
          placeholder=" Task name"
          placeholderTextColor="darkgray"
          maxLength={15}
          onChangeText={title => setTitle(title)}
          value={title}
        />
      </View>
      <View style={styles.descriptionInputContainer}>
        <TextInput
          style={styles.descriptionInput}
          placeholder=" Tab to add a content..."
          placeholderTextColor="darkgray"
          maxLength={200}
          multiline={true}
          onChangeText={content => setContent(content)}
          value={content}
        />
      </View>
      <Button
        titleStyle={styles.buttonTitleStyle}
        title="Create"
        buttonStyle={styles.button}
        onPress={handleCreateNewTask}
        disabled={!title || !content}
      />
    </View>
  );
};

export default TasksScreenForm;
