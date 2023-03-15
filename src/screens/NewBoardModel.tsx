import {View, Text} from 'react-native';
import React from 'react';
import NewboardForm from '../components/Home/Board/NewboardForm';
import FormsHeader from '../components/FormsHeader';

const NewBoardModel = () => {
  return (
    <View>
      <FormsHeader />
      <NewboardForm />
    </View>
  );
};

export default NewBoardModel;
