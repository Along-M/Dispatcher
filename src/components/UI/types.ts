import Filter from "./filter/Filter"

export enum ButtonTypes  {
    WELCOME = "welcome-btn",
    PRIMARY = "primary-blue-btn",
    SECONDARY = "secondary-gray-btn",
    TEXTBTN = "text-transparent-btn",
    VIEW_RESULTS = "view-results-btn"
  };

export enum CardTypes  {
    STORY = "story-card",
    DATA = "data-card",
  };
  
export enum FilterCategories  {
      SOURCES = "Sources",
      CATEGORY = "Category",
      COUNTRY = "Country",
      TOP_HEADLINES = "Top Headlines",
      MOBILE_SORT_BY = "mobile-sort-by"
  };

  export enum NoDataFoundTypes  {
      DATACARD = "No-data-found",
      ARTICALCARD = "No-articals-found",
  };

  export enum Colors {
    PURPLE_BLUE = "#5A5A89",
    BLUE = "#0058B9",
    WHITE = "#FFFFFF",
    GHOST_WHITE = "#F8F8FF",
    DARK_PURPLE = "#262146",
    BLUISH_BLACK = "#14142B",
    BRIGHT_PURPLE_BLUE = "#F3F3FF",
    LIGHT_GRAY = "#D9DBE9",
  }
  // export enum Fonts {
  //   GLOBAL_FONT = -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
  //   CYAN_BLUE = "#0058B9",
  //   WHITE = "#FFFFFF",
  //   GHOST_WHITE = "#F8F8FF",
  //   DARK_PURPLE = "#262146",
  //   BLUISH_BLACK = "#14142B",
  //   BRIGHT_PURPLE_BLUE = "#F3F3FF",
  //   LIGHT_GRAY = "#D9DBE9",
  // }

  // export enum FilterTypes {
  //   EVERYTHING = "#5A5A89",
  //   TOP_HEADLINES = "#5A5A89",
  
  // }
  export type Filter = {[name:string]: {name: string, id: string, options: string[]}};

  export type Filters = {};

const sortBy:Filter = {Location: {name: 'something', id: "something", options: ['something','test']}}
// will be in redux
  export enum SortByCategories  {
    TOP_HEADLINES = "Top headlines",
    EVERYTHING = "Everything"
  }
  let CategoryTopHeadlinesFilters = {
      Sources: {title: "Sources", id: "sources-filter", options: ["NBC", "Ynet","Mako","Walla", "BBC"]},
      Country: {title: "Country",id: "country-filter", options: ["Canada","Paris","Israel", "Russia"]},
      Category: {title: "Category", id: "category-filter", options: ["business","entertainment","general","health","science","sports","technology"]},
  }
  const CategoryEverythingFilters = {
    Language: {title: "Language", id: "language-filter", options: ["Canada","Paris","Israel", "Russia"]},
    Sources: {title: "Sort-by", id: "sorty-by-filter", options: ["Top headlines","Everything"]},
    Dates: {title: "Dates", id: "dates-filter", options: ["20-10-21","20-10-21","20-10-21", "20-10-21"]},
  }

  const allFilters = {
      Sources: {title: "Sources", id: "sources-filter", options: ["NBC", "Ynet","Mako","Walla", "BBC"]},
      Country: {title: "Country",id: "country-filter", options: ["Canada","Paris","Israel", "Russia"]},
      Category: {title: "Category", id: "category-filter", options: ["business","entertainment","general","health","science","sports","technology"]},
      // Sources: {title: "Sources", id: "sources-filter", options: ["NBC", "Ynet","Mako","Walla", "BBC"]},
      Language: {title: "Language", id: "language-filter", options: ["Canada","Paris","Israel", "Russia"]},
      SortBy: {title: "Sort-by", id: "sorty-by-filter", options: ["Top headlines","Everything"]},
      Dates: {title: "Dates", id: "dates-filter", options: ["20-10-21","20-10-21","20-10-21", "20-10-21"]},
  }

  console.log('everything filters', CategoryEverythingFilters);


  const globalFont = '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen';
  
  export default globalFont;