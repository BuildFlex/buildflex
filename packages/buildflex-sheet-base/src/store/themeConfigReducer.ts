import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  darkTheme: false,
  isLoading: false,
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
    setLoading: (state, { payload }) => {
      return {
        ...state,
        isLoading: payload,
      };
    },
  },
});

export const { changeTheme, setLoading } = authConfigSlice.actions;

export default authConfigSlice.reducer;
