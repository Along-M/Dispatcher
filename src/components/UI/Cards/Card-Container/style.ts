import styled from "styled-components";

export const CardContainer = styled.div`
  display: flex;
  background: #ffffff;
  box-shadow: 0px 32px 64px rgba(0, 0, 0, 0.05);
  border-radius: 20px;
  height: 15rem;
  width: 100%;
  @media (max-width: 600px) and (min-width: 250px) {
    flex-direction: column;
    height: fit-content;
  }
  /* @media (max-width: 680px) and (min-width: 600px) {
    flex-direction: row;
  } */
  /* @media (max-width: 680px) and (min-width: 450px) {
    flex-direction: column;
    height: 550px;
  }
  @media (max-width: 680px) and (min-width: 500px) {
    height: 500px;
  } */
  &.data-card {
    width: 90%;
    height: 360px;
    flex-direction: column;
    align-items: baseline;
    padding: 1rem;
    @media (min-width: 1025px) and (max-device-width: 1500px) {
      width: 90%;
      height: 260px;
    }
    @media (min-width: 1920px) {
      width: 360px;
      /* height:260px; */
    }
  }
`;
