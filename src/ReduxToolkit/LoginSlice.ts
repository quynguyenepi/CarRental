import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  username: '',
  password: '',
};

export const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    setLoginInfo: (state, action) => {
      const {username, password} = action.payload;
      state.username = username;
      state.password = password;
    },
  },
});

export const {setLoginInfo} = loginSlice.actions;

export const selectState = state => state.login;


export default loginSlice.reducer;
