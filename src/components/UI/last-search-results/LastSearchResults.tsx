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

export interface LastSearchResultsProps {
  dropDownOptions?: string[];
  children?: React.ReactChild | React.ReactChild[];
}

const LastSearchResults = ({
  children,
  dropDownOptions,
}: LastSearchResultsProps) => {
  return (
    <LastSearchesContainer>
      <LastSearchesHeaders>
        <RecentSearchedheader>RECENT SEARCHES</RecentSearchedheader>
        <ClearBtn>CLEAR</ClearBtn>
      </LastSearchesHeaders>
      <LastSearchesOptionContainer>
        <Option>Crypto</Option>
        <CloseIcon src={closeIcon} />
      </LastSearchesOptionContainer>
      <LastSearchesOptionContainer>
        <Option>China</Option>
        <CloseIcon src={closeIcon} />
      </LastSearchesOptionContainer>
      <LastSearchesOptionContainer>
        <Option>Ynet</Option>
        <CloseIcon src={closeIcon} />
      </LastSearchesOptionContainer>
    </LastSearchesContainer>
  );
};

export default LastSearchResults;
