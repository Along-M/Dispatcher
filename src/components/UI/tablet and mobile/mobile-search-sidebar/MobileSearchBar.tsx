import ArrowLeft from "../../../../assets/icons/ArrowLeft.svg";
import Exit from "../../../../assets/icons/exit.svg";
import Search from "../../../../assets/search.svg";
import {
  SearchSideBarContainer,
  SearchInputContainer,
  SearchInput,
  ArrowIcon,
  ExitIcon,
  SearchIcon,
} from "./style";
import LastSearchResults from "../../last-search-results/LastSearchResults";
// import LastSearchResults from "../../../last-search-results/LastSearchResults";
import { useEffect, useState } from "react";
import { ItemAlreadyExistsInLocalstorage } from "../../../../helpers/helper-functions/helper-functions";
import { useDispatch, useSelector } from "react-redux";
import { getFilteredDatafromApi } from "../../../../store/data-actions";
import { RootState } from "../../../../store/store";
import { filterActions } from "../../../../store/FiltersSlice";
import ArticalCardList from "../../Cards/artical-card-list/ArticalCardList";
import MobileFilterBar from "../mobile-filter-top-bar/MobileFilterBar";

export interface MobileSearchBarProps {
  isOpen?: boolean;
  closeSidebar: () => void;
}

const MobileSearchBar = ({ isOpen, closeSidebar }: MobileSearchBarProps) => {
  const dispatch = useDispatch();
  const dataFromApi = useSelector((state: RootState) => state.dataFromApi.data);
  const filters = useSelector((state: RootState) => state.filters);
  const [lastSearches, setLastSearches] = useState<string[]>([]);
  const [isSearching, setIsSearching] = useState<boolean>(false);
  const [searchInputValue, setsearchInputValue] = useState<
    undefined | string
  >();
  const [showSearchIcon, setshowSearchIcon] = useState<boolean>(false);
  const [
    trasformedSearchInputVal,
    settrasformedSearchInputVal,
  ] = useState<string>("");
  console.log("filters in mobile side bar", filters);
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
    setsearchInputValue(trasformedSearchInputVal);
  }, [trasformedSearchInputVal]);

  const handleLastSearchOptionSelected = (option: string): void => {
    setsearchInputValue(option);
  };

  const handleFreeSearchSubmit = (event: any) => {
    event.preventDefault();
    console.log("we have submited the form");
    // const inputVal = searchInputVal.current?.value;
    if (!searchInputValue) {
      setshowSearchIcon(false);
      return;
    }
    setshowSearchIcon(true);
    getFilteredData(searchInputValue);
    // let trasformedSearchInputVal = transformInputVal(searchInputValue);
    if (searchInputValue !== trasformedSearchInputVal) {
      console.log("searchInputValue", searchInputValue);
      console.log("trasformedSearchInputVal", trasformedSearchInputVal);
      transformInputVal(searchInputValue);
      setsearchInputValue(trasformedSearchInputVal);
    }
    if (
      ItemAlreadyExistsInLocalstorage(lastSearches, searchInputValue) ||
      searchInputValue == trasformedSearchInputVal
    ) {
      return;
    }
    // setisLastSearchesOpen(false);
    setLastSearches((prevLastSearches) => [
      searchInputValue,
      ...prevLastSearches,
    ]);
  };

  const getFilteredData = (searchInputValue: string) => {
    dispatch(getFilteredDatafromApi());
  };

  const transformInputVal = (inputVal: string): void => {
    const transformesInputVal = `"${inputVal.toUpperCase()}"`;
    console.log("transformesInputVal", inputVal);
    console.log("transformesInputVal", transformesInputVal);
    settrasformedSearchInputVal(transformesInputVal);
  };

  const handleDeleteInputVal = (): void => {
    setsearchInputValue("");
    dispatch(filterActions.addFreeSearchVal({ value: "" }));
  };

  const handleInputChange = (event: any) => {
    console.log("event.target.value ", event.target.value);
    if (event.target.value === "") {
      setIsSearching(false);
    } else {
      setIsSearching(true);
    }
    setsearchInputValue(event.target.value);
    dispatch(filterActions.addFreeSearchVal({ value: event.target.value }));
    setshowSearchIcon(false);
  };

  return (
    <SearchSideBarContainer
      className={isOpen ? "search-side-bar-open" : "search-side-bar-closed"}
    >
      <SearchInputContainer
        onSubmit={handleFreeSearchSubmit}
        autoComplete="off"
      >
        <ArrowIcon src={ArrowLeft} onClick={closeSidebar} />
        <SearchInput
          placeholder="Search"
          id="free-search-input-mobile"
          // onClick={toggleLastSearchesDiv}
          value={searchInputValue}
          onChange={(event) => {
            handleInputChange(event);
            // setsearchInputValue(event.target.value);
            // dispatch(
            //   filterActions.addFreeSearchVal({ value: event.target.value })
            // );
            // setshowSearchIcon(false);
          }}
        ></SearchInput>
        {searchInputValue && !showSearchIcon && (
          <ExitIcon src={Exit} onClick={handleDeleteInputVal} />
          // <ExitIcon src={Exit} onClick={() => setsearchInputValue("")} />
        )}
        {showSearchIcon && searchInputValue && <SearchIcon src={Search} />}
      </SearchInputContainer>
      {isSearching && (
        <>
          <MobileFilterBar /> <ArticalCardList data={dataFromApi} />
        </>
      )}
      {!isSearching && (
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
    </SearchSideBarContainer>
  );
};

export default MobileSearchBar;
