import * as React from "react";
import { CardContainer } from "../card-container/style";
import { DataCardTitle, DataCardDivider, ChartContainer } from "./style";
import { NoDataFoundTypes } from "../../../../types/types";
import NoData from "../../no-data-gif/NoData";
import Chart from "../../charts/Chart";
import { ChartType, IChartData } from "../../charts/ChartType";

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
