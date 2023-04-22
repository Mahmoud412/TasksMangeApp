import {View, Text, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import {Input, Button} from '@rneui/themed';
import {useNavigation} from '@react-navigation/native';
import {NewBoardScreenNavigationProps} from '../../../navigation/navigationTypes';
import styles from './styles';
import {useCreateNewBoard} from '../../../hooks/useCreateNewBoard';
import {updateBoard, useAppDispatch} from '../../../Redux/store';
import LoadingScreen from '../../../screens/LoadingScreen';
import ErrorScreen from '../../../screens/ErrorScreen';

type Props = {
  baordId: string | any;
};
const BoardForm: React.FC<Props> = ({baordId}: Props) => {
  const dispatch = useAppDispatch();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const {loading, createNewBoard} = useCreateNewBoard();
  const [error, setError] = useState('');
  console.log(error);
  const navigation = useNavigation<NewBoardScreenNavigationProps>();
  const handleUpdate = () => {
    dispatch(updateBoard(baordId, title, description));
    navigation.goBack();
  };
  const handelNewBoard = async () => {
    const result = await createNewBoard(title, description);
    if (!result.success) {
      setError(
        result.error ||
          'SomeThing Went Wrong while we trying to create the board',
      );
    }
    if (result.success) {
      navigation.navigate('Home');
    }
  };
  if (loading) {
    return <LoadingScreen />;
  }
  if (error) {
    return <ErrorScreen />;
  }

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
          onPress={baordId.length > 1 ? handleUpdate : handelNewBoard}
          title={baordId.length > 1 ? 'update' : 'create'}
          buttonStyle={styles.addNewBoardButton}
          disabled={!title || !description}
        />
      </View>
    </View>
  );
};

export default BoardForm;
