import styled from "styled-components";
import globalFont from "../../../types/types";

export const SearchBarContainer = styled.form`
  width: 423px;
  transition: 0.6s;

  /* original design */
  /* width: 100%; */
  max-width: 1920px;
  z-index: 2;
  margin-top: 12.5px;
  position: absolute;
  left: 12.5%;
  @media (min-width: 1024px) {
    &.wide {
      width: 660px;
      transition: 0.6s;

      /* position: unset; */
    }
    &.wide #free-search-input {
      width: 440px;
    }
  }
  @media (max-width: 1024px) {
    width: 423px;
    position: unset;
  }
  @media (max-width: 680px) {
    display: none;
    position: unset;
    border-bottom: 1px solid #d9dbe9;
  }
  @media (min-width: 1920px) {
    /* position: a; */
    /* max-width: 1440px; */
    left: calc((100% - 1440px) / 2);
    /* calc((98.6% - 1440px)/2) */
  }
`;
export const SearchInputContainer = styled.div`
  align-items: center;
  z-index: 2;
  display: flex;
  width: 100%;
  /* original design */
  /* width: 423px; */
  background: white;
  border-radius: 10px;
  height: 50px;
  cursor: pointer;
`;

export const SearchInput = styled.input`
  display: flex;
  font-family: ${globalFont};
  font-size: 14px;
  line-height: 22px;
  /* original design */
  /* width: 55%; */
  width: 210px;
  border: none;
  outline: none;
  cursor: pointer;
`;

export const Icon = styled.img`
  background: white;
  border-radius: 10px 0px 0px 10px;
  padding-right: 15px;
  padding-left: 15px;
  cursor: pointer;
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
  /* original design */
  /* width: 425px; */
  width: 100%;
  background: white;
  z-index: 2;
  margin-top: 2px;
  position: relative;
  height: 125px;
  overflow: scroll;
  box-shadow: 0px 4px 12px rgb(0 0 0 / 8%);
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
