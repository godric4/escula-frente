import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  themeMode: 'dark',
};

const themeSlice = createSlice({
  name: 'globalTheme',
  initialState,
  reducers: {
    setThemeMode: (state) => {
      state.themeMode = state.themeMode === 'light' ? 'dark' : 'light';
      // if state.mode = light, set to dark else otherwise
    },
  },
});

export const { mode } = themeSlice.actions;

export default themeSlice.reducer;
