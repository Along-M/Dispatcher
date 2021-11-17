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
  chartData: IChartData;
  chartType: ChartType;
  chartOptions: {};
  // chartData: { chartType: ChartType; chartDataState: IChartData; options: {} };
}

const DataCard = ({
  title,
  chartData,
  chartType,
  chartOptions,
}: DataCardProps) => {
  return (
    <CardContainer className="data-card">
      <DataCardTitle>{title}</DataCardTitle>
      <DataCardDivider />
      {/* <NoData type={NoDataFoundTypes.DATACARD} /> */}
      <ChartContainer>
        <Chart chartType={chartType} state={chartData} options={chartOptions} />
      </ChartContainer>
    </CardContainer>
  );
};

export default DataCard;
