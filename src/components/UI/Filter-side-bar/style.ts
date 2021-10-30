import styled from "styled-components";
import globalFont from "../types";

export const FilterSideBarContainer = styled.div`

position: fixed;
    width: 65%;
    display: flex;
    flex-direction: column;
    height: 100vh;
    background-color: white;
    position: fixed;
    z-index: 99;
    right: 0;
    top:0;
    overflow-x: hidden;
    transition: 0.9s; 
    justify-content: space-between;

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
    position: relative;
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
`;

export const FilterHeaderContainer = styled.div`
  z-index:2;
  display: flex;
  width: 100%;
  background: white;
  height: 80px;
  align-items: center;
  justify-content: center;
  background: #FFFFFF;
  border-bottom: 1px solid #D9DBE9;
  font-family:  ${globalFont};
  font-weight: 500;
  font-size: 16px;
  line-height: 22px;
  letter-spacing: 0.25px;
  color: #5A5A89;
  justify-content: start;
  padding-left:20px;
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
export const BtnContainer = styled.div`
  padding: 20px 70px;
  background-color: #F8F8FF;
  justify-content: center;
  display: flex;
  
`