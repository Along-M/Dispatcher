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
  options: {
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
  options: {
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
  options: {
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
