import {View, Text} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {RouteProp, useRoute} from '@react-navigation/native';
import {RootStackParamList} from '../../navigation/Route';
import BoardDetailsHeader from '../../components/BoardDetails/BoardDetailsHeader';
import BoardDetailsCard from '../../components/BoardDetails/BoardDetailsCard';

type DetailsScreenRouteProp = RouteProp<RootStackParamList, 'Details'>;
const BoardDetailsScreen = () => {
  const {
    params: {title, description, boardId, groupId},
  } = useRoute<DetailsScreenRouteProp>();
  return (
    <View style={{backgroundColor: '#1C1A1D', flex: 1}}>
      <BoardDetailsHeader title={title} boardId={boardId} />
      <BoardDetailsCard description={description} boardId={boardId} />
    </View>
  );
};

export default BoardDetailsScreen;
