import React from 'react'
import { styled } from 'styled-components'
import Icon from './common/Icon'
import { NavLink, useLocation } from 'react-router-dom'

const NavStyle = styled.nav`
  position: fixed;
  box-sizing: border-box;
  padding:4px;
  padding-top: 72px;
  background-color: #fff;
  z-index: 10;
  height: 100vh;
`

const MenuLink = styled(NavLink)`
  display: flex;
  flex-direction: column;
  padding: 16px 18px;
  align-items: center;
  border-radius: 8px;
  text-decoration: none;
  color: #000;
  &:hover{
    background-color: rgba(0,0,0,0.05);
  }
`

const MenuSpan = styled.span`
  font-size: 10px;
  box-sizing: border-box;
  padding-top: 5px;
`

function Nav() {
  const pathname = useLocation().pathname
  // console.log(pathname)
  return (
    <NavStyle>
      <MenuLink to="/">
        {
          pathname === "/"
          ?
          <Icon type="home-fill"/>
          :
          <Icon type="home"/>          
        }
        <MenuSpan>홈</MenuSpan>
      </MenuLink>
      <MenuLink to="/shorts">
        {
          pathname.includes('shorts')
          ?
          
          <Icon type="shorts-fill"/>
          :
          <Icon type="shorts"/>
        }
        <MenuSpan>Shorts</MenuSpan>
      </MenuLink>
      <MenuLink to="/feed/subscriptions">
        {
          pathname.includes('subscriptions')
          ?
          <Icon type="subscriptions-fill"/>
          :
          <Icon type="subscriptions"/>
        }
        <MenuSpan>구독</MenuSpan>
      </MenuLink>
      <MenuLink to="/feed/library">
        {
          pathname.includes('library')
          ?
          <Icon type="library-fill"/>
          :
          <Icon type="library"/>
        }
        <MenuSpan>보관함</MenuSpan>
      </MenuLink>
    </NavStyle>
  )
}

export default Nav