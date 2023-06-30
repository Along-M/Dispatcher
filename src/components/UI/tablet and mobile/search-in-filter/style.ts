import styled from "styled-components";
import globalFont from "../../../../types/types";

export const FilterCointainer = styled.div`
  display: flex;
  justify-content: space-between;
  font-family: ${globalFont};
  background: #ffff;
  z-index: 1;
  padding: 0 20px;
  align-items: center;
  border-bottom: 1px solid #d9dbe9;
  @media (max-width: 1024px) {
    height: 44px !important;
    cursor: pointer;
    min-width: 190px;
    /* width: 100%; */
  }
`;
export const FilterHeader = styled.p`
  font-family: ${globalFont};
  font-size: 14px;
  line-height: 22px;
  color: #5a5a89;
  font-weight: 400;
`;
export const FilterSelectedOptions = styled.span`
  font-family: ${globalFont};
  font-size: 14px;
  line-height: 22px;
  color: rgba(90, 90, 137, 0.5);
`;
