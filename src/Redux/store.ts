import {configureStore, getDefaultMiddleware} from '@reduxjs/toolkit';
import {boardsSlice, fetchBoards} from './features/boardsSlice';
import {useDispatch, TypedUseSelectorHook, useSelector} from 'react-redux';
export const store = configureStore({
  reducer: {
    boards: boardsSlice.reducer,
  },
});

export const useAppDispatch: () => typeof store.dispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<
  ReturnType<typeof store.getState>
> = useSelector;

export default store;
export {fetchBoards};
