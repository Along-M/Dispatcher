import { articalDataActions } from "./dataFromApiSlice";
import { AppDispatch } from "./store";
import { apiKey, defaultUrl } from "../helpers/const-helpers/constHelpers";
import { urlBuilder } from "../helpers/helper-functions/helper-functions";
import { useState } from "react";
import { isLoadingActions } from "./isLoadingSlice";

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
    const currentfiltersState = await getState().filters;
    const url = await urlBuilder(currentfiltersState);
    if (!url) {
      dispatch(isLoadingActions.setIsLoadingToFalse({}));
      console.log("no url in getting data ");
      return;
    }
    const fetchData = async () => {
      // if (prevUrl == url) {
      //   console.log("this is weird", url);
      //   console.log(prevUrl);
      //   return;
      // }
      const apiResponse = await fetch(`${url}`);
      // prevUrl = url;
      const apiData = await apiResponse.json();
      // dispatch(isLoadingActions.setIsLoadingToFalse({}));
      console.log("error in getting data ", apiData);
      return apiData;
    };
    try {
      const apiData = await fetchData();
      dispatch(articalDataActions.replaceArticalData(apiData));
      dispatch(isLoadingActions.setIsLoadingToFalse({}));
    } catch (err) {
      console.log("real error in getting data ", err);
      dispatch(isLoadingActions.setIsLoadingToFalse({}));
      return err;
    }
  };
};
