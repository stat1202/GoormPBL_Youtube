import React from 'react'
import { useRecoilState } from 'recoil'
import { styled } from 'styled-components'
import { isMenuOpenState } from '../recoil/recoilState'
import Icon from './common/Icon'

const Div = styled.div`
  position: fixed;
  z-index: 100;
`

function MenuSideBar() {
  const [isMenuOpen, setIsMenuOpen] = useRecoilState(isMenuOpenState)
  console.log(isMenuOpen)
  return (
    <Div>
      {
        isMenuOpen
        &&
        <React.Fragment>
        <Icon type="hamburger"/>
        <img src={`${process.env.PUBLIC_URL}/logo.png`} style={{ height:"30px", padding: "13px", cursor: "pointer"}} alt="logo"/>
        </React.Fragment>
      }
      sdfsdf
    </Div>
  )
}

export default MenuSideBar