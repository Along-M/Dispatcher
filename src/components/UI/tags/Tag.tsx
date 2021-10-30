import * as React from "react";
import { TagContainer, TagBody } from "./style";

export interface CardProps {
  children: React.ReactChild | React.ReactChild[];
}

const Tag = ({ children }: CardProps) => {
  return (
    <TagContainer>
      <TagBody>{children}</TagBody>
    </TagContainer>
  );
};

export default Tag;
