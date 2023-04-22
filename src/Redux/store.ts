import {deleteDoc} from 'firebase/firestore';
import {configureStore, getDefaultMiddleware} from '@reduxjs/toolkit';
import {boardsSlice, fetchBoards, updateBoard} from './features/boardsSlice';
import {useDispatch, TypedUseSelectorHook, useSelector} from 'react-redux';
import {
  groupsSlice,
  fetchGroups,
  deleteGroup,
  updateGroup,
} from './features/groupSlice';
import {
  tasksSlice,
  fetchTasks,
  deleteTask,
  updateTask,
} from './features/TasksSlice';
export const store = configureStore({
  reducer: {
    boards: boardsSlice.reducer,
    groups: groupsSlice.reducer,
    tasks: tasksSlice.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      immutableCheck: {warnAfter: 128},
      serializableCheck: false,
    }),
});

export const useAppDispatch: () => typeof store.dispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<
  ReturnType<typeof store.getState>
> = useSelector;

export default store;
export {
  fetchBoards,
  fetchGroups,
  updateBoard,
  deleteGroup,
  updateGroup,
  fetchTasks,
  deleteTask,
  updateTask,
};
