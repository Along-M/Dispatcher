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
import {
  FilterCategories,
  SearchInFilter,
} from "../../../types/filterTypes copy";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../../store/store";
import useOutsideClick from "../../../helpers/custom-hooks/useClickOutside";
import { defaultUrl } from "../../../helpers/const-helpers/constHelpers";
import { Console } from "console";
import { ItemAlreadyExistsInLocalstorage } from "../../../helpers/helper-functions/helper-functions";
import { filterActions } from "../../../store/FiltersSlice";
import { getFilteredDatafromApi } from "../../../store/data-actions";
import useClickOutside from "../../../helpers/custom-hooks/useClickOutside";

export interface SearchProps {
  dropDownOptions?: string[];
  children?: React.ReactChild | React.ReactChild[];
  type?: FilterSubCategories;
}

const Search = ({ children, type, dropDownOptions }: SearchProps) => {
  const windowSize = useWindowSize();
  // const formContainer = useRef<any>(null);

  const dispatch = useDispatch();
  const SearchInFilterTitle = useSelector(
    (state: RootState) => state.filters.FilterGroupState
  );
  const filtersState = useSelector((state: RootState) => state.filters);

  // const ref = useRef<any>();
  const [isLastSearchesOpen, setisLastSearchesOpen] = useState<boolean>(false);
  const [isWide, setIsWide] = useState<boolean>(false);
  const [lastSearches, setLastSearches] = useState<string[]>([]);
  const [searchInputValue, setsearchInputValue] = useState<
    undefined | string
  >();

  const formContainer = useRef<any>();

  const closeWideSearchedAndLastSearces = (e: any) => {
    if (isWide) {
      setIsWide(false);
      if (isLastSearchesOpen) {
        setisLastSearchesOpen(false);
      }
    } else {
      return;
    }
  };

  useOutsideClick(formContainer, closeWideSearchedAndLastSearces);

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

  useEffect(() => {
    // console.log("free search val", filtersState.FreeSearchVal);
    setsearchInputValue(filtersState.FreeSearchVal);
    // localStorage.setItem("lastSearches", JSON.stringify(lastSearches));
  }, [
    filtersState[FilterCategories.EVERYTHING],
    filtersState[FilterCategories.TOP_HEADLINES],
    filtersState.FilterGroupState,
  ]);

  // useClickOutside(formContainer, setisLastSearchesOpen(false));
  const toggleLastSearchesDiv = (): void => {
    setisLastSearchesOpen(!isLastSearchesOpen);
  };

  const handleLastSearchOptionSelected = (option: string) => {
    setsearchInputValue(option);
    setisLastSearchesOpen(false);
    setIsWide(false);
    dispatch(filterActions.changeIsFreeSearchActive({ value: false }));
    dispatch(filterActions.addFreeSearchVal({ value: option }));
    getFilteredData();
  };

  const handleFreeSearchSubmit = (event: any) => {
    event.preventDefault();
    setisLastSearchesOpen(false);
    setIsWide(false);
    dispatch(filterActions.changeIsFreeSearchActive({ value: false }));

    if (!searchInputValue) {
      return;
    }
    dispatch(filterActions.addFreeSearchVal({ value: searchInputValue }));
    getFilteredData();
    if (ItemAlreadyExistsInLocalstorage(lastSearches, searchInputValue)) {
      return;
    }
    setLastSearches((prevLastSearches) => [
      searchInputValue,
      ...prevLastSearches,
    ]);
  };

  const getFilteredData = () => {
    // dispatch(filterActions.addFreeSearchVal({ value: searchInputValue }));
    dispatch(getFilteredDatafromApi());
  };

  const handleInputFocuse = (event: any) => {
    setIsWide(true);
    setisLastSearchesOpen(true);
  };

  const handleInputClick = (event: any) => {
    // if (isLastSearchesOpen && searchInputValue == "") {
    //   setisLastSearchesOpen(false);
    //   // setIsWide(false);
    // } else {
    //   setisLastSearchesOpen(true);
    //   // setIsWide(true);
    // }
    // isLastSearchesOpen
    //   ? setisLastSearchesOpen(false)
    //   : setisLastSearchesOpen(true);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    // console.log("tjhis is event target: ", event.target.value);
    if (event.target.value === "") {
      dispatch(filterActions.changeIsFreeSearchActive({ value: false }));
      // setIsWide(false);
      // dispatch(filterActions.addFreeSearchVal({ value: event.target.value }));
    } else {
      setIsWide(true);
      setisLastSearchesOpen(true);
      // dispatch(filterActions.addFreeSearchVal({ value: event.target.value }));
      // dispatch(filterActions.changeIsFreeSearchActive({ value: true }));
      // setIsWide(true);
    }
    setsearchInputValue(event.target.value);
  };
  return (
    <SearchBarContainer
      onSubmit={handleFreeSearchSubmit}
      autoComplete="off"
      className={isWide ? "wide" : ""}
      ref={formContainer}
    >
      {/* <SearchInputContainer className={isWide ? "wide" : ""}>  */}
      <SearchInputContainer className={"input-search-container"}>
        <Icon src={searchIcon} onClick={handleFreeSearchSubmit} />
        <SearchInput
          placeholder="Search"
          id="free-search-input"
          onClick={handleInputClick}
          value={searchInputValue}
          onChange={(event) => handleInputChange(event)}
          onFocus={handleInputFocuse}
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
          // className={"lsat-searches-container"}
          lastSearchesOptions={lastSearches}
          changeLastSearches={(newLastSearchArr: string[]) =>
            setLastSearches(newLastSearchArr)
          }
          handleSearchSubmit={(option: string) => {
            handleLastSearchOptionSelected(option);
            // handleFreeSearchSubmit(option);
          }}
          // setisLastSearchesOpen={(param) => setisLastSearchesOpen(param)}
        />
      )}
    </SearchBarContainer>
  );
};

export default Search;
