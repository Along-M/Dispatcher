import styled from "styled-components";
import globalFont from "../../../types/types";

export const NoChartDataIcon = styled.img`
  align-self: center;
  margin-top: 15%;
  @media (min-width: 1024px) and (max-width: 1500px) {
    margin-top: 7.5%;
  }
`;
export const NoArticalIcon = styled.img`
  align-self: center;
  margin-top: 25%;
`;

export const NoDataText = styled.p`
  font-family: ${globalFont};
  font-size: 18px;
  line-height: 21px;
  text-align: center;
  color: #5a5a89;
  align-self: center;
  @media (min-width: 1024px) and (max-width: 1500px) {
    font-size: 1rem;
    margin-top: 0.6rem;
  }
`;
