import * as React from "react";
import { CardListContainer } from "./style";
import ArticalCard from "../artical-card/ArticalCard";
import { NoDataFoundTypes } from "../../../../types/types";
import NoData from "../../no-data-gif/NoData";

type data = {
  status: string;
  totalResults: number;
  articles: {
    source: { id: string; name: string };
    author: string;
    title: string;
    description: string;
    url: string;
    urlToImage: string;
    publishedAt: string;
    content: string;
  }[];
};
export interface ArticalCardListProps {
  children?: React.ReactChild | React.ReactChild[];
  data: data;
}

const ArticalCardList = ({ children, data }: ArticalCardListProps) => {
  const StoryCardsToDisplay = data.articles.map((artical, index: number) => {
    return (
      <ArticalCard
        title={artical.title}
        subTitle={"walla.com"}
        tagContent={artical.source.id}
        cardContent={artical.content}
        imgUrl={artical.urlToImage}
      ></ArticalCard>
    );
  });
  return (
    <CardListContainer>
      {StoryCardsToDisplay}
      {/* <NoData type={NoDataFoundTypes.ARTICALCARD} /> */}
    </CardListContainer>
  );
};

export default ArticalCardList;
