import {View, Text, SafeAreaView, TextInput} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Button} from 'react-native-elements';
import {useSignUp} from '../../hooks/useSignUp';
import {Input} from 'react-native-elements';
import {Icon} from '@rneui/themed';
import styles from './styles';
import {useSignIn} from '../../hooks/useSignIn';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../navigation/Route';
import LoadingScreen from '../LoadingScreen';
import ErrorScreen from '../ErrorScreen';
export type RegisterScreenNavigationProps = NativeStackNavigationProp<
  RootStackParamList,
  'Register'
>;
const RegisterScreen = () => {
  const {loading, signUp} = useSignUp();
  const {signIn} = useSignIn();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigation = useNavigation<RegisterScreenNavigationProps>();

  const handleSignUp = async () => {
    const result = await signUp(email, password);
    if (!result.success) {
      setError(
        result.error || 'SomeThing Went Wrong while we trying to sign you up',
      );
    }
    if (result.success) {
      navigation.navigate('Home');
    }
  };
  const handleSignIn = async () => {
    const result = await signIn(email, password);
    if (!result.success) {
      setError(
        result.error || ' SomeThing Went Wrong while we trying to sign you in ',
      );
    }
    if (result.success) {
      navigation.navigate('Home');
    }
  };
  if (loading) {
    return <LoadingScreen />;
  }
  if (error) {
    return <ErrorScreen />;
  }
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.subContainer}>
        <Input
          style={styles.input}
          placeholder="email"
          value={email}
          onChangeText={text => setEmail(text)}
          leftIcon={
            <Icon name="email" type="fontisto" size={24} color="#D4BBFF" />
          }
        />
        <Input
          style={styles.input}
          placeholder="password"
          secureTextEntry={true}
          onChangeText={text => setPassword(text)}
          value={password}
          leftIcon={
            <Icon name="locked" type="fontisto" size={24} color="#D4BBFF" />
          }
        />
      </View>
      <View style={styles.buttonContaier}>
        <Button
          buttonStyle={styles.sginInButtonStyle}
          containerStyle={styles.buttonContaierStyle}
          icon={
            <Icon
              style={{marginHorizontal: 5}}
              name="login"
              size={20}
              type="antDesign"
              color="#D4BBFF"
            />
          }
          title="Sign in"
          onPress={handleSignIn}
        />
        <Button
          buttonStyle={styles.signUpButtonStyle}
          containerStyle={styles.buttonContaierStyle}
          icon={
            <Icon
              style={{marginHorizontal: 5}}
              name="registered-trademark"
              size={20}
              type="material-community"
              color="#D4BBFF"
            />
          }
          title="Sign Up"
          onPress={handleSignUp}
        />
      </View>
      {error ? <Text>{error}</Text> : null}
    </SafeAreaView>
  );
};

export default RegisterScreen;
