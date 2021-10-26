import styled from "styled-components";
import globalFont from "../types";



export const FilterCointainer = styled.div`
  width: 175px;
  height: 47px;
  font-family: ${globalFont};
  font-weight: 500;
  font-size: 14px;
  line-height: 1.4rem;
  color: white;
  border-radius: 10px;
  background: #ffff;
  z-index: 1;
  @media (max-width: 1024px) {
  display: none;
}
  &.nav-bar-filter-container {
    width: 40%;
  }
`


export const DropdownSelect = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 47px;
  border-radius: 10px;
  padding: 0 15px;
  /* &.nav-bar-filter {
    border-radius: 0px 10px 10px 0;
    justify-content: space-evenly;
    margin:0;
    height: 100%;
  } */
`;

export const DropdownArrowIcon = styled.img`
  ` 
export const OptionsContainer = styled.div`
    height: 125px;
    background: white;
    border-radius: 5px;
    overflow: scroll;
    margin-top: 5px;
    &::-webkit-scrollbar {
    background: none;
    width: 6px;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 6px;
    background-color: #5A5A89;
  }
  `;

export const Option = styled.option`
  font-family: Mulish;
  font-size: 12px;
  line-height: 1rem;
  letter-spacing: 0.1px;
  color: #5A5A89; 
  padding-left: 23px;
  height: 28px;
  display:flex;
  align-items: center;
  :hover{
    background: rgba(223, 224, 235, 0.41);
  }
  `;

export const FilterHeader = styled.span`
    font-family: ${globalFont};
    font-size: 14px;
    line-height: 22px;
    color: #5A5A89;
`

