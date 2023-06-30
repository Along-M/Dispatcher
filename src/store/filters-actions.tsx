import { articalDataActions } from "./dataFromApiSlice";
import { AppDispatch } from "./store";
import { apiKey } from "../helpers/const-helpers/constHelpers";
import { urlBuilder } from "../helpers/helper-functions/helper-functions";
import { filterActions } from "./FiltersSlice";

export const getSourcesFilterOptions = () => {
  return async (dispatch: AppDispatch, getState: any) => {
    // const currentfiltersState = await getState().filters;

    const fetchData = async () => {
      const apiResponse = await fetch(
        `https://newsapi.org/v2/top-headlines/sources?apiKey=${apiKey}`
      );

      const apiSources = await apiResponse.json();
      return apiSources;
    };
    try {
      const sourcesFromApi = await fetchData();
      // console.log("sourcesFromApi", sourcesFromApi);
      const SourcesFilterOptions = sourcesFromApi.sources.map(
        (source: { name: string; id: string }) => {
          return source.name;
        }
      );

      dispatch(filterActions.insertSourcesFilterOptions(SourcesFilterOptions));
    } catch (err) {
      return err;
    }
  };
};
