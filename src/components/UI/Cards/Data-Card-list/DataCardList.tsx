import * as React from "react";
import { CardListContainer } from "./style";
import DataCard from "../Data-Card/DataCard";
import Chart from "../../Charts/Chart";

export interface DataCardListProps {
  children?: React.ReactChild | React.ReactChild[];
  // data?: data;
}

const DataCardList = ({ children }: DataCardListProps) => {
  return (
    <CardListContainer>
      <DataCard title="Sources">
        <Chart type="pie" />
      </DataCard>
      <DataCard title="Dates">
        <Chart type="lineChart" />
      </DataCard>
      <DataCard title="Tags">
        <Chart type="bullet" />
      </DataCard>
    </CardListContainer>
  );
};

export default DataCardList;
