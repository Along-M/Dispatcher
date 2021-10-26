import styled from "styled-components";
import globalFont from "../../types";


export const DataCardTitle = styled.h2`
  font-family: ${globalFont};
  font-weight: bold;
  font-size: 24px;
  line-height: 32px;
  color: #14142B;
  margin: 0;
  @media (min-width: 1024px) and (max-width: 1500px) {
    font-size: 1.2rem;
  }
  `;

export const DataCardDivider = styled.div`
  background: #E5E5E5;
  border: 4px solid #5A5A89;
  border-radius: 20px;
  width: 20px;
  margin-top: 0.9rem;
  @media (min-width: 1024px) and (max-width: 1500px) {
    margin-top: 0.5rem;
  }
  
`;
