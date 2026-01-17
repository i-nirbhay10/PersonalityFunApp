import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  answers: [],
};

const personalitySlice = createSlice({
  name: 'personality',
  initialState,
  reducers: {
    addAnswer: (state, action) => {
      state.answers.push(action.payload);
    },
    resetAnswers: state => {
      state.answers = [];
    },
  },
});

export const {addAnswer, resetAnswers} = personalitySlice.actions;
export default personalitySlice.reducer;
