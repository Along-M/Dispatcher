export interface IFilter {
  [key: string]: {
    title: string;
    id: string;
    type: FilterSubCategories;
    // filterSubCategory: FilterSubCategories;
    options: string[];
    selectedOptions: string | undefined;
    isChecked: boolean;
  };
}

export interface fitersState {
  [key: string]: any;
  FilterGroupState: string;
  // FilterGroupState: IFilter;
  everything: IFilter;
  topheadlines: IFilter;
  // 'Everything': IFilter;
  // 'Top-headlines': IFilter;
}

export enum FilterCategories {
  TOP_HEADLINES = "topheadlines",
  EVERYTHING = "everything",
  // TOP_HEADLINES = "Top-headlines",
  // EVERYTHING = "Everything",
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

// export const FiltersInitialState: fitersState = {
//  'FilterGroupState': {
//    'Search-in': {
//       title: "Search-in",
//       id: "search-in-filter",
//       filterSubCategory: FilterSubCategories.SEARCH_IN,
//       options: ["Everything", "Top-headlines"],
//       selectedOptions: "Everything",
//       isChecked: false,
//     },
//  },
//   'Everything': {
//     'Language': {
//       title: "Language",
//       id: "language-filter",
//       filterSubCategory: FilterSubCategories.LANGUAGE,
//       options: ["IL", "PA", "GE", "RU"],
//       selectedOptions: undefined,
//       isChecked: false,
//     },
//     'Sources': {
//       title: "Sources",
//       id: "sources-filter",
//       filterSubCategory: FilterSubCategories.SOURCES,
//       options: ["NBC", "Ynet", "Mako", "Walla", "BBC"],
//       selectedOptions: undefined,
//       isChecked: false,
//     },
//     'Dates': {
//       title: "Dates",
//       id: "date-filter",
//       filterSubCategory: FilterSubCategories.DATES,
//       options: ["20-10-21", "20-10-21", "20-10-21", "20-10-21"],
//       selectedOptions: undefined,
//       isChecked: false,
//     },
//     'Sort-by': {
//       title: "Sort-by",
//       id: "sort-by-filter",
//       filterSubCategory: FilterSubCategories.SORT_BY,
//       options: ["Relevants", "Popularity", "Published-at"],
//       selectedOptions: undefined,
//       isChecked: false,
//     },
//   },
//   'Top-headlines': {
//     Country: {
//       title: "Country",
//       id: "country-filter",
//       filterSubCategory: FilterSubCategories.COUNTRY,
//       options: ["Canada", "Paris", "Israel", "Russia"],
//       selectedOptions: undefined,
//       isChecked: false,
//     },
//     'Category': {
//       title: "Category",
//       id: "category-filter",
//       filterSubCategory: FilterSubCategories.CATEGORY,
//       options: [
//         "business",
//         "entertainment",
//         "general",
//         "health",
//         "science",
//         "sports",
//         "technology",
//       ],
//       selectedOptions: undefined,
//       isChecked: false,
//     },
//     'Sources': {
//       title: "Sources",
//       id: "sources-filter",
//       filterSubCategory: FilterSubCategories.SOURCES,
//       options: ["NBC", "Ynet", "Mako", "Walla", "BBC"],
//       selectedOptions: undefined,
//       isChecked: false,
//     },
//   },
// };
