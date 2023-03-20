import {View, Text, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import {Input, Button} from '@rneui/themed';
import {auth, db} from '../../.././firebase/config';
import {addDoc, collection} from 'firebase/firestore/lite';
import {useNavigation} from '@react-navigation/native';
import {HomeScreenNavigationProps} from '../header/Header';
import {NewBoardScreenNavigationProps} from '../../../navigation/navigationTypes';
import styles from './styles';
import {documentId} from 'firebase/firestore';

const NewboardForm = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const navigation = useNavigation<NewBoardScreenNavigationProps>();
  const handelNewBoard = async () => {
    const id = auth.currentUser?.uid;
    try {
      await addDoc(collection(db, 'Boards'), {
        title: title,
        description: description,
        createdAt: new Date().toISOString(),
        userId: id,
      });
    } catch (err) {
      console.log(err);
    } finally {
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
