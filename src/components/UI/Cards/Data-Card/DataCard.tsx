import * as React from "react";
import { CardContainer } from "../Card-Container/style";
import { DataCardTitle, DataCardDivider } from "./style";
import { NoDataFoundTypes } from "../../types";

import NoData from "../../No-data-gif/NoData";

export interface DataCardProps {
  children?: React.ReactChild | React.ReactChild[];
  title: string;
}

const DataCard = ({ children, title }: DataCardProps) => {
  return (
    <CardContainer className="data-card">
      <DataCardTitle>{title}</DataCardTitle>
      <DataCardDivider />
      <NoData type={NoDataFoundTypes.DATACARD} />
      {/* {children}§ */}
    </CardContainer>
  );
};

export default DataCard;
