import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import React, {useState} from 'react';
import {Button, Icon} from '@rneui/themed';
import {Card} from 'react-native-elements';
import {colors} from '../../assets/ColorsData';
import {useNavigation} from '@react-navigation/native';
import {NewGroupScreenNavigationProps} from '../../navigation/navigationTypes';
import {styles} from './styles';
import {useCreateGroup} from '../../hooks/useCreateGroup';
import {RouteProp, useRoute} from '@react-navigation/native';
import {RootStackParamList} from '../../navigation/Route';

type NewGroupScreenRouteProp = RouteProp<RootStackParamList, 'NewGroup'>;

const CreateNewGroup = () => {
  const {
    params: {boardId},
  } = useRoute<NewGroupScreenRouteProp>();
  const navigation = useNavigation<NewGroupScreenNavigationProps>();
  const [name, setName] = useState('');
  const [iSselected, setIsSelected] = useState<any>();
  const {loading, newGroup} = useCreateGroup();
  const [error, setError] = useState('');
  const numColumns = Math.ceil(colors.length / 6);
  const handleCreateNewGroup = async () => {
    const result = await newGroup(name, iSselected, boardId);
    if (!result.success) {
      setError(
        result.error || 'SomeThing Went Wrong while we trying to sign you up',
      );
    }
    if (result.success) {
      navigation.goBack();
    }
  };

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.subContainer}>
          <Text style={styles.title}>New Group</Text>
          <TouchableOpacity
            onPress={() => {
              navigation.goBack();
            }}>
            <Icon name="close" type="antdesign" color={'white'} size={25} />
          </TouchableOpacity>
        </View>
        <View>
          <TextInput
            placeholder="Group Name"
            onChangeText={text => setName(text)}
            value={name}
            placeholderTextColor={'#29272C'}
            style={styles.inputText}
          />
        </View>
        <View>
          <FlatList
            data={colors}
            renderItem={({item}) => (
              <TouchableOpacity onPress={() => setIsSelected(item.color)}>
                <Card
                  containerStyle={[
                    styles.card,
                    {
                      backgroundColor: `${item.color}`,
                      borderColor: `${item.color}`,
                    },
                  ]}>
                  {iSselected === item.color ? (
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
        <View style={{margin: 10, padding: 10}}>
          <Button
            onPress={handleCreateNewGroup}
            color={'#c0a8ea'}
            title="Submit"
            containerStyle={{borderRadius: 15}}
            disabled={!name}
            disabledStyle={{backgroundColor: 'gray'}}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default CreateNewGroup;
