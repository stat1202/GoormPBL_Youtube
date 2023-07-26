import React from 'react'
import Video from '../components/Video'
import { styled } from 'styled-components'

const Videos = styled.div`
  box-sizing: border-box;
  width: 100%;
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  padding: 10px 10px 10px 0;
  text-align: center;
`

function HomePage() {
  return (
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
  )
}

export default HomePage