import {configureStore} from '@reduxjs/toolkit';
import personalityReducer from './personalitySlice';

export const store = configureStore({
  reducer: {
    personality: personalityReducer,
  },
});
