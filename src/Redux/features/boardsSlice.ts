import {createSlice} from '@reduxjs/toolkit';
import {collection, query, where, onSnapshot} from 'firebase/firestore';
import {boards} from '../../../typings';
import {auth, db} from '../../firebase/config';
interface boardsState {
  boards: boards[];
  loading: boolean;
  error: null;
}
const initialState: boardsState = {
  boards: [],
  loading: false,
  error: null,
};
export const boardsSlice = createSlice({
  name: 'boards',
  initialState,
  reducers: {
    fetchBoardsStart: state => {
      state.loading = true;
    },
    fetchBoardsSuccess: (state, action) => {
      state.boards = action.payload;
      state.loading = false;
      state.error = null;
    },
    fetchBoardsFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {fetchBoardsStart, fetchBoardsSuccess, fetchBoardsFailure} =
  boardsSlice.actions;

export const fetchBoards = () => async (dispatch: any) => {
  dispatch(fetchBoardsStart());
  onSnapshot(
    query(
      collection(db, 'Boards'),
      where('userId', '==', auth.currentUser?.uid),
    ),
    querySnapshot => {
      const data = querySnapshot.docs.map(doc => doc.data());
      dispatch(fetchBoardsSuccess(data));
    },
    error => {
      dispatch(fetchBoardsFailure(error));
    },
  );
};

export default boardsSlice.reducer;
