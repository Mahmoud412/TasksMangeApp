import {useState} from 'react';
import {createResult, UseNewGroupResult, UseNewTaskResult} from '../../typings';
import {addDoc, collection, setDoc} from 'firebase/firestore';
import {auth, db} from '../firebase/config';

export const useCreateNewTasks = (): UseNewTaskResult => {
  const [loading, setLoading] = useState(false);
  async function newTask(
    title: string,
    content: string,
    groupId: string,
  ): Promise<createResult> {
    setLoading(true);
    const id = auth.currentUser?.uid;
    try {
      await addDoc(collection(db, 'Tasks'), {
        title: title,
        content: content,
        created_by: id,
        completed_at: null,
        createdAt: new Date().toString(),
        updated_at: null,
        groupId: groupId,
        completed: false,
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
    newTask,
  };
};
