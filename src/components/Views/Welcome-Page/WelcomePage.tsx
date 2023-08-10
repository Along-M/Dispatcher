import React from "react";
import LoginLogo from "../../../assets/icons/LoginLogo.svg";
import Button from "../../UI/Button/Button";
import { ButtonTypes } from "../../UI/types";
import {
  WelcomePageCointainer,
  WelcomePageLogoCointainer,
  WelcomePageRightCointainer,
  LogoIcon,
  WelcomePageHeader,
  WelcomePageText,
  TextContainer,
  BtnContainer,
  Divider,
} from "./style";

export interface WelcomePageProps {}

const WelcomePage = () => {
  return (
    <>
      <WelcomePageCointainer>
        <WelcomePageLogoCointainer>
          <LogoIcon src={LoginLogo} />
        </WelcomePageLogoCointainer>
        <WelcomePageRightCointainer>
          <TextContainer>
            <WelcomePageHeader>Welcome to Dispatcher</WelcomePageHeader>
            <WelcomePageText>
              Locate articles and breaking news headlines from news sources and
              blogs across the web
            </WelcomePageText>
          </TextContainer>
          <BtnContainer>
            <Divider />
            <Button variant={ButtonTypes.WELCOME} withIcon={true}>
              CONTINUE
            </Button>
          </BtnContainer>
        </WelcomePageRightCointainer>
      </WelcomePageCointainer>
    </>
  );
};

export default WelcomePage;
