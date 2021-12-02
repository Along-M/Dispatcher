import { articalDataActions } from "./dataFromApiSlice";
import { AppDispatch } from "./store";
import { apiKey, defaultUrl } from "../helpers/const-helpers/constHelpers";
import {
  urlBuilder,
  peginationUrlBuilder,
} from "../helpers/helper-functions/helper-functions";
import { useState } from "react";
import { isLoadingActions } from "./isLoadingSlice";
import { pageNumberActions } from "./pageNumberSlice";
import { currentURLSliceActions } from "./currentURLSlice";

// good functions
export const getInitialDatafromApi = () => {
  return async (dispatch: AppDispatch, getState: any) => {
    dispatch(isLoadingActions.setIsLoadingToTrue({}));
    const currentfiltersState = await getState().filters;
    const fetchData = async () => {
      const apiResponse = await fetch(`${defaultUrl}`);

      const apiData = await apiResponse.json();
      return apiData;
    };
    try {
      const apiData = await fetchData();
      dispatch(articalDataActions.replaceArticalData(apiData));
      dispatch(isLoadingActions.setIsLoadingToFalse({}));
    } catch (err) {
      // return;
      dispatch(isLoadingActions.setIsLoadingToFalse({}));
      return err;
    }
  };
};
export const getFilteredDatafromApi = () => {
  return async (dispatch: AppDispatch, getState: any) => {
    dispatch(isLoadingActions.setIsLoadingToTrue({}));
    dispatch(pageNumberActions.resetPageNumber({}));
    const currentfiltersState = await getState().filters;
    // console.log("no url in getting data filters state", currentfiltersState);
    const currentPageNumberParam = await getState().pageNumber;
    // console.log(
    //   "this is page number in get filtereed data",
    //   currentPageNumberParam
    // );
    const url = await urlBuilder(currentfiltersState);
    if (!url) {
      dispatch(isLoadingActions.setIsLoadingToFalse({}));
      return;
    }
    const fetchData = async () => {
      dispatch(currentURLSliceActions.setURl({ action: url }));
      // console.log("happened", url);

      const apiResponse = await fetch(`${url}`);
      const apiData = await apiResponse.json();
      // console.log(apiData);
      return apiData;
    };
    try {
      const apiData = await fetchData();
      dispatch(articalDataActions.replaceArticalData(apiData));
      // dispatch(articalDataActions.handlePaginatedData(apiData));
      dispatch(isLoadingActions.setIsLoadingToFalse({}));
    } catch (err) {
      dispatch(isLoadingActions.setIsLoadingToFalse({}));
      return err;
    }
  };
};

export const getPaginatedData = () => {
  return async (dispatch: AppDispatch, getState: any) => {
    // dispatch(isLoadingActions.setIsLoadingToTrue({}));
    await dispatch(pageNumberActions.increasePageNumber({}));
    const currentfiltersState = await getState().filters;
    const currentPageNumberParam = await getState().pageNumber;
    const url = await peginationUrlBuilder(
      currentfiltersState,
      currentPageNumberParam.pageNumberParam
    );
    // const url = await urlBuilder(currentfiltersState);
    if (!url) {
      // dispatch(isLoadingActions.setIsLoadingToFalse({}));
      return;
    }
    const fetchData = async () => {
      const apiResponse = await fetch(`${url}`);
      // console.log("no url in  pegination getting data ", url);
      const apiData = await apiResponse.json();

      return apiData;
    };
    try {
      const apiData = await fetchData();
      // dispatch(articalDataActions.replaceArticalData(apiData));
      dispatch(articalDataActions.handlePaginatedData(apiData));
      // dispatch(isLoadingActions.setIsLoadingToFalse({}));
    } catch (err) {
      // dispatch(isLoadingActions.setIsLoadingToFalse({}));
      return err;
    }
  };
};
