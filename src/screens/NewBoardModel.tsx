import {View, Text} from 'react-native';
import React from 'react';
import FormsHeader from '../components/FormsHeader';
import {RouteProp, useRoute} from '@react-navigation/native';
import {RootStackParamList} from '../navigation/Route';
import BoardForm from '../components/Home/Board/BoardForm';

type DetailsScreenRouteProp = RouteProp<RootStackParamList, 'Board'>;

const NewBoardModel = () => {
  const {
    params: {baordId},
  } = useRoute<DetailsScreenRouteProp>();
  console.log(baordId.length);
  return (
    <View style={{backgroundColor: '#1C1A1D', flex: 1}}>
      <FormsHeader boardId={baordId} />
      <BoardForm baordId={baordId} />
    </View>
  );
};

export default NewBoardModel;
