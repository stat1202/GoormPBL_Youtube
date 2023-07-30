import React from 'react'
import { styled } from 'styled-components'
import Icon from './common/Icon'
import { useNavigate } from 'react-router-dom'
import { useSetRecoilState } from 'recoil'
import { isMenuOpenState } from '../recoil/recoilState'

const HeaderStyle = styled.header`
  position: fixed;
  box-sizing: border-box;
  padding: 0 16px 0 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  background-color: #fff;
  z-index: 20;
`
const Div = styled.div`
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Input = styled.input`
  box-sizing: border-box;
  font-size: 16px;
  border: none;
  outline: none;
  height: 100%;
  width: 100%;
`
const InputDiv = styled.div`
  box-sizing: border-box;
  border: 1px solid #ccc;
  height: 100%;
  padding-left: 20px;
  background-color: #fff;
  border-radius: 50px 0 0 50px;
  width: 100%;
`
const Form = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-left: 10px;
  border-radius: 50px;
  height: 40px;
  width: 50%;
`

const SearchDiv = styled.div`
  box-sizing: border-box;
  padding: 6px 18px;
  background-color: #e9e9e9;
  border-radius: 0 50px 50px 0;
  border: 1px solid #ccc;
  height: 100%;
  cursor: pointer;

  &:hover{
    background-color: #dddddd;
  }
`

const MicDiv = styled.div`
  box-sizing: border-box;
  padding: 8px 8px;
  background-color: #e9e9e9;
  border-radius: 50%;
  height: 100%;
  cursor: pointer;
  margin-left: 10px;
  &:hover{
    background-color: #dddddd;
  }
`

const IconDiv = styled.div`
  box-sizing: border-box;
  padding: 8px;
  height: 40px;
  border-radius: 50%;
  margin-left: 10px;
  cursor: pointer;

  &:hover{
    background-color: rgba(0,0,0,0.05);
  }
`



function Header() {
  const navigate = useNavigate()
  const setIsMenuOpen = useSetRecoilState(isMenuOpenState)

  return (
    <HeaderStyle>
      <Div>
        <IconDiv onClick={() => setIsMenuOpen(true)}>
          <Icon type="hamburger" />
        </IconDiv>
        <img onClick={() => navigate('/')} src={`${process.env.PUBLIC_URL}/logo.png`} style={{ height:"30px", padding: "13px", cursor: "pointer"}} alt="logo"/>
      </Div>
      <Form>
        <InputDiv>
          <Input/>
        </InputDiv>
        <SearchDiv>
          <Icon type="search"/>
        </SearchDiv>
        <MicDiv>
          <Icon type="mic"/>
        </MicDiv>
      </Form>
      <Div>
        <IconDiv>
          <Icon type="video"/>
        </IconDiv>
        <IconDiv>
          <Icon type="bell"/>
        </IconDiv>
        <Icon type="profile"/>
      </Div>
    </HeaderStyle>
  )
}

export default Header