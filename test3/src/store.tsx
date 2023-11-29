import { configureStore, createSlice } from "@reduxjs/toolkit";
import nameList from "./store/nameList";

export const store = configureStore({
  reducer: {
    nameList: nameList,
  },
});

export default store;
