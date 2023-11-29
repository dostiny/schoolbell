import { configureStore, createSlice } from "@reduxjs/toolkit";

export interface userListType {
  id: number;
  name: string;
  password: string;
}

const initialState: userListType[] = [];

const nameList = createSlice({
  name: "uploadName",
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.push(...action.payload);
    },
  },
});

export let { addUser } = nameList.actions;

export default nameList.reducer;
