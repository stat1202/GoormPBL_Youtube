import React from 'react'
import { styled } from 'styled-components'
import Video from '../components/Video'
import Icon from '../components/common/Icon'
import { Link } from 'react-router-dom'


const Videos = styled.div`
  box-sizing: border-box;
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  padding: 10px 10px 10px 0;
  text-align: center;
`

const Div = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  width: 100%;
  padding-bottom: 10px;
  position: relative;
  &::before{
    content: "";
    position: absolute;
    height:1px;
    width:98%;
    background-color: #dddddd;
    left: 0;
    bottom: 0;
  }
`
const Span = styled.span`
  font-size: 16px;
  padding-left: 15px;

`

const ListDescriptionBox = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 10px;
  padding-bottom: 5px;
`
const ListNum = styled.span`
  font-size: 14px;
  color: #606060;
  padding-left: 10px;
`
const ListDiv = styled.div`
  display: flex;
  align-items: center;
`

const Btn = styled(Link)`
  border: none;
  text-decoration: none;
  line-height: 36px;
  height: 36px;
  font-size: 14px;
  padding: 0 17px;
  border-radius: 50px;
  color: #3ea6ff;
  background-color: transparent;
  cursor: pointer;
  &:hover{
    background-color: #def1ff;
  }
`

function LibraryPage() {
  return (
    <React.Fragment>
      <Div>
        <ListDescriptionBox>
          <ListDiv>
            <Icon type="log"></Icon>
            <Span>기록</Span>
            <ListNum>5</ListNum>
          </ListDiv>
          <Btn to="/playlist">모두 보기</Btn>
        </ListDescriptionBox>
        <Videos>
          <Video type="library"/>
          <Video type="library"/>
          <Video type="library"/>
          <Video type="library"/>
          <Video type="library"/>
        </Videos>
      </Div>
      <Div>
        <ListDescriptionBox>
          <ListDiv>
            <Icon type="clock"></Icon>
            <Span>나중에 볼 동영상</Span>
            <ListNum>5</ListNum>
          </ListDiv>
          <Btn to="/playlist">모두 보기</Btn>
        </ListDescriptionBox>
        <Videos>
          <Video type="library"/>
          <Video type="library"/>
          <Video type="library"/>
          <Video type="library"/>
          <Video type="library"/>
        </Videos>
      </Div>

      <Div>
        <ListDescriptionBox>
          <ListDiv>
            <Icon type="playlist"></Icon>
            <Span>재생 목록</Span>
            <ListNum>5</ListNum>
          </ListDiv>
          <Btn to="/playlist">모두 보기</Btn>
        </ListDescriptionBox>
        <Videos>
          <Video type="library"/>
          <Video type="library"/>
          <Video type="library"/>
          <Video type="library"/>
          <Video type="library"/>
        </Videos>
      </Div>
      <Div>
        <ListDescriptionBox>
          <ListDiv>
            <Icon type="like-empty"></Icon>
            <Span>좋아요 표시한 동영상</Span>
            <ListNum>5</ListNum>
          </ListDiv>
          <Btn to="/playlist">모두 보기</Btn>
        </ListDescriptionBox>
        <Videos>
          <Video type="library"/>
          <Video type="library"/>
          <Video type="library"/>
          <Video type="library"/>
          <Video type="library"/>
        </Videos>
      </Div>
    </React.Fragment>
  )
}

export default LibraryPage