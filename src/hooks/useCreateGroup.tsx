import {useState} from 'react';
import {createResult, UseNewGroupResult} from '../../typings';
import {addDoc, collection} from 'firebase/firestore/lite';
import {auth, db} from '../firebase/config';

export const useCreateGroup = (): UseNewGroupResult => {
  const [loading, setLoading] = useState(false);
  async function newGroup(
    name: string,
    color: string,
    boardId: string,
  ): Promise<createResult> {
    setLoading(true);
    const id = auth.currentUser?.uid;
    try {
      await addDoc(collection(db, 'Groups'), {
        name: name,
        color: color,
        userId: id,
        boardId: boardId,
      });
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
    newGroup,
  };
};
