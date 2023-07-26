import React from 'react'
import { styled } from 'styled-components'
import ShortMenu from './ShortMenu'


const ShortStyle = styled.div`
  padding: 20px 15px 10px;
  position: relative;
`
const ShortVideo = styled.video`
  width:360px;
  height: 640px;
  background-color: #cccccc;
  border-radius: 15px;
  position: relative;
  z-index: 5;
`

const ShortBox = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
`

const ShortDescription = styled.div`
  position: absolute;
  bottom: 15px;
  z-index: 10;
  width: 92%;
  
  @media screen and (max-width: 600px) {
    width: 70%;
    left: 15px;
    
  }
`

const ShortTitle = styled.h2`
  margin: 0;
  font-size: 16px;
  padding-bottom: 10px;
  color: #fff;
  text-align: start;
`

const ShortSubDetail = styled.div`
  display: flex;
  justify-content: space-between;

`
const ChannelName = styled.span`
  font-size: 14px;
  font-weight: 600;
  color: #fff;
  padding-left: 6px;
`
const ChannelInfo = styled.div`
  display: flex;
  align-items: center;
`
const SubscriptionBtn = styled.button`
  font-size: 14px;
  color: #fff;
  background-color: #000;
  border: none;
  padding: 0 16px;
  border-radius: 50px;
  cursor: pointer;

  &:hover{
    background-color: #212121;
  }
`

const ChannelProfile = styled.img`
  cursor: pointer;
  width: 36px;
  border-radius: 50%;
`


function Short() {
  return (
    <ShortStyle>
      <ShortBox>
        <ShortVideo src={`${process.env.PUBLIC_URL}/shorts/또 무한도전 표절(_)한 뉴진스 신곡 ETA.mp4`}
        autoPlay muted loop
        />
        <ShortDescription>
          <ShortTitle>또 무한도전 표절(_)한 뉴진스 신곡 ETA</ShortTitle>
          <ShortSubDetail>
              <ChannelInfo>
                <ChannelProfile src={`${process.env.PUBLIC_URL}/new_jeans.jpg`}/>
                <ChannelName>@HYBE LABELS</ChannelName>
              </ChannelInfo>          
            <SubscriptionBtn>구독</SubscriptionBtn>
          </ShortSubDetail>
        </ShortDescription>        
      </ShortBox>
      <ShortMenu/>
    </ShortStyle>
  )
}

export default Short