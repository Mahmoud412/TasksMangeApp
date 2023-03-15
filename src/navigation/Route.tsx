import {View, Text} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import HomeScreen from '../screens/HomeScreen';
import NewBoardModel from '../screens/NewBoardModel';
import RegisterScreen from '../screens/Registration/RegisterScreen';
import SettingScreen from '../screens/settingsScreen/SettingScreen';

export type RootStackParamList = {
  Home: undefined;
  Board: undefined;
  Register: undefined;
  Setting: undefined;
};
const Stack = createNativeStackNavigator<RootStackParamList>();

const Route = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Register">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Setting"
          component={SettingScreen}
          options={{headerShown: false, presentation: 'transparentModal'}}
        />
        <Stack.Screen
          name="Register"
          component={RegisterScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Board"
          component={NewBoardModel}
          options={{
            presentation: 'modal',
            headerShown: false,
            title: 'Create new Board',
            headerTintColor: 'gray',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Route;
