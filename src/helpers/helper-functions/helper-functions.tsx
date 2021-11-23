import { apiKey, defaultUrl, urlStart } from "../const-helpers/constHelpers";
import {
  FilterCategories,
  filtersInitialState,
  FilterSubCategories,
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
    // return url;
    return;
  } else {
    // if()
    if (filtersCurrentCategory == FilterCategories.EVERYTHING) {
      if (
        !freeSearchVal &&
        currentfiltersState[FilterSubCategories.SOURCES].selectedOptions
      ) {
        const url = `${
          urlStart + filtersCurrentCategory
        }?q=${freeSearchVal}&${params}apiKey=${apiKey}`;
        console.log("this is the url with source and no q: ", url);
        return url;
      }
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

export const transformErrorMessage = (
  codeToTransform: string | undefined
): string => {
  switch (codeToTransform) {
    case "rateLimited":
      return "You have made too many requests, plaese try again in a few minutes.";
      break;
    case "sourceDoesNotExist":
      return "The source you are looking for does not exist, please try a new source.";
      break;
    case "parameterInvalid":
      return "Sorry, the parameters you enterened are not valid in our api. please enter a new search.";
      break;
    case "sourceDoesNotExist":
      return "Sorry, the parameters you enterened are not valid in our api.";
      break;
    case "sourcesTooMany":
      return "Sorry, you can only choose one source at a time.";
      break;
    case "apiKeyInvalid":
      return "This seems like a problem on our end, we will be right back.";
      break;
    case "apiKeyExhausted":
      return "The api key is Exhausted.";
      break;
    case "parametersIncompatible":
      return "Our Api does not support these filter parameters combination, please dont filter source with country or category.";
      break;
    case "parametersMissing":
      return "When searching in Everything category, You need to have a free search value in order to activate the filters.";
      break;
    default:
      return "Sorry, This seems like a problem on our end, we will be right back.";
  }
};

export const buildFilterOptions = (option: string, type: string): string => {
  let filterOption = option;
  if (type == FilterSubCategories.LANGUAGE) {
    switch (option) {
      case "ar":
        filterOption = "Arabic";
        break;
      case "de":
        filterOption = "German";
        break;
      case "en":
        filterOption = "English";

        break;
      case "es":
        filterOption = "Spanish";

        break;
      case "fr":
        filterOption = "French";
        break;
      case "he":
        filterOption = "Hebrew";
        break;
      case "it":
        filterOption = "Italian";
        break;
      case "nl":
        filterOption = "Dutch";
        break;
      case "no":
        filterOption = "Norwegian";
        break;
      case "pt":
        filterOption = "Portuguese";
        break;
      case "ru":
        filterOption = "Russian";
        break;
      case "se":
        filterOption = "Northern Sami";
        break;
      case "zh":
        filterOption = "Chinese";
        break;
      default:
    }
  }
  if (type == FilterSubCategories.COUNTRY) {
    switch (option) {
      case "il":
        filterOption = "Israel";
        break;
      case "ae":
        filterOption = "United Arab Emirates";
        break;
      case "ar":
        filterOption = "Argentina";
        break;
      case "at":
        filterOption = "Austria";
        break;
      case "au":
        filterOption = "Australia";
        break;
      case "be":
        filterOption = "Belgium";
        break;
      case "bg":
        filterOption = "Bulgaria";
        break;
      case "br":
        filterOption = "Brazil";
        break;
      case "ca":
        filterOption = "Canada";
        break;
      case "ch":
        filterOption = "Switzerland";
        break;
      case "cn":
        filterOption = "China";
        break;
      case "co":
        filterOption = "Colombia";
        break;
      case "cu":
        filterOption = "Cuba";
        break;
      case "cz":
        filterOption = "Czechia";
        break;
      case "de":
        filterOption = "Germany";
        break;
      case "fr":
        filterOption = "France";
        break;
      case "gb":
        filterOption = "United Kingdom";
        break;
      case "gr":
        filterOption = "Greece";
        break;
      case "hk":
        filterOption = "Hong Kong";
        break;
      default:
    }
  }
  if (type == FilterSubCategories.SORT_BY) {
    switch (option) {
      case "PublishedAt":
        filterOption = "Published-At";
        break;
      default:
    }
  }
  return filterOption;
};
