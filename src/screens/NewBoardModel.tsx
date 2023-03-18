import {View, Text} from 'react-native';
import React from 'react';
import NewboardForm from '../components/Home/Board/NewboardForm';
import FormsHeader from '../components/FormsHeader';

const NewBoardModel = () => {
  return (
    <View style={{backgroundColor: '#1C1A1D', flex: 1}}>
      <FormsHeader />
      <NewboardForm />
    </View>
  );
};

export default NewBoardModel;
