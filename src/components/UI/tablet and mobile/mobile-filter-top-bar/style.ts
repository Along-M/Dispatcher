import styled from "styled-components";
import globalFont from "../../../../types/types";

export const FilterTopBarContainer = styled.section`
  display: flex;
  justify-content: space-between;
  background: white;
  height: 45px;
  align-items: center;
  padding: 0 15px;
  z-index: 1;
  border-bottom: 1px solid #d9dbe9;
`;
export const SortBySpan = styled.span`
  color: #5a5a89;
  opacity: 0.3;
  padding: 0 20px;
`;
export const FilterIcon = styled.img`
  width: 28px;
  height: 28px;
`;
// export const DropdownArrowIcon = styled.img`
//   @media (min-width: 1025px) {
//     display: none;
//   }
//   `

// export const MobileFilterBarText = styled.span`
//   font-family: ${globalFont};
//   font-size: 16px;
//   line-height: 22px;
//   color: #5A5A89;
//   @media (min-width: 1025px) {
//     display: none;
//   }
// `
