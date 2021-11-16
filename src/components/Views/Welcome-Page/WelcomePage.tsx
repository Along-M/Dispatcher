import LoginLogo from "../../../assets/icons/LoginLogo.svg";
import Button from "../../UI/Button/Button";
import { ButtonTypes } from "../../../types/types";
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
import { useAuth0 } from "@auth0/auth0-react";

export interface WelcomePageProps {}

const WelcomePage = (): JSX.Element => {
  const { loginWithRedirect } = useAuth0();

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
            <Button
              variant={ButtonTypes.WELCOME}
              withIcon={true}
              onClick={() => loginWithRedirect()}
            >
              CONTINUE
            </Button>
          </BtnContainer>
        </WelcomePageRightCointainer>
      </WelcomePageCointainer>
    </>
  );
};

export default WelcomePage;
function logout(arg0: { returnTo: string }): void {
  throw new Error("Function not implemented.");
}
