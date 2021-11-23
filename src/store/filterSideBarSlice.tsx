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
      console.log("this is filtersidebar slice", action);
      state.isOpen = false;
    },
    openFilterSideBar: (state, action) => {
      state.isOpen = true;
    },
  },
});

export const filterSideBarActions = filterSideBarSlice.actions;
export default filterSideBarSlice.reducer;
