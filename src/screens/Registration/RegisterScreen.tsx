import {View, Text, SafeAreaView, TextInput} from 'react-native';
import React, {useState} from 'react';
import {Button} from 'react-native-elements';
import {createUserWithEmailAndPassword} from 'firebase/auth';
import {auth, db} from '../../firebase/config';
import {setDoc, doc} from 'firebase/firestore/lite';
import {useSignUp} from '../../hooks/useSignUp';
const RegisterScreen = () => {
  const {loading, signUp} = useSignUp();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSignUp = async () => {
    const result = await signUp(email, password);
    if (!result.success) {
      setError(result.error || 'Unknown error');
    }
  };
  if (loading) {
    return (
      <View>
        <Text>Loading</Text>
      </View>
    );
  }
  return (
    <SafeAreaView>
      <TextInput
        placeholder="email"
        value={email}
        onChangeText={text => setEmail(text)}
      />
      <TextInput
        placeholder="password"
        onChangeText={text => setPassword(text)}
        value={password}
      />
      <Button title="pressme" onPress={handleSignUp} />
      {error ? <Text>{error}</Text> : null}
    </SafeAreaView>
  );
};

export default RegisterScreen;
