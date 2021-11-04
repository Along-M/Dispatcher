import { createSlice, current } from "@reduxjs/toolkit";
import { FiltersInitialState } from "../types/filterTypes";

const filtersInitialState = FiltersInitialState;

const filtersSlice = createSlice({
  name: "filters",
  initialState: filtersInitialState,
  reducers: {
    changeFilterGroup: (state, action) => {
      state.FilterGroupState = action.payload.filterSelectedCategory;
    },
    handleSelectedOptions: (state, action) => {
      let category = action.payload.filterSubCategory;
      let option = action.payload.selectedOption;
      state[state.FilterGroupState][category].selectedOptions = option;
      // console.log(current(state));
      // console.log("this is the state", category);
      // console.log("this is the state", option);
      // console.log("this is the state.everything", current(state.everything));
      // console.log("this is the state.everything", current(state.everything));
      // console.log(
      //   "this is the state in topheadlines place",
      //   current(state["topheadlines"][category])
      // );
      console.log(
        "this is the state",
        current(state[state.FilterGroupState][category])
      );
    },
  },
});
export const filterActions = filtersSlice.actions;
export default filtersSlice.reducer;
