import styled from "styled-components";
import globalFont from "../../../../types/types";

export const CardsHeader = styled.div`
  font-family: ${globalFont};
  font-weight: 500;
  font-size: 24px;
  line-height: 32px;
  color: #5a5a89;
`;

export const CardsNumberOfSearchResults = styled.h4`
  font-family: ${globalFont};
  font-size: 14px;
  line-height: 22px;
  letter-spacing: 0.25px;
  color: rgba(90, 90, 137, 0.5);
  font-weight: 400;
  &.top-headlines-header {
    font-family: ${globalFont};
    font-size: 24px;
    line-height: 22px;
    color: #262146;
    font-weight: 500;
    padding-top: 24px;
    padding-bottom: 24px;
    margin: 0;
  }
  @media (max-width: 1024px) {
    padding: 15px 14px;
    margin: 0;
    &.top-headlines-header {
      padding-top: 14px;
      padding-bottom: 14px;
      /* font-weight: 500; */
    }
  }
  @media (max-width: 680px) {
    margin: 0;
    padding: 15px 16px;
    font-size: 14px !important;
    font-weight: 400;
    &.top-headlines-header {
      padding-top: 14px;
      padding-bottom: 14px;
      font-size: 18px !important;
      /* font-weight: 500; */
    }
  }
`;
