import React from "react";
import ArticalCardList from "../../UI/Cards/Artical-Card-list/ArticalCardList";
import CardsHeaders from "../../UI/Cards/cards-Headers/CardsHeaders";
import DataCardList from "../../UI/Cards/Data-Card-list/DataCardList";
import Filter from "../../UI/Filter/Filter";
import Header from "../../UI/Header/Header";
import { FilterCategories } from "../../UI/types";
import { MainBodyCointainer, CardsContainer, FiltersContainer } from "./style";
import Data from "../../../Data";

// const data = Data;

export interface HomePageProps {
  children?: React.ReactChild | React.ReactChild[];
}

const HomePage = ({ children }: HomePageProps) => {
  return (
    <>
      <Header />
      <MainBodyCointainer>
        <FiltersContainer>
          <Filter variant="filter" type={FilterCategories.COUNTRY} />
          <Filter variant="filter" type={FilterCategories.CATEGORY} />
          <Filter variant="filter" type={FilterCategories.SOURCES} />
        </FiltersContainer>
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
