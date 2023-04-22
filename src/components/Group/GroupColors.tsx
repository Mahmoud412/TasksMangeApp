import {View, Text, FlatList, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {colors} from '../../assets/ColorsData';
import {Card, Icon} from '@rneui/themed';
import {styles} from './styles';
const GroupColors: React.FC = () => {
  const [iSselected, setIsSelected] = useState<any>();
  const numColumns = Math.ceil(colors.length / 6);
  return (
    <View>
      <FlatList
        data={colors}
        renderItem={({item}) => (
          <TouchableOpacity onPress={() => setIsSelected(item.id)}>
            <Card
              containerStyle={[
                styles.card,
                {
                  backgroundColor: `${item.color}`,
                  borderColor: `${item.color}`,
                },
              ]}>
              {iSselected === item.id ? (
                <View style={styles.iconContainer}>
                  <Icon
                    name="check"
                    type="antidesgin"
                    color={'white'}
                    size={30}
                  />
                </View>
              ) : null}
              <Text>{''}</Text>
            </Card>
          </TouchableOpacity>
        )}
        numColumns={numColumns}
      />
    </View>
  );
};

export default GroupColors;
