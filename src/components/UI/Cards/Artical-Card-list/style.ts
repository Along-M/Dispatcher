import styled from "styled-components";

export const CardListContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: baseline;
  background: #f8f8ff;
  gap: 1.5rem;
  overflow-y: scroll;
  margin-right: 10px;
  padding-right: 20px;
  height: 100vh;
  width: 70%;
  &.mobile-artical-container {
    width: 90%;
    margin-top: 5%;
    margin-left: auto;
    margin-right: auto;
  }
  /* &::-webkit-scrollbar {
    background: none;
    width: 5px;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 6px;
    background-color: #5A5A89;
  } */
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
