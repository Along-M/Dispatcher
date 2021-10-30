import ArrowLeft from "../../../assets/icons/ArrowLeft.svg";
import Exit from "../../../assets/icons/exit.svg";
import Search from "../../../assets/search.svg";
import {
  SearchSideBarContainer,
  SearchInputContainer,
  SearchInput,
  ArrowIcon,
  ExitIcon,
  SearchIcon,
  // LastSearchesContainer,
} from "./style";
import LastSearchResults from "../last-search-results/LastSearchResults";
import { useState } from "react";

export interface MobileSearchBarProps {
  isOpen?: boolean;
  closeSidebar: () => void;
}

const MobileSearchBar = ({ isOpen, closeSidebar }: MobileSearchBarProps) => {
  return (
    <SearchSideBarContainer
      className={isOpen ? "search-side-bar-open" : "search-side-bar-closed"}
    >
      <SearchInputContainer>
        <ArrowIcon src={ArrowLeft} onClick={closeSidebar} />
        <SearchInput placeholder="Search" />
        <ExitIcon src={Exit} />
        <SearchIcon src={Search} />
      </SearchInputContainer>
      <LastSearchResults />
    </SearchSideBarContainer>
  );
};

export default MobileSearchBar;
