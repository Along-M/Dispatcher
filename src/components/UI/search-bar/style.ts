import styled from "styled-components";
import globalFont from "../../../types/types";

export const SearchBarContainer = styled.div`
  width: 100%;
  max-width: 1920px;
  z-index: 2;
  margin-top: 12.5px;
  @media (max-width: 1024px) {
    width: unset;
  }
  @media (max-width: 680px) {
    display: none;
  }
  @media (min-width: 1920px) {
    max-width: 1440px;
  }
`;
export const SearchInputContainer = styled.div`
  align-items: center;
  z-index: 2;
  display: flex;
  width: 423px;
  background: white;
  border-radius: 10px;
  height: 50px;
`;

export const SearchInput = styled.input`
  display: flex;
  font-family: ${globalFont};
  font-size: 14px;
  line-height: 22px;
  width: 60%;
  border: none;
  outline: none;
`;

export const Icon = styled.img`
  background: white;
  border-radius: 10px 0px 0px 10px;
  padding-right: 5px;
  padding-left: 5px;
`;
export const Divider = styled.div`
  border: 1px solid #d9dbe9;
  margin-top: 5px;
  margin-bottom: 5px;
  height: 30px;
  @media (max-width: 1024px) {
    display: none;
  }
`;
export const LastSearchesContainer = styled.div`
  border-radius: 10px;
  width: 425px;
  background: white;
  z-index: 2;
  margin-top: 2px;
  position: relative;
  height: 125px;
  overflow: scroll;
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
  margin-left: 15px;
  margin-right: 15px;
`;

export const Option = styled.option``;
