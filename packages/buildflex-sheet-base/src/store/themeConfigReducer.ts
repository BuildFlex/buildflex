import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  darkTheme: false,
  isLoading: false,
};

const themeSlice = createSlice({
  name: 'theme',
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

export const { changeTheme, setLoading } = themeSlice.actions;

export default themeSlice.reducer;
