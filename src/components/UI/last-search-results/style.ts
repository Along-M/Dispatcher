import styled from "styled-components";
import globalFont from "../../../types/types";

export const LastSearchesContainer = styled.div`
  border-radius: 10px;
  width: 425px;
  background: white;
  z-index: 2;
  margin-top: 2px;
  position: relative;
  height: 125px;
  overflow: scroll;
  @media (max-width: 680px) {
    /* padding: 0 20px; */
    /* padding: 0 20px; */
    width: auto;
    border-radius: none;
    width: none;
    background: none;
    z-index: none;
    margin-top: unset;
    position: none;
    height: auto;
  }
`;
export const CloseIcon = styled.img`
  cursor: pointer;
  @media (max-width: 680px) {
    width: 11px;
    height: 11px;
    align-self: center;
  }
`;

export const LastSearchesHeaders = styled.div`
  display: flex;
  justify-content: space-between;
  font-family: ${globalFont};
  font-weight: bold;
  font-size: 12px;
  line-height: 22px;
  color: #5a5a89;
  margin-right: 15px;
  margin-left: 15px;
  margin-bottom: 10px;
  padding-top: 10px;
  @media (max-width: 680px) {
    font-weight: 500;
    font-size: 12px;
    line-height: 22px;
    color: #5a5a89;
    padding-top: 15px;
    margin: unset;
    padding: 20px 20px;
  }
`;
export const LastSearchesOptionContainer = styled.div`
  display: flex;
  justify-content: space-between;
  font-family: ${globalFont};
  font-weight: bold;
  font-size: 12px;
  line-height: 16px;
  color: #5a5a89;
  padding-bottom: 10px;
  /* margin-left: 15px;
  margin-right: 15px; */
  padding-left: 10px;
  padding-right: 10px;
  /* cursor: pointer; */
  @media (max-width: 680px) {
    margin: unset;
    font-size: 14px;
    padding: 20px;
    border-bottom: 1px solid #d9dbe9;
  }
  :hover {
    background-color: rgba(90, 90, 137, 0.05);
  }
`;

export const Option = styled.option`
  cursor: pointer;
  @media (max-width: 680px) {
    font-weight: 300;
  }
`;
export const ClearBtn = styled.div`
  cursor: pointer;
  @media (max-width: 680px) {
    background: #d9dbe9;
    width: 50px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
export const RecentSearchedheader = styled.div``;
