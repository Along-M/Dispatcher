import styled from "styled-components";

export const MainBodyCointainer = styled.main`
  display: flex;
  max-width: 100%;
  flex-direction: column;
  margin: 0 auto;
  width: 75%;
  max-width: 1440px;
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
  /* justify-content: space-between; */
  @media (max-width: 1024px) {
    /* padding: 0 20px; */
    /* justify-content: center; */
  }
  @media (max-width: 680px) {
    /* padding: 0 16px; */
    min-width: 100vw;
  }
`;
export const SideBarBackground = styled.div`
  height: 100vh;
  width: 100vw;
  background: rgba(0, 0, 0, 0.7);
  position: fixed;
  z-index: 98;
`;
