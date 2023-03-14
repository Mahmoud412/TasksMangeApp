import {View, Text, SafeAreaView, TextInput} from 'react-native';
import React, {useState} from 'react';
import {Button} from 'react-native-elements';
import {createUserWithEmailAndPassword} from 'firebase/auth';
import {auth, db} from '../../firebase/config';
import {collection, getDocs, setDoc, doc} from 'firebase/firestore/lite';
import {async} from '@firebase/util';

const RegisterScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const register = async () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then(async res => {
        console.log('user added to firebase');
        await setDoc(doc(db, 'users', res.user.uid), {
          email: res.user.email,
        });
      })
      .catch(err => {
        console.log(err);
      });
  };
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
      <Button title="pressme" onPress={register} />
    </SafeAreaView>
  );
};

export default RegisterScreen;
