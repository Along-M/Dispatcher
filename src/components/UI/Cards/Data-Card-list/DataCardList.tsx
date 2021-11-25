import { CardListContainer } from "./style";
import DataCard from "../Data-Card/DataCard";
import { ChartsData, ChartType } from "../../Charts/ChartType";
import { useEffect, useState } from "react";
import _ from "lodash";
import moment from "moment";

export interface DataCardListProps {
  children?: React.ReactChild | React.ReactChild[];
  articles: {}[] | undefined;
}

// const dataCardList = Object.keys(ChartsData).map((key) => {
//   return <DataCard title={key} chartData={ChartsData[key]} />;
// });

const DataCardList = ({ children, articles }: DataCardListProps) => {
  const [sourcesChartData, setSourcesChartData] = useState(
    ChartsData.Sources.chartDataState
  );
  const [DatesChartData, setDatesChartData] = useState(
    ChartsData.Dates.chartDataState
  );
  const [TagsChartData, setTagsChartData] = useState(ChartsData.Tags);

  useEffect(() => {
    if (articles) {
      calcSourcesChartData(articles);
      calcDatesChartData(articles);
    }
  }, [articles]);

  const calcSourcesChartData = (articles: {}[]) => {
    const sourceNameArray = _.groupBy(articles, function (article: any) {
      return article.source.name;
    });
    setSourcesChartData({
      ...sourcesChartData,
      labels: Object.keys(sourceNameArray),
      datasets: [
        {
          ...sourcesChartData.datasets[0],
          data: Object.values(sourceNameArray).map((item: any) => {
            return item.length;
          }),
        },
      ],
    });
  };

  const calcDatesChartData = (articles: {}[]) => {
    const datesNameArray = _.groupBy(articles, function (article: any) {
      return new Date(moment(article.publishedAt).format("MMM D"));
    });
    console.log("dates in charts: ", datesNameArray);
    let dateArray: any = [];
    Object.keys(datesNameArray).map((date) => {
      dateArray.push(moment(date).format("MMM D"));
    });
    dateArray.sort((a: any, b: any) =>
      moment(a, "MMM DD").diff(moment(b, "MMM DD"))
    );
    console.log("dateArray", dateArray);
    setDatesChartData({
      ...DatesChartData,
      labels: dateArray.map((date: string) => {
        return date;
      }),
      datasets: [
        {
          ...DatesChartData.datasets[0],
          data: Object.values(datesNameArray).map((item: {}[]) => {
            return item.length;
          }),
        },
      ],
    });
  };

  return (
    <CardListContainer>
      {/* {dataCardList} */}
      <DataCard
        title="Sources"
        chartData={sourcesChartData}
        chartType={ChartType.Doughnut}
        chartOptions={ChartsData.Sources.options}
        articles={articles}
      ></DataCard>
      <DataCard
        title="Dates"
        chartData={DatesChartData}
        chartType={ChartType.Line}
        chartOptions={ChartsData.Dates.options}
        articles={articles}
      ></DataCard>
      {/* <DataCard
        title="Tags"
        chartData={TagsChartData.chartDataState}
        chartType={ChartType.Bar}
        chartOptions={TagsChartData.options}
        articles={articles}
      ></DataCard> */}
      {/* <DataCard title="Dates" chartData={DatesChartData}></DataCard>
      <DataCard title="Tags" chartData={TagsChartData}></DataCard> */}
    </CardListContainer>
  );
};

export default DataCardList;
