import React from 'react'
import { styled } from 'styled-components'
import WatchSideBar from '../components/WatchSideBar'
import Icon from '../components/common/Icon'
import WatchButtonBox from '../components/WatchButtonBox'
import CommentInput from '../components/CommentInput'
import Comment from '../components/Comment'
import Showmore from '../components/Showmore'
import { usePc } from '../hooks/useMediaQuery'

const Div = styled.div`
  display: flex;
`
const MainBox = styled.div`
  flex: 1;
  padding-right: 20px;
  text-align:start;
`

const Video = styled.video`
  transition: 0.5s;
  width: 100%;
  height: auto;
  margin-top: 15px;
  
`
const Title = styled.h1`
  font-size: 20px;
  margin: 0;
  font-weight: 600;
  padding: 10px 0;
`
const Subdetails = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const ChannelProfile = styled.img`
  width: 40px;
  border-radius: 50%;
`

const ChannelInfoBox = styled.div`
  display: flex;
`

const ChannelTitle = styled.h2`
  margin: 0;
  font-size: 16px;
  
`
const ChannelTextBox = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 10px;
  & > span{
    color: #606060;
    font-size: 12px;
    font-weight: 400;
  }
`

const SubBtn = styled.button`
  border: none;
  color: #fff;
  background-color: rgba(0,0,0,0.9);
  padding: 0 17px;
  border-radius: 50px;
  margin-left: 20px;
  cursor: pointer;
`

const CommentsHead = styled.div`
  font-size: 16px;
  display: flex;
  margin-top: 10px;
  margin-bottom: 20px;
  & > span{
    padding-right: 30px;
  }
  & > div{
    display: flex;
    font-size: 14px;
    align-items:center;
    gap: 8px;
  }
`

const Comments = styled.div`
`

function WatchPage() {
  const isPc = usePc()
  return (
    <Div>
      <MainBox>
        <Video src={`${process.env.PUBLIC_URL}/videos/NewJeans (뉴진스) 'ETA' Official MV (Performance ver.).mp4`} controls 
        // autoPlay
        />
        <Title>NewJeans (뉴진스) 'ETA' Official MV (Performance ver.)</Title>
        <Subdetails>
          <ChannelInfoBox>
            <ChannelProfile src={`${process.env.PUBLIC_URL}/new_jeans.jpg`}/>
            <ChannelTextBox>
              <ChannelTitle>HYBE LABELS</ChannelTitle>
              <span>구독자 7190만명</span>
            </ChannelTextBox>
            <SubBtn>구독</SubBtn>
          </ChannelInfoBox>
          <WatchButtonBox/>
        </Subdetails>
        <Showmore/>
        {isPc || <WatchSideBar/>}
        <CommentsHead>
          <span>댓글 2,625개</span>
          <div>
            <Icon type="filter"/>
            <span>정렬 기준</span>
          </div>
        </CommentsHead>
        <CommentInput/>
        <Comments>
          <Comment/>
          <Comment/>
          <Comment/>
          <Comment/>
          <Comment/>
        </Comments>
      </MainBox>
      {isPc && <WatchSideBar/>}
      
    </Div>
  )
}

export default WatchPage