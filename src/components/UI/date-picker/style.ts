import styled from "styled-components";
import globalFont from "../../../types/types";

export const DateOptionsContainer = styled.div`
  height: 275px;
  width: 250px;
  overflow-y: scroll;
  overflow-x: hidden;
  margin-top: 5px;
  &.mobile-date-picker {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 100%;
  }
  &.mobile-date-picker > div {
    width: 80%;
  }
  /* &::-webkit-scrollbar {
    background: none;
    width: 6px;
  } */
  /* &::-webkit-scrollbar-thumb {
    border-radius: 6px;
    background-color: #5a5a89;
  } */
  /* @media (max-width: 1024px) {
    width: 60%;
    margin-left: -15px;
    margin-top: 0;
  } */
`;
