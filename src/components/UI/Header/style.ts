import styled from "styled-components";
import globalFont from "../../../types/types";

export const HeaderContainer = styled.section`
  display: flex;
  background: #262146;
  height: 4.6rem;
  justify-content: space-between;
  padding: 0 20px;
  box-shadow: 0px 32px 64px rgba(0, 0, 0, 0.05);
`;

export const LogoContainer = styled.div`
  display: flex;
  width: 10%;
  align-items: center;
`;

export const RightIconsContainer = styled(LogoContainer)`
  align-items: center;
  /* original design */
  /* width: 15%; */
  width: 60%;
  justify-content: end;
  @media (max-width: 1024px) {
    width: 10%;
  }
  @media (max-width: 680px) {
    width: unset;
  }
`;

export const UserAvatar = styled.div`
  height: 50px;
  width: 50px;
  margin-left: 20px;
  background: #0058b9;
  border-radius: 50px;
  color: white;
  font-size: 18px;
  line-height: 16px;
  font-family: ${globalFont};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  /* &:hover + .LogOutDiv {
    display: flex !important;
  } */
  @media (max-width: 1024px) {
    margin-left: 15px;
  }
  @media (max-width: 680px) {
    width: 35px;
    height: 35px;
    font-size: 14px;
  }
  /* @media (max-width: 800px) {
    width: 40px;
    height: 40px;
    font-size: 14px;
  } */
`;

export const Icon = styled.img`
  cursor: pointer;
  &.settings-icon {
    width: 26px;
    height: 26px;
    @media (max-width: 1024px) {
      margin-left: 15px;
    }
  }
  &.notification-icon {
    width: 26px;
    height: 26px;
    margin-left: 20px;
    cursor: pointer;
    @media (max-width: 1024px) {
      margin-left: 15px;
    }
  }
`;
export const MobileSearchIcon = styled.img`
  display: none;

  @media (max-width: 680px) {
    display: block;
    cursor: pointer;
  }
`;
export const LogOutDiv = styled.div`
  /* display: none !important; */
  display: flex;
  width: 95px;
  height: 32px;
  padding-left: 8px;
  font-family: ${globalFont};
  background: white;
  border-radius: 10px;
  color: #5a5a89;
  font-size: 12px;
  line-height: 16px;
  font-family: ${globalFont};
  display: flex;
  align-items: center;
  cursor: pointer;
  padding-left: 8px;
  position: absolute;
  /* top: calc(20% - 74px); */
  top: 68px;
  z-index: 99;
  right: 1%;
`;
