import { configureStore } from "@reduxjs/toolkit";
import filtersReducer from "./FiltersSlice";
import dataFromApi from "./dataFromApiSlice";

const store = configureStore({
  reducer: {
    filters: filtersReducer,
    dataFromApi: dataFromApi,
  },
});
export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
