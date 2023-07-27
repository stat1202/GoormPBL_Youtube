import React, { useState } from 'react'
import Icon from './common/Icon'
import { css, styled } from 'styled-components'


const ButtonBox = styled.div`
  display: flex;
  gap: 10px;
`
const IconDiv = styled.div`
  display: flex;
  border-radius: 50px;
  background-color: rgba(0,0,0,0.05);
  cursor: pointer;
  &:hover{
    background-color: rgba(0,0,0,0.1);
  }

  & > span{
    border-right: 1px solid black;
    box-sizing: border-box;
    padding-right: 10px;
  }

  ${props => props.type === "settings" && css`
    padding: 6px;
    transform: rotate(90deg);
  `}

  ${props => props.type === "share-empty" && css`
    padding: 6px 11px;
    gap: 5px;
    font-size: 14px;
    align-items:center;
  `}
`
const LikeDiv = styled.div`
  display: flex;
  align-items: center;
  padding: 6px 12px;
  background-color: rgba(0,0,0,0.05);
  border-radius: 50px 0 0 50px;
  position: relative;
  cursor: pointer;
  &:hover{
    background-color: rgba(0,0,0,0.1);
  }

  &::after{
    content: "";
    width: 1px;
    position: absolute;
    right: 0;
    height: 28px;
    background-color: rgba(0,0,0,0.1);
  }

`
const DislikeDiv = styled.div`
  display: flex;
  align-items: center;
  padding: 6px 12px;
  background-color: rgba(0,0,0,0.05);
  border-radius: 0 50px 50px 0;
  position: relative;
  cursor: pointer;
  &:hover{
    background-color: rgba(0,0,0,0.1);
  }


`
const LDLBox = styled.div`
  display: flex;
  align-items: center;
`

function WatchButtonBox() {
  const [like, setLike] = useState(false)
  const [dislike, setDislike] = useState(false)
  return (
    <ButtonBox>
      <LDLBox >
        <LikeDiv onClick={() => {
          setLike(true)
          setDislike(false)
        }}>
          {
            like
            ?
            <Icon type="like"/>
            :
            <Icon type="like-empty"/>
          }
          
          <span>
            15만
          </span>
        </LikeDiv>
        <span></span>
        <DislikeDiv onClick={() => {
          setLike(false)
          setDislike(true)
        }}>
          {
            dislike
            ?
            <Icon type="dislike"/>
            :
            <Icon type="dislike-empty"/>
          }
          
        </DislikeDiv>
    </LDLBox>
    <IconDiv type="share-empty">
      <Icon type="share-empty"/>
      공유
    </IconDiv>
    <IconDiv type="settings">
      <Icon type="settings"/>
    </IconDiv>
  </ButtonBox>

  )
}

export default WatchButtonBox