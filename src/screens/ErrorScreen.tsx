import {View, Text, SafeAreaView} from 'react-native';
import React from 'react';
import Lottie from 'lottie-react-native';

const ErrorScreen = () => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#1C1A1D'}}>
      <Lottie source={require('../assets/72799-error.json')} autoPlay loop />
    </SafeAreaView>
  );
};

export default ErrorScreen;
