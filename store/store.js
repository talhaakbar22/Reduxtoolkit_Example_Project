import { configureStore } from '@reduxjs/toolkit';
import { nameReducer } from "./mainSlice";

export const store = configureStore({
  reducer: {
    nameReducer,

  },
});

