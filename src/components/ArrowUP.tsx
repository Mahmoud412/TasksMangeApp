import {View, Text} from 'react-native';
import React from 'react';
import Lottie from 'lottie-react-native';

const ArrowUp = () => {
  return (
    <View
      style={{
        width: 100,
        height: 100,
        marginLeft: '76%',
        bottom: 50,
      }}>
      <Lottie
        source={require('../assets/103415-arrow-up-green.json')}
        autoPlay
        loop
      />
    </View>
  );
};

export default ArrowUp;
