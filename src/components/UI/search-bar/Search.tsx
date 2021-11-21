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

  // useOutsideClick(ref, () => {
  //   console.log("clicked outside");
  //   setisLastSearchesOpen(false);
  // });
  const toggleLastSearchesDiv = (): void => {
    setisLastSearchesOpen(!isLastSearchesOpen);
  };
  // const openLastSearches = (): void => {
  //   setisLastSearchesOpen(true);
  // };
  // const closeLastSearches = (): void => {
  //   setisLastSearchesOpen(false);
  // };

  // const ItemAlreadyExistsInLocalstorage = (
  //   lastSearches: string[],
  //   inputVal: string
  // ): boolean => {
  //   if (lastSearches.includes(inputVal)) {
  //     return true;
  //   }
  //   return false;
  // };

  const handleLastSearchOptionSelected = (option: string) => {
    setsearchInputValue(option);
    setisLastSearchesOpen(false);
  };

  const handleFreeSearchSubmit = (event: any) => {
    console.log("hi", searchInputValue);
    event.preventDefault();
    // const inputVal = searchInputVal.current?.value;
    if (!searchInputValue) {
      return;
    }
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
    setsearchInputValue(event.target.value);
    dispatch(filterActions.addFreeSearchVal({ value: event.target.value }));
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
          onClick={toggleLastSearchesDiv}
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
