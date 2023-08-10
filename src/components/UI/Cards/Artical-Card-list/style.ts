import styled from "styled-components";

export const CardListContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: baseline;
  background: #F8F8FF;
  gap: 1.5rem;
  /* width: 70%; */
  overflow-y: scroll !important;
  /* overflow: scroll; */
  /* disapear in media query */
  margin-right:10px;
  padding-right: 20px;
  height: 1250px;

  /* &::-webkit-scrollbar {
    background: none;
    width: 5px;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 6px;
    background-color: #5A5A89;
  } */
`;

