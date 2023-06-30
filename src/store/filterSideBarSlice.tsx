import { createSlice } from "@reduxjs/toolkit";
import { dataInitialState } from "../types/dataTypes";
import { AppDispatch } from "./store";

const initialState = { isOpen: false };

// const filterSideBarSlice: initialState;
const filterSideBarSlice = createSlice({
  name: "filterSideBarSlice",
  initialState: initialState,
  reducers: {
    closeFilterSideBar: (state, action) => {
      if (state.isOpen == false) {
        return;
      }
      state.isOpen = false;
    },
    openFilterSideBar: (state, action) => {
      if (state.isOpen == true) {
        return;
      }
      state.isOpen = true;
    },
  },
});

export const filterSideBarActions = filterSideBarSlice.actions;
export default filterSideBarSlice.reducer;
