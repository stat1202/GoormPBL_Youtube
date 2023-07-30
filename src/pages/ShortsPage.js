import React, { useEffect, useState } from 'react'
import { keyframes, styled } from 'styled-components'
import Short from '../components/Short'

const Div = styled.div`
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  position: relative;
  transition: 0.5s;
  top: ${props => props.wheel && `${props.wheel*680}px` };

`

function ShortsPage() {
  const [wheel, setWheel] = useState(0)
  const wheelHandler = (e) => {
    // console.log(wheel)
    if (e.deltaY > 0 && -2 < wheel && wheel  <= 0){
      setWheel(wheel - 1)
    }
    else if(e.deltaY < 0 && -2<= wheel && wheel <0){
      setWheel(wheel + 1)
    }
  }

  useEffect( () => {
    document.body.style.overflowY = 'hidden'
    window.scrollTo(0,0)
    window.addEventListener('wheel', wheelHandler)
    return () => {
      document.body.style.overflowY = 'scroll'
      window.removeEventListener('wheel', wheelHandler)
    }

  })


  return (
    <Div wheel={wheel}>      
      <Short/>
      <Short/>
      <Short/>
    </Div>
  )
}

export default ShortsPage