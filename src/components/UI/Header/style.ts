import styled from "styled-components";
import globalFont from "../../../types/types";

export const HeaderContainer = styled.section`
  display: flex;
  background: #262146;
  height: 4.6rem;
  justify-content: space-between;
  padding: 0 20px;
`;

export const LogoContainer = styled.div`
  display: flex;
  width: 15%;
  align-items: center;
`;

export const RightIconsContainer = styled(LogoContainer)`
  align-items: center;
  width: 15%;
  justify-content: end;
  @media (max-width: 1024px) {
    width: 20%;
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
  @media (max-width: 1024px) {
    margin-left: 15px;
  }
  @media (max-width: 680px) {
    width: 35px;
    height: 35px;
    font-size: 14px;
  }
`;

export const Icon = styled.img`
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
    @media (max-width: 1024px) {
      margin-left: 15px;
    }
  }
`;
export const MobileSearchIcon = styled.img`
  display: none;
  @media (max-width: 680px) {
    display: block;
  }
`;
