import React from 'react'
import { css, styled } from 'styled-components'
import Icon from './common/Icon'


const MenuBox = styled.div`
  position: absolute;
  bottom: 10px;
  left: 100%;
  padding: 12px 12px 0 12px;
  box-sizing: border-box;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  z-index: 10;

  @media screen and (max-width: 600px) {
    left: 300px;
    bottom: 20px;
    color: #fff;
  }
`

const IconDiv = styled.div`
  border-radius: 50%;
  width: 48px;
  height: 48px;
  background-color: #e9e9e9;
  display: flex;
  align-items: center;
  justify-content: center;
  transform: ${props => props.type === "settings" && "rotatoe(90deg)"};
  &:hover{
    background-color: #dddddd;
    cursor: pointer;
  }

  @media screen and (max-width: 600px) {
    background-color: rgba(255,255,255, 0.1);
    &:hover{
      background-color: rgba(255,255,255, 0.2);
    }
  }
`

const IconSpan = styled.span`
  font-size: 14px;
  padding: 5px 0;
`
const ChannelProfile = styled.img`
  width: 40px;
  border-radius: 5px;
  cursor: pointer;
`
const Div = styled.div`
  padding-top: 16px;
`


function ShortMenu() {
  return (
    <MenuBox>
        <Div>
          <IconDiv>
            <Icon type="like"/>
          </IconDiv>
          <IconSpan>810만</IconSpan>
        </Div>
        <Div>
          <IconDiv>
            <Icon type="dislike"/>
          </IconDiv>
          <IconSpan>싫어요</IconSpan>
        </Div>
        <Div>
          <IconDiv>
            <Icon type="comment"/>
          </IconDiv>
          <IconSpan>1.1만</IconSpan>
        </Div>
        <Div>
          <IconDiv>
            <Icon type="share"/>
          </IconDiv>
          <IconSpan>공유</IconSpan>
        </Div>
        <Div>
          <IconDiv type="settings">
            <Icon type="settings"/>
          </IconDiv>
        </Div>
        <Div>
          <ChannelProfile src={`${process.env.PUBLIC_URL}/new_jeans.jpg`}/>
        </Div>
      </MenuBox>
  )
}

export default ShortMenu