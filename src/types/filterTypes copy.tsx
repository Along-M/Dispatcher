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
export interface filtersInitialState {
  [key: string]: any;
  FilterGroupState: string;
  [FilterCategories.EVERYTHING]: IFilter;
  [FilterCategories.TOP_HEADLINES]: IFilter;
}
export interface filtersState {
  [key: string]: IFilter;
}

export enum FilterCategories {
  TOP_HEADLINES = "Top-Headlines",
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
// export enum CountriesOptions {
//   United Arab Emirates = 'ae',
//   ar = "Argentina",
//   at = "Austria",
//   au = "Australia",
//   be = "Belgium",
//   bg = "Bulgaria",
// br
// ca
// ch
// cn
// co
// cu
// cz
// de
// eg
// fr
// gb
// gr
// hk
// hu
// id
// ie
// il
// in
// it
// jp
// kr
// lt
// lv
// ma
// mx
// my
// ng
// nl
// no
// nz
// ph
// pl
// pt
// ro
// rs
// ru
// sa
// se
// sg
// si
// sk
// th
// tr
// tw
// ua
// us
// ve
// za
// }
// export enum CategoryOptions {

// }
// export enum LanguagOptions {
//   ar = "Argentina",
//   de = "German",
//   en = "English",
//   es = "es",
//   fr = "Franch",
//   he = "Hebrew",
//   it = "Italian",
//   nl = "Nl",
//   no = "No",
//   pt = "Pt",
//   ru = "Russian",
//   se = "Se",
//   ud = "Ud",
//   zh = "Zh",
// }
export const SearchInFilter = {
  title: "Search-in",
  id: "search-in-filter",
  filterSubCategory: FilterSubCategories.SEARCH_IN,
  options: [FilterCategories.EVERYTHING, FilterCategories.TOP_HEADLINES],
};

export const FiltersInitialState: filtersInitialState = {
  isFreeSearchActive: false,
  FreeSearchVal: "",
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
      options: [""],
      selectedOptions: "",
      isChecked: false,
    },
    [FilterSubCategories.SORT_BY]: {
      title: "Sort-by",
      id: "sort-by-filter",
      filterSubCategory: FilterSubCategories.SORT_BY,
      options: ["Relevancy", "Popularity", "PublishedAt"],
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
        "il",
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
        "fr",
        "gb",
        "gr",
        "hk",
      ],
      selectedOptions: "",
      isChecked: false,
    },
    [FilterSubCategories.CATEGORY]: {
      title: "Category",
      id: "category-filter",
      filterSubCategory: FilterSubCategories.CATEGORY,
      options: [
        "Business",
        "Entertainment",
        "General",
        "Health",
        "Science",
        "Sports",
        "Technology",
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
// export const FiltersInitialState: filtersInitialState = {
//   FilterGroupState: FilterCategories.TOP_HEADLINES,
//   [FilterCategories.EVERYTHING]: {
//     [FilterSubCategories.LANGUAGE]: {
//       title: "Language",
//       id: "language-filter",
//       filterSubCategory: FilterSubCategories.LANGUAGE,
//       options: [
//         "ar",
//         "de",
//         "en",
//         "es",
//         "fr",
//         "he",
//         "it",
//         "nl",
//         "no",
//         "pt",
//         "ru",
//         "se",
//         "ud",
//         "zh",
//       ],
//       selectedOptions: "",
//       isChecked: false,
//     },
//     [FilterSubCategories.SOURCES]: {
//       title: "Sources",
//       id: "sources-filter",
//       filterSubCategory: FilterSubCategories.SOURCES,
//       options: ["NBC", "Ynet", "Mako", "Walla", "abc-news"],
//       selectedOptions: "",
//       isChecked: false,
//     },
//     [FilterSubCategories.DATES]: {
//       title: "Dates",
//       id: "date-filter",
//       filterSubCategory: FilterSubCategories.DATES,
//       options: [""],
//       selectedOptions: "",
//       isChecked: false,
//     },
//     [FilterSubCategories.SORT_BY]: {
//       title: "Sort-by",
//       id: "sort-by-filter",
//       filterSubCategory: FilterSubCategories.SORT_BY,
//       options: ["relevancy", "Popularity", "publishedAt"],
//       selectedOptions: "",
//       isChecked: false,
//     },
//   },
//   [FilterCategories.TOP_HEADLINES]: {
//     [FilterSubCategories.COUNTRY]: {
//       title: "Country",
//       id: "country-filter",
//       filterSubCategory: FilterSubCategories.COUNTRY,
//       options: [
//         "ae",
//         "ar",
//         "at",
//         "au",
//         "be",
//         "bg",
//         "br",
//         "ca",
//         "ch",
//         "cn",
//         "co",
//         "cu",
//         "cz",
//         "de",
//         "eg",
//         "fr",
//         "gb",
//         "gr",
//         "hk",
//         "hu",
//         "id",
//         "ie",
//         "il",
//         "in",
//         "it",
//         "jp",
//         "kr",
//         "lt",
//         "lv",
//         "ma",
//         "mx",
//         "my",
//         "ng",
//         "nl",
//         "no",
//         "nz",
//         "ph",
//         "pl",
//         "pt",
//         "ro",
//         "rs",
//         "ru",
//         "sa",
//         "se",
//         "sg",
//         "si",
//         "sk",
//         "th",
//         "tr",
//         "tw",
//         "ua",
//         "us",
//         "ve",
//         "za",
//       ],
//       selectedOptions: "",
//       isChecked: false,
//     },
//     [FilterSubCategories.CATEGORY]: {
//       title: "Category",
//       id: "category-filter",
//       filterSubCategory: FilterSubCategories.CATEGORY,
//       options: [
//         "Business",
//         "Entertainment",
//         "General",
//         "Health",
//         "Science",
//         "Sports",
//         "Technology",
//       ],
//       selectedOptions: "",
//       isChecked: false,
//     },
//     [FilterSubCategories.SOURCES]: {
//       title: "Sources",
//       id: "sources-filter",
//       filterSubCategory: FilterSubCategories.SOURCES,
//       options: ["NBC", "Ynet", "Mako", "Walla", "ABC-News"],
//       selectedOptions: "",
//       isChecked: false,
//     },
//   },
// };
