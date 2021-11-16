import { apiKey, defaultUrl, urlStart } from "../const-helpers/constHelpers";
import {
  FilterCategories,
  filtersInitialState,
} from "../../types/filterTypes copy";
import dateFormat from "dateformat";

export const urlBuilder = async (filtersState: filtersInitialState) => {
  const filtersCurrentCategory = filtersState.FilterGroupState;
  const currentfiltersState = filtersState[filtersCurrentCategory];
  let params = "";

  for (const [key, value] of Object.entries(currentfiltersState)) {
    if (currentfiltersState[key].selectedOptions !== "") {
      params += key + "=" + currentfiltersState[key].selectedOptions + "&";
    }
  }

  if (params === "") {
    const url = `${urlStart + filtersCurrentCategory}${params}apiKey=${apiKey}`;
    // console.log("this is the url: ", url);
    return null;
  } else {
    if (filtersCurrentCategory == FilterCategories.EVERYTHING) {
      const url = `${
        urlStart + filtersCurrentCategory
      }?q=apple&${params}apiKey=${apiKey}`;
      console.log("this is the url: ", url);
      return url;
    }
    const url = `${
      urlStart + filtersCurrentCategory
    }?${params}apiKey=${apiKey}`;
    console.log("this is the url: ", url);
    return url;
  }
};

export const FormatDate = (dateToFormat: string): string => {
  const date = new Date(dateToFormat);
  return dateFormat(date, "dddd mmm d, yyyy");
};
