import React, { useEffect, useState } from "react";
import ArticalCardList from "../../UI/cards/artical-card-list/ArticalCardList";
import CardsHeaders from "../../UI/cards/cards-headers/CardsHeaders";
import DataCardList from "../../UI/cards/data-card-list/DataCardList";
import Filter from "../../UI/filter/Filter";
import Header from "../../UI/header/Header";
import { FilterCategories } from "../../UI/types";
import { MainBodyCointainer, CardsContainer } from "./style";
import Data from "../../../Data";
import FilterList from "../../UI/filter-list/FilterList";
import Search from "../../UI/search-bar/Search";
// import MobileSearchBar from "../../UI/mobile-search-sidebar/MobileSearchBar";
import MobileSearchBar from "../../UI/tablet and mobile/mobile-search-sidebar/MobileSearchBar";
import MobileFilterBar from "../../UI/tablet and mobile/mobile-filter-top-bar/MobileFilterBar";
// import MobileFilterBar from "../../UI/mobile-filter-top-bar/MobileFilterBar";
import useWindowSize from "../../../helpers/custom-hooks";

const data = Data;
export interface HomePageProps {
  children?: React.ReactChild | React.ReactChild[];
}

const HomePage = ({ children }: HomePageProps) => {
  const windowSize = useWindowSize();

  return (
    <>
      <Header />
      <MainBodyCointainer>
        {windowSize.width > 1024 && <FilterList></FilterList>}
        {windowSize.width <= 1024 && <MobileFilterBar />}
        <CardsHeaders></CardsHeaders>
        <CardsContainer>
          <ArticalCardList data={Data} />
          <DataCardList></DataCardList>
        </CardsContainer>
      </MainBodyCointainer>
    </>
  );
};

export default HomePage;
