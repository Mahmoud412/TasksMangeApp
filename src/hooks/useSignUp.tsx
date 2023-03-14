import {View, Text} from 'react-native';
import React, {useState} from 'react';
import {createUserWithEmailAndPassword} from 'firebase/auth';
import {auth, db} from '.././firebase/config';
import {setDoc, doc} from 'firebase/firestore/lite';
export type SignUpResult = {
  success: boolean;
  error?: string | null;
};
type UseSignUpResult = {
  loading: boolean;
  signUp: (email: string, password: string) => Promise<SignUpResult>;
};
export const useSignUp = (): UseSignUpResult => {
  const [loading, setLoading] = useState(false);
  async function signUp(
    email: string,
    password: string,
  ): Promise<SignUpResult> {
    setLoading(true);

    try {
      await createUserWithEmailAndPassword(auth, email, password).then(
        async res => {
          console.log('user added to firebase');
          await setDoc(doc(db, 'users', res.user.uid), {
            email: res.user.email,
          });
        },
      );
      setLoading(false);

      return {
        success: true,
      };
    } catch (error) {
      setLoading(false);
      if (typeof error === 'string') {
        return {
          success: false,
          error,
        };
      } else {
        return {
          success: false,
          error: null,
        };
      }
    }
  }

  return {
    loading,
    signUp,
  };
};
