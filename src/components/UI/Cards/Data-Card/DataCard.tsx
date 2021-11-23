import * as React from "react";
import { CardContainer } from "../Card-Container/style";
import {
  DataCardTitle,
  DataCardDivider,
  ChartContainer,
  SumContainer,
  Sum,
} from "./style";
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
  articles: {}[] | undefined;

  // chartData: { chartType: ChartType; chartDataState: IChartData; options: {} };
}
const DataCard = ({
  title,
  chartData,
  chartType,
  chartOptions,
  articles,
}: DataCardProps) => {
  return (
    <CardContainer className="data-card">
      <DataCardTitle>{title}</DataCardTitle>
      <DataCardDivider />
      {articles && articles?.length !== 0 && (
        <ChartContainer
          className={chartType === ChartType.Doughnut ? "sources-chart" : ""}
        >
          {chartType === ChartType.Doughnut && (
            // <SumContainer>
            <Sum>Sum</Sum>
            // </SumContainer>
          )}
          <Chart
            chartType={chartType}
            state={chartData}
            options={chartOptions}
          />
        </ChartContainer>
      )}
      {articles?.length === 0 && <NoData type={NoDataFoundTypes.DATACARD} />}
      {!articles && <NoData type={NoDataFoundTypes.Error} />}
    </CardContainer>
  );
};

export default DataCard;
