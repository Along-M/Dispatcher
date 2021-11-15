import React, { useEffect, useState } from "react";
import ArticalCardList from "../../UI/cards/artical-card-list/ArticalCardList";
import CardsHeaders from "../../UI/cards/cards-headers/CardsHeaders";
import DataCardList from "../../UI/cards/data-card-list/DataCardList";
import Filter from "../../UI/filter/Filter";
import Header from "../../UI/header/Header";
import { MainBodyCointainer, CardsContainer } from "./style";
import FilterList from "../../UI/filter-list/FilterList";
import Search from "../../UI/search-bar/Search";
import MobileSearchBar from "../../UI/tablet and mobile/mobile-search-sidebar/MobileSearchBar";
import MobileFilterBar from "../../UI/tablet and mobile/mobile-filter-top-bar/MobileFilterBar";
import useWindowSize from "../../../helpers/custom-hooks/useWindowSize";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../store/store";
import { getDatafromApi } from "../../../store/data-actions";
import { getSourcesFilterOptions } from "../../../store/filters-actions";

export interface HomePageProps {
  children?: React.ReactChild | React.ReactChild[];
}
const HomePage = ({ children }: HomePageProps): JSX.Element => {
  const dispatch = useDispatch();
  const dataApi = useSelector((state: RootState) => state.dataFromApi.data);
  const filtersState = useSelector((state: RootState) => state.filters);
  const windowSize = useWindowSize();

  useEffect(() => {
    // dispatch(getDatafromApi());
    dispatch(getSourcesFilterOptions());
  }, [dispatch]);
  // useEffect(() => {
  //   dispatch(getDatafromApi());
  // }, [filtersState]);

  return (
    <>
      <Header />
      <MainBodyCointainer>
        {windowSize.width > 1024 && <FilterList></FilterList>}
        {windowSize.width <= 1024 && <MobileFilterBar />}
        <CardsHeaders></CardsHeaders>
        <CardsContainer>
          <ArticalCardList data={dataApi} />
          <DataCardList></DataCardList>
        </CardsContainer>
      </MainBodyCointainer>
    </>
  );
};

export default HomePage;
