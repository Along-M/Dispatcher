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
import { useAuth0 } from "@auth0/auth0-react";
import useWindowSize from "../../../helpers/custom-hooks/useWindowSize";

// import MobileSearchBar from "../mobile-search-sidebar/MobileSearchBar";

export interface HeaderProps {
  children?: React.ReactChild | React.ReactChild[];
  openSearchSideBar: (bool: boolean) => void;
}
const Header = ({ children, openSearchSideBar }: HeaderProps): JSX.Element => {
  const windowSize = useWindowSize();
  // const isMobile = windowSize.width <= 680 ? true : false;
  const [isSearchSidebarOpen, setIsSearchSidebarOpen] = useState<boolean>(
    false
  );
  const { logout } = useAuth0();

  const openSideBar = () => {
    openSearchSideBar(true);
  };
  // const closeSearchSideBar = (): void => {
  //   setIsSearchSidebarOpen(false);
  // };
  return (
    <HeaderContainer>
      {/* <MobileSearchBar
        isOpen={isSearchSidebarOpen}
        closeSidebar={closeSearchSideBar}
      /> */}
      <LogoContainer>
        <Icon src={logoIcon} />
      </LogoContainer>
      {windowSize.width > 680 && <Search />}
      <RightIconsContainer>
        {/* {isMobile && ( */}
        <MobileSearchIcon
          src={searchIcon}
          className="notification-icon"
          onClick={openSideBar}
        />
        {/* )} */}
        <Icon src={settingsIcon} className="settings-icon" />
        <Icon src={notificationIcon} className="notification-icon" />
        <UserAvatar
          onClick={() => logout({ returnTo: window.location.origin })}
        >
          AG
        </UserAvatar>
      </RightIconsContainer>
    </HeaderContainer>
  );
};

export default Header;
