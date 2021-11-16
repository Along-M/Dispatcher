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
  const filtersState = useSelector((state: RootState) => state.filters);
  const windowSize = useWindowSize();
  const isMobile = windowSize.width <= 1024 ? true : false;
  const ref = useRef<HTMLDivElement>(null);
  // Call hook passing in the ref and a function to call on outside click

  useEffect(() => {
    dispatch(getInitialDatafromApi());
    // dispatch(getSourcesFilterOptions());
    setisInitial(false);
  }, [dispatch]);

  useEffect(() => {
    if (!isMobile && !isInitial) {
      console.log("use effect in homapage");
      dispatch(getFilteredDatafromApi());
    }
  }, [filtersState]);

  return (
    <>
      <Header />
      <MainBodyCointainer>
        {!isMobile && <FilterList isInitial={isInitial}></FilterList>}
        {isMobile && <MobileFilterBar />}
        {/* {windowSize.width > 1024 && <FilterList></FilterList>}
        {windowSize.width <= 1024 && <MobileFilterBar />} */}
        <CardsHeaders></CardsHeaders>
        {/* <CardsHeaders>"TOP HEADLINS IN ISRAEL"</CardsHeaders> */}
        <CardsContainer>
          <ArticalCardList data={dataFromApi} />
          <DataCardList></DataCardList>
        </CardsContainer>
      </MainBodyCointainer>
    </>
  );
};

export default HomePage;
