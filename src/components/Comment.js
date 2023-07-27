import React, { useState } from 'react'
import { styled } from 'styled-components'
import Icon from './common/Icon'
import { useRecoilValue } from 'recoil'

const Div = styled.div`
`
const CommentBox = styled.div`
  display: flex;
  gap: 15px;
  margin-top: 10px;
  & > img{
    width: 40px;
    height: 40px;
    border-radius: 50px;
  }

  & > div{
    flex:1;
    display: flex;
    justify-content: space-between;
  }
`

const CommentInfo = styled.div`
  display: flex;
  flex-direction:column;
  & > div{
    display: flex;
  }
`
const CommentUser = styled.span`
  font-size: 13px;
  font-weight: bold;
  padding-right: 5px;
`
const CommentTime = styled.span`
  font-size: 12px;
`
const CommentStyle = styled.span`
    font-size: 14px;
`
const IconDiv = styled.div`
  display: flex;
  padding: 8px;
  border-radius: 50%;
  cursor: pointer;
  &:active{
    background-color: rgba(0,0,0,0.05);
  }

  &:hover{
    background-color: ${props => props.type ==="emotion" && "rgba(0,0,0,0.05)"};
  }
`
const EmotionDiv = styled.div`
  padding-left: 47px;
  display: flex;
  align-items: center;


  & > button {
    border: none;
    font-size: 12px;
    padding: 8px 12px;
    border-radius: 50px;
    background-color: transparent;
    margin-left: 15px;
    cursor: pointer;
    &:hover{
      background-color: rgba(0,0,0,0.05);
    }
  }
`
function Comment() {
  const [like, setLike] = useState(false)
  const [dislike, setDislike] = useState(false)
  return (
    <Div>
      <CommentBox>
        <img src={`${process.env.PUBLIC_URL}/profile.jpg`} alt="profile"/>
        <div>
          <CommentInfo>
            <div>
              <CommentUser>@매콤매콤</CommentUser>
              <CommentTime>21시간 전</CommentTime>
            </div>
            <CommentStyle>This is pure vibes ! ETA ETA !</CommentStyle>
          </CommentInfo>
          <IconDiv>
            <Icon type="settings"/>
          </IconDiv>
        </div>
      </CommentBox>
      <EmotionDiv>
        <IconDiv type="emotion" onClick={() => {
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
        </IconDiv>
        {like ? 3: 2}
        <IconDiv type="emotion" onClick={() => {
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
          
        </IconDiv>
        <button>답글</button>
      </EmotionDiv>
    </Div>
  )
}

export default Comment