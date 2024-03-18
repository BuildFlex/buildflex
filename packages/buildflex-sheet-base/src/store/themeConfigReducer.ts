import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  darkTheme: false,
};

const authConfigSlice = createSlice({
  name: 'auth',
  initialState: initialState,
  reducers: {
    changeTheme: (state, { payload }) => {
      return {
        ...state,
        darkTheme: payload,
      };
    },
  },
});

export const { changeTheme } = authConfigSlice.actions;

export default authConfigSlice.reducer;
