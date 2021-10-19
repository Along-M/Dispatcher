import * as React from "react";
import "./App.css";
import Button from "./components/UI/Button/Button";
import StoryCard from "./components/UI/Artical-Card/ArticalCard";
import { ButtonTypes } from "./components/UI/types";
import DataCard from "./components/UI/Data-Card/DataCard";
import ArticalCardList from "./components/UI/Artical-Card-list/ArticalCardList";

function App() {
  const Data = {
    status: "ok",
    totalResults: 6645,
    articles: [
      {
        source: {
          id: "engadget",
          name: "Engadget",
        },
        author: "Karissa Bell",
        title: "Twitter will let users send and receive Bitcoin tips",
        description:
          "Four months after Twitter first introduced in-app tipping, the company is expanding its “tip jar” feature in a major way. The company is opening up tipping to all its users globally, and for the first time will allow some users to send and receive tips in Bit…",
        url:
          "https://www.engadget.com/twitter-opens-tipping-in-bitcoin-170017891.html",
        urlToImage:
          "https://blogger.googleusercontent.com/img/a/AVvXsEh20SgNNsDlKyWWmB7XgB5SfFY10M6CqJAq93HwGtssTn2cWz6w9zHPjXf91WwoWr27QeaC4HsGv2NxPOXUdvk6xodUojnw8rUuAkEMY3Qb4ucoVpN3nSyF8JW_xVDWa2aSMEWH387hPsfouSJyClLNburIcDbXIeJamuTHwiSvw4hdNnqeeICcvg1wrQ=w1200-h630-p-k-no-nu",
        publishedAt: "2021-09-23T17:00:17Z",
        content:
          "Four months after Twitter first introduced in-app tipping, the company is expanding its tip jar feature in a major way. The company is opening up tipping to all its users globally, and for the first … [+2390 chars]",
      },
      {
        source: {
          id: "engadget",
          name: "Engadget",
        },
        author: "Andrew Tarantola",
        title:
          "Hitting the Books: How Bitcoin is somehow worth more than the paper it's printed on",
        description:
          "Bitcoin and similar blockchain-based cryptos exhibit the same radical divergence from traditional scarcity economics that we first saw when MP3s and Napster cratered physical album sales at the turn of the century. Unlike gold, which derives its value from bo…",
        url:
          "https://www.engadget.com/hitting-the-books-the-future-of-money-eswar-prasad-harvard-university-press-153024975.html",
        urlToImage:
          "https://s.yimg.com/os/creatr-uploaded-images/2021-09/5ea7d740-17ff-11ec-9ffd-ff33ac942d83",
        publishedAt: "2021-09-25T15:30:24Z",
        content:
          "Bitcoin and similar blockchain-based cryptos exhibit the same radical divergence from traditional scarcity economics that we first saw when MP3s and Napster cratered physical album sales at the turn … [+8436 chars]",
      },
    ],
  };

  // const Cards = Data.articles.map((artical, index) => {
  //   return (
  //     <StoryCard
  //       title={artical.title}
  //       subTitle={"walla.com"}
  //       tagContent={artical.source.id}
  //       cardContent={artical.content}
  //       imgUrl={artical.urlToImage}
  //     ></StoryCard>
  //   );
  // });

  return (
    <>
      {/* <Button variant={ButtonTypes.PRIMARY} withIcon={true}>
        test children
      </Button> */}
      {/* {Cards} */}
      {/* <DataCard title={"Sources"}></DataCard> */}
      <ArticalCardList data={Data} />
    </>
  );
}

export default App;
