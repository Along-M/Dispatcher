import styled from "styled-components";
import globalFont from "../../../types/types";

export const Modalcontainer = styled.div``;
export const ModalContant = styled.div`
  padding: 0.5rem 1rem 1.5rem 1rem;
`;

export const ModalDiv = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 10;
  background: rgb(0 0 0 / 35%);
`;
export const ModalHeader = styled.header`
  /* background: gray; */
  padding: 0.5rem 1rem 0.5rem 1rem;
`;
export const ModalH2header = styled.h2`
  margin: 0;
  color: black;
  font-weight: 200;
  font-size: 24px;
  font-family: ${globalFont}; ;
`;
export const P = styled.p`
  margin: 0;
  color: #5a5a89;
  font-size: 18px;
  font-family: ${globalFont};

  /* padding: 0.8rem; */
`;
export const Footer = styled.footer`
  padding: 0rem 1rem 0.5rem 1rem;
  display: flex;
  justify-content: center;
  background-color: #f8f8ff;
`;
export const Button = styled.button`
  background: transparent;
  border-radius: 20px;
  width: 125px;
  border: none;
  height: 36px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 26px;
  color: black;
  height: 36px;
  cursor: pointer;
`;
export const Card = styled.div`
  position: fixed;
  top: 30vh;
  /* left: 10%;
  width: 50%; */
  z-index: 100;
  overflow: hidden;
  background: white;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  border-radius: 10px;
  left: calc(50% - 20rem);
  width: 40rem;
  @media (max-width: 768px) {
    left: calc(50% - 12.5rem);
    width: 25rem;
  }
  @media (max-width: 500px) {
    left: calc(50% - 8rem);
    width: 16rem;
  }
`;

// @media (min-width: 768px) {
//   .modal {
//     left: calc(50% - 20rem);
//     width: 40rem;
//   }
// }
