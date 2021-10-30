import * as React from "react";
import { useState } from "react";
import { HeaderContainer } from "./style";
import {
  Icon,
  LogoContainer,
  RightIconsContainer,
  UserAvatar,
  MobileSearchIcon,
} from "./style";
import logoIcon from "../../../assets/icons/DispatcherLogo.svg";
import settingsIcon from "../../../assets/icons/settings.svg";
import notificationIcon from "../../../assets/icons/notifications.svg";
import searchIcon from "../../../assets/icons/search.svg";
import Search from "../Search/Search";
import MobileSearchBar from "../Mobile-search-sidebar/MobileSearchBar";

export interface HeaderProps {
  children?: React.ReactChild | React.ReactChild[];
}

const Header = ({ children }: HeaderProps) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);
  const openSideBar = () => {
    setIsSidebarOpen(true);
  };
  const closeSidebar = (): void => {
    setIsSidebarOpen(false);
  };
  return (
    <HeaderContainer>
      <MobileSearchBar isOpen={isSidebarOpen} closeSidebar={closeSidebar} />
      <LogoContainer>
        <Icon src={logoIcon} />
      </LogoContainer>
      <Search></Search>
      <RightIconsContainer>
        <MobileSearchIcon
          src={searchIcon}
          className="notification-icon"
          onClick={openSideBar}
        />
        <Icon src={settingsIcon} className="settings-icon" />
        <Icon src={notificationIcon} className="notification-icon" />
        <UserAvatar>AG</UserAvatar>
      </RightIconsContainer>
    </HeaderContainer>
  );
};

export default Header;
