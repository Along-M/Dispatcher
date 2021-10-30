import * as React from "react";
import { CardContainer } from "../Card-Container/style";
import { ButtonTypes, CardTypes } from "../../types";
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
import Button from "../../Button/Button";

export interface StoryCardProps {
  children?: React.ReactChild | React.ReactChild[];
  title: string;
  tagContent: string;
  date?: Date;
  cardContent: string;
  imgUrl: string;
  subTitle: string;
}

const ArticalCard = ({
  children,
  title,
  tagContent,
  date,
  cardContent,
  imgUrl,
  subTitle,
}: StoryCardProps) => {
  return (
    <CardContainer>
      <Img src={imgUrl} />
      <CardContentContainer>
        <CardHeaderContainer>
          <Date>Friday Jun 25, 2021</Date>
          <Tag>{tagContent}</Tag>
        </CardHeaderContainer>
        <Title>{title}</Title>
        <SubTitle>{subTitle}</SubTitle>
        <CardContent>{cardContent}</CardContent>
        <Button variant={ButtonTypes.PRIMARY} withIcon={true}>
          NEVIGATE TO DISPATCH
        </Button>
      </CardContentContainer>
    </CardContainer>
  );
};

export default ArticalCard;
