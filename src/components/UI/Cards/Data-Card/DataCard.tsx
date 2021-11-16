import * as React from "react";
import { CardContainer } from "../Card-Container/style";
import { DataCardTitle, DataCardDivider, ChartContainer } from "./style";
import { NoDataFoundTypes } from "../../../../types/types";
import NoData from "../../No-data-gif/NoData";
import Chart from "../../Charts/Chart";
import { ChartType, IChartData } from "../../Charts/ChartType";

export interface DataCardProps {
  // children?: React.ReactChild | React.ReactChild[];
  title: string;
  chartData: { chartType: ChartType; chartDataState: IChartData; options: {} };
}

const DataCard = ({ title, chartData }: DataCardProps) => {
  return (
    <CardContainer className="data-card">
      <DataCardTitle>{title}</DataCardTitle>
      <DataCardDivider />
      {/* <NoData type={NoDataFoundTypes.DATACARD} /> */}
      <ChartContainer>
        <Chart
          chartType={chartData.chartType}
          state={chartData.chartDataState}
          options={chartData.options}
        />
      </ChartContainer>
    </CardContainer>
  );
};

export default DataCard;
