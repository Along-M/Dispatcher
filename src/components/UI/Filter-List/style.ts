import styled from "styled-components";
import globalFont from "../types";


export const FiltersContainer = styled.section`
  display: flex;
  max-width: 100%;
  gap: 1.25rem;
  border-bottom: 1px solid #D9DBE9;
  padding:20px 0;
  max-width: 1425px;
  @media (max-width: 1024px) {
    height: 44px;
    justify-content: space-between;
    padding: 0 15px;
    align-items: center;
    background:white;
    
  }
`;

export const MobileSortByFilterHeader = styled.h4`
  font-family: ${globalFont};
  font-size: 16px;
  line-height: 22px;
`;

export const DropdownArrowIcon = styled.img`
  ` 

