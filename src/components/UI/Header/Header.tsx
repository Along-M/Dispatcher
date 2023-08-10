import * as React from "react";
import { HeaderContainer } from "./style";
import {
  Icon,
  LogoContainer,
  RightIconsContainer,
  UserAvatarDiv,
} from "./style";
// import logoIcon from "../../../assets/icons/LOGO.svg";
import logoIcon from "../../../assets/icons/DispatcherLogo.svg";
import userAvataIcon from "../../../assets/icons/UserAvatar.svg";
import settingsIcon from "../../../assets/icons/settings.svg";
import notificationIcon from "../../../assets/icons/notifications.svg";
import Search from "../Search/Search";

export interface HeaderProps {
  children?: React.ReactChild | React.ReactChild[];
}

const Header = ({ children }: HeaderProps) => {
  return (
    <HeaderContainer>
      <LogoContainer>
        <Icon src={logoIcon} />
      </LogoContainer>
      <Search></Search>
      <RightIconsContainer>
        <Icon src={settingsIcon} className="settings-icon" />
        <Icon src={notificationIcon} className="notification-icon" />
        <UserAvatarDiv>AG</UserAvatarDiv>
        {/* <Icon src={userAvataIcon} className="user-avatar-icon" /> */}
      </RightIconsContainer>
    </HeaderContainer>
  );
};

export default Header;
