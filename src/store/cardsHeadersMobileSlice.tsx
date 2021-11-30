import { createSlice } from "@reduxjs/toolkit";
import { dataInitialState } from "../types/dataTypes";
import { AppDispatch } from "./store";

const cardheadersOnMobileInitialState = { isMobileSearchActive: false };

// const filterSideBarSlice: initialState;
const cardsHeadersMobileSlice = createSlice({
  name: "isLoadingSlice",
  initialState: cardheadersOnMobileInitialState,
  reducers: {
    setIsMobileToTrue: (state, action) => {
      state.isMobileSearchActive = true;
    },
    setIsMobileToFale: (state, action) => {
      state.isMobileSearchActive = false;
    },
  },
});

export const cardsHeadersMobileActions = cardsHeadersMobileSlice.actions;
export default cardsHeadersMobileSlice.reducer;
