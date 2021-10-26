import styled from "styled-components";

export const CardListContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: baseline;
  background: #F8F8FF;
  gap: 1.5rem;
  overflow-y: scroll;
  margin-right:10px;
  padding-right: 20px;
  height: 100vh;
  width: 70%;
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
    overflow: unset;
    margin: 0;
    padding: 0;
    margin: 0 auto;
    width: unset;
    height: unset;
    /* padding: 0 20px; */
  }
`;

