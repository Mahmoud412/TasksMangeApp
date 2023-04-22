import {createSlice} from '@reduxjs/toolkit';
import {
  collection,
  query,
  where,
  onSnapshot,
  deleteDoc,
  doc,
  updateDoc,
} from 'firebase/firestore';
import {tasks} from '../../../typings';
import {db} from '../../firebase/config';
interface tasksState {
  tasks: tasks[];
  loading: boolean;
  error: null;
}
const initialState: tasksState = {
  tasks: [],
  loading: false,
  error: null,
};
export const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    fetchTasksStart: state => {
      state.tasks = [];
      state.loading = true;
    },
    fetchTasksSuccess: (state, action) => {
      state.tasks = action.payload;
      state.loading = false;
      state.error = null;
    },
    fetchTasksFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {fetchTasksStart, fetchTasksSuccess, fetchTasksFailure} =
  tasksSlice.actions;

export const fetchTasks = (groupId: string) => async (dispatch: any) => {
  console.log('slice', groupId);
  dispatch(fetchTasksStart());
  onSnapshot(
    query(collection(db, 'Tasks'), where('groupId', '==', groupId)),
    querySnapshot => {
      const data = querySnapshot.docs.map(doc => doc.data());
      console.log(`tasks for groupId(${groupId}), tasks: ${data}`);
      dispatch(fetchTasksSuccess(data));
    },
  );
};

export const deleteTask = (taskId: string) => async (dispatch: any) => {
  await deleteDoc(doc(db, 'Tasks', `${taskId}`));
};

export const updateTask =
  (
    timer: number,
    title: string,
    content: string,
    taskId: string,
    completed: boolean,
  ) =>
  async (dispatch: any) => {
    const docRef = doc(db, 'Tasks', `${taskId}`);
    await updateDoc(docRef, {
      title: title,
      content: content,
      createdAt: new Date().toString(),
      completed: completed,
      timer: timer,
      updated_at: new Date().toString(),
      completed_at: new Date().toString(),
    });
  };

export default tasksSlice.reducer;
