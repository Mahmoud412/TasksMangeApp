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
    deleteBoardSuccess: (state, action) => {
      const newBoards = state.boards.filter(
        board => board.boardId !== action.payload,
      );
      state.boards = newBoards;
      state.loading = false;
    },
    updateDocument: (state, action) => {
      const index = state.boards.findIndex(
        doc => doc.boardId === action.payload.id,
      );
      if (index !== -1) {
        state.boards[index] = action.payload;
      }
    },
  },
});

export const {
  fetchBoardsStart,
  fetchBoardsSuccess,
  fetchBoardsFailure,
  deleteBoardSuccess,
  updateDocument,
} = boardsSlice.actions;

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
export const deleteBoard = (boardId: string) => async (dispatch: any) => {
  await deleteDoc(doc(db, 'Boards', `${boardId}`));
  dispatch(deleteBoardSuccess(boardId));
};

export const updateBoard =
  (boardId: string, title: string, description: string) =>
  async (dispatch: any) => {
    const docRef = doc(db, 'Boards', `${boardId}`);
    await updateDoc(docRef, {
      title: title,
      description: description,
      createdAt: new Date().toString(),
    });
    dispatch(updateDocument(boardId));
  };

export default boardsSlice.reducer;
