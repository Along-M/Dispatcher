import { apiKey, defaultUrl, urlStart } from "../const-helpers/constHelpers";
import {
  FilterCategories,
  filtersInitialState,
} from "../../types/filterTypes copy";
import dateFormat from "dateformat";
import { useDispatch } from "react-redux";
import { filterActions } from "../../store/FiltersSlice";

export const urlBuilder = async (filtersState: filtersInitialState) => {
  const filtersCurrentCategory = filtersState.FilterGroupState;
  const currentfiltersState = filtersState[filtersCurrentCategory];
  const freeSearchVal = filtersState.FreeSearchVal;
  let params = "";

  for (let [key, value] of Object.entries(currentfiltersState)) {
    if (currentfiltersState[key].selectedOptions !== "") {
      if (key == "Dates") {
        console.log("in url builder", currentfiltersState[key].selectedOptions);
        const selectedDateArr = currentfiltersState[key].selectedOptions.split(
          " To "
        );
        console.log("this is the new option", selectedDateArr);
        params +=
          "from=" + selectedDateArr[0] + "&to=" + selectedDateArr[1] + "&";
      } else {
        params += key + "=" + currentfiltersState[key].selectedOptions + "&";
      }
    }
  }

  if (params === "" && !freeSearchVal) {
    const url = `${
      urlStart + filtersCurrentCategory
    }?q=${freeSearchVal}&${params}apiKey=${apiKey}`;
    console.log("this is the url:in nothin ", url);
    return url;
  } else {
    if (filtersCurrentCategory == FilterCategories.EVERYTHING) {
      const url = `${
        urlStart + filtersCurrentCategory
      }?q=${freeSearchVal}&${params}apiKey=${apiKey}`;
      console.log("this is the url: ", url);
      return url;
    }
    const url = `${
      urlStart + filtersCurrentCategory
    }?q=${freeSearchVal}&${params}apiKey=${apiKey}`;
    console.log("this is the url: ", url);
    return url;
  }
};

export const FormatDate = (dateToFormat: string): string => {
  const date = new Date(dateToFormat);
  return dateFormat(date, "dddd mmm d, yyyy");
};

export const ItemAlreadyExistsInLocalstorage = (
  lastSearches: string[],
  inputVal: string
): boolean => {
  if (lastSearches.includes(inputVal)) {
    return true;
  }
  return false;
};
