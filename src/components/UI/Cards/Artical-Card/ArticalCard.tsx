import * as React from "react";
import { CardContainer } from "../card-container/style";
import { ButtonTypes, CardTypes } from "../../../../types/types";
import {
  CardContentContainer,
  Img,
  Title,
  SubTitle,
  Date,
  CardContent,
  CardHeaderContainer,
} from "./style";
import Tag from "../../tags/Tag";
import Button from "../../button/Button";
import { useFormatDate } from "../../../../helpers/custom-hooks/useDateForamt";

export interface StoryCardProps {
  children?: React.ReactChild | React.ReactChild[];
  title: string;
  tagContent: string;
  publishedAt: string;
  cardContent: string;
  imgUrl: string;
  subTitle: string;
  url: string;
}

const ArticalCard = ({
  children,
  title,
  tagContent,
  publishedAt,
  cardContent,
  imgUrl,
  subTitle,
  url,
}: StoryCardProps): JSX.Element => {
  const date = useFormatDate(publishedAt);

  const openArticalNewTab = (url: string) => {
    window.open(url);
  };

  return (
    <CardContainer>
      <Img src={imgUrl} />
      <CardContentContainer>
        <CardHeaderContainer>
          <Date>{date}</Date>
          {/* <Date>Friday Jun 25, 2021</Date> */}
          <Tag>{tagContent}</Tag>
        </CardHeaderContainer>
        <Title>{title}</Title>
        <SubTitle>{subTitle}</SubTitle>
        <CardContent>{cardContent}</CardContent>
        <Button
          variant={ButtonTypes.PRIMARY}
          withIcon={true}
          onClick={() => openArticalNewTab(url)}
        >
          NEVIGATE TO DISPATCH
        </Button>
      </CardContentContainer>
    </CardContainer>
  );
};

export default ArticalCard;
