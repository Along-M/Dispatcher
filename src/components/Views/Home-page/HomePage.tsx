import React from "react";
import ArticalCardList from "../../UI/Cards/Artical-Card-list/ArticalCardList";
import CardsHeaders from "../../UI/Cards/cards-Headers/CardsHeaders";
import DataCardList from "../../UI/Cards/Data-Card-list/DataCardList";
import Filter from "../../UI/Filter/Filter";
import Header from "../../UI/Header/Header";
import { FilterCategories } from "../../UI/types";
import { MainBodyCointainer, CardsContainer } from "./style";
import Data from "../../../Data";
import FilterList from "../../UI/Filter-List/FilterList";
import { SearchSideBarContainer } from "../../UI/Mobile-search-sidebar/style";
import Search from "../../UI/Search/Search";
import MobileSearchBar from "../../UI/Mobile-search-sidebar/MobileSearchBar";

// const data = Data;

export interface HomePageProps {
  children?: React.ReactChild | React.ReactChild[];
}

const HomePage = ({ children }: HomePageProps) => {
  return (
    <>
      <Header />
      <MobileSearchBar />
      <MainBodyCointainer>
        <FilterList></FilterList>
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
