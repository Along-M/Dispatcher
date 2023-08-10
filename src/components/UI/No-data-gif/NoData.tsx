import * as React from "react";
import { NoChartDataIcon, NoArticalIcon, NoDataText } from "./style";
import noDatafound from "../../../assets/icons/noDatafound.svg";
import noArticalsfound from "../../../assets/icons/noArticalsfound.svg";
import { NoDataFoundTypes } from "../types";

export interface NoDataProps {
  type: NoDataFoundTypes;
}

const NoData = ({ type }: NoDataProps) => {
  return (
    <>
      {type === NoDataFoundTypes.DATACARD && (
        <>
          <NoChartDataIcon src={noDatafound} />
          <NoDataText>No data to display</NoDataText>
        </>
      )}
      {type === NoDataFoundTypes.ARTICALCARD && (
        <>
          <NoArticalIcon src={noArticalsfound} />
          <NoDataText>We couldn’t find any matches for your query</NoDataText>
        </>
      )}
    </>
  );
};

export default NoData;
