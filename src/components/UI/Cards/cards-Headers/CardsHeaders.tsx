import React from "react";
import { CardsHeader, CardsNumberOfSearchResults } from "./style";

export interface CardsHeadersProps {
  children?: React.ReactChild | React.ReactChild[];
}

const CardsHeaders = ({ children }: CardsHeadersProps) => {
  return (
    <>
      {/* <CardsHeader>Top headlines in Israel</CardsHeader> */}
      <CardsNumberOfSearchResults>33 Total results</CardsNumberOfSearchResults>
      {/* <CardsHeader></CardsHeader> */}
    </>
  );
};

export default CardsHeaders;
