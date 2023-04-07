import {View, Text, SafeAreaView} from 'react-native';
import React from 'react';
import Lottie from 'lottie-react-native';

const LoadingScreen = () => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#1C1A1D'}}>
      <Lottie
        source={require('../assets/99353-loading-circle.json')}
        autoPlay
        loop
      />
    </SafeAreaView>
  );
};

export default LoadingScreen;
