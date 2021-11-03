import styled from "styled-components";
import globalFont from "../../../types/types";

export const WelcomePageCointainer = styled.main`
  display: flex;
  height: 100vh;
  @media (max-width: 1024px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const WelcomePageLogoCointainer = styled.div`
  display: flex;
  width: 40vw;
  background: #262146;
  justify-content: center;
  align-items: center;
  @media (max-width: 1024px) {
    width: 100vw;
    height: 30vh;
  }
`;

export const WelcomePageRightCointainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 60px;
  width: 60vw;
  @media (max-width: 1024px) {
    padding-left: 0;
    align-items: center;
    text-align: center;
    height: 70vh;
    justify-content: space-between;
  }
`;
export const TextContainer = styled.div`
  width: 650px;
  margin: 0;
  @media (max-width: 1024px) {
    text-align: center;
    width: unset;
    height: 60vh;
    width: 90vw;
  }
`;
export const BtnContainer = styled.div`
  margin-top: 65px;
  width: 650px;
  @media (max-width: 1024px) {
    margin: 0;
    height: 7vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 90vw;
    margin-bottom: 20px;
  }
  @media (max-width: 600px) {
    margin: 0;
    height: 10vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 90vw;
    margin-bottom: 20px;
  }
`;

export const LogoIcon = styled.img`
  width: 350px;
  height: 280px;
  @media (max-width: 1024px) {
    height: 180px;
    width: 180px;
  }
`;

export const WelcomePageHeader = styled.h1`
  font-family: ${globalFont};
  font-weight: 300;
  font-size: 48px;
  line-height: 22px;
  color: #5a5a89;
  @media (max-width: 1024px) {
    font-size: 42px;
  }
  @media (max-width: 680px) {
    font-size: 32px;
    width: unset;
  }
`;
export const WelcomePageText = styled.h2`
  font-family: ${globalFont};
  font-weight: 200;
  font-size: 36px;
  line-height: 50px;
  letter-spacing: 0.25px;
  color: #5a5a89;
  margin: 0;
  @media (max-width: 1024px) {
    font-size: 32px;
    width: unset;
  }
  @media (max-width: 680px) {
    font-size: 22px;
    width: unset;
  }
`;
export const Divider = styled.div`
  opacity: 0.5;
  border: 1px solid #d9dbe9;
  width: 100%;
  max-width: 1920px;
`;
