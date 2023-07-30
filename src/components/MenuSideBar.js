import React from 'react'
import { useRecoilState } from 'recoil'
import { css, styled } from 'styled-components'
import { isMenuOpenState } from '../recoil/recoilState'
import Icon from './common/Icon'
import { NavLink, useLocation, useNavigate } from 'react-router-dom'

const Div = styled.div`
  position: fixed;
  z-index: 100;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(0,0,0,0.5);
  transition: 0.3s;
  ${props => props.isMenuOpen || css`
    opacity: 0;
    visibility: hidden;
  `}
`

const SideBox = styled.div`
  background-color: #fff;
  box-sizing: border-box;
  width: 240px;
  padding: 0 20px 10px 10px;
  height: 100%;
  position: absolute;
  left: 0;
  transition: 0.3s;

  ${props => props.isMenuOpen || css`
    left: -240px;
  `}
  
`

const MenuLink = styled(NavLink)`
  display: flex;
  padding: 8px 18px;
  align-items: center;
  border-radius: 8px;
  text-decoration: none;
  color: #000;
  &:hover{
    background-color: rgba(0,0,0,0.05);
  }
`

const MenuSpan = styled.span`
  font-size: 14px;
  box-sizing: border-box;
  padding-left: 25px;
`

const SideHeader = styled.div`
  display: flex;
  align-items: center;

  & > div {
    display: flex;
    padding: 8px;
    margin-left: 10px;
    border-radius: 50%;
    &:hover{
      background-color: rgba(0,0,0,0.05);
    }
  }
`

function MenuSideBar() {
  const [isMenuOpen, setIsMenuOpen] = useRecoilState(isMenuOpenState)
  const pathname = useLocation().pathname
  const navigate = useNavigate()
  return (
    <React.Fragment>
    <Div id="overlay" isMenuOpen={isMenuOpen} onClick={(e) => e.target.id === "overlay" && setIsMenuOpen(false)}>
      <SideBox isMenuOpen={isMenuOpen}>
        <SideHeader>
          <div onClick={() => setIsMenuOpen(false)}>
            <Icon type="hamburger" />
          </div>
          <img onClick={() => navigate('/')} src={`${process.env.PUBLIC_URL}/logo.png`} style={{ height:"30px", padding: "13px", cursor: "pointer"}} alt="logo"/>
        </SideHeader>
        <MenuLink to="/" onClick={() => setIsMenuOpen(false)}>
          {
            pathname === "/"
            ?
            <Icon type="home-fill"/>
            :
            <Icon type="home"/>          
          }
          <MenuSpan>홈</MenuSpan>
        </MenuLink>
        <MenuLink to="/shorts" onClick={() => setIsMenuOpen(false)}>
          {
            pathname.includes('shorts')
            ?
            
            <Icon type="shorts-fill"/>
            :
            <Icon type="shorts"/>
          }
          <MenuSpan>Shorts</MenuSpan>
        </MenuLink>
        <MenuLink to="/feed/subscriptions" onClick={() => setIsMenuOpen(false)}>
          {
            pathname.includes('subscriptions')
            ?
            <Icon type="subscriptions-fill"/>
            :
            <Icon type="subscriptions"/>
          }
          <MenuSpan>구독</MenuSpan>
        </MenuLink>
        <MenuLink to="/feed/library" onClick={() => setIsMenuOpen(false)}>
          {
            pathname.includes('library')
            ?
            <Icon type="library-fill"/>
            :
            <Icon type="library"/>
          }
          <MenuSpan>보관함</MenuSpan>
        </MenuLink>
      </SideBox>
    </Div>
    </React.Fragment>
  )
}

export default MenuSideBar