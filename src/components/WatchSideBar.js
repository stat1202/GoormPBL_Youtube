import React, { useState } from 'react'
import { styled } from 'styled-components'
import SidebarVideo from './SidebarVideo'
import { usePc } from '../hooks/useMediaQuery'
import Icon from './common/Icon'

const Div = styled.div`
  max-width: ${props => props.isPc && "400px"};
`

const FilterDiv = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  height: 50px;
  overflow:hidden;
  padding: 15px 0 0 0;
`
const FilterBox = styled.div`
  position: absolute;
  padding: 10px 0;
  text-align: start;
  white-space: nowrap;
  transition: 0.3s;
  left: ${props => props.position &&  `${props.position}%`};
`

const Filter = styled.label`
  font-size: 14px;
  padding: 7px 12px;
  background-color: rgba(0,0,0,0.05);
  color: #666666;
  border-radius: 5px;
  margin-right: 5px;
  cursor: pointer;
  transition: 0.3s;
`

const Radio = styled.input`
  display: none;
  &:checked + label{
    background-color: #000;
    color: #fff;
  }
`
const Arrow = styled.div`
  position: absolute;
  right: ${props => props.direction = "right" && "0"};
  box-sizing: border-box;
  padding: 6px 6px 6px 18px;
  background-color: #fff;
  box-shadow: 3px 0 5px  #fff;
  transform: ${props => props.direction = "right" && "rotate(180deg)"};
  cursor: pointer;
  color: #606060;
`

const LeftArrow = styled.div`
  position: absolute;
  box-sizing: border-box;
  display: flex;
  left: 0;
  padding: 6px 6px 6px 6px;
  background-color: #fff;
  box-shadow: 3px 0 5px  #fff;
  cursor: pointer;
  color: #606060;
  z-index: 10;
`

function WatchSideBar() {
  const [position, setPosition] = useState(0)
  const isPc = usePc()
  // const filterX = document.getElementById("filter-div")
  // console.log(filterX.scrollLeft )
  return (
    <Div isPc={isPc}>
      <FilterDiv id="filter-div">
        {
          position < 0
          && 
          <LeftArrow onClick={() => position <=0 && setPosition( prev => prev + 10)} direction="left">
            <Icon type="arrow"/>
          </LeftArrow>
        }
        <FilterBox position={position}>
          
          <Radio id="all" type="radio" name="side-filter"/>
          <Filter htmlFor='all'>모두</Filter>

          <Radio id="my-result" type="radio" name="side-filter" />
          <Filter htmlFor='my-result'>내 검색결과</Filter>

          <Radio id="hybe-labels" type="radio" name="side-filter" />
          <Filter htmlFor='hybe-labels'>HYBE LABELS 제공</Filter>

          <Radio id="relation" type="radio" name="side-filter" />
          <Filter htmlFor='relation'>관련 콘텐츠</Filter>

          <Radio id="artist" type="radio" name="side-filter" />
          <Filter htmlFor="artist">비슷한 아티스트</Filter>
        </FilterBox>
        {
          position > -50
          &&
          <Arrow onClick={() => position >= -50 && setPosition( prev => prev - 10)} direction="right">
            <Icon type="arrow"/>
          </Arrow>
        }
        
      </FilterDiv>

      <SidebarVideo/>
      <SidebarVideo/>
      <SidebarVideo/>
      <SidebarVideo/>
    </Div>
  )
}

export default WatchSideBar