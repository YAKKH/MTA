import { createSlice } from '@reduxjs/toolkit';
const initialState = {
  isLoggedIn: false,
  username: undefined,
  _id: undefined
};

export const accountSlice = createSlice({
  name: 'account',
  initialState,
  reducers: {
    login: (state, action) => {
      state.isLoggedIn = true;
      state.username = action.payload.username;
      state._id = action.payload._id;
    },
    logout: (state) => {
      state.isLoggedIn = false;
      state.username = undefined;
      state._id = undefined;
    }
  }
});

export const { login, logout } = accountSlice.actions;
export default accountSlice.reducer;
