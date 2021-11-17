export const enum ChartType {
  Doughnut,
  Line,
  Bar,
}
export type IChartData = ILineData | IDoughnutData | IBarData;

type ILineData = {
  labels: string[];
  datasets: [
    {
      label: string;
      data: number[];
      borderColor?: string;
      backgroundColor?: string;
    }
  ];
};
type IDoughnutData = {
  labels: string[];
  datasets: [
    {
      label: string;
      data: number[];
      backgroundColor?: string[];
    }
  ];
};
type IBarData = {
  labels: string[];
  datasets: [
    {
      label: string;
      data: number[];
      backgroundColor?: string;
    }
  ];
};
export type IChartOptions = {
  responsive: boolean;
  maintainAspectRatio: boolean;
  indexAxis?: string;
  tension?: number;
  borderRadius?: number;
  cutout?: string;
  radius?: string;
  fill?: {
    target: string;
  };
};

// let chartDataSet: IChartData =

export const ChartsData: {
  [name: string]: {
    chartType: ChartType;
    chartDataState: any;
    options: {};
  };
} = {
  Sources: {
    chartType: ChartType.Doughnut,
    chartDataState: {
      labels: [],
      datasets: [
        {
          label: "",
          data: [],
          backgroundColor: [
            "#FF9800",
            "#343A6E",
            "#E8E8E8",
            "#030035",
            "#DDF3FE",
          ],
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      cutout: "50",
      borderWidth: 0,
    },
  },
  Dates: {
    chartType: ChartType.Line,
    chartDataState: {
      labels: [],
      datasets: [
        {
          label: "Dates",
          data: [],
          borderColor: "blue",
          backgroundColor: "rgba(126, 134, 247, 0.15)",
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      tension: 0.5,
      fill: true,
      pointBorderWidth: 0,
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  },
  Tags: {
    chartType: ChartType.Bar,
    chartDataState: {
      labels: ["Crypto", "china", "tech", "israel", "politics", "economy"],
      datasets: [
        {
          label: "",
          data: [10, 20, 30, 40, 50, 60, 70],
          backgroundColor: "#0000fb",
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      indexAxis: "y",
      borderRadius: 50,
    },
  },
};
