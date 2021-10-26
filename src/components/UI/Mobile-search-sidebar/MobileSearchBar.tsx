import ArrowLeftwefw from "../../../assets/icons/back.svg";
import ArrowLeft from "../../../assets/icons/ArrowLeft.svg";
import Search from "../Search/Search";
import {
  SearchSideBarContainer,
  SearchInputContainer,
  SearchInput,
  ArrowIcon,
  LastSearchesContainer,
} from "./style";
import LastSearchResults from "../last-search-results/LastSearchResults";

export interface MobileSearchBarProps {
  children?: React.ReactChild | React.ReactChild[];
}

const MobileSearchBar = ({ children }: MobileSearchBarProps) => {
  console.log("im here");
  // if (
  //   /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
  //     navigator.userAgent
  //   )
  // ) {
  //   // true for mobile device
  //   console.log("mobile device");
  // } else {
  //   // false for not mobile device
  //   console.log("not mobile device");
  // }
  return (
    <SearchSideBarContainer>
      <SearchInputContainer>
        <ArrowIcon src={ArrowLeft} />
        <SearchInput placeholder="Search" />
      </SearchInputContainer>
      <LastSearchesContainer>
        <LastSearchResults />
      </LastSearchesContainer>
    </SearchSideBarContainer>
  );
};

export default MobileSearchBar;
