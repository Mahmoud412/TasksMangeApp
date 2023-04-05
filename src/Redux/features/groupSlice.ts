import {createSlice} from '@reduxjs/toolkit';
import {collection, query, where, onSnapshot} from 'firebase/firestore';
import {groups} from '../../../typings';
import {auth, db} from '../../firebase/config';
interface groupsState {
  groups: groups[];
  loading: boolean;
  error: null;
}
const initialState: groupsState = {
  groups: [],
  loading: false,
  error: null,
};
export const groupsSlice = createSlice({
  name: 'groups',
  initialState,
  reducers: {
    fetchGroupsStart: state => {
      state.groups = [];
      state.loading = true;
    },
    fetchGroupsSuccess: (state, action) => {
      state.groups = action.payload;
      state.loading = false;
      state.error = null;
    },
    fetchGroupsFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    reset: () => initialState,
  },
});

export const {fetchGroupsStart, fetchGroupsSuccess, fetchGroupsFailure} =
  groupsSlice.actions;

export const fetchGroups = (BoardId: string) => async (dispatch: any) => {
  dispatch(fetchGroupsStart());
  onSnapshot(
    query(collection(db, 'Groups'), where('boardId', '==', BoardId)),
    querySnapshot => {
      const data = querySnapshot.docs.map(doc => doc.data());
      dispatch(fetchGroupsSuccess(data));
    },
    error => {
      dispatch(fetchGroupsFailure(error));
    },
  );
};

export default groupsSlice.reducer;
