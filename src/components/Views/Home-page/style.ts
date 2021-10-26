import styled from "styled-components";


export const MainBodyCointainer = styled.main`
  display: flex;
  max-width: 100%;
  flex-direction: column;
  margin: 0 auto;
  width: 75%;
  max-width:1440px;
  @media (max-width: 1024px) {
    overflow: unset;
    margin: 0;
    padding: 0;
    width: 100%;
  }
`;

export const CardsContainer = styled.section`
  display: flex;
  max-width: 100%;
  justify-content: space-between;
  @media (max-width: 1024px) {
    padding: 0 20px;
  }
  @media (max-width: 680px) {
    padding: 0 16px;
  }
`;