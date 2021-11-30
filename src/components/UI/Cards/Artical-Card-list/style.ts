import styled from "styled-components";

export const CardListContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: baseline;
  background: #f8f8ff;
  gap: 1rem;
  overflow-y: scroll;
  /* margin-right: 16px; */
  padding-right: 16px;
  margin-right: 16px;
  height: 100vh;
  /* width: calc(70% + 10px); */
  width: 70%;
  &.mobile-artical-container {
    width: 90%;
    margin-top: 5%;
    margin-left: auto;
    margin-right: auto;
  }
  @media (min-width: 1024px) {
    &::-webkit-scrollbar {
      background: none;
      width: 10px;
    }
    &::-webkit-scrollbar-thumb {
      border-radius: 10px;
      background-color: #a0a3bd;
      height: 150px;
      border-radius: 10px;
    }
    &::-webkit-scrollbar-button {
      width: 0px; //for horizontal scrollbar
      height: 0px; //for vertical scrollbar
    }
    &::-webkit-scrollbar-track {
      /* margin-top: 10px; */
      margin-bottom: 0px;
    }
    &::-webkit-scrollbar-track-piece:end {
      /* background: transparent; */
      margin-bottom: 10px;
      &::-webkit-scrollbar-track-piece:start {
        /* background: transparent; */
        margin-top: 10px;
      }
    }
    &::-webkit-scrollbar-track-piece {
      height: 30px;
      width: 30px;
    }
  }
  @media (max-width: 1024px) {
    &::-webkit-scrollbar {
      display: none;
    }
    &::-webkit-scrollbar-thumb {
      display: none;
    }
  }
  @media (min-width: 1920px) {
    margin-right: 0;
  }
  /* @media (min-width: 1025px) and (max-width: 1400px) {
    width: 75%;
  } */

  @media (max-width: 1024px) {
    /* overflow: unset; */
    /* margin: 0; */
    /* padding: 0; */
    /* margin: 0 auto; */
    /* width: unset; */
    /* height: fit-content; */
    /* align-items: center; */
    /* justify-content: center; */
    /* overflow: scroll; */
    /* height: 100%; */
    /* height: unset; */
    /* padding: 0 20px; */
    /* height: calc(100vh - 50%); */
    width: 100%;
    padding-right: unset;
    margin-right: unset;
    padding-left: 20px;
    padding-right: 20px;
  }
  @media (max-width: 600px) {
    /* overflow: unset; */
    margin: 0;
    padding: 0;
    /* margin: 0 auto; */
    /* width: unset; */
    /* height: fit-content; */
    padding-left: 16px;
    padding-right: 16px;
    align-items: center;
    /* justify-content: center; */
    overflow: scroll;
    /* height: unset; */
    /* height: 100%; */
    /* padding: 0 20px; */
  }
`;
