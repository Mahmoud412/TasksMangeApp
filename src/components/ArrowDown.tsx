import {View, Text} from 'react-native';
import React from 'react';
import Lottie from 'lottie-react-native';

const ArrowDown = () => {
  return (
    <View
      style={{
        width: 100,
        height: 100,
        left: 120,
        alignItems: 'center',
        marginVertical: '70%',
      }}>
      <Lottie
        source={require('../assets/98428-arrow-down-purple.json')}
        autoPlay
        loop
      />
    </View>
  );
};

export default ArrowDown;
