import styled from "styled-components";
import globalFont from "../types";



export const SearchSideBarContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  background-color: #F8F8FF;
  width: 80%;
  position: fixed;
  z-index: 1;
  right: 0;
  top:0;
  overflow-x: hidden;
  transition: 0.5s;
`

export const LastSearchesContainer = styled.div`
  /* width: 100%; */
  padding: 0 20px;
`

export const SearchInputContainer = styled.div`
  z-index:2;
  display: flex;
  width: 100%;
  background: white;
  padding-left:20px;
  /* border-radius: 10px; */
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
  /* line-height: 22px; */
  border: none;
  outline: none;
  border-radius: 0px;
`
export const ArrowIcon = styled.img`
  /* background-color: white;s */
  padding-right:15px;

`
