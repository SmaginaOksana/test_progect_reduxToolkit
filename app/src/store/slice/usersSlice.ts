import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { IUser } from "../../interfaces";

const initialState: IUser[] = [];

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<IUser>) => {
      state.push(action.payload);
    },
    deleteUser: (state, action: PayloadAction<number>) => {
      return state.filter((user) => user.id !== action.payload);
    },
  },
});

const { actions, reducer } = usersSlice;
export default reducer;
export const { setUser, deleteUser } = actions;
