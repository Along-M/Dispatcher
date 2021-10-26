import { useState } from "react";
import {
  SearchBarContainer,
  LastSearchesContainer,
  LastSearchesHeaders,
  LastSearchesOptionContainer,
  Option,
  CloseIcon,
  ClearBtn,
  RecentSearchedheader,
} from "./style";
import closeIcon from "../../../assets/icons/close.svg";

export interface LastSearchResultsProps {
  dropDownOptions?: string[];
  children?: React.ReactChild | React.ReactChild[];
}

const LastSearchResults = ({
  children,
  dropDownOptions,
}: LastSearchResultsProps) => {
  return (
    // <LastSearchesContainer>
    <>
      <LastSearchesHeaders>
        <RecentSearchedheader>RECENT SEARCHES</RecentSearchedheader>
        <ClearBtn>CLEAR</ClearBtn>
      </LastSearchesHeaders>
      <LastSearchesOptionContainer>
        <Option>audi</Option>
        <CloseIcon src={closeIcon} />
      </LastSearchesOptionContainer>
    </>
    // </LastSearchesContainer>
  );
};

export default LastSearchResults;
