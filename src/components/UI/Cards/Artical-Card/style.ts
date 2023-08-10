import styled from "styled-components";

export const CardHeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`
export const CardContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1rem;
  height: 13rem;
  justify-content: space-between;
`

export const Title = styled.h2`
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 21px;
  color: #14142B;
  margin:0;
  flex-grow: 0;
`;


export const SubTitle = styled.h4`
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 22px;
  margin:0;
  color: rgba(90, 90, 137, 0.5);
`;

export const Date = styled.h4`
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif; 
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 22px; 
  display: flex;
  align-items: center;
  letter-spacing: 0.25px;
  color: rgba(90, 90, 137, 0.5);
  flex: none;
`;


export const Img = styled.img`
  width: 242px;
  height: 100%;
  object-fit: cover;
  border-radius: 20px 0 0 20px;
`

export const CardContent = styled.p`
  margin: 0;
  color: #5A5A89;
`