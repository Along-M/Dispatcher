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
        const selectedDateArr = currentfiltersState[key].selectedOptions.split(
          " To "
        );
        params +=
          "from=" + selectedDateArr[0] + "&to=" + selectedDateArr[1] + "&";
      } else {
        params += key + "=" + currentfiltersState[key].selectedOptions + "&";
      }
    }
  }

  if (params === "" && !freeSearchVal) {
    // const url = `${
    //   urlStart + filtersCurrentCategory
    // }?q=${freeSearchVal}&${params}apiKey=${apiKey}`;
    // const url = `${
    //   urlStart + filtersCurrentCategory
    // }?q=${freeSearchVal}&page=1&pageSize=10&${params}apiKey=${apiKey}`;
    // const url = `${
    //   urlStart + filtersCurrentCategory
    // }?q=${freeSearchVal}&page=1&pageSize=10&${params}apiKey=${apiKey}`;

    const url = `https://newsapi.org/v2/top-headlines?&page=1&pageSize=10&country=il&apiKey=${apiKey}`;
    return url;
    // return;
  } else {
    // if()
    if (filtersCurrentCategory == FilterCategories.EVERYTHING) {
      if (
        !freeSearchVal &&
        currentfiltersState[FilterSubCategories.SOURCES].selectedOptions
      ) {
        const url = `${
          urlStart + filtersCurrentCategory
        }?q=${freeSearchVal}&page=1&pageSize=10&${params}apiKey=${apiKey}`;
        return url;
      }
      const url = `${
        urlStart + filtersCurrentCategory
      }?q=${freeSearchVal}&page=1&pageSize=10&${params}apiKey=${apiKey}`;
      return url;
    }
    const url = `${
      urlStart + filtersCurrentCategory
    }?q=${freeSearchVal}&page=1&pageSize=10&${params}apiKey=${apiKey}`;
    return url;
  }
};

export const peginationUrlBuilder = async (
  filtersState: filtersInitialState,
  currentPageNumberParam: any
) => {
  const filtersCurrentCategory = filtersState.FilterGroupState;
  const currentfiltersState = filtersState[filtersCurrentCategory];
  const freeSearchVal = filtersState.FreeSearchVal;
  let params = "";

  for (let [key, value] of Object.entries(currentfiltersState)) {
    if (currentfiltersState[key].selectedOptions !== "") {
      if (key == "Dates") {
        const selectedDateArr = currentfiltersState[key].selectedOptions.split(
          " To "
        );
        params +=
          "from=" + selectedDateArr[0] + "&to=" + selectedDateArr[1] + "&";
      } else {
        params += key + "=" + currentfiltersState[key].selectedOptions + "&";
      }
    }
  }

  if (params === "" && !freeSearchVal) {
    // const url = `${
    //   urlStart + filtersCurrentCategory
    // }?q=${freeSearchVal}&${params}apiKey=${apiKey}`;
    // const url = `${
    //   urlStart + filtersCurrentCategory
    // }?q=${freeSearchVal}&page=${currentPageNumberParam}&pageSize=10&${params}apiKey=${apiKey}`;
    const url = `https://newsapi.org/v2/top-headlines?&page=${currentPageNumberParam}&pageSize=10&country=il&apiKey=${apiKey}`;
    return url;
    return;
  } else {
    if (filtersCurrentCategory == FilterCategories.EVERYTHING) {
      if (
        !freeSearchVal &&
        currentfiltersState[FilterSubCategories.SOURCES].selectedOptions
      ) {
        const url = `${
          urlStart + filtersCurrentCategory
        }?q=${freeSearchVal}&page=${currentPageNumberParam}&pageSize=10&${params}apiKey=${apiKey}`;
        return url;
      }
      const url = `${
        urlStart + filtersCurrentCategory
      }?q=${freeSearchVal}&page=${currentPageNumberParam}&pageSize=10&${params}apiKey=${apiKey}`;
      return url;
    }
    const url = `${
      urlStart + filtersCurrentCategory
    }?q=${freeSearchVal}&page=${currentPageNumberParam}&pageSize=10&${params}apiKey=${apiKey}`;
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
      return "429 - Too Many Requests: You have made too many requests, plaese try again in a few minutes.";
      break;
    case "sourceDoesNotExist":
      return "The source you are looking for does not exist, please try a new one.";
      break;
    case "parameterInvalid":
      return "400 - Bad Request: You are trying to request results too far in the past, please enter a new date search.";
      break;
    case "sourceDoesNotExist":
      return "Sorry, the parameters you enterened are not valid in our api.";
      break;
    case "sourcesTooMany":
      return "400 - Bad Request: Sorry, you can only choose one source at a time.";
      break;
    case "apiKeyInvalid":
      return "This seems like a problem on our end, we will be right back.";
      break;
    case "apiKeyExhausted":
      return "The api key is Exhausted.";
      break;
    case "parametersIncompatible":
      return "400 - Bad Request: Please dont filter source with country or category.";
      break;
    case "parametersMissing":
      return "400 - Bad Request: When searching in Everything, You need to have a free search value or Sources filter active in order to activate the Country/Language/Dates filters.";
      break;
    default:
      return "400 - Bad Request: Sorry, This seems like a problem on our end, we will be right back.";
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
      case "il":
        filterOption = "Israel";
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
      case "ae":
        filterOption = "Arab Emirates";
        break;
      default:
    }
  }
  if (type == FilterSubCategories.SORT_BY) {
    switch (option) {
      case "publishedAt":
        filterOption = "Published-At";
        break;
      case "popularity":
        filterOption = "Popularity";
        break;
      case "relevancy":
        filterOption = "Relevancy";
        break;
      default:
    }
  }
  return filterOption;
};
