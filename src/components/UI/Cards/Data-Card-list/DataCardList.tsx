import { CardListContainer } from "./style";
import DataCard from "../Data-Card/DataCard";
// import { ChartsData } from "../../Charts/ChartType";
import { ChartsData } from "../../Charts/ChartType";

export interface DataCardListProps {
  children?: React.ReactChild | React.ReactChild[];
  // data?: data;
}

const dataCardList = Object.keys(ChartsData).map((key) => {
  return <DataCard title={key} chartData={ChartsData[key]} />;
});

const DataCardList = ({ children }: DataCardListProps) => {
  return (
    <CardListContainer>
      {dataCardList}
      {/* <DataCard title="Sources"></DataCard>
      <DataCard title="Dates"></DataCard>
      <DataCard title="Tags"></DataCard> */}
    </CardListContainer>
  );
};

export default DataCardList;
