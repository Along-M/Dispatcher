import { articalDataActions } from "./dataFromApiSlice";
import { AppDispatch } from "./store";
import { apiKey, defaultUrl } from "../helpers/const-helpers/constHelpers";
import { urlBuilder } from "../helpers/helper-functions/helper-functions";
import { useState } from "react";

export const getInitialDatafromApi = () => {
  return async (dispatch: AppDispatch, getState: any) => {
    const currentfiltersState = await getState().filters;
    const fetchData = async () => {
      const apiResponse = await fetch(`${defaultUrl}`);

      const apiData = await apiResponse.json();
      return apiData;
    };
    try {
      const apiData = await fetchData();
      dispatch(articalDataActions.replaceArticalData(apiData));
    } catch (err) {
      console.log("error in getting data ", err);
      return err;
    }
  };
};
export const getFilteredDatafromApi = () => {
  return async (dispatch: AppDispatch, getState: any) => {
    const currentfiltersState = await getState().filters;
    const url = await urlBuilder(currentfiltersState);
    if (!url) {
      console.log("no parameters to disply inside get data from api");
      return;
    }
    const fetchData = async () => {
      const apiResponse = await fetch(`${url}`);

      const apiData = await apiResponse.json();
      return apiData;
    };
    try {
      const apiData = await fetchData();
      dispatch(articalDataActions.replaceArticalData(apiData));
    } catch (err) {
      console.log("error in getting data ", err);
      return err;
    }
  };
};
