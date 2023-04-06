import {View, Text} from 'react-native';
import React from 'react';
import NewboardForm from '../components/Home/Board/NewboardForm';
import FormsHeader from '../components/FormsHeader';
import {RouteProp, useRoute} from '@react-navigation/native';
import {RootStackParamList} from '../navigation/Route';

type DetailsScreenRouteProp = RouteProp<RootStackParamList, 'Board'>;

const NewBoardModel = () => {
  const {
    params: {baordId},
  } = useRoute<DetailsScreenRouteProp>();
  console.log(baordId.length);
  return (
    <View style={{backgroundColor: '#1C1A1D', flex: 1}}>
      <FormsHeader />
      <NewboardForm baordId={baordId} />
    </View>
  );
};

export default NewBoardModel;
