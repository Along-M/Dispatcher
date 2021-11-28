import { createSlice } from "@reduxjs/toolkit";
import { apiKey } from "../helpers/const-helpers/constHelpers";
import { dataInitialState } from "../types/dataTypes";
import { AppDispatch } from "./store";

const currentURLState: any = {
  isInitialurl: true,
};

// const filterSideBarSlice: initialState;
const currentURLSlice = createSlice({
  name: "isLoadingSlice",
  initialState: currentURLState,
  reducers: {
    setURl: (state, action) => {
      // console.log(action.payload.action);
      if (
        action.payload.action ==
        `https://newsapi.org/v2/top-headlines?&page=1&pageSize=10&country=il&apiKey=${apiKey}`
      ) {
        // console.log(action.payload.action);
        state.isInitialurl = true;
      } else {
        state.isInitialurl = false;
      }
    },
  },
});

export const currentURLSliceActions = currentURLSlice.actions;
export default currentURLSlice.reducer;
