import styled from "styled-components";

export const CardListContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #f8f8ff;
  /* gap: 1.5rem; */
  width: 30%;
  @media (max-width: 1024px) {
    display: none;
  }
  @media (min-width: 1024px) and (max-width: 1400px) {
    width: 26%;
  }
`;
