import styled from "styled-components";

// export const CardContainer = styled.div`
//   display: flex;
//   /* flex-direction: row; */
//   /* align-items: center; */
//   background: #FFFFFF;
//   border: 1px solid #D9DBE9;
//   box-shadow: 0px 32px 64px rgba(0, 0, 0, 0.05);
//   border-radius: 20px;
//   height: 15rem;
//   max-width: 100%;
//   &.data-card {
//     width: 360px;
//     height: 310px;
//     flex-direction: column;
//     align-items: baseline;
//     padding: 1.6rem;
//     background-color: red;
//     border: 5px solid red
//   }
// `;


export const CardContainer = styled.div`
  display: flex;
  background: #FFFFFF;
  box-shadow: 0px 32px 64px rgba(0, 0, 0, 0.05);
  border-radius: 20px;
  height: 15rem;
  max-width: 100%;
  &.data-card {
    width: 360px;
    height: 310px;
    flex-direction: column;
    align-items: baseline;
    padding: 1.6rem;
  }
`;