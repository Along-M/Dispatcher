export interface IFilter {
  [key: string]: {
    title: string;
    id: string;
    filterSubCategory: FilterSubCategories;
    options: string[];
    selectedOptions?: string | undefined;
    isChecked?: boolean;
  };
}

export interface fitersState {
  [key: string]: any;
  FilterGroupState: string;
  [FilterCategories.EVERYTHING]: IFilter;
  [FilterCategories.TOP_HEADLINES]: IFilter;
}

export enum FilterCategories {
  TOP_HEADLINES = "Top-headlines",
  EVERYTHING = "Everything",
}

export enum FilterSubCategories {
  SOURCES = "Sources",
  CATEGORY = "Category",
  COUNTRY = "Country",
  // MOBILE_SORT_BY = "mobile-sort-by",
  LANGUAGE = "Language",
  DATES = "Dates",
  SORT_BY = "Sort-by",
  SEARCH_IN = "Search-in",
}

export const SearchInFilter = {
  title: "Search-in",
  id: "search-in-filter",
  filterSubCategory: FilterSubCategories.SEARCH_IN,
  options: [FilterCategories.EVERYTHING, FilterCategories.TOP_HEADLINES],
};

export const FiltersInitialState: fitersState = {
  FilterGroupState: FilterCategories.EVERYTHING,
  [FilterCategories.EVERYTHING]: {
    [FilterSubCategories.LANGUAGE]: {
      title: "Language",
      id: "language-filter",
      filterSubCategory: FilterSubCategories.LANGUAGE,
      options: ["IL", "PA", "GE", "RU"],
      selectedOptions: "",
      isChecked: false,
    },
    [FilterSubCategories.SOURCES]: {
      title: "Sources",
      id: "sources-filter",
      filterSubCategory: FilterSubCategories.SOURCES,
      options: ["NBC", "Ynet", "Mako", "Walla", "BBC"],
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
      options: ["Relevants", "Popularity", "Published-at"],
      selectedOptions: "",
      isChecked: false,
    },
  },
  [FilterCategories.TOP_HEADLINES]: {
    [FilterSubCategories.COUNTRY]: {
      title: "Country",
      id: "country-filter",
      filterSubCategory: FilterSubCategories.COUNTRY,
      options: ["Canada", "Paris", "Israel", "Russia"],
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
      options: ["NBC", "Ynet", "Mako", "Walla", "BBC"],
      selectedOptions: "",
      isChecked: false,
    },
  },
};
