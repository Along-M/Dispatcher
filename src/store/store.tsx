import { configureStore } from "@reduxjs/toolkit";
import filtersReducer from "./FiltersSlice";
import dataFromApiReducer from "./dataFromApiSlice";
import filtersSideBarReducer from "./filterSideBarSlice";
import isLoadingReducer from "./isLoadingSlice";
import pageNumberReducer from "./pageNumberSlice";

const store = configureStore({
  reducer: {
    filters: filtersReducer,
    dataFromApi: dataFromApiReducer,
    filtersSideBar: filtersSideBarReducer,
    isLoading: isLoadingReducer,
    pageNumber: pageNumberReducer,
  },
});
export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
