import { createSlice } from "@reduxjs/toolkit";
import { dataInitialState } from "../types/dataTypes";
import { AppDispatch } from "./store";

const dataFromApiInitialState: dataInitialState = { data: null };
const datafromApiSlice = createSlice({
  name: "dataFromApi",
  initialState: dataFromApiInitialState,
  reducers: {
    replaceArticalData: (state, action) => {
      state.data = action.payload;
    },
    // setIsLoadingState: (state, action) => {
    //     state.data = ;
    // },
  },
});

export const articalDataActions = datafromApiSlice.actions;
export default datafromApiSlice.reducer;
