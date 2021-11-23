import { createSlice } from "@reduxjs/toolkit";
import { dataInitialState } from "../types/dataTypes";
import { AppDispatch } from "./store";

const isLoadingInitialSate = { isLoading: false };

// const filterSideBarSlice: initialState;
const isLoadingSlice = createSlice({
  name: "isLoadingSlice",
  initialState: isLoadingInitialSate,
  reducers: {
    setIsLoadingToFalse: (state, action) => {
      state.isLoading = false;
    },
    setIsLoadingToTrue: (state, action) => {
      state.isLoading = true;
    },
  },
});

export const isLoadingActions = isLoadingSlice.actions;
export default isLoadingSlice.reducer;
