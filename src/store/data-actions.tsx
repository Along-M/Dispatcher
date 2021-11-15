import { articalDataActions } from "./dataFromApiSlice";
import { AppDispatch } from "./store";
import { apiKey } from "../helpers/const-helpers/constHelpers";
import { urlBuilder } from "../helpers/helper-functions/helper-functions";

export const getDatafromApi = () => {
  return async (dispatch: AppDispatch, getState: any) => {
    const currentfiltersState = await getState().filters;
    const url = await urlBuilder(currentfiltersState);

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
