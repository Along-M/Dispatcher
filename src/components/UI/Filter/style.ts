import styled from "styled-components";
import globalFont from "../../../types/types";

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
  /* cursor: pointer; */
  &.disabled {
    /* cursor: not-allowed; */
    pointer-events: none;
    background: rgba(0, 0, 0, 0.08);
    opacity: 0.6;
    cursor: not-allowed;
    /* background-color: #f1f1f1; */
    /* height: 45px !important; */
  }

  @media (max-width: 1024px) {
    &#sort-by-filter {
      display: block !important;
      height: 40px;
      width: 120px;
      border-radius: unset;
      display: flex;
      align-items: center;
      z-index: 0;
      /* padding-left: 5px;   */
    }
    &#sort-by-filter div {
      /* display: block !important;
      height: 40px;
      width: 110px;
      border-radius: unset;
      display: flex;
      align-items: center;
      z-index: 0; */
      /* padding-left: 5px; */
      justify-content: flex-start;
      padding: 0 !important;
    }
  }
`;

export const DropdownSelect = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 47px;
  border-radius: 10px;
  padding: 0 15px;
  &#sort-by-filter {
    /* border-radius: 0px 10px 10px 0; */
    justify-content: unset;
    padding: 0;
  }
`;

export const DropdownArrowIcon = styled.img`
  cursor: pointer;
  @media (max-width: 1024px) {
    padding-left: 10px;
  }
`;
export const DropdownDateIcon = styled.img`
  cursor: pointer;
  @media (max-width: 1024px) {
    padding-left: 10px;
  }
`;
export const OptionsContainer = styled.div`
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.08);
  /* height: 86px; */
  height: 125px;
  background: white;
  border-radius: 5px;
  overflow-x: hidden;
  margin-top: 5px;
  cursor: pointer;
  overflow-y: hidden;
  &.sort-by-option-container {
    height: 90px;
  }

  &:hover {
    overflow-y: overlay;
  }
  &::-webkit-scrollbar {
    background: none;
    width: 5px;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 5px;
    background-color: red;
    background-color: #5a5a89;
  }
  /* &::-webkit-scrollbar-thumb {
    border: 10px transparent solid;
  } */
  /* &::-webkit-scrollbar-thumb:hover {
    width: 0;
    height: 0;
  } */

  @media (max-width: 1024px) {
    width: 100%;
    height: 90px;
    /* margin-left: -15px; */
    margin-top: 0;
  }
`;

export const Option = styled.option`
  font-size: 12px;
  line-height: 1rem;
  letter-spacing: 0.1px;
  color: #5a5a89;
  padding-left: 23px;
  height: 28px;
  display: flex;
  align-items: center;
  &.selected {
    background: rgba(223, 224, 235, 0.41);
  }
  :hover {
    background: rgba(223, 224, 235, 0.41);
  }
  @media (max-width: 1024px) {
    padding-left: 15px;
  }
`;

export const FilterHeader = styled.span`
  font-family: ${globalFont};
  font-size: 14px;
  line-height: 22px;
  color: #5a5a89;
`;
