import React from 'react';
import {SafeAreaView, Text} from 'react-native';
import Route from './src/navigation/Route';
import HomeScreen from './src/screens/HomeScreen';
import {Provider} from 'react-redux';
import store from './src/Redux/store';
function App(): JSX.Element {
  return (
    <Provider store={store}>
      <Route />
    </Provider>
  );
}
export default App;
