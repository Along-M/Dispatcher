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
      console.log("real error in getting data", err);
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
    console.log("no url in getting data filters state", currentfiltersState);
    const currentPageNumberParam = await getState().pageNumber;
    console.log(
      "this is page number in get filtereed data",
      currentPageNumberParam
    );
    const url = await urlBuilder(currentfiltersState);
    if (!url) {
      dispatch(isLoadingActions.setIsLoadingToFalse({}));
      console.log("no url in getting data ");
      return;
    }
    const fetchData = async () => {
      const apiResponse = await fetch(`${url}`);
      const apiData = await apiResponse.json();
      console.log("error in getting data ", apiData);
      return apiData;
    };
    try {
      const apiData = await fetchData();
      dispatch(articalDataActions.replaceArticalData(apiData));
      // dispatch(articalDataActions.handlePaginatedData(apiData));
      dispatch(isLoadingActions.setIsLoadingToFalse({}));
    } catch (err) {
      console.log("real error in getting data ", err);
      dispatch(isLoadingActions.setIsLoadingToFalse({}));
      return err;
    }
  };
};

export const getPaginatedData = () => {
  return async (dispatch: AppDispatch, getState: any) => {
    // dispatch(isLoadingActions.setIsLoadingToTrue({}));
    console.log("we are in get peginationn data");
    await dispatch(pageNumberActions.increasePageNumber({}));
    const currentfiltersState = await getState().filters;
    const currentPageNumberParam = await getState().pageNumber;
    console.log("this is page number ", currentPageNumberParam);
    const url = await peginationUrlBuilder(
      currentfiltersState,
      currentPageNumberParam.pageNumberParam
    );
    // const url = await urlBuilder(currentfiltersState);
    if (!url) {
      // dispatch(isLoadingActions.setIsLoadingToFalse({}));
      console.log("no url in getting data ");
      return;
    }
    const fetchData = async () => {
      const apiResponse = await fetch(`${url}`);
      // console.log("no url in  pegination getting data ", url);
      const apiData = await apiResponse.json();
      console.log("error in getting data pegination data", apiData);

      return apiData;
    };
    try {
      const apiData = await fetchData();
      // dispatch(articalDataActions.replaceArticalData(apiData));
      dispatch(articalDataActions.handlePaginatedData(apiData));
      console.log("apiData in pegination data ", apiData);
      // dispatch(isLoadingActions.setIsLoadingToFalse({}));
    } catch (err) {
      console.log("real error in getting data ", err);
      // dispatch(isLoadingActions.setIsLoadingToFalse({}));
      return err;
    }
  };
};
