import { Bullet } from "@nivo/bullet";
import { Meta, Story } from "@storybook/react";
import BasicChart, { ChartProps } from "./Chart";
import { ChartType } from "./ChartType";
import { IChartOptions } from "./ChartType";

export default {
  component: BasicChart,
  title: "Components/DataCharts",
} as Meta;

// args in TS way
const Template: Story<ChartProps> = (args) => <BasicChart {...args} />;
var fillPattern = "179.57deg, #0058B9 32.61%, rgba(0, 185, 255, 0) 103.52%";

export const V1 = Template.bind({});
V1.args = {
  chartType: ChartType.Line,
  state: {
    labels: ["APR", "MAY", "JUN", "JUL", "AUG"],
    datasets: [
      {
        label: "",
        data: [10, 12, 15, 10, 25, 50],
        // borderColor: ["blue"],
        backgroundColor: "rgba(126, 134, 247, 0.15)",
      },
    ],
  },
  options: {
    responsive: true,
    tension: 0.5,
    fill: true,
    pointBorderWidth: 0,
    borderColor: ["bliue"],
  },
};

export const V2 = Template.bind({});
V2.args = {
  chartType: ChartType.Bar,
  state: {
    labels: ["Crypto", "china", "tech", "israel", "politics", "economy"],
    datasets: [
      {
        label: "Crypto",
        data: [10, 20, 30],
        backgroundColor: "#F3F3FF",
      },
    ],
  },
  options: {
    responsive: true,
    maintainAspectRatio: true,
    indexAxis: "y",
    borderRadius: 50,
  },
};
export const V3 = Template.bind({});
V3.args = {
  chartType: ChartType.Doughnut,
  state: {
    labels: ["NBC", "Vulture", "CNN", "ESPN"],
    datasets: [
      {
        label: "",
        data: [10, 20, 30, 40],
        backgroundColor: ["orange", "blue", "gray", "red", "green"],
      },
    ],
  },
  options: {
    responsive: true,
    maintainAspectRatio: true,
    cutout: "500",
    borderWidth: 0,
  },
};
