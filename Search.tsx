import {
  SearchContainer,
  SearchLineContainer,
  RecentSearchesContainer,
  RecentSearchesHeader,
  RecentSearch,
  SearchIcon,
  SearchArea,
  ExitIcon,
} from "./SearchStyle";
import searchIcon from "../../Utils/assets/search.svg";
import exitIcon from "../../Utils/assets/exit.svg";
import Filter from "../Common/Filter/Filer";
import { buttonType, FilterType, InputEvent } from "../Common/types";
import Button from "../Common/Button/Button";
import { useState } from "react";

const Search = (): JSX.Element => {
  const SearchFromDatabaseMock = ["Top Headline", "Everything"];
  const recentSearchesMock = [
    "crypto",
    "soccer",
    "soc",
    "fdaad",
    "dgdf",
    "asddsf",
  ];
  const [isOpenSearches, setIsOpenSearches] = useState(false);
  const [searchInput, setSearchInput] = useState("");

  const onChangeHandler = (event: InputEvent) => {
    event.preventDefault();
    const newSearchInput = event.target.value;
    setSearchInput(newSearchInput);
    setIsOpenSearches(newSearchInput !== "");
  };

  const renderRecentSearchesList = (recentSearches: string[]) =>
    recentSearches.map((search: string, key: number) => (
      <RecentSearch key={key}>
        <span>{search}</span>
        <ExitIcon src={exitIcon} />
      </RecentSearch>
    ));

  return (
    <SearchContainer>
      <SearchLineContainer>
        <SearchIcon src={searchIcon} />
        <SearchArea
          placeholder="Search"
          value={searchInput}
          onChange={onChangeHandler}
        />
        <div className="vertical-div" />
        <Filter
          type={FilterType.DROPDWON_LIST}
          category="Top Headline"
          filterOptions={SearchFromDatabaseMock}
        ></Filter>
      </SearchLineContainer>

      {isOpenSearches && (
        <RecentSearchesContainer>
          <RecentSearchesHeader>
            <h1 className="recent-searches-title">RECENT SEARCHES</h1>
            <Button
              className={buttonType.TEXT}
              isArrowVisible={false}
              content="CLEAR"
              onClickHandler={() => console.log("clear searches!")}
            ></Button>
          </RecentSearchesHeader>
          {renderRecentSearchesList(recentSearchesMock)}
        </RecentSearchesContainer>
      )}
    </SearchContainer>
  );
};

export default Search;
