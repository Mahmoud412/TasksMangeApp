import {useState} from 'react';
import {signInWithEmailAndPassword} from 'firebase/auth';
import {auth} from '.././firebase/config';

export const useSignIn = (): UseSignInResult => {
  const [loading, setLoading] = useState(false);
  async function signIn(
    email: string,
    password: string,
  ): Promise<SignInResult> {
    setLoading(true);

    try {
      await signInWithEmailAndPassword(auth, email, password).then(
        async res => {
          console.log('user userSigned in', res);
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
    signIn,
  };
};
