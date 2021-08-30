import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const mainSlice = createSlice({
  name: "name",
  initialState: {
    password: null,
  },
  reducers: {
    setPassword: ((state, action) => {
      state.password = action.payload;
    }),
  },
});
export const {
  setPassword,
  setAccount,
  setBalance,
  setPasswordR,
  setValt,
  setBtcAccount,
  setBtcBalance,
  setAllNull,
} = mainSlice.actions;
export const nameReducer = mainSlice.reducer;

