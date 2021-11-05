import { createSlice, current } from "@reduxjs/toolkit";
import {
  FilterCategories,
  FiltersInitialState,
  FilterSubCategories,
} from "../types/filterTypes";

const filtersInitialState = FiltersInitialState;

const filtersSlice = createSlice({
  name: "filters",
  initialState: filtersInitialState,
  reducers: {
    changeFilterGroup: (state, action) => {
      const filterSelectedCategory = action.payload.filterSelectedCategory;
      state.FilterGroupState = filterSelectedCategory;
    },
    handleSelectedOptions: (state, action) => {
      const category = action.payload.filterSubCategory;
      const selectedOption = action.payload.selectedOption;
      state[state.FilterGroupState][category].selectedOptions = selectedOption;
      console.log(
        "im selectedOptions in add in selected options reduxxxxxxxx",
        state[state.FilterGroupState][category].selectedOptions
      );
    },
    clearSelectedOption(state, action) {
      const category = action.payload.filterSubCategory;
      state[state.FilterGroupState][category].selectedOptions = "";
      console.log(
        "im selectedOptions in remove in selected options reduxxxxxxxx",
        state[state.FilterGroupState][category].selectedOptions
      );
    },
  },
});
export const filterActions = filtersSlice.actions;
export default filtersSlice.reducer;
