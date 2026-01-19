import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  currentVibe: null,
};

const vibeSlice = createSlice({
  name: 'vibe',
  initialState,
  reducers: {
    setVibe: (state, action) => {
      state.currentVibe = action.payload;
    },
    resetVibe: state => {
      state.currentVibe = null;
    },
  },
});

export const {setVibe, resetVibe} = vibeSlice.actions;
export default vibeSlice.reducer;
