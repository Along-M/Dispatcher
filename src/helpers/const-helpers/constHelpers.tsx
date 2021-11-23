import {
  FilterCategories,
  filtersInitialState,
  FilterSubCategories,
} from "../../types/filterTypes copy";

// for the moveo email account
// export const apiKey = "456536dca78a4cceb68b8839fe9cd185";
// for my personal account
// export const apiKey = "4c70f5154f5d4130a7e97eed44d74fe9";
export const apiKey = "2369f541606f4c6fa83adeb712c4c8b5";

export const urlStart = "https://newsapi.org/v2/";
export const defaultUrl = `https://newsapi.org/v2/top-headlines?country=il&apiKey=${apiKey}`;
export const SearchInFilter = {
  title: "Search-in",
  id: "search-in-filter",
  filterSubCategory: FilterSubCategories.SEARCH_IN,
  options: [FilterCategories.EVERYTHING, FilterCategories.TOP_HEADLINES],
};
export const FiltersInitialState: filtersInitialState = {
  FilterGroupState: FilterCategories.TOP_HEADLINES,
  [FilterCategories.EVERYTHING]: {
    [FilterSubCategories.LANGUAGE]: {
      title: "Language",
      id: "language-filter",
      filterSubCategory: FilterSubCategories.LANGUAGE,
      options: [
        "ar",
        "de",
        "en",
        "es",
        "fr",
        "he",
        "it",
        "nl",
        "no",
        "pt",
        "ru",
        "se",
        "ud",
        "zh",
      ],
      selectedOptions: "",
      isChecked: false,
    },
    [FilterSubCategories.SOURCES]: {
      title: "Sources",
      id: "sources-filter",
      filterSubCategory: FilterSubCategories.SOURCES,
      options: ["NBC", "Ynet", "Mako", "Walla", "abc-news"],
      selectedOptions: "",
      isChecked: false,
    },
    [FilterSubCategories.DATES]: {
      title: "Dates",
      id: "date-filter",
      filterSubCategory: FilterSubCategories.DATES,
      options: ["20-10-21", "20-10-21", "20-10-21", "20-10-21"],
      selectedOptions: "",
      isChecked: false,
    },
    [FilterSubCategories.SORT_BY]: {
      title: "Sort-by",
      id: "sort-by-filter",
      filterSubCategory: FilterSubCategories.SORT_BY,
      options: ["Relevancy", "Popularity", "publishedAt"],
      selectedOptions: "",
      isChecked: false,
    },
  },
  [FilterCategories.TOP_HEADLINES]: {
    [FilterSubCategories.COUNTRY]: {
      title: "Country",
      id: "country-filter",
      filterSubCategory: FilterSubCategories.COUNTRY,
      options: [
        "ae",
        "ar",
        "at",
        "au",
        "be",
        "bg",
        "br",
        "ca",
        "ch",
        "cn",
        "co",
        "cu",
        "cz",
        "de",
        "eg",
        "fr",
        "gb",
        "gr",
        "hk",
        "hu",
        "id",
        "ie",
        "il",
        "in",
        "it",
        "jp",
        "kr",
        "lt",
        "lv",
        "ma",
        "mx",
        "my",
        "ng",
        "nl",
        "no",
        "nz",
        "ph",
        "pl",
        "pt",
        "ro",
        "rs",
        "ru",
        "sa",
        "se",
        "sg",
        "si",
        "sk",
        "th",
        "tr",
        "tw",
        "ua",
        "us",
        "ve",
        "za",
      ],
      selectedOptions: "",
      isChecked: false,
    },
    [FilterSubCategories.CATEGORY]: {
      title: "Category",
      id: "category-filter",
      filterSubCategory: FilterSubCategories.CATEGORY,
      options: [
        "business",
        "entertainment",
        "general",
        "health",
        "science",
        "sports",
        "technology",
      ],
      selectedOptions: "",
      isChecked: false,
    },
    [FilterSubCategories.SOURCES]: {
      title: "Sources",
      id: "sources-filter",
      filterSubCategory: FilterSubCategories.SOURCES,
      options: ["NBC", "Ynet", "Mako", "Walla", "ABC-News"],
      selectedOptions: "",
      isChecked: false,
    },
  },
};