import styled from "styled-components";
import globalFont from "../../../../types/types";

export const DataCardTitle = styled.h2`
  font-family: ${globalFont};
  font-weight: bold;
  font-size: 24px;
  line-height: 32px;
  color: #14142b;
  margin: 0;
  @media (min-width: 1024px) and (max-width: 1500px) {
    font-size: 1.2rem;
  }
`;

export const DataCardDivider = styled.div`
  background: #e5e5e5;
  border: 4px solid #5a5a89;
  border-radius: 20px;
  width: 20px;
  margin-top: 0.9rem;
  @media (min-width: 1024px) and (max-width: 1500px) {
    margin-top: 0.5rem;
  }
`;
export const ChartContainer = styled.div`
  margin-top: 0.5rem;
  align-self: center;
  /* width: 100%; */
  height: 100%;
  &.sources-chart {
    height: 50%;
    position: relative;
  }
  @media (min-width: 1024px) and (max-width: 1500px) {
    margin-top: 0.2rem;
    width: 90%;
    height: 80%;
  }
`;
export const SumContainer = styled.div`
  position: relative;
  margin-left: auto;
  margin-right: auto;
  top: 48%;
`;
export const Sum = styled.div`
  margin: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  font-family: ${globalFont};
  font-size: 12px;
`;
