import React from 'react'
import { styled } from 'styled-components'
import Video from '../components/Video'
import Icon from '../components/common/Icon'

const Videos = styled.div`
  box-sizing: border-box;
  width: 100%;
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  padding: 10px 10px 10px 0;
  text-align: center;
`
const Div = styled.div`
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Span = styled.span`

`

const Btn = styled.button`
  border: none;
  height: 36px;
  padding: 0 17px;
  border-radius: 50px;
  color: #3ea6ff;
  background-color: transparent;

  &:hover{
    background-color: #def1ff;
  }
`

const IconDiv = styled.div`
  padding: 8px;
  display: flex;
  border-radius: 50%;
  cursor: pointer;
  &:hover{
    background-color: rgba(0,0,0,0.05);
  }
`

function SubscriptionPage() {
  return (
    <React.Fragment>
      <Div>
        <Span>
          최신순
        </Span>
        <Div>
          <Btn>관리</Btn>
          <IconDiv>
            <Icon type="grid"/>
          </IconDiv>
          <IconDiv>
            <Icon type="list"/>
          </IconDiv>
        </Div>
      </Div>
      <Videos>
        <Video/>
        <Video/>
        <Video/>
        <Video/>
        <Video/>
        <Video/>
        <Video/>
        <Video/>
      </Videos>
    </React.Fragment>
  )
}

export default SubscriptionPage