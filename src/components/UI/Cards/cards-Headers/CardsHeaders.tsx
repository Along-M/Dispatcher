import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../../store/store";
import { Idata } from "../../../../types/dataTypes";
import { CardsHeader, CardsNumberOfSearchResults } from "./style";

export interface CardsHeadersProps {
  children?: React.ReactChild | React.ReactChild[];
  totalResults: number | undefined;
  onClick: () => void;
}

const CardsHeaders = ({
  children,
  totalResults,
  onClick,
}: CardsHeadersProps) => {
  const [isInitial, setisInitial] = useState(true);
  const dataFromApi = useSelector((state: RootState) => state.dataFromApi.data);
  console.log("dataFromApi in cards headers ", dataFromApi);
  console.log("dataFromApi in cards headers ", dataFromApi);
  console.log("dataFromApi in cards headers ", dataFromApi);
  console.log("isInitial in cards headers ", isInitial);
  const filtersState = useSelector((state: RootState) => state.filters);
  const filtersCurrentState = filtersState[filtersState.FilterGroupState];
  useEffect(() => {
    let filterParams = "";
    for (const [key, value] of Object.entries(filtersCurrentState)) {
      if (filtersCurrentState[key].selectedOptions !== "") {
        filterParams +=
          key + "=" + filtersCurrentState[key].selectedOptions + "&";
      }
    }
    // if(filtersState.FreeSearchVal !== )
    if (filterParams !== "" || filtersState.FreeSearchVal !== "") {
      setisInitial(false);
    }
  }, [filtersState]);

  return (
    <>
      {isInitial && dataFromApi?.articles.length != 0 && (
        <CardsNumberOfSearchResults
          className="top-headlines-header"
          onClick={onClick}
        >
          TOP HEADLINES IN ISRAEL
        </CardsNumberOfSearchResults>
      )}
      {/* {!isInitial && dataFromApi?.articles.length && (
        <CardsNumberOfSearchResults
          className="top-headlines-header"
          onClick={onClick}
        >
          TOP HEADLINES IN ISRAEL
        </CardsNumberOfSearchResults>
      )} */}
      {!isInitial &&
        dataFromApi?.totalResults !== 0 &&
        dataFromApi?.status !== "error" && (
          <CardsNumberOfSearchResults onClick={onClick}>
            {dataFromApi?.totalResults} Total results
          </CardsNumberOfSearchResults>
        )}
      {!isInitial && totalResults === 0 && (
        <CardsNumberOfSearchResults
          onClick={onClick}
        ></CardsNumberOfSearchResults>
      )}
      {dataFromApi?.status === "error" && (
        <CardsNumberOfSearchResults
          onClick={onClick}
        ></CardsNumberOfSearchResults>
      )}
    </>
  );
};

export default CardsHeaders;
