import { createSlice } from "@reduxjs/toolkit";
import { dataInitialState } from "../types/dataTypes";
import { AppDispatch } from "./store";

const pageNumberInitialState = { pageNumberParam: 1 };

// const filterSideBarSlice: initialState;
const pageNumberSlice = createSlice({
  name: "isLoadingSlice",
  initialState: pageNumberInitialState,
  reducers: {
    resetPageNumber: (state, action) => {
      state.pageNumberParam = 1;
    },
    increasePageNumber: (state, action) => {
      state.pageNumberParam = state.pageNumberParam + 1;
    },
  },
});

export const pageNumberActions = pageNumberSlice.actions;
export default pageNumberSlice.reducer;
