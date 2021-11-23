import styled from "styled-components";
import globalFont from "../../../../types/types";

export const CardHeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  &.direction-rtl {
    direction: rtl;
  }
`;
export const CardContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  height: 13rem;
  justify-content: space-between;
  width: 100%;
  @media (max-width: 600px) {
    height: 300px;
    padding: 0.5rem;
    width: unset;
  }
  @media (max-width: 680px) and (min-width: 376px) {
    height: 100%;
    width: unset;
  }
`;

export const Title = styled.h2`
  font-family: ${globalFont};
  font-weight: bold;
  font-size: 18px;
  line-height: 21px;
  color: #14142b;
  margin: 0;
  flex-grow: 0;
  &.direction-rtl {
    direction: rtl;
  }
`;

export const SubTitle = styled.h4`
  font-family: ${globalFont};
  font-size: 14px;
  line-height: 22px;
  margin: 0;
  color: rgba(90, 90, 137, 0.5);
  &.direction-rtl {
    direction: rtl;
  }
`;

export const Date = styled.h4`
  margin: 0;
  font-family: ${globalFont};
  /* font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;  */
  font-size: 14px;
  line-height: 22px;
  display: flex;
  align-items: center;
  letter-spacing: 0.25px;
  color: rgba(90, 90, 137, 0.5);
  flex: none;
  &.direction-rtl {
    direction: rtl;
  }
`;

export const Img = styled.img`
  width: 242px;
  height: 100%;
  object-fit: cover;
  border-radius: 20px 0 0 20px;
  @media (max-width: 680px) {
    border-radius: 20px 20px 0px 0px;
    width: 100%;
    height: 185px;
  }
  @media (max-width: 680px) and (min-width: 376px) {
    height: 45%;
  }
  @media (max-width: 680px) and (min-width: 500px) {
    height: 50%;
  }
`;

export const CardContent = styled.p`
  margin: 0;
  color: #5a5a89;
  &.direction-rtl {
    direction: rtl;
  }
  /* white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 412px; */
  @media (max-width: 900px) and (min-width: 769px) {
    color: #5a5a89;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 60vw;
  }
  @media (max-width: 1400px) and (min-width: 1025px) {
    color: #5a5a89;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 250px;
  }
  @media (max-width: 1400px) and (min-width: 1200px) {
    color: #5a5a89;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 30vw;
  }
  @media (max-width: 1200px) and (min-width: 1024px) {
    color: #5a5a89;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 26vw;
  }
  /* @media (max-width: 1200px) and (min-width: 1024px) {
    color: #5a5a89;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 265px;
  } */
  @media (max-width: 1550px) and (min-width: 1400px) {
    color: #5a5a89;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    /* max-width: 450px; */
    max-width: 32vw;
  }
  @media (max-width: 1024px) and (min-width: 768px) {
    /* color: #5a5a89;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis; */
    /* max-width: 450px; */
    /* max-width: 70vw; */
  }
`;
