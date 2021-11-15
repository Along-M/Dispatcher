import { apiKey, defaultUrl, urlStart } from "../const-helpers/constHelpers";
import { filtersInitialState } from "../../types/filterTypes copy";
import dateFormat from "dateformat";

export const urlBuilder = async (filtersState: filtersInitialState) => {
  const firstUrl = defaultUrl;
  const filtersCurrentCategory = filtersState.FilterGroupState;
  const currentfiltersState = filtersState[filtersCurrentCategory];
  let params = "";

  for (const [key, value] of Object.entries(currentfiltersState)) {
    if (currentfiltersState[key].selectedOptions !== "") {
      params += key + "=" + currentfiltersState[key].selectedOptions + "&";
    }
  }

  if (params === "") {
    return firstUrl;
  } else {
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
