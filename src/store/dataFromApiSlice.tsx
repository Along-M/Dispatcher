import { createSlice } from "@reduxjs/toolkit";
import ArticalCardListStories from "../components/UI/Cards/artical-card-list/ArticalCardList.stories";
import { dataInitialState } from "../types/dataTypes";
import { AppDispatch } from "./store";

const dataFromApiInitialState: dataInitialState = { data: null };
const datafromApiSlice = createSlice({
  name: "dataFromApi",
  initialState: dataFromApiInitialState,
  reducers: {
    // replaceArticalData: (state, action) => {
    //   state.data = action.payload;
    // },
    replaceArticalData: (state, action) => {
      state.data = action.payload;
    },
    addDataPegination: (state, action) => {
      state.data = action.payload;
    },
    handlePaginatedData: (state, action) => {
      console.log("data in peginated data:", state.data);
      if (state.data?.articles) {
        state.data = {
          ...action.payload,
          articles: [...state.data?.articles, ...action.payload.articles],
        };
      } else {
        state.data = action.payload;
      }
    },
    // setIsLoadingState: (state, action) => {
    //     state.data = ;
    // },
  },
});

// handlePaginatedData({data})

export const articalDataActions = datafromApiSlice.actions;
export default datafromApiSlice.reducer;
