import * as React from "react";
import { useState } from "react";
import { CardListContainer } from "./style";
import ArticalCard from "../artical-card/ArticalCard";
import { NoDataFoundTypes } from "../../../../types/types";
import NoData from "../../No-data-gif/NoData";
import { Idata, artical } from "../../../../types/dataTypes";

export interface ArticalCardListProps {
  children?: React.ReactChild | React.ReactChild[];
  data: Idata | null;
}
const ArticalCardList = ({ data }: ArticalCardListProps) => {
  const [dataFromApi, setDataFromApi] = useState(data);

  console.log("this is data from api ", data);

  const articalToDisplay = data?.articles?.map(
    (artical: artical, index: number) => {
      return (
        <ArticalCard
          key={index}
          title={artical.title}
          subTitle={artical.source.name}
          tagContent={artical.source.name}
          cardContent={artical.description}
          imgUrl={artical.urlToImage}
          publishedAt={artical.publishedAt}
          url={artical.url}
        ></ArticalCard>
      );
    }
  );

  return (
    <CardListContainer>
      {articalToDisplay}
      {!articalToDisplay && <div>loading</div>}
      {data?.totalResults === 0 && (
        <NoData type={NoDataFoundTypes.ARTICALCARD} />
      )}
    </CardListContainer>
  );
};

export default ArticalCardList;
