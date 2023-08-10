import styled from "styled-components";




export const HeaderContainer = styled.section`
  display: flex;
  /* align-items: center; */
  background: #262146;
  height: 4.6rem;
  justify-content: space-between;
  padding: 0 20px;
`;

export const LogoContainer = styled.div`
  display: flex;
  width: 10%;
  align-items: center;
  `;

export const RightIconsContainer = styled(LogoContainer)`
    align-items: center;
    width: 10%;
    justify-content: end;
  `;

export const UserAvatarDiv = styled.div`
    height: 50px;
    width: 50px;
    margin-left:20px;
    background: #0058B9;
    border-radius: 50px;
    color: white;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 16px;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    display: flex;
    align-items: center;
    justify-content: center;
  `;

export const Icon = styled.img`

    &.settings-icon {
        width: 26px;
        height: 26px;
        
      }
      &.notification-icon{
        width: 26px;
        height: 26px;
        margin-left: 20px;
    }
    &.user-avatar-icon{
        width: 47px;
        height: 47px;
        margin-left: 20px;
    }
    `


  



