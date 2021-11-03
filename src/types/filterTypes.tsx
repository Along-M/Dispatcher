export interface IFilter {
  [key: string]: {
    title: string;
    id: string;
    type: FilterSubCategories;
    options: string[];
    selectedOptions: string | null;
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
}

export const FiltersInitialState: fitersState = {
  FilterGroupState: "topheadlines",
  everything: {
    Language: {
      title: "Language",
      id: "language-filter",
      type: FilterSubCategories.LANGUAGE,
      options: ["Canada", "Paris", "Israel", "Russia"],
      selectedOptions: null,
      isChecked: false,
    },
    Sources: {
      title: "Sources",
      id: "sources-filter",
      type: FilterSubCategories.SOURCES,
      options: ["NBC", "Ynet", "Mako", "Walla", "BBC"],
      selectedOptions: null,
      isChecked: false,
    },
    Dates: {
      title: "Dates",
      id: "date-filter",
      type: FilterSubCategories.DATES,
      options: ["20-10-21", "20-10-21", "20-10-21", "20-10-21"],
      selectedOptions: null,
      isChecked: false,
    },
    SortBy: {
      title: "Sort-by",
      id: "sort-by-filter",
      type: FilterSubCategories.SORT_BY,
      options: ["Relevants", "Popularity", "Published-at"],
      selectedOptions: null,
      isChecked: false,
    },
  },
  topheadlines: {
    Country: {
      title: "Country",
      id: "country-filter",
      type: FilterSubCategories.COUNTRY,
      options: ["Canada", "Paris", "Israel", "Russia"],
      selectedOptions: null,
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
      selectedOptions: null,
      isChecked: false,
    },
    Sources: {
      title: "Sources",
      id: "sources-filter",
      type: FilterSubCategories.SOURCES,
      options: ["NBC", "Ynet", "Mako", "Walla", "BBC"],
      selectedOptions: null,
      isChecked: false,
    },
  },
};
