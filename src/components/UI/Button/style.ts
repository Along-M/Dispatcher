import styled from "styled-components";
import globalFont from "../../../types/types";

export const StyledBtn = styled.button`
  border-radius: 20px;
  width: 242px;
  display: flex;
  flex-direction: row;
  align-items: center;
  border: none;
  height: 36px;
  font-family: ${globalFont};
  /* font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif; */
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 26px;
  color: white;
  height: 36px;
  background: #0058b9;
  align-self: flex-end;
  justify-content: center;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }

  &.welcome-btn {
    width: 650px;
    border-radius: 10px;
    align-self: auto;
    justify-content: center;
    @media (max-width: 1024px) {
      width: 100%;
    }
  }
  &.secondary-gray-btn {
    background: #d9dbe9;
    color: #5a5a89;
  }
  &.text-transparent-btn {
    background: none;
    color: #5a5a89;
    &:hover {
      background: rgba(217, 219, 233, 0.3);
    }
    &.primary-blue-btn .icon-primary-btn {
      margin-left: 8px;
    }
  }
  @media (max-width: 1024px) {
    /* align-self: unset;
    width: unset;
    margin-top: 10px;
    margin: 10px 0 10px 0;
    justify-self: auto;
  } */
    &.view-results-btn {
      padding: 20px 1px;
      width: 190px;
      transition: 0.6s;
      height: 46px;
    }
  }
  @media (max-width: 600px) {
    align-self: unset;
    width: unset;
    margin-top: 10px;
    margin: 10px 0 0px 0;
    justify-self: auto;

    &.view-results-btn {
      padding: 20px 25px;
      height: 46px;
      width: 157px;
      margin: 0;
      transition: 0.6s;
    }
  }
`;

export const ArrowIcon = styled.img`
  margin-left: 10px;
`;
