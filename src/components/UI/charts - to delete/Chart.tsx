import { FilterCategories } from "../types";
import { Pie } from "@nivo/pie";
import { ResponsiveBullet } from "@nivo/bullet";
import { ResponsiveLine } from "@nivo/line";

export interface ChartProps {
  type?: string;
  // data?: {}[];
}

const dataPie = [
  {
    id: "ESPN",
    label: "ESPN",
    value: 457,
    color: "#FF9800",
  },
  {
    id: "NBC",
    label: "NBC",
    value: 519,
    color: "#343A6E",
  },
  {
    id: "Vulture",
    label: "Vulture",
    value: 252,
    color: "#DDF3FE",
  },
  {
    id: "CNN",
    label: "python",
    value: 129,
    color: "#E8E8E8",
  },
];

const legends = [
  {
    anchor: "bottom",
    direction: "column",
    justify: true,
    translateX: 0,
    translateY: 125,
    itemsSpacing: 20,
    itemWidth: 300,
    itemHeight: 18,
    itemTextColor: "#999",
    itemDirection: "left-to-right",
    itemOpacity: 1,
    symbolSize: 12,
    symbolShape: "circle",
  },
];

const dataBullet = [
  {
    id: "temp.",
    ranges: [48, 2, 78, 0, 100],
    measures: [89],
    markers: [95],
  },
  {
    id: "power",
    ranges: [
      0.6671504544020743,
      0.046504825088831706,
      1.9404162986020896,
      0,
      2,
    ],
    measures: [0.1116453284836381, 1.472894709690384],
    markers: [1.3731269450954153],
  },
  {
    id: "volume",
    ranges: [42, 0, 3, 41, 28, 31, 0, 80],
    measures: [6],
    markers: [51],
  },
  {
    id: "cost",
    ranges: [254973, 95498, 13869, 0, 500000],
    measures: [349875, 474402],
    markers: [337132],
  },
  {
    id: "revenue",
    ranges: [0, 0, 9, 0, 11],
    measures: [5],
    markers: [10.578657377362356, 9.297775062539694],
  },
];

const lineData = [
  {
    id: "jan",
    color: "hsl(178, 70%, 50%)",
    data: [
      {
        x: "plane",
        y: 257,
      },
      {
        x: "helicopter",
        y: 219,
      },
      {
        x: "boat",
        y: 221,
      },
      {
        x: "train",
        y: 205,
      },
      {
        x: "subway",
        y: 190,
      },
      {
        x: "bus",
        y: 250,
      },
      {
        x: "car",
        y: 247,
      },
      {
        x: "moto",
        y: 270,
      },
      {
        x: "bicycle",
        y: 262,
      },
      {
        x: "horse",
        y: 72,
      },
      {
        x: "skateboard",
        y: 31,
      },
      {
        x: "others",
        y: 8,
      },
    ],
  },
  {
    id: "france",
    color: "hsl(184, 70%, 50%)",
    data: [
      {
        x: "plane",
        y: 122,
      },
      {
        x: "helicopter",
        y: 213,
      },
      {
        x: "boat",
        y: 94,
      },
      {
        x: "train",
        y: 143,
      },
      {
        x: "subway",
        y: 136,
      },
      {
        x: "bus",
        y: 38,
      },
      {
        x: "car",
        y: 260,
      },
      {
        x: "moto",
        y: 170,
      },
      {
        x: "bicycle",
        y: 59,
      },
      {
        x: "horse",
        y: 169,
      },
      {
        x: "skateboard",
        y: 29,
      },
      {
        x: "others",
        y: 290,
      },
    ],
  },
  {
    id: "us",
    color: "hsl(184, 70%, 50%)",
    data: [
      {
        x: "plane",
        y: 169,
      },
      {
        x: "helicopter",
        y: 287,
      },
      {
        x: "boat",
        y: 191,
      },
      {
        x: "train",
        y: 23,
      },
      {
        x: "subway",
        y: 216,
      },
      {
        x: "bus",
        y: 147,
      },
      {
        x: "car",
        y: 149,
      },
      {
        x: "moto",
        y: 50,
      },
      {
        x: "bicycle",
        y: 60,
      },
      {
        x: "horse",
        y: 76,
      },
      {
        x: "skateboard",
        y: 138,
      },
      {
        x: "others",
        y: 223,
      },
    ],
  },
  {
    id: "germany",
    color: "hsl(258, 70%, 50%)",
    data: [
      {
        x: "plane",
        y: 183,
      },
      {
        x: "helicopter",
        y: 219,
      },
      {
        x: "boat",
        y: 231,
      },
      {
        x: "train",
        y: 105,
      },
      {
        x: "subway",
        y: 215,
      },
      {
        x: "bus",
        y: 169,
      },
      {
        x: "car",
        y: 161,
      },
      {
        x: "moto",
        y: 49,
      },
      {
        x: "bicycle",
        y: 265,
      },
      {
        x: "horse",
        y: 187,
      },
      {
        x: "skateboard",
        y: 188,
      },
      {
        x: "others",
        y: 39,
      },
    ],
  },
  {
    id: "norway",
    color: "hsl(136, 70%, 50%)",
    data: [
      {
        x: "plane",
        y: 272,
      },
      {
        x: "helicopter",
        y: 218,
      },
      {
        x: "boat",
        y: 137,
      },
      {
        x: "train",
        y: 36,
      },
      {
        x: "subway",
        y: 217,
      },
      {
        x: "bus",
        y: 228,
      },
      {
        x: "car",
        y: 166,
      },
      {
        x: "moto",
        y: 296,
      },
      {
        x: "bicycle",
        y: 291,
      },
      {
        x: "horse",
        y: 69,
      },
      {
        x: "skateboard",
        y: 116,
      },
      {
        x: "others",
        y: 280,
      },
    ],
  },
];

