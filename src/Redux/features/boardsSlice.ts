import {createSlice} from '@reduxjs/toolkit';
import {collection, query, where, getDocs} from 'firebase/firestore/lite';
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
  try {
    dispatch(fetchBoardsStart());
    const q = query(
      collection(db, 'Boards'),
      where('userId', '==', auth.currentUser?.uid),
    );
    const querySnapshot = await getDocs(q);
    const arr: any[] = [];
    querySnapshot.forEach(doc => {
      arr.push(doc.data());
    });
    const boards = arr;
    dispatch(fetchBoardsSuccess(boards));
  } catch (err) {
    dispatch(fetchBoardsFailure(err));
  }
};

export default boardsSlice.reducer;
