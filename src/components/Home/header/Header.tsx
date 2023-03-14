import {View, Text} from 'react-native';
import React from 'react';
import {Icon} from '@rneui/themed';
import styles from './styles';

const Header = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.headerTitle}>Scribe</Text>
      <Icon name="user" type="feather" size={35} color="#af88f7" />
    </View>
  );
};

export default Header;
