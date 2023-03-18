import {View, Text, ScrollView, TouchableOpacity} from 'react-native';
import React from 'react';
import {Card, Icon} from '@rneui/themed';
import BoardCard from '../Home/Board/BoardCard';
import {data} from '../../assets/data';
import {groupName} from '../../assets/data';
import Tasks from './Tasks';
import styles from './styles';
type Props = {
  description: string;
};
const BoardDetailsCard = ({description}: Props) => {
  return (
    <View>
      <View style={{padding: 10}}>
        <Text style={styles.cardTitle}>{description}</Text>
      </View>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.ScrollView}>
        {groupName.map((name, index) => (
          <View key={index}>
            <View style={styles.container}>
              <TouchableOpacity style={styles.subContainer}>
                <Text style={styles.groupName}>{name.name}</Text>
              </TouchableOpacity>
              <View style={styles.iconsContainer}>
                <TouchableOpacity>
                  <Icon
                    style={styles.plusIcon}
                    name="plus"
                    type="antdesign"
                    color="white"
                    size={30}
                  />
                </TouchableOpacity>
                <TouchableOpacity>
                  <Icon
                    name="options"
                    type="simple-line-icon"
                    color="white"
                    size={25}
                  />
                </TouchableOpacity>
              </View>
            </View>
            <View style={{margin: 10, marginVertical: 0}}>
              <Tasks />
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default BoardDetailsCard;

{
  /* <View style={{margin: 5, height: '100%', backgroundColor: 'green'}}>
<View
  style={{
    padding: 10,
    backgroundColor: 'blue',
    borderRadius: 10,
    margin: 10,
    position: 'absolute',
    zIndex: 1,
  }}>
  <Text style={{color: 'black', fontWeight: 'bold', fontSize: 17}}>
    {name.name}
  </Text>
</View>
</View>
 */
}
