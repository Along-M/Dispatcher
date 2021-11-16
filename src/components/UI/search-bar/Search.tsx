import { useState } from "react";
import useWindowSize from "../../../helpers/custom-hooks/useWindowSize";
import Filter from "../Filter/Filter";
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
import { useSelector } from "react-redux";
import { RootState } from "../../../store/store";

export interface SearchProps {
  dropDownOptions?: string[];
  children?: React.ReactChild | React.ReactChild[];
  type?: FilterSubCategories;
}

const Search = ({ children, type, dropDownOptions }: SearchProps) => {
  const windowSize = useWindowSize();
  const SearchInFilterTitle = useSelector(
    (state: RootState) => state.filters.FilterGroupState
  );

  const [isLastSearchesOpen, setisLastSearchesOpen] = useState<boolean>(false);
  const toggleLastSearches = (): void => {
    setisLastSearchesOpen(!isLastSearchesOpen);
  };

  return (
    <SearchBarContainer>
      <SearchInputContainer>
        <Icon src={searchIcon} />
        <SearchInput
          placeholder="Search"
          onFocus={toggleLastSearches}
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
      {isLastSearchesOpen && <LastSearchResults />}
    </SearchBarContainer>
  );
};

export default Search;
