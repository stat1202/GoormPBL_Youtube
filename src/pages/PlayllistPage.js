import React from 'react'
import { css, styled } from 'styled-components'
import Icon from '../components/common/Icon'
import PlaylistBox from '../components/PlaylistBox'
import PlaylistVideo from '../components/PlaylistVideo'
import { usePc } from '../hooks/useMediaQuery'

const Div = styled.div`
  box-sizing: border-box;
  display: flex;
  height: calc(100vh - 72px);
  min-width: 410px;
  ${props => props.isPc || css`
    flex-direction: column;
  `}
`

const Playlists = styled.div`
  box-sizing: border-box;
  flex: 1;
`

const Sort = styled.div`
  display: flex;
  font-size: 14px;
  box-sizing: border-box;
  margin-left: 32px;
  align-items: center;
  cursor: pointer;
  gap: 10px;
  width: fit-content;
`


function PlayllistPage() {
  const isPc = usePc()
  return (
    <Div isPc={isPc}>
      <PlaylistBox/>
      <Playlists>
        <Sort><Icon type="filter"/>정렬</Sort>
        <PlaylistVideo/>
        <PlaylistVideo/>
        <PlaylistVideo/>
        <PlaylistVideo/>
      </Playlists>
    </Div>
  )
}

export default PlayllistPage