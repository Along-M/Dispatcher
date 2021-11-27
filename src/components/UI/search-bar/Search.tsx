import { useEffect, useRef, useState } from "react";
import useWindowSize from "../../../helpers/custom-hooks/useWindowSize";
import { FilterSubCategories } from "../../../types/filterTypes";
import {
  SearchBarContainer,
  SearchInput,
  Icon,
  SearchInputContainer,
  Divider,
} from "./style";
import searchIcon from "../../../assets/icons/search.svg";
import closeIcon from "../../../assets/icons/close.svg";
import LastSearchResults from "../last-search-results/LastSearchResults";
import SearchInFilterCategories from "../search-In-filter-categories/SearchInFilterCategories";
import { SearchInFilter } from "../../../types/filterTypes copy";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../../store/store";
import useOutsideClick from "../../../helpers/custom-hooks/useClickOutside";
import { defaultUrl } from "../../../helpers/const-helpers/constHelpers";
import { Console } from "console";
import { ItemAlreadyExistsInLocalstorage } from "../../../helpers/helper-functions/helper-functions";
import { filterActions } from "../../../store/FiltersSlice";
import { getFilteredDatafromApi } from "../../../store/data-actions";

export interface SearchProps {
  dropDownOptions?: string[];
  children?: React.ReactChild | React.ReactChild[];
  type?: FilterSubCategories;
}

const Search = ({ children, type, dropDownOptions }: SearchProps) => {
  const windowSize = useWindowSize();
  const dispatch = useDispatch();
  const SearchInFilterTitle = useSelector(
    (state: RootState) => state.filters.FilterGroupState
  );
  const filtersState = useSelector((state: RootState) => state.filters);

  // const ref = useRef<any>();
  const [isLastSearchesOpen, setisLastSearchesOpen] = useState<boolean>(false);
  const [lastSearches, setLastSearches] = useState<string[]>([]);
  const [searchInputValue, setsearchInputValue] = useState<
    undefined | string
  >();
  useEffect(() => {
    const lastSearchesFromLocalStorage = localStorage.getItem("lastSearches");
    if (!lastSearchesFromLocalStorage) {
      localStorage.setItem("lastSearches", JSON.stringify(lastSearches));
    } else {
      setLastSearches(JSON.parse(lastSearchesFromLocalStorage));
    }
  }, []);
  useEffect(() => {
    localStorage.setItem("lastSearches", JSON.stringify(lastSearches));
  }, [lastSearches]);

  const toggleLastSearchesDiv = (): void => {
    setisLastSearchesOpen(!isLastSearchesOpen);
  };

  const handleLastSearchOptionSelected = (option: string) => {
    setsearchInputValue(option);
    setisLastSearchesOpen(false);
  };

  const handleFreeSearchSubmit = (event: any) => {
    event.preventDefault();
    // console.log("filtersState in search", filtersState);
    dispatch(filterActions.changeIsFreeSearchActive({ value: false }));
    console.log("filter state after adding free search val:", event.target);
    console.log("filter state after adding free search val:", filtersState);
    // console.log(
    //   "filtersState in search after changing the free search val",
    //   filtersState
    // );
    if (!searchInputValue) {
      return;
    }
    dispatch(filterActions.addFreeSearchVal({ value: searchInputValue }));
    getFilteredData();
    if (ItemAlreadyExistsInLocalstorage(lastSearches, searchInputValue)) {
      return;
    }
    setisLastSearchesOpen(false);
    setLastSearches((prevLastSearches) => [
      searchInputValue,
      ...prevLastSearches,
    ]);
  };

  const getFilteredData = () => {
    // dispatch(filterActions.addFreeSearchVal({ value: searchInputValue }));
    dispatch(getFilteredDatafromApi());
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    // console.log("tjhis is event target: ", event.target.value);
    if (event.target.value === "") {
      dispatch(filterActions.changeIsFreeSearchActive({ value: false }));
      dispatch(filterActions.addFreeSearchVal({ value: event.target.value }));
    } else {
      // dispatch(filterActions.addFreeSearchVal({ value: event.target.value }));
      dispatch(filterActions.changeIsFreeSearchActive({ value: true }));
    }
    setsearchInputValue(event.target.value);
  };
  return (
    <SearchBarContainer
      // ref={ref}
      onSubmit={handleFreeSearchSubmit}
      autoComplete="off"
    >
      <SearchInputContainer>
        <Icon src={searchIcon} onClick={handleFreeSearchSubmit} />
        <SearchInput
          placeholder="Search"
          id="free-search-input"
          // onClick={toggleLastSearchesDiv}
          onFocus={() => {
            console.log("focus in");
            setisLastSearchesOpen(true);
          }}
          onBlur={() => setisLastSearchesOpen(false)}
          value={searchInputValue}
          onChange={(event) => handleInputChange(event)}
          // onChange={(event) => setsearchInputValue(event.target.value)}
        ></SearchInput>
        {windowSize.width > 1024 && <Divider />}
        {windowSize.width > 1024 && (
          <SearchInFilterCategories
            id={SearchInFilter.id}
            title={SearchInFilterTitle}
            filterSubCategory={SearchInFilter.filterSubCategory}
            options={SearchInFilter.options}
          />
        )}
      </SearchInputContainer>
      {isLastSearchesOpen && lastSearches.length > 0 && (
        <LastSearchResults
          lastSearchesOptions={lastSearches}
          changeLastSearches={(newLastSearchArr: string[]) =>
            setLastSearches(newLastSearchArr)
          }
          handleSearchSubmit={(option: string) => {
            handleLastSearchOptionSelected(option);
          }}
        />
      )}
    </SearchBarContainer>
  );
};

export default Search;
