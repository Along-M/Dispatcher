import React from "react";
import { CardContainer } from "./style";
import { CardTypes } from "../../types";

export interface CardContainerProps {
  children: React.ReactChild | React.ReactChild[];
  type: CardTypes;
}

const Card = ({ children, type }: CardContainerProps) => {
  return <CardContainer className={type}>{children}</CardContainer>;
};

export default Card;
