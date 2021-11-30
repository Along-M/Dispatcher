import * as React from "react";
import { useState } from "react";
import { CardListContainer } from "./style";
import ArticalCard from "../artical-card/ArticalCard";
import { NoDataFoundTypes } from "../../../../types/types";
import NoData from "../../No-data-gif/NoData";
import { Idata, artical } from "../../../../types/dataTypes";
import MyLoader from "../../loader/CardLoader";
import useWindowSize from "../../../../helpers/custom-hooks/useWindowSize";
import MobileLoader from "../../mobile-loader/CardMobileLoader";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../../store/store";
import InfiniteScroll from "react-infinite-scroll-component";
import { getPaginatedData } from "../../../../store/data-actions";
import "./infiniteScrool.css";

export interface ArticalCardListProps {
  children?: React.ReactChild | React.ReactChild[];
  data: Idata | null;
  className?: string;
}
const ArticalCardList = ({ data, className }: ArticalCardListProps) => {
  // const [dataFromApi, setDataFromApi] = useState(data);
  const dispatch = useDispatch();
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
  const loaderArr = [1, 2, 3, 3, 5];
  return (
    <CardListContainer className={className} id={"scrollableDiv"}>
      {/* <CardListContainer className={className} id={"scrollableDiv"}> */}
      {articalToDisplay && articalToDisplay.length > 0 && (
        <InfiniteScroll
          dataLength={articalToDisplay.length} //This is important field to render the next data
          next={() => {
            dispatch(getPaginatedData());
          }}
          // next={fetchData}
          hasMore={
            // true
            dataFromApi?.totalResults === articalToDisplay.length ? false : true
          }
          loader={!isLoading && <h4>Loading...</h4>}
          endMessage={
            articalToDisplay.length >= 10 && (
              <p style={{ textAlign: "center" }}>
                <b>Yay! You have seen it all</b>
              </p>
            )
          }
          // below props only if you need pull down functionality
          // refreshFunction={this.refresh}
          // pullDownToRefresh
          pullDownToRefreshThreshold={10}
          scrollableTarget="scrollableDiv"
        >
          {/* {items} */}
          {!isLoading && articalToDisplay}
        </InfiniteScroll>
      )}

      {/* {!isLoading && articalToDisplay} */}
      {isLoading &&
        loaderArr.map((loader) => {
          return windowSize.width > 680 ? <MyLoader /> : <MobileLoader />;
        })}
      {dataFromApi?.totalResults === 0 && !isLoading && (
        <NoData type={NoDataFoundTypes.ARTICALCARD} />
      )}
      {dataFromApi?.status == "error" && !isLoading && (
        <NoData type={NoDataFoundTypes.ARTICALCARD} />
      )}
    </CardListContainer>
  );
};

export default ArticalCardList;
