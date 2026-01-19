import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  currentMood: null,
};

const moodSlice = createSlice({
  name: 'mood',
  initialState,
  reducers: {
    setMood: (state, action) => {
      state.currentMood = action.payload;
    },
    resetMood: state => {
      state.currentMood = null;
    },
  },
});

export const {setMood, resetMood} = moodSlice.actions;
export default moodSlice.reducer;
