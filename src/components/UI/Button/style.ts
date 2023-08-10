import styled from "styled-components";
import  {Colors} from "../types"


export const StyledBtn = styled.button`
  border-radius: 20px;
  width: 242px;
  display: flex;
  flex-direction: row;
  align-items: center;
  border: none; 
  height: 36px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 26px;
  color: white;
  height: 36px;
  background: #0058B9;
  align-self: flex-end;
  justify-content: center;
  &:hover {
    opacity: 0.8;
  }
  &.welcome-btn {
    width: 650px;
    border-radius: 10px;
    align-self: auto;
    justify-content: center;
    @media (max-width: 1024px) {
    width: 100%
  }
  }
  &.secondary-gray-btn {
    background: #D9DBE9;
    color: #5A5A89;
  }
  &.text-transparent-btn {
    background: none;
    color: #5A5A89;
    &:hover {
    background: rgba(217, 219, 233, 0.3);
  }
  &.primary-blue-btn .icon-primary-btn {
    margin-left: 8px;
  }
}
`;


export const ArrowIcon = styled.img`
  margin-left: 10px;
`