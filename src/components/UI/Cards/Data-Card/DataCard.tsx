import * as React from "react";
import { CardContainer } from "../card-container/style";
import { DataCardTitle, DataCardDivider, ChartContainer } from "./style";
import { NoDataFoundTypes } from "../../types";
import NoData from "../../no-data-gif/NoData";
import Chart from "../../charts/Chart";
import { ChartType, IChartData } from "../../charts/ChartType";

export interface DataCardProps {
  children?: React.ReactChild | React.ReactChild[];
  title: string;
  // chartType: ChartType;
  // state: IChartData;
  // options: any;
}

const DataCard = ({ children, title }: DataCardProps) => {
  return (
    <CardContainer className="data-card">
      <DataCardTitle>{title}</DataCardTitle>
      <DataCardDivider />
      {/* <NoData type={NoDataFoundTypes.DATACARD} /> */}
      <ChartContainer>
        <Chart
          chartType={ChartType.Doughnut}
          state={{
            labels: ["la", "la"],
            datasets: [
              {
                label: "",
                data: [10, 20, 30, 40],
                backgroundColor: ["orange", "blue", "gray", "red", "green"],
              },
            ],
          }}
          options={{
            responsive: true,
            maintainAspectRatio: true,
            cutout: "80",
            borderWidth: 0,
          }}
        />
        {/* {children} */}
      </ChartContainer>
    </CardContainer>
  );
};

export default DataCard;
