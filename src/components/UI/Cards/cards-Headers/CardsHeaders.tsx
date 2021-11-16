import React, { useState } from "react";
import { CardsHeader, CardsNumberOfSearchResults } from "./style";

export interface CardsHeadersProps {
  children?: React.ReactChild | React.ReactChild[];
}

const CardsHeaders = ({ children }: CardsHeadersProps) => {
  const [cardsTitle, setcardsTitle] = useState<string | undefined>(
    "Top Headlines in Israel"
  );
  return (
    <>
      {/* <CardsHeader>Top headlines in Israel</CardsHeader> */}
      <CardsNumberOfSearchResults>{cardsTitle}</CardsNumberOfSearchResults>
      {/* <CardsHeader></CardsHeader> */}
    </>
  );
};

export default CardsHeaders;
