import styled from "styled-components";
import globalFont from "../types";



export const SortByContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 80px;
  @media (min-width: 1025px) {
    display: none;
  }
`
export const FilterIcon = styled.img`
  @media (min-width: 1025px) {
    display: none;
  }
  ` 

export const DropdownArrowIcon = styled.img`
  @media (min-width: 1025px) {
    display: none;
  }
  ` 

export const MobileFilterBarText = styled.span`
  font-family: ${globalFont};
  font-size: 16px;
  line-height: 22px;
  color: #5A5A89;
  @media (min-width: 1025px) {
    display: none;
  }
`


