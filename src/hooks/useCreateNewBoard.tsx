import {useState} from 'react';
import {auth, db} from '../firebase/config';
import {addDoc, collection, doc, setDoc} from 'firebase/firestore';
import {createResult, useCreareNewBoardResult} from '../../typings';
export const useCreateNewBoard = (): useCreareNewBoardResult => {
  const [loading, setLoading] = useState(false);

  async function createNewBoard(
    title: string,
    description: string,
  ): Promise<createResult> {
    setLoading(true);
    const id = auth.currentUser?.uid;
    try {
      const boardRef = doc(collection(db, 'Boards'));
      await setDoc(boardRef, {
        title: title,
        description: description,
        createdAt: new Date().toString(),
        userId: id,
        boardId: boardRef.id,
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
