import * as React from "react";
import { useState } from "react";
import { CardListContainer } from "./style";
import ArticalCard from "../artical-card/ArticalCard";
import { NoDataFoundTypes } from "../../../../types/types";
import NoData from "../../No-data-gif/NoData";
import { Idata, artical } from "../../../../types/dataTypes";
import FadingLoader from "../../loader/CardLoader";
import MyLoader from "../../loader/CardLoader";
import useWindowSize from "../../../../helpers/custom-hooks/useWindowSize";
import MobileLoader from "../../mobile-loader/CardMobileLoader";
import { useSelector } from "react-redux";
import { RootState } from "../../../../store/store";

export interface ArticalCardListProps {
  children?: React.ReactChild | React.ReactChild[];
  data: Idata | null;
  className?: string;
}
const ArticalCardList = ({ data, className }: ArticalCardListProps) => {
  // const [dataFromApi, setDataFromApi] = useState(data);
  const dataFromApi = useSelector((state: RootState) => state.dataFromApi.data);
  const isLoading = useSelector(
    (state: RootState) => state.isLoading.isLoading
  );

  const windowSize = useWindowSize();

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
  const testArr = [1, 2, 3, 3, 5];
  return (
    <CardListContainer className={className}>
      {!isLoading && articalToDisplay}
      {isLoading &&
        testArr.map((test) => {
          return windowSize.width > 680 ? <MyLoader /> : <MobileLoader />;
        })}
      {/* {!articalToDisplay &&
        dataFromApi?.status !== "error" &&
        testArr.map((test) => {
          return windowSize.width > 680 ? <MyLoader /> : <MobileLoader />;
        })} */}
      {data?.totalResults === 0 && !isLoading && (
        <NoData type={NoDataFoundTypes.ARTICALCARD} />
      )}
      {!data?.articles && <NoData type={NoDataFoundTypes.MainError} />}
    </CardListContainer>
  );
};

export default ArticalCardList;
