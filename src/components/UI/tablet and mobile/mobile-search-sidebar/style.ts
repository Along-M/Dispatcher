import styled from "styled-components";
import globalFont from "../../../../types/types";

export const SearchSideBarContainer = styled.div`
  &.search-side-bar-closed {
    position: fixed;
    /* right: -200%; */
    transition: 0.6s;
    overflow-x: hidden;
    height: 100vh;
    z-index: 99;
    width: 0;
    right: 0;
  }
  &.search-side-bar-open {
    position: fixed;
    width: 100vw;
    display: flex;
    flex-direction: column;
    height: 100vh;
    background-color: #f8f8ff;
    position: fixed;
    z-index: 99;
    right: 0;
    top: 0;
    overflow-x: hidden;
    transition: 0.6s;
  }
`;

export const SearchInputContainer = styled.form`
  z-index: 2;
  display: flex;
  width: 100%;
  background: white;
  padding-left: 20px;
  height: 59px;
  align-items: center;
  justify-content: center;
  background: #ffffff;
  border-bottom: 1px solid #d9dbe9;
  /* box-shadow: 0px 32px 64px rgba(0, 0, 0, 0.05); */
`;

export const SearchInput = styled.input`
  display: flex;
  width: 100%;
  font-family: ${globalFont};
  font-size: 14px;
  border: none;
  outline: none;
  border-radius: 0px;
`;
export const ArrowIcon = styled.img`
  padding-right: 15px;
  cursor: pointer;
`;
export const ExitIcon = styled.img`
  padding-right: 35px;
  cursor: pointer;
`;
export const SearchIcon = styled.img`
  padding-right: 35px;
  cursor: pointer;
`;
export const SearchsideBarDataContainer = styled.div`
  height: 500px;
  cursor: pointer;
`;
export const SideBarBackground = styled.div`
  height: 100vh;
  width: 100vw;
  background: rgba(0, 0, 0, 0.7);
  position: fixed;
  z-index: 98;
`;
