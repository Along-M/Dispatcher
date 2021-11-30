import { ChartData } from "chart.js";
// import React, { FC, useCallback } from "react";
import { Bar, Doughnut, Line } from "react-chartjs-2";
import { Colors } from "../../../types/types";
import { RightIconsContainer } from "../Header/style";
import { ChartType, IChartData } from "./ChartType";
import "./chardCss.css";

export interface ChartProps {
  chartType: ChartType;
  state: IChartData;
  options: any;
  sortedSources: any;
}
const Chart = ({ chartType, state, options, sortedSources }: ChartProps) => {
  let totalSum: number;
  if (chartType === ChartType.Doughnut) {
    totalSum = state.datasets[0].data.reduce((acc, curr) => (acc += curr), 0);
  }

  return (
    <>
      {chartType === ChartType.Doughnut && (
        <>
          <Doughnut
            data={state as ChartData<"doughnut", number[], string>}
            options={options}
          />
          <div
            style={{
              overflow: "scroll",
              height: "65%",
              marginTop: "10px",
            }}
            className="labels-wrapper"
          >
            {sortedSources.map((label: any, index: number) => {
              return (
                <div
                  style={{
                    display: "flex",
                    paddingBottom: "5px",
                    alignItems: "baseline",
                    justifyContent: "space-between",
                  }}
                  className={"label-wrapper"}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <div
                      className={"label"}
                      style={{
                        backgroundColor:
                          state.datasets[0].backgroundColor[
                            index
                            // index === 0 ? index : index % 4
                          ],
                        width: "10px",
                        height: "10px",
                        borderRadius: "50px",
                        marginRight: "10px",
                      }}
                    ></div>
                    <div className="label-name">{label.label}</div>
                  </div>
                  <div
                    className="label-value"
                    style={{ fontSize: "15px", color: "#9FA2B4" }}
                  >
                    {Math.round(
                      // (state.datasets[0].data[index] * 100) / totalSum
                      (label.number * 100) / totalSum
                    )}
                    %
                  </div>
                </div>
              );
            })}
          </div>
          {/* <div>{state.labels}</div> */}
        </>
      )}
      {chartType === ChartType.Bar && (
        <Bar
          data={state as ChartData<"bar", number[], string>}
          options={options}
        />
      )}
      {chartType === ChartType.Line && (
        <Line
          data={state as ChartData<"line", number[], string>}
          options={options}
        />
      )}
    </>
  );
  // return <> {renderChart({ chartType, state, options })}</>;
};
export default Chart;