const Chart = ({ type }: ChartProps) => {
  return (
    <>
      {type == "pie" && (
        <Pie
          data={dataPie}
          margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
          height={300}
          width={300}
          innerRadius={0.85}
          enableArcLabels={false}
          enableArcLinkLabels={false}
          legends={[
            {
              anchor: "bottom",
              direction: "column",
              justify: true,
              translateX: 0,
              translateY: 75,
              itemsSpacing: 5,
              itemWidth: 150,
              itemHeight: 18,
              itemTextColor: "#999",
              itemDirection: "left-to-right",
              itemOpacity: 1,
              symbolSize: 12,
              symbolShape: "circle",
            },
          ]}
        />
      )}

      {type == "bullet" && (
        <ResponsiveBullet
          data={dataBullet}
          minValue={10}
          maxValue={50}
          margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
          spacing={60}
          titleAlign="start"
          titleOffsetX={-70}
          measureSize={1}
          markerSize={0}
          rangeBorderColor="red"
        />
      )}

      {type == "lineChart" && (
        <ResponsiveLine
          data={lineData}
          // width={100}
          // height={100}
          margin={{ top: 10, right: 10, bottom: 10, left: 10 }}
          xScale={{ type: "linear" }}
          yScale={{
            type: "linear",
            min: "auto",
            max: "auto",
            stacked: false,
            reverse: false,
          }}
          curve="natural"
          axisTop={null}
          axisRight={null}
          axisBottom={{
            // orient: "bottom",
            tickSize: 0,
            tickPadding: 12,
            tickRotation: 0,
            legend: "",
            legendOffset: -26,
            legendPosition: "middle",
          }}
          axisLeft={null}
          enableGridX={false}
          enableGridY={false}
          colors={{ scheme: "red_blue" }}
          enablePoints={false}
          pointSize={10}
          pointColor={{ theme: "background" }}
          pointBorderWidth={2}
          pointBorderColor={{ from: "color", modifiers: [] }}
          pointLabel="x"
          pointLabelYOffset={-12}
          enableArea={true}
          areaBlendMode="darken"
          isInteractive={false}
          useMesh={true}
          legends={[]}
        />
      )}
    </>
  );
};

export default Chart;
