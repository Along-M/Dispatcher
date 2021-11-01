import { useState } from "react";
import useWindowSize from "../../../helpers/custom-hooks";
import { BrowserView, isDesktop } from "react-device-detect";
import Filter from "../filter/Filter";
import { FilterCategories } from "../types";
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

export interface SearchProps {
  dropDownOptions?: string[];
  children?: React.ReactChild | React.ReactChild[];
  type?: FilterCategories;
}

const Search = ({ children, type, dropDownOptions }: SearchProps) => {
  const windowSize = useWindowSize();
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
          <Filter type={FilterCategories.TOP_HEADLINES}>Top Headlines</Filter>
        )}
      </SearchInputContainer>
      {isLastSearchesOpen && <LastSearchResults />}
    </SearchBarContainer>
  );
};

export default Search;
