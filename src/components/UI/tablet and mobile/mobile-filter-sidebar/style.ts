import styled from "styled-components";
import globalFont from "../../../../types/types";

export const FilterSideBarContainer = styled.div`
  position: fixed;
  width: 80%;
  display: flex;
  flex-direction: column;
  height: 100vh;
  background-color: white;
  position: fixed;
  z-index: 99;
  right: 0;
  top: 0;
  overflow-x: hidden;
  transition: 0.9s;
  justify-content: space-between;

  &.filter-side-bar-closed {
    position: fixed;
    /* right: -200%; */
    transition: 0.6s;
    overflow-x: hidden;
    height: 100vh;
    z-index: 99;
    width: 0;
    right: 0;
  }
  &.filter-side-bar-open {
    position: relative;
    width: 50vw;
    display: flex;
    flex-direction: column;
    height: 100vh;
    background-color: white;
    position: fixed;
    z-index: 99;
    right: 0;
    top: 0;
    overflow-x: hidden;
    transition: 0.6s;
    @media (max-width: 600px) {
      width: 80vw;
    }
  }
`;

export const FilterHeaderContainer = styled.h2`
  display: flex;
  width: 100%;
  background: white;
  align-items: center;
  justify-content: center;
  background: #ffffff;
  border-bottom: 1px solid #d9dbe9;
  font-family: ${globalFont};
  font-weight: 500;
  font-size: 16px;
  line-height: 22px;
  letter-spacing: 0.25px;
  color: #5a5a89;
  justify-content: start;
  padding-left: 20px;
  margin: 0;
  height: 74px;
  @media (max-width: 1024px) {
    font-size: 14px;
    /* height: 45px !important; */
    &.main-side-bar-header {
      font-size: 16px;
      height: 74px;
    }
  }
`;

export const ArrowReturnToFilters = styled.img`
  padding-right: 15px;
  cursor: pointer;
`;

export const ContentContainer = styled.div`
  min-width: 50vw;
  overflow-y: scroll;
  overflow-x: hidden;

  @media (max-width: 600px) {
    min-width: 80vw;
    overflow-y: scroll;
    overflow-x: hidden;
  }
`;
export const BtnContainer = styled.div`
  padding: 10px 50px;
  background-color: #f8f8ff;
  justify-content: center;
  display: flex;
  @media (max-width: 1024px) {
    padding: 20px 50px;
    min-width: 190px;
  }
`;
