export interface IFilter {
  [key: string]: {
    title: string;
    id: string;
    type: FilterSubCategories;
    options: string[];
    selectedOptions: string | undefined;
    isChecked: boolean;
  };
}

export interface fitersState {
  [key: string]: any;
  FilterGroupState: string;
  everything: IFilter;
  topheadlines: IFilter;
}

export enum FilterCategories {
  TOP_HEADLINES = "topheadlines",
  EVERYTHING = "everything",
}

export enum FilterSubCategories {
  SOURCES = "Sources",
  CATEGORY = "Category",
  COUNTRY = "Country",
  // MOBILE_SORT_BY = "mobile-sort-by",
  LANGUAGE = "Language",
  DATES = "Dates",
  SORT_BY = "SortBy",
  SEARCH_IN = "Search-in",
}

export const FiltersInitialState: fitersState = {
  FilterGroupState: "everything",
  everything: {
    Language: {
      title: "Language",
      id: "language-filter",
      type: FilterSubCategories.LANGUAGE,
      options: ["IL", "PA", "GE", "RU"],
      selectedOptions: "",
      isChecked: false,
    },
    Sources: {
      title: "Sources",
      id: "sources-filter",
      type: FilterSubCategories.SOURCES,
      options: ["NBC", "Ynet", "Mako", "Walla", "BBC"],
      selectedOptions: "",
      isChecked: false,
    },
    Dates: {
      title: "Dates",
      id: "date-filter",
      type: FilterSubCategories.DATES,
      options: ["20-10-21", "20-10-21", "20-10-21", "20-10-21"],
      selectedOptions: "",
      isChecked: false,
    },
    SortBy: {
      title: "Sort-by",
      id: "sort-by-filter",
      type: FilterSubCategories.SORT_BY,
      options: ["Relevants", "Popularity", "Published-at"],
      selectedOptions: "",
      isChecked: false,
    },
  },
  topheadlines: {
    Country: {
      title: "Country",
      id: "country-filter",
      type: FilterSubCategories.COUNTRY,
      options: ["Canada", "Paris", "Israel", "Russia"],
      selectedOptions: "",
      isChecked: false,
    },
    Category: {
      title: "Category",
      id: "category-filter",
      type: FilterSubCategories.CATEGORY,
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
    Sources: {
      title: "Sources",
      id: "sources-filter",
      type: FilterSubCategories.SOURCES,
      options: ["NBC", "Ynet", "Mako", "Walla", "BBC"],
      selectedOptions: "",
      isChecked: false,
    },
  },
};
