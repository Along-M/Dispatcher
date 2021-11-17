import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../../store/store";
import { Idata } from "../../../../types/dataTypes";
import { CardsHeader, CardsNumberOfSearchResults } from "./style";

export interface CardsHeadersProps {
  children?: React.ReactChild | React.ReactChild[];
  totalResults: number | undefined;
}

const CardsHeaders = ({ children, totalResults }: CardsHeadersProps) => {
  const [isInitial, setisInitial] = useState(true);
  const filtersState = useSelector((state: RootState) => state.filters);

  const filtersCurrentState = filtersState[filtersState.FilterGroupState];
  console.log("data total results ", totalResults);
  useEffect(() => {
    let filterParams = "";
    for (const [key, value] of Object.entries(filtersCurrentState)) {
      if (filtersCurrentState[key].selectedOptions !== "") {
        filterParams +=
          key + "=" + filtersCurrentState[key].selectedOptions + "&";
      }
    }
    if (filterParams !== "") {
      setisInitial(false);
    }
  }, [filtersState]);
  // useEffect(() => {
  // }, [filtersState]);
  return (
    <>
      {isInitial && (
        <CardsNumberOfSearchResults>
          TOP HEADLINES IN ISRAEL
        </CardsNumberOfSearchResults>
      )}
      {!isInitial && totalResults !== 0 && (
        <CardsNumberOfSearchResults>
          {totalResults} Total results
        </CardsNumberOfSearchResults>
      )}
      {!isInitial && totalResults === 0 && (
        <CardsNumberOfSearchResults></CardsNumberOfSearchResults>
      )}
    </>
  );
};

export default CardsHeaders;
