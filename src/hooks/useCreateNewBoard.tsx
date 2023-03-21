import {useState} from 'react';
import {auth, db} from '../firebase/config';
import {addDoc, collection} from 'firebase/firestore/lite';
export const useCreateNewBoard = (): useCreareNewBoardResult => {
  const [loading, setLoading] = useState(false);

  async function createNewBoard(
    title: string,
    description: string,
  ): Promise<createNewBoardResult> {
    setLoading(true);
    const id = auth.currentUser?.uid;
    try {
      await addDoc(collection(db, 'Boards'), {
        title: title,
        description: description,
        createdAt: new Date().toString(),
        userId: id,
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
    createNewBoard,
  };
};
