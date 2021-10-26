import styled from "styled-components";
import { setConstantValue } from "typescript";
import Data from "../../../Data";
import { OptionsContainer } from "../Filter/style";
import globalFont from "../types";


export const SearchBarContainer = styled.div`
  width: 100%;
  max-width:1920px;
  z-index:2;
  margin-top:12.5px;
  @media (max-width: 1024px) {
    width: unset;
  }
  @media (max-width: 680px) {
    display:none;
  }
  @media (min-width: 1920px) {
    width: 97%;
  }
  `
export const SearchInputContainer = styled.div`
  align-items: center;
  z-index:2;
  display: flex;
  width: 423px;
  background: white;
  border-radius: 10px;
  height: 50px;
`

// export const SearchInput = styled.input`
//   display: flex;
//   font-family: ${globalFont};
//   font-size: 14px;
//   line-height: 22px;
//   width: 60%;
//   border: none;
//   outline: none;
// `

export const Icon = styled.img`
    /* background: white;
    border-radius: 10px 0px 0px 10px;
    padding-right: 5px;
    padding-left: 5px; */
    `
export const CloseIcon = styled.img`
    width: 11px;
    height: 11px;
    align-self: center;
    `
// export const LogoIcon = styled(Icon)`
//     background: white;
//     border-radius: 10px 0px 0px 10px;
//     padding-right: 5px;
//     padding-left: 5px;
//     `

// export const Divider = styled.div`
//     border: 1px solid #d9dbe9;
//     margin-top: 5px;
//     margin-bottom: 5px;
//     height: 30px;
//     @media (max-width: 1024px) {
//     display: none;
//   }
// `
export const LastSearchesContainer = styled.div`
    border-radius: 10px;
    width: 423px;
    background: white;
    z-index:2;
    margin-top:2px;
    position: relative;
`
export const LastSearchesHeaders = styled.div`
  display: flex;
  justify-content: space-between;
  font-family: ${globalFont};
  font-weight: 500;
  font-size: 12px;
  line-height: 22px;
  color:#5A5A89;
  padding-top:15px;
  /* margin-right: 15px;
  margin-left: 15px;
  margin-bottom: 10px;
  padding-top: 10px; */
`
export const LastSearchesOptionContainer = styled.div`
  display: flex;
  justify-content: space-between;
  font-family: ${globalFont};
  /* font-weight: bold; */
  /* font-size: 12px; */
  line-height: 16px;
  color:#5A5A89;
  /* padding-bottom: 10px;
  margin-left: 15px;
  margin-right: 15px; */

  /* mobile design */
  font-size: 14px;
  padding: 20px 0;
  border-bottom: 1px solid #D9DBE9;
`


export const Option = styled.option`
  font-weight: 300;
`
export const ClearBtn = styled.div`
/* mobile design */
    background: #D9DBE9;
    width: 50px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
`
export const RecentSearchedheader = styled.div`
`

