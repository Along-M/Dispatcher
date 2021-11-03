import { createSlice } from "@reduxjs/toolkit";
import {
  FilterCategories,
  // IFilter,
  // IFiltersInitialState,
  FiltersInitialState,
  // FilterGroupState,
} from "../types/filterTypes";

const filtersInitialState = FiltersInitialState;

const filtersSlice = createSlice({
  name: "filters",
  initialState: filtersInitialState,
  reducers: {
    changeFilterGroup: (state, action) => {
      state.FilterGroupState = action.payload.filterGroup;
    },
  },
});
export const filterActions = filtersSlice.actions;
export default filtersSlice.reducer;
