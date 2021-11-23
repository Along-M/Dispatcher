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
      backgroundColor: string;
    }
  ];
};
type IDoughnutData = {
  labels: string[];
  datasets: [
    {
      label: string;
      data: number[];
      backgroundColor: string[];
    }
  ];
};
type IBarData = {
  labels: string[];
  datasets: [
    {
      label: string;
      data: number[];
      backgroundColor: string;
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

export const ChartsData: any =
  // {
  //   [name: string]: {
  //     chartType: ChartType;
  //     chartDataState: any;
  //     options: {};
  //   };
  // }
  {
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
              "#00BFFF",
              "	#4A777A",
              "#cdfecd",
              "#539DC2	",
              "#003300",
              "	#0000FF",
              "	#7393B3",
              "	#088F8F",
              "	rgb(0, 150, 255)",
              "#00CDCD",
              "#52648e ",
              "#52648e ",
              "#52648e ",
              "#52648e ",
              "#52648e ",
              "#52648e ",
              "#52648e ",
            ],
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        cutout: "90%",
        borderWidth: 0,
        plugins: {
          legend: false as any,
          datalabels: {
            borderRadius: 3,
          },
          doughnutlabel: {
            labels: [
              {
                text: "Sum",
                font: {
                  size: 10,
                  weight: "bold",
                },
              },
              // {
              //   text: "total",
              // },
            ],
          },
        },
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
            tension: 0.2,
            pointRadius: 1,
            fill: true,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        // tension: 0.2,
        // fill: true,
        pointBorderWidth: 2,
        plugins: {
          legend: {
            display: false,
          },
        },
        scales: {
          x: {
            grid: {
              display: false,
            },
          },
          y: {
            grid: {
              display: false,
              drawBorder: false,
            },
            ticks: {
              display: false,
            },
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
