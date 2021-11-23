import { configureStore } from "@reduxjs/toolkit";
import filtersReducer from "./FiltersSlice";
import dataFromApi from "./dataFromApiSlice";
import filtersSideBar from "./filterSideBarSlice";
import isLoading from "./isLoadingSlice";

const store = configureStore({
  reducer: {
    filters: filtersReducer,
    dataFromApi: dataFromApi,
    filtersSideBar: filtersSideBar,
    isLoading: isLoading,
  },
});
export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
