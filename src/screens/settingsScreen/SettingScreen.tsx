import {View, Text} from 'react-native';
import React from 'react';
import {Icon} from '@rneui/base';
import {useNavigation} from '@react-navigation/native';
import {Button} from '@rneui/themed';
import styles from './styles';
import {signOut} from 'firebase/auth';
import {auth} from '../../firebase/config';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../navigation/Route';

export type SettingsScreenNavigationProps = NativeStackNavigationProp<
  RootStackParamList,
  'Setting'
>;
const SettingScreen = () => {
  const navigation = useNavigation<SettingsScreenNavigationProps>();
  const SginOutUser = () => {
    signOut(auth).then(res => {
      navigation.navigate('Register');
    });
  };
  return (
    <View
      style={{flex: 1, flexDirection: 'column', justifyContent: 'flex-end'}}>
      <View
        style={{
          height: '40%',
          width: '100%',
          backgroundColor: '#fff',
        }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            margin: 10,
            padding: 10,
          }}>
          <Text style={styles.text}>Settings</Text>
          <Icon
            name="closecircleo"
            type="antdesign"
            size={25}
            color="#af88f7"
            onPress={() => navigation.goBack()}
          />
        </View>
        <View style={{alignItems: 'center', marginVertical: 70}}>
          <Button
            title="Log out"
            buttonStyle={styles.signOutButtonStyle}
            containerStyle={styles.buttonContaierStyle}
            onPress={SginOutUser}
          />
        </View>
      </View>
    </View>
  );
};

export default SettingScreen;
