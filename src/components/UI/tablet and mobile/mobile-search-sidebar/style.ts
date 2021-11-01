import styled from "styled-components";
import globalFont from "../../types";



export const SearchSideBarContainer = styled.div`

  &.search-side-bar-closed {
    position: fixed;
    /* right: -200%; */
    transition: 1.1s; 
    overflow-x: hidden;
    height: 100vh;
    z-index:99;
    width: 0;
    right:0;
  }  
  &.search-side-bar-open {
    position: fixed;
    width: 80%;
    display: flex;
    flex-direction: column;
    height: 100vh;
    background-color: #F8F8FF;
    position: fixed;
    z-index: 99;
    right: 0;
    top:0;
    overflow-x: hidden;
    transition: 0.9s;
  } 
`

export const SearchInputContainer = styled.div`
  z-index:2;
  display: flex;
  width: 100%;
  background: white;
  padding-left:20px;
  height: 75px;
  align-items: center;
  justify-content: center;
  background: #FFFFFF;
  border: 1px solid #D9DBE9;
  box-shadow: 0px 32px 64px rgba(0, 0, 0, 0.05);
`

export const SearchInput = styled.input`
  display: flex;
  width: 100%;
  font-family: ${globalFont};
  font-size: 14px;
  border: none;
  outline: none;
  border-radius: 0px;
`
export const ArrowIcon = styled.img`
  padding-right:15px;
`
export const ExitIcon = styled.img`
  padding-right:35px;
`
export const SearchIcon = styled.img`
  padding-right:35px;
`
