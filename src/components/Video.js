import React, { useRef, useState } from 'react'
import { css, styled } from 'styled-components'
import Icon from "./common/Icon"
import { useNavigate } from 'react-router-dom'

const PlayBox = styled.div`
  box-sizing: border-box;
  position: relative;
  height: fit-content;
`

const CoverImg = styled.img`
  opacity: 1;
  visibility:visible;
  transition: 0.3s;
  position: absolute;
  width: 100%;
  height: auto;
  border-radius: 10px;

`

const Iframe = styled.video`
  opacity: 0;
  visibility:hidden;
  transition: 0.5s;
  width: 100%;
  height: auto;
`

const VideoBox = styled.div`
  box-sizing: border-box;
  padding-bottom: 20px;
  min-width: 240px;
  cursor: pointer;
  ${props => props.type === "library" && css`
    max-width: 210px;
  `}
  &:hover ${CoverImg}{
    opacity: 0;
    visibility:hidden;
    border-radius: 0;
  }

  &:hover ${Iframe}{
    opacity: 1;
    visibility:visible;
  }

  @media screen and (min-width: 2201px) {
    width: 16%;
  }

  @media screen and (max-width: 2200px) {
    width: 24%;
  }

  @media screen and (max-width: 1300px) {
    width: 30%;
  }

  @media screen and (max-width: 1000px) {
    width: 49%;
  }

  @media screen and (max-width: 640px) {
    width: 98%;
  }

`

const DetailBox = styled.div`
  display: flex;
  box-sizing: border-box;
  padding-top: 5px;
  padding-right: 24px;
  position: relative;

`

const ChannelProfile = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  cursor: pointer;
`
const Description = styled.div`
  display: flex;
  padding-left: 10px;
  flex-direction: column;
`

const Title = styled.h1`
  margin: 0;
  font-size: 16px;
  font-weight: 500;
  text-align: start;
  padding-bottom: 5px;
  overflow: hidden;
  word-break: break-word;
  display: -webkit-box;
  -webkit-line-clamp: 2; // 원하는 라인수
  -webkit-box-orient: vertical;
`
const SubDetail = styled.span`
  color: #606060;
  font-size: 14px;
  text-align: start;
`

const SettingsDiv = styled.div`
  position: absolute;
  right: -10px;
  top: 0;
  cursor: pointer;
  padding: 8px;
  border-radius: 50%;
  display: flex;
  &:active{
    background-color: rgba(0,0,0,0.05);
  }

`

const SettingMenu = styled.div`
  width: 100px;
  position: absolute;
  right: 3px;
  top: 38px;
  background-color: #fff;
  box-shadow: -3px 3px 10px rgba(0,0,0,0.15); 
  border-radius: 5px;

  transition: 0.3s;
  opacity: ${props => props.isMenuOpen ? "1": "0"};
  visibility: ${props => props.isMenuOpen ? "visible": "hidden"};
  height: ${props => props.isMenuOpen ? "34px": "0"};


`
const IconDiv = styled.div`
  display: flex;
  justify-content: center;
  gap: 5px;
  padding: 5px 15px;
  border-radius: 5px;
  z-index: 10;
  &:hover{
    background-color: rgba(0,0,0,0.05);
  }
`

function Video({type}) {
  const videoRef = useRef(null)

  const hoverHandler = () => {
    videoRef.current.play()
  }
  const navigate = useNavigate()

  const clickHandler = (e) => {
    navigate('/watch')
  }
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  return (
    <VideoBox id="video-box" onMouseOver={hoverHandler} type={type}>
      <PlayBox onClick={clickHandler}>
        <CoverImg src="https://i.ytimg.com/vi/s4Ow55AbdCg/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAC4rYFq17bejjaKRt7Z20GPAHojQ"/>
        <Iframe src={`${process.env.PUBLIC_URL}/videos/NewJeans (뉴진스) 'ETA' Official MV (Performance ver.).mp4`} controls={false} muted={true} ref={videoRef}/>
      </PlayBox>
      <DetailBox>
        <ChannelProfile src={`${process.env.PUBLIC_URL}/new_jeans.jpg`}/>
        <Description>
          <Title>NewJeans (뉴진스) 'ETA' Official MV (Performance ver.)</Title>
          <SubDetail>HYBE LABELS</SubDetail>
          <SubDetail>조회수 214만회 <b>·</b> 1일 전</SubDetail>
        </Description>
        <SettingsDiv onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <Icon type="settings"/>
        </SettingsDiv>
        <SettingMenu isMenuOpen={isMenuOpen}>
          <IconDiv><Icon type="share-empty"/> 공유</IconDiv>
        </SettingMenu>      
      </DetailBox>
    </VideoBox>
  )
}

export default Video