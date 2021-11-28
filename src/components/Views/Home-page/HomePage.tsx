import React, { useEffect, useRef, useState } from "react";
import ArticalCardList from "../../UI/Cards/artical-card-list/ArticalCardList";
import CardsHeaders from "../../UI/Cards/cards-Headers/CardsHeaders";
import DataCardList from "../../UI/Cards/Data-Card-list/DataCardList";
import Filter from "../../UI/Filter/Filter";
import Header from "../../UI/Header/Header";
import { MainBodyCointainer, CardsContainer, SideBarBackground } from "./style";
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
import {
  FilterCategories,
  FilterSubCategories,
} from "../../../types/filterTypes copy";
import ErrorModal from "../../UI/error-modal/ErrorModal";
import { transformErrorMessage } from "../../../helpers/helper-functions/helper-functions";
import { useFormatDate } from "../../../helpers/custom-hooks/useDateForamt";
import { Z_STREAM_ERROR } from "zlib";

export interface HomePageProps {
  children?: React.ReactChild | React.ReactChild[];
}
const HomePage = ({ children }: HomePageProps): JSX.Element => {
  const dispatch = useDispatch();
  const [isInitial, setisInitial] = useState(true);
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
  const [errMessage, setErrMessage] = useState<string>();
  const [error, setError] = useState<boolean>(false);
  const [isFreeSearchActive, setisFreeSearchActive] = useState<boolean>(false);
  const windowSize = useWindowSize();
  const isMobile = windowSize.width <= 1024 ? true : false;

  useEffect(() => {
    dispatch(getInitialDatafromApi());
    dispatch(getSourcesFilterOptions());
  }, [dispatch]);

  useEffect(() => {
    setisInitial(false);
    if (!isMobile && !isInitial && !isSearching) {
      dispatch(getFilteredDatafromApi());
    }
  }, [
    filtersState[FilterCategories.EVERYTHING],
    filtersState[FilterCategories.TOP_HEADLINES],
    // filtersState[FilterCategories.EVERYTHING][FilterSubCategories.SORT_BY],
    // filtersState[FilterCategories.EVERYTHING][FilterSubCategories.SOURCES],
    // filtersState[FilterCategories.EVERYTHING][FilterSubCategories.DATES],
    // filtersState[FilterCategories.EVERYTHING][FilterSubCategories.LANGUAGE],
    // filtersState[FilterCategories.TOP_HEADLINES][FilterSubCategories.CATEGORY],
    // filtersState[FilterCategories.TOP_HEADLINES][FilterSubCategories.COUNTRY],
    // filtersState[FilterCategories.TOP_HEADLINES][FilterSubCategories.SOURCES],
  ]);
  useEffect(() => {
    if (dataFromApi?.message) {
      const errorMessage = transformErrorMessage(dataFromApi.code);
      setErrMessage(errorMessage);
    }
    if (dataFromApi?.status === "error") {
      setError(true);
    }
  }, [dataFromApi]);

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
      {filterSideBarState.isOpen && (
        <SideBarBackground onClick={closeFilterSideBar}></SideBarBackground>
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
        {windowSize.width >= 1024 && (
          <CardsHeaders
            totalResults={dataFromApi?.totalResults}
            onClick={closeFilterSideBar}
          ></CardsHeaders>
        )}
        {windowSize.width < 1024 && (
          <CardsHeaders
            totalResults={dataFromApi?.totalResults}
            onClick={closeFilterSideBar}
          ></CardsHeaders>
        )}

        <CardsContainer onClick={closeFilterSideBar}>
          <ArticalCardList data={dataFromApi} />
          {windowSize.width >= 1025 && (
            <DataCardList articles={dataFromApi?.articles}></DataCardList>
          )}
        </CardsContainer>
        {error && (
          <ErrorModal
            message={errMessage}
            title={"Error" + "-" + dataFromApi?.code}
            closeModal={() => setError(false)}
          />
        )}
      </MainBodyCointainer>
    </>
  );
};

export default HomePage;
