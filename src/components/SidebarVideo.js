import React from 'react'
import { styled } from 'styled-components'
import Icon from './common/Icon'
import { usePc } from '../hooks/useMediaQuery'




const SettingIcon = styled.div`
  display: flex;
  border-radius: 50%;
  position: absolute;
  width:fit-content;
  right: 0;
  top: 8px;
  cursor: pointer;
  &:active{
    background-color: rgba(0,0,0,0.1);
  }
`

const PlaylistVideoBox = styled.div`
  display: flex;
  padding: 10px 0;
  width: ${props => props.isPc ? "95%" : "100%"};
  border-radius: 10px;
  position: relative;
  cursor: pointer;
`


const DoubleIcon = styled.div`
  padding: 0 6px;
  width: fit-content;
  display: flex;
  align-items: center;
`


const VideoImg = styled.img`
  width: 160px;
  border-radius: 10px;
`

const Description = styled.div`
  display: flex;
  padding-left: 10px;
  flex-direction: column;
  box-sizing: border-box;
  padding-right: 24px;
`

const Title = styled.h1`
  margin: 0;
  font-size: 16px;
  font-weight: 500;
  text-align: start;
  margin-bottom: 8px;
  overflow: hidden;
  word-break: break-word;
  display: -webkit-box;
  -webkit-line-clamp: 2; // 원하는 라인수
  -webkit-box-orient: vertical;
`
const SubDetail = styled.span`
  color: #606060;
  font-size: 12px;
  text-align: start;
`

function SidebarVideo() {
  const isPc = usePc()
  return (
    <PlaylistVideoBox isPc={isPc}>
      <VideoImg src="https://i.ytimg.com/vi/s4Ow55AbdCg/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAC4rYFq17bejjaKRt7Z20GPAHojQ"/>
      <Description>
        <Title>NewJeans (뉴진스) 'ETA' Official MV (Performance ver.)</Title>
        <SubDetail>HYBE LABELS</SubDetail>
        <SubDetail>조회수 214만회 <b>·</b> 1일 전</SubDetail>
      </Description>
      <SettingIcon>
        <Icon type="settings"/>
      </SettingIcon>
    </PlaylistVideoBox>
  )
}

export default SidebarVideo