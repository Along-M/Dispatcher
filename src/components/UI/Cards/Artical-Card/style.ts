import styled from "styled-components";
import globalFont from "../../../../types/types";

export const CardHeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  &.direction-rtl {
    direction: rtl;
  }
  @media (max-width: 680px) and (min-width: 300px) {
    margin: 0px 0 10px 0;
  }
`;
export const CardContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  height: 13rem;
  justify-content: space-between;
  /* width: 65%; */
  width: 100%;
  @media (max-width: 600px) {
    height: fit-content;
    /* padding: 0.5rem; */
    width: unset;
    justify-content: unset;
  }
  /* @media (max-width: 680px) and (min-width: 376px) {
    height: fit-content;
    width: unset;
  } */
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
  @media (max-width: 680px) and (min-width: 300px) {
    margin: 0px 0 10px 0;
  }
`;

export const SubTitle = styled.h4`
  font-family: ${globalFont};
  font-size: 14px;
  line-height: 22px;
  margin: 0;
  color: rgba(90, 90, 137, 0.5);
  font-weight: 400;
  @media (max-width: 680px) and (min-width: 300px) {
    margin: 0px 0 10px 0;
  }
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
  font-weight: 400;
  &.direction-rtl {
    direction: rtl;
  }
  @media (max-width: 680px) and (min-width: 300px) {
    margin: 0;
  }
`;

export const Img = styled.img`
  width: 35%;
  height: 100%;
  object-fit: cover;
  border-radius: 20px 0 0 20px;
  max-width: 244px;
  @media (max-width: 600px) {
    border-radius: 20px 20px 0px 0px;
    width: 100%;
    height: 150px;
    max-width: unset;
  }
  /* @media (max-width: 680px) and (min-width: 600px) {
    width: 35%;
    border-radius: 20px 0 0 20px;
  } */
  /* @media (max-width: 680px) and (min-width: 376px) {
    height: 50;

  }
  @media (max-width: 680px) and (min-width: 500px) {
    height: 50%;
  } */
`;

export const CardContent = styled.p`
  margin: 0;
  color: #5a5a89;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  &.direction-rtl {
    direction: rtl;
  }
  /* white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 412px; */
  @media (max-width: 1100px) and (min-width: 600px) {
    /* color: #5a5a89;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 60vw; */
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
  }
  @media (max-width: 600px) and (min-width: 200px) {
    /* color: #5a5a89;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 60vw; */
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 10;
  }

  /* the good css */
  /* @media (max-width: 1400px) and (min-width: 1025px) {
    color: #5a5a89;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 31vw;
  }
  @media (max-width: 768px) and (min-width: 600px) {
    color: #5a5a89;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 55vw;
  }

  @media (max-width: 1550px) and (min-width: 1400px) {
    color: #5a5a89;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 31vw;
  } */
  /* @media (max-width: 1024px) and (min-width: 600px) {

  } */
`;
