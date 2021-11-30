import styled from "styled-components";
import globalFont from "../../../types/types";

export const NoChartDataIcon = styled.img`
  align-self: center;
  margin-top: 15%;
  @media (min-width: 1024px) and (max-width: 1500px) {
    margin-top: 10%;
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
  @media (min-width: 300px) and (max-width: 1500px) {
    font-size: 1rem;
    margin-top: 0.6rem;
  }
  /* @media (min-width: 200px) and (max-width: 1500px) {
    font-size: 1rem;
    margin-top: 0.6rem;
  } */
`;
export const Image = styled.img`
  align-self: center;
  margin-top: 10%;
  width: 50%;
`;
export const MainErrorContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 35%;
  margin: 0 auto;
  @media (min-width: 1024px) and (max-width: 1500px) {
    font-size: 1rem;
    margin-top: 0.6rem;
  }
`;
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 0 auto;
  @media (min-width: 1024px) and (max-width: 1500px) {
    font-size: 1rem;
    margin-top: 0.6rem;
  }
`;

// export const MainErrorImage = styled.img`
//   align-self: center;
//   margin-top: 10%;
//   width: 30%;
// `;
