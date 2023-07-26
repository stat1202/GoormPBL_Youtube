import React from 'react'
import { styled } from 'styled-components'
import Icon from './common/Icon'
import { Link } from 'react-router-dom'
const NavStyle = styled.nav`
  position: fixed;
  box-sizing: border-box;
  padding:4px;
  padding-top: 72px;
  background-color: #fff;
  z-index: 10;
  height: 100vh;
`

const MenuLink = styled(Link)`
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
  return (
    <NavStyle>
      <MenuLink to="/">
        <Icon type="home"/>
        <MenuSpan>홈</MenuSpan>
      </MenuLink>
      <MenuLink to="/shorts">
        <Icon type="shorts"/>
        <MenuSpan>Shorts</MenuSpan>
      </MenuLink>
      <MenuLink to="/feed/subscriptions">
        <Icon type="subscriptions"/>
        <MenuSpan>구독</MenuSpan>
      </MenuLink>
      <MenuLink to="/feed/library">
        <Icon type="library"/>
        <MenuSpan>보관함</MenuSpan>
      </MenuLink>
    </NavStyle>
  )
}

export default Nav