import { createSlice, current } from "@reduxjs/toolkit";
import {
  FilterCategories,
  FiltersInitialState,
  FilterSubCategories,
} from "../types/filterTypes copy";
// import {
//   FilterCategories,
//   FiltersInitialState,
//   FiltersInitialState
//   FilterSubCategories,
// } from "../types/filterTypes";

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
      const filterCategory = action.payload.filterSubCategory;
      const selectedOption = action.payload.selectedOption;
      filterCategory == FilterSubCategories.SORT_BY
        ? (state[FilterCategories.EVERYTHING][
            filterCategory
          ].selectedOptions = selectedOption)
        : (state[state.FilterGroupState][
            filterCategory
          ].selectedOptions = selectedOption);
    },
    clearSelectedOption(state, action) {
      console.log("we are in clear selected options");
      const filterCategory = action.payload.filterSubCategory;
      state[state.FilterGroupState][filterCategory].selectedOptions = "";
    },
    insertSourcesFilterOptions(state, action) {
      state[FilterCategories.EVERYTHING][FilterSubCategories.SOURCES].options =
        action.payload;
      state[FilterCategories.TOP_HEADLINES][
        FilterSubCategories.SOURCES
      ].options = action.payload;
    },
    addFreeSearchVal(state, action) {
      console.log("this is action in add free srarch val", action);
      state.FreeSearchVal = action.payload.value;
    },
    removeSearchValFromRedux(state, action) {
      state.FreeSearchVal = action.payload.value;
      console.log("lthis is action in add free srarch va", state.FreeSearchVal);
    },
  },
});

export const filterActions = filtersSlice.actions;
export default filtersSlice.reducer;
