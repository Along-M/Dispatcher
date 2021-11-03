import * as React from "react";
import { useState } from "react";
import {
  Icon,
  LogoContainer,
  RightIconsContainer,
  UserAvatar,
  MobileSearchIcon,
  HeaderContainer,
} from "./style";
import logoIcon from "../../../assets/icons/DispatcherLogo.svg";
import settingsIcon from "../../../assets/icons/settings.svg";
import notificationIcon from "../../../assets/icons/notifications.svg";
import searchIcon from "../../../assets/icons/search.svg";
import Search from "../search-bar/Search";
import MobileSearchBar from "../tablet and mobile/mobile-search-sidebar/MobileSearchBar";
// import MobileSearchBar from "../mobile-search-sidebar/MobileSearchBar";

export interface HeaderProps {
  children?: React.ReactChild | React.ReactChild[];
}

const Header = ({ children }: HeaderProps) => {
  const [isSearchSidebarOpen, setIsSearchSidebarOpen] = useState<boolean>(
    false
  );
  const openSideBar = () => {
    setIsSearchSidebarOpen(true);
  };
  const closeSidebar = (): void => {
    setIsSearchSidebarOpen(false);
  };
  return (
    <HeaderContainer>
      <MobileSearchBar
        isOpen={isSearchSidebarOpen}
        closeSidebar={closeSidebar}
      />
      <LogoContainer>
        <Icon src={logoIcon} />
      </LogoContainer>
      <Search />
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
