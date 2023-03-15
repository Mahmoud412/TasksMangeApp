import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {Icon} from '@rneui/themed';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../../navigation/Route';
export type HomeScreenNavigationProps = NativeStackNavigationProp<
  RootStackParamList,
  'Home'
>;
const Header = () => {
  const navigation = useNavigation<HomeScreenNavigationProps>();
  return (
    <View style={styles.container}>
      <Text style={styles.headerTitle}>Scribe</Text>
      <TouchableOpacity onPress={() => navigation.navigate('Setting')}>
        <Icon name="user" type="feather" size={35} color="#af88f7" />
      </TouchableOpacity>
    </View>
  );
};

export default Header;
