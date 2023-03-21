import {View, Text, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import {Input, Button} from '@rneui/themed';
import {useNavigation} from '@react-navigation/native';
import {NewBoardScreenNavigationProps} from '../../../navigation/navigationTypes';
import styles from './styles';
import {useCreateNewBoard} from '../../../hooks/useCreateNewBoard';
const NewboardForm = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const {loading, createNewBoard} = useCreateNewBoard();
  const [error, setError] = useState('');
  const navigation = useNavigation<NewBoardScreenNavigationProps>();
  const handelNewBoard = async () => {
    const result = await createNewBoard(title, description);
    if (!result.success) {
      setError(
        result.error || 'SomeThing Went Wrong while we trying to sign you up',
      );
    }
    if (result.success) {
      navigation.navigate('Home');
    }
  };
  return (
    <View>
      <View style={styles.boardTitleInput}>
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
      <View style={styles.descriptionContainer}>
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
          onPress={handelNewBoard}
          title="Create"
          buttonStyle={styles.addNewBoardButton}
          disabled={!title || !description}
        />
      </View>
    </View>
  );
};

export default NewboardForm;
