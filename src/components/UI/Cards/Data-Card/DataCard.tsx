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
import { useSelector } from "react-redux";
import { RootState } from "../../../../store/store";
import _ from "lodash";

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
  const isLoading = useSelector(
    (state: RootState) => state.isLoading.isLoading
  );
  const dataFromApi = useSelector((state: RootState) => state.dataFromApi.data);

  let obj: any = [];
  chartData.labels.map((label, index) => {
    obj[index] = { label: label, number: chartData.datasets[0].data[index] };
  });

  let sortedSources = _.orderBy(obj, ["number"], ["desc"]);

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
            // <Sum>{chartData.datasets[0].data}</Sum>
            // <Sum>{_.sum(chartData.datasets[0].data)}</Sum>
            <Sum>{chartData.labels.length} Total</Sum>
            // </SumContainer>
          )}
          <Chart
            chartType={chartType}
            state={chartData}
            options={chartOptions}
            sortedSources={sortedSources}
          />
        </ChartContainer>
      )}
      {articles?.length === 0 && !isLoading && (
        <NoData type={NoDataFoundTypes.DATACARD} />
      )}
      {dataFromApi?.status == "error" && !isLoading && (
        <NoData type={NoDataFoundTypes.DATACARD} />
      )}
      {/* {!articles && <NoData type={NoDataFoundTypes.Error} />} */}
    </CardContainer>
  );
};

export default DataCard;
