import styled from "styled-components";


export const SearchBarContainer = styled.div`
  width: 76.5%;
  z-index:2;
  margin-top:12.5px;
  `
export const SearchInputContainer = styled.div`
  align-items: center;
  z-index:2;
  display: flex;
  width: 423px;
  background: white;
  border-radius: 10px;
  height: 50px;
`

export const SearchInput = styled.input`
  display: flex;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 22px;
  width: 60%;
  border: none;
  outline: none;
`

export const Icon = styled.img`
    `
export const LogoIcon = styled(Icon)`
    background: white;
    border-radius: 10px 0px 0px 10px;
    padding-right: 5px;
    padding-left: 5px;
    `

export const Divider = styled.div`
    border: 1px solid #d9dbe9;
    margin-top: 5px;
    margin-bottom: 5px;
    height: 30px;
`
export const LastSearchesContainer = styled.div`
    border-radius: 10px;
    width: 423px;
    background: white;
    z-index:2;
    margin-top:2px;
    position: relative;
`
export const LastSearchesHeaders = styled.div`
  display: flex;
  justify-content: space-between;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen;
  font-style: normal;
  font-weight: bold;
  font-size: 12px;
  line-height: 22px;
  color:#5A5A89;
  margin-right: 15px;
  margin-left: 15px;
  margin-bottom: 10px;
  padding-top: 10px;
`
export const LastSearchesOptionContainer = styled.div`
  display: flex;
  justify-content: space-between;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen;
  font-style: normal;
  font-weight: bold;
  font-size: 12px;
  line-height: 16px;
  color:#5A5A89;
  padding-bottom: 10px;
  margin-left: 15px;
  margin-right: 15px;
`


export const Option = styled.option`
`
  


