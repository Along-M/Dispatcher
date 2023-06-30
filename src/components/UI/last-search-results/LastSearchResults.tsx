import {
  LastSearchesContainer,
  LastSearchesHeaders,
  LastSearchesOptionContainer,
  Option,
  CloseIcon,
  ClearBtn,
  RecentSearchedheader,
} from "./style";
import closeIcon from "../../../assets/icons/close.svg";
import { useRef } from "react";
import useClickOutside from "../../../helpers/custom-hooks/useClickOutside";
// import useOutsideClick from "../../../helpers/custom-hooks/useClickOutside";
// import { useRef } from "react";

export interface LastSearchResultsProps {
  lastSearchesOptions: string[];
  children?: React.ReactChild | React.ReactChild[];
  closeLastSearchesDiv?: () => void;
  changeLastSearches: (newLastSearched: string[]) => void;
  handleSearchSubmit: (option: string) => void;
  setisLastSearchesOpen?: (param: boolean) => void;
}

const LastSearchResults = ({
  lastSearchesOptions,
  closeLastSearchesDiv,
  changeLastSearches,
  handleSearchSubmit,
  setisLastSearchesOpen,
}: LastSearchResultsProps) => {
  const clearLastSearchesArray = (): void => {
    changeLastSearches([]);
  };

  const removeOptionFromLastSearches = (option: string) => {
    const newLastSearchesArr = lastSearchesOptions.filter(
      (name) => name !== option
    );
    changeLastSearches(newLastSearchesArr);
  };

  const handleLastSearchSelectedOption = (option: string): void => {
    handleSearchSubmit(option);
  };

  const lastSearches = lastSearchesOptions?.slice(0, 10).map((option) => {
    return (
      <LastSearchesOptionContainer>
        <Option onClick={(event) => handleLastSearchSelectedOption(option)}>
          {option}
        </Option>
        <CloseIcon
          src={closeIcon}
          onClick={() => {
            removeOptionFromLastSearches(option);
          }}
        />
      </LastSearchesOptionContainer>
    );
  });

  return (
    <LastSearchesContainer className={"lsat-searches-container"}>
      <LastSearchesHeaders>
        <RecentSearchedheader>RECENT SEARCHES</RecentSearchedheader>
        <ClearBtn onClick={clearLastSearchesArray}>CLEAR</ClearBtn>
      </LastSearchesHeaders>
      {lastSearches}
    </LastSearchesContainer>
  );
};

export default LastSearchResults;
