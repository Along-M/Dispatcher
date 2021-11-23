import React, { useEffect, useRef, useState } from "react";
import ArticalCardList from "../../UI/Cards/artical-card-list/ArticalCardList";
import CardsHeaders from "../../UI/Cards/cards-Headers/CardsHeaders";
import DataCardList from "../../UI/Cards/Data-Card-list/DataCardList";
import Filter from "../../UI/Filter/Filter";
import Header from "../../UI/Header/Header";
import { MainBodyCointainer, CardsContainer } from "./style";
import FilterList from "../../UI/Filter-List/FilterList";
import Search from "../../UI/search-bar/Search";
import MobileSearchBar from "../../UI/tablet and mobile/mobile-search-sidebar/MobileSearchBar";
import MobileFilterBar from "../../UI/tablet and mobile/mobile-filter-top-bar/MobileFilterBar";
import useWindowSize from "../../../helpers/custom-hooks/useWindowSize";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../store/store";
import {
  getFilteredDatafromApi,
  getInitialDatafromApi,
} from "../../../store/data-actions";
import { getSourcesFilterOptions } from "../../../store/filters-actions";
import useOutsideClick from "../../../helpers/custom-hooks/useClickOutside";
import FilterSideBar from "../../UI/tablet and mobile/mobile-filter-sidebar/FilterSideBar";
import useClickOutside from "../../../helpers/custom-hooks/useClickOutside";
import { filterSideBarActions } from "../../../store/filterSideBarSlice";

export interface HomePageProps {
  children?: React.ReactChild | React.ReactChild[];
}
const HomePage = ({ children }: HomePageProps): JSX.Element => {
  const dispatch = useDispatch();
  const [isInitial, setisInitial] = useState(true);
  // const [cardsTitle, setcardsTitle] = useState<string | undefined>(
  //   "Top Headlines in Israel"
  // );
  const dataFromApi = useSelector((state: RootState) => state.dataFromApi.data);
  const filterSideBarState = useSelector(
    (state: RootState) => state.filtersSideBar
  );
  const filtersState = useSelector((state: RootState) => state.filters);
  const isSearching = filtersState.isFreeSearchActive;
  const [isSearchSidebarOpen, setIsSearchSidebarOpen] = useState<boolean>(
    false
  );
  const [isFilterSideBarOpen, setIsFilterSideBarOpen] = useState<boolean>(
    false
  );
  const [isFreeSearchActive, setisFreeSearchActive] = useState<boolean>(false);
  const windowSize = useWindowSize();
  const isMobile = windowSize.width <= 1024 ? true : false;
  const ref = useRef<HTMLDivElement>(null);
  // const filterSideBarContainer = useRef(null);
  // useClickOutside(filterSideBarContainer, setIsSearchSidebarOpen(false));
  // Call hook passing in the ref and a function to call on outside click
  useEffect(() => {
    dispatch(getInitialDatafromApi());
    // dispatch(getSourcesFilterOptions());
  }, [dispatch]);

  useEffect(() => {
    setisInitial(false);
    if (!isMobile && !isInitial && !isSearching) {
      dispatch(getFilteredDatafromApi());
    }
  }, [filtersState]);

  // const openSideBar = () => {
  //   setIsSearchSidebarOpen(true);
  // };
  const closeSearchSideBar = (): void => {
    setIsSearchSidebarOpen(false);
  };
  const closeFilterSideBar = (): void => {
    dispatch(filterSideBarActions.closeFilterSideBar({}));
  };
  const openFilterSideBar = () => {
    dispatch(filterSideBarActions.openFilterSideBar({}));

    setIsFilterSideBarOpen(true);
  };

  return (
    <>
      {windowSize.width <= 680 && (
        <MobileSearchBar
          isOpen={isSearchSidebarOpen}
          closeSidebar={closeSearchSideBar}
          openSideBarfilters={openFilterSideBar}
        />
      )}
      {windowSize.width <= 1024 && (
        <FilterSideBar
          isOpen={filterSideBarState.isOpen}
          closeFilterSideBar={closeFilterSideBar}
        />
      )}
      <Header
        openSearchSideBar={(bool: boolean) => setIsSearchSidebarOpen(bool)}
        onClick={closeFilterSideBar}
      />
      <MainBodyCointainer>
        {!isMobile && <FilterList isInitial={isInitial}></FilterList>}
        {isMobile && <MobileFilterBar openSideBar={openFilterSideBar} />}
        <CardsHeaders
          totalResults={dataFromApi?.totalResults}
          onClick={closeFilterSideBar}
        ></CardsHeaders>
        <CardsContainer onClick={closeFilterSideBar}>
          <ArticalCardList data={dataFromApi} />
          <DataCardList articles={dataFromApi?.articles}></DataCardList>
        </CardsContainer>
      </MainBodyCointainer>
    </>
  );
};

export default HomePage;
