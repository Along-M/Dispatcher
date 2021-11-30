import * as React from "react";
import { useRef, useState } from "react";
import {
  Icon,
  LogoContainer,
  RightIconsContainer,
  UserAvatar,
  MobileSearchIcon,
  HeaderContainer,
  LogOutDiv,
} from "./style";
import logoIcon from "../../../assets/icons/DispatcherLogo.svg";
import settingsIcon from "../../../assets/icons/settings.svg";
import notificationIcon from "../../../assets/icons/notifications.svg";
import searchIcon from "../../../assets/icons/search.svg";
import Search from "../search-bar/Search";
import MobileSearchBar from "../tablet and mobile/mobile-search-sidebar/MobileSearchBar";
import { useAuth0 } from "@auth0/auth0-react";
import useWindowSize from "../../../helpers/custom-hooks/useWindowSize";
import useOutsideClick from "../../../helpers/custom-hooks/useClickOutside";

// import MobileSearchBar from "../mobile-search-sidebar/MobileSearchBar";

export interface HeaderProps {
  children?: React.ReactChild | React.ReactChild[];
  openSearchSideBar: (bool: boolean) => void;
  onClick: () => void;
}
const Header = ({
  children,
  openSearchSideBar,
  onClick,
}: HeaderProps): JSX.Element => {
  const windowSize = useWindowSize();
  // const isMobile = windowSize.width <= 680 ? true : false;
  const [isSearchSidebarOpen, setIsSearchSidebarOpen] = useState<boolean>(
    false
  );
  const [showLogOutDiv, setShowLogOutDiv] = useState<boolean>(false);
  const { logout } = useAuth0();
  // const logOutDiv = useRef<HTMLDivElement>(null);
  // useOutsideClick(logOutDiv, setShowLogOutDiv(false));
  const closeLogOutDiv = () => {
    setShowLogOutDiv(false);
  };

  const openSideBar = () => {
    openSearchSideBar(true);
  };
  // const closeSearchSideBar = (): void => {
  //   setIsSearchSidebarOpen(false);
  // };

  const handleLogoClick = () => {
    window.location.reload();
  };
  return (
    <HeaderContainer onClick={onClick}>
      <LogoContainer>
        <Icon src={logoIcon} onClick={handleLogoClick} />
      </LogoContainer>
      {windowSize.width > 680 && <Search />}
      <RightIconsContainer>
        <MobileSearchIcon
          src={searchIcon}
          className="notification-icon"
          onClick={openSideBar}
        />
        {/* <Icon src={settingsIcon} className="settings-icon" />
        <Icon src={notificationIcon} className="notification-icon" /> */}
        <UserAvatar
          onClick={() => logout({ returnTo: window.location.origin })}
          // onClick={() => setShowLogOutDiv(true)}
          // ref={logOutDiv}
        >
          AG
        </UserAvatar>
        {/* {showLogOutDiv && ( */}
        {windowSize.width > 1024 && (
          <LogOutDiv
            // onClick={() => logout({ returnTo: window.location.origin })}
            // ref={logOutDiv}
            className={"LogOutDiv"}
          >
            Sign Out
          </LogOutDiv>
        )}
      </RightIconsContainer>
    </HeaderContainer>
  );
};

export default Header;
