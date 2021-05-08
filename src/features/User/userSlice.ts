import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

export interface UserState {
 admin: boolean
}

const initialState: UserState = {
  admin: false
};
export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    changeAdmin:(state) => {
      state.admin = true
    }
  },
});

export const { changeAdmin } = userSlice.actions;


export const selectAdmin = (state: RootState) => state.user.admin;


export default userSlice.reducer;
