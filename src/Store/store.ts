// redux/store.ts
import { configureStore } from '@reduxjs/toolkit';
import logosReducer from './logosSlice';

const store = configureStore({
  reducer: {
    logos: logosReducer,
  },
});

export default store;
