import {configureStore} from '@reduxjs/toolkit';
import personalityReducer from './personalitySlice';
import vibeReducer from './vibeSlice';

export const store = configureStore({
  reducer: {
    personality: personalityReducer,
    vibe: vibeReducer,
  },
});
