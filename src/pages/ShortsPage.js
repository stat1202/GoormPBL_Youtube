import React from 'react'
import { styled } from 'styled-components'
import Short from '../components/Short'

const Div = styled.div`
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`


function ShortsPage() {
  return (
    <Div>      
      <Short/>
      <Short/>
      <Short/>
    </Div>
  )
}

export default ShortsPage