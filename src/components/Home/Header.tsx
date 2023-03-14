import {View, Text} from 'react-native';
import React from 'react';
import {Icon} from '@rneui/themed';

const Header = () => {
  return (
    <View>
      <Icon name="stepforward" type="antdesign" size={25} />
      <Text>Header</Text>
    </View>
  );
};

export default Header;
