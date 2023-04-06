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
import {updateGroup, useAppDispatch} from '../../Redux/store';
type NewGroupScreenRouteProp = RouteProp<RootStackParamList, 'GroupForm'>;

const GroupForm = () => {
  const dispatch = useAppDispatch();
  const {
    params: {boardId, groupId},
  } = useRoute<NewGroupScreenRouteProp>();
  console.log('updated group id', groupId);
  const navigation = useNavigation<NewGroupScreenNavigationProps>();
  const [name, setName] = useState('');
  const [color, setColor] = useState<any>();
  const {loading, newGroup} = useCreateGroup();
  const [error, setError] = useState('');
  const numColumns = Math.ceil(colors.length / 6);

  const handleUpdateGroup = () => {
    dispatch(updateGroup(name, color, groupId));
    navigation.goBack();
  };
  const handleCreateNewGroup = async () => {
    const result = await newGroup(name, color, boardId);
    if (!result.success) {
      setError(
        result.error || 'SomeThing Went Wrong while we trying to sign you up',
      );
    }
    if (result.success) {
      navigation.goBack();
    }
  };

  if (loading) {
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    );
  }
  if (error) {
    return (
      <View>
        <Text>{error}</Text>
      </View>
    );
  }

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.subContainer}>
          <Text style={styles.title}>
            {groupId.length > 1 ? 'Edit Group' : 'New Group'}
          </Text>
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
              <TouchableOpacity onPress={() => setColor(item.color)}>
                <Card
                  containerStyle={[
                    styles.card,
                    {
                      backgroundColor: `${item.color}`,
                      borderColor: `${item.color}`,
                    },
                  ]}>
                  {color === item.color ? (
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
            onPress={
              groupId.length > 1 ? handleUpdateGroup : handleCreateNewGroup
            }
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

export default GroupForm;
