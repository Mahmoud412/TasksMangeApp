import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import React, {useRef, useState} from 'react';
import {Button, Icon} from '@rneui/themed';
import styles from './styles';
import {useTimer} from '../../hooks/useTimer';
import {updateTask, useAppDispatch} from '../../Redux/store';
import {RouteProp, useRoute} from '@react-navigation/native';
import {RootStackParamList} from '../../navigation/Route';
import {useNavigation} from '@react-navigation/native';
type UpdateTaskScreenRouteProp = RouteProp<RootStackParamList, 'updateTask'>;

const TaskUpdateForm: React.FC = () => {
  const {
    params: {taskId, taskContent, taskTitle},
  } = useRoute<UpdateTaskScreenRouteProp>();
  const [isCompletePrassed, setIsCompletePrassed] = useState<boolean>(false);
  const [isCompletedTask, setIsCompletedTask] = useState<Boolean | any>(false);
  const {isRunning, time, handleStart, handleStop, formattedTime} = useTimer();
  const [title, setTitle] = useState<string>(taskTitle);
  const [content, setContent] = useState<string>(taskContent);
  const dispatch = useAppDispatch();
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={styles.backIcon}>
        <Icon name="arrow-back" type="ionicons" color="white" size={30} />
      </TouchableOpacity>
      <View style={styles.textInputContainer}>
        <TextInput
          style={styles.titleInput}
          onChangeText={title => setTitle(title)}
          value={title}
          maxLength={20}
          editable={true}
        />
        <View style={styles.contentTextInputContaier}>
          <TextInput
            style={styles.contentInput}
            onChangeText={content => setContent(content)}
            value={content}
            maxLength={200}
            multiline={true}
            scrollEnabled={true}
            editable={true}
          />
        </View>
        <View style={styles.bottomContaier}>
          <View style={{margin: 10}}>
            <Text style={styles.taskTimerText}>Task timer</Text>
            <Text style={styles.timerStatus}>
              {isRunning ? 'timer is start' : 'timer is paused'}
            </Text>
            <Text style={styles.timerStatus}>{formattedTime()}</Text>
          </View>
          <TouchableOpacity
            style={styles.iconContainer}
            onPress={isRunning ? handleStop : handleStart}>
            <Icon
              name={isRunning ? 'pausecircle' : 'play'}
              type="antdesign"
              color="#D3BAFE"
              size={40}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.buttonsContainer}>
          <Button
            onPress={() => [
              setIsCompletePrassed(true),
              setIsCompletedTask(true),
            ]}
            buttonStyle={styles.buttonStyle}
            containerStyle={styles.button}
            title="Complete task"
            color={isCompletePrassed ? '#D3BAFE' : 'gray'}
          />
          <Button
            onPress={() => [
              dispatch(
                updateTask(time, title, content, taskId, isCompletedTask),
              ),
              navigation.goBack(),
            ]}
            buttonStyle={styles.buttonStyle}
            containerStyle={styles.button}
            title="Save"
            color="#D3BAFE"
          />
        </View>
      </View>
    </View>
  );
};

export default TaskUpdateForm;
