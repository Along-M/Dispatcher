import styled from "styled-components";
import globalFont from "../../types";

export const CardsHeader = styled.div`
  font-family: ${globalFont};
  font-weight: 500;
  font-size: 24px;
  line-height: 32px;
  color: #5A5A89;
`

export const CardsNumberOfSearchResults = styled.h4`
  font-family: ${globalFont};
  font-size: 14px;
  line-height: 22px;
  letter-spacing: 0.25px;
  color: rgba(90, 90, 137, 0.5);
  @media (max-width: 1024px) {
    padding:0 20px;
  }
  @media (max-width: 680px) {
    padding:0 16px;
  }

`