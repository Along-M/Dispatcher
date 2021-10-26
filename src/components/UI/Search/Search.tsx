import { useState } from "react";
import Filter from "../Filter/Filter";
import { FilterCategories } from "../types";
import {
  SearchBarContainer,
  SearchInput,
  LogoIcon,
  Icon,
  SearchInputContainer,
  Divider,
  LastSearchesContainer,
  LastSearchesHeaders,
  LastSearchesOptionContainer,
  Option,
} from "./style";
import searchIcon from "../../../assets/icons/search.svg";
import closeIcon from "../../../assets/icons/close.svg";

export interface SearchProps {
  dropDownOptions?: string[];
  children?: React.ReactChild | React.ReactChild[];
  type?: FilterCategories;
}

const Search = ({ children, type, dropDownOptions }: SearchProps) => {
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
        <Divider />
        <Filter
          type={FilterCategories.TOP_HEADLINES}
          variant="nav-bar-filter"
        ></Filter>
      </SearchInputContainer>
      {isLastSearchesOpen && (
        <LastSearchesContainer>
          <LastSearchesHeaders>
            <div>RECENT SEARCHES</div>
            <div>CLEAR</div>
          </LastSearchesHeaders>
          <LastSearchesOptionContainer>
            <Option>audi</Option>
            <Icon src={closeIcon} />
          </LastSearchesOptionContainer>
        </LastSearchesContainer>
      )}
    </SearchBarContainer>
  );
};

export default Search;
