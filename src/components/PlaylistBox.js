import React from 'react'
import { css, styled } from 'styled-components'
import Icon from './common/Icon'
import { usePc } from '../hooks/useMediaQuery'

const PlaylistBoxStyle = styled.div`
  background-color: rgba(89,70,56);
  height: calc(100% - 25px);
  box-sizing: border-box;
  padding: 25px;
  border-radius: 15px;
  color: #fff;
  margin-right: 5px;

  ${props => props.isPc || css`
    height: auto;
  `}
`

const PlaylistRepImg = styled.img`
  max-width: 310px;
  width: 98%;
  border-radius: 10px;
  margin-bottom: 15px;
  cursor: pointer;
`

const PlaylistTitle = styled.h1`
  margin: 0;
  font-size: 28px;
  color: #fff;
  text-align:start;
  padding-bottom: 15px;
`
const PlaylistOwner = styled.div`
  font-size: 14px;
  font-weight:400;
  text-align:start;
  padding-bottom: 4px;
`

const PlaylistInfo = styled.div`
  font-size: 12px;
  color: #FFFFFFB3;
  text-align:start;
  padding-bottom: 10px;
`
const IconDiv = styled.div`
  box-sizing: border-box;
  width: fit-content;
  height: 40px;;
  padding: 8px;
  display: flex;
  border-radius: 50%;
  position: relative;
  left: -5px;
  background-color: rgba(255,255,255,0.1);
  cursor: pointer;
  &:hover{
    background-color: rgba(255,255,255,0.2);
  }
  
`

const ButtonBox = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 15px;
`

const PlayAll = styled.button`
  border: none;
  background-color: #fff;
  color: #000;
  font-size: 14px;
  width: 49%;
  padding: 6px 0;
  border-radius: 50px;
  cursor: pointer;
  
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;

  &:hover{
    background-color: rgba(255,255,255,0.8);
  }
`

const Shuffle = styled.button`
  border: none;
  background-color: rgba(255,255,255,0.1);
  color: #fff;
  font-size: 14px;
  width: 49%;
  padding: 6px 0;
  border-radius: 50px;
  cursor: pointer;
  gap: 5px;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover{
    background-color: rgba(255,255,255,0.2);
  }
`

const Div = styled.div`
  ${props => props.isPc || css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    & > div{
      display: flex;
      flex-direction: column;
    }
  `}
  
`

function PlaylistBox() {
  const isPc = usePc()
  return (
    <PlaylistBoxStyle isPc={isPc}>
      <PlaylistRepImg src="https://i.ytimg.com/vi/s4Ow55AbdCg/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAC4rYFq17bejjaKRt7Z20GPAHojQ" isPc={isPc}/>
      <PlaylistTitle>
        나중에 볼 동영상
      </PlaylistTitle>
      <Div isPc={isPc}>
        <div>
          <PlaylistOwner>
            한승재
          </PlaylistOwner>
          <PlaylistInfo>
            동영상 4개 조회수 5천만회 어제 업데이트 됨
          </PlaylistInfo>
        </div>
        <IconDiv>
          <Icon type="settings"/>
        </IconDiv>
        
      </Div>
      <ButtonBox>
        <PlayAll>
          <Icon type="playsharp"/>모두 재생
        </PlayAll> 
        <Shuffle>
          <Icon type="shuffle"/>셔플
        </Shuffle>
      </ButtonBox>
    </PlaylistBoxStyle>
  )
}

export default PlaylistBox


