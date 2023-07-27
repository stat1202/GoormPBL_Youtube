import React, { useState } from 'react'
import { styled } from 'styled-components'

const Description = styled.div`
  box-sizing: border-box;
  position: relative;
  padding: 15px;
  background-color: rgba(0,0,0,0.05);
  border-radius: 10px;
  margin-top: 15px;
  font-size: 14px;
  transition: 0.3s;
  height: ${props => props.isDetail ? "536px" : "104px"};
  overflow-y: hidden;
  & > div>  a{
    text-decoration: none;
    color: #065fd4;
  }

  & > div> button{
    margin-top: 20px;
    border:none;
    cursor: pointer;
  }
`
const ShowmoreBtn = styled.button`
  border:none;
  cursor: pointer;
  position: absolute;
  bottom: 15px;
  right: 15px;
  padding: 0;
`

const MoreDetailBox = styled.div`
  transition: 0.3s;
  opacity: ${props=> props.isDetail ? "1": "0"};
  visibility: ${props=> props.isDetail ? "visible": "hidden"};

  & > div > a{
    text-decoration: none;
    color: #065fd4;
  }
`

function Showmore() {
  const [isDetail, setIsdetail] = useState(false)

  return (
    <Description isDetail={isDetail}>
      <div>
        <span>조회수 2,520,905회  2023. 7. 25. </span>
        <a href='./'><b>#NewJeans</b></a>
        <a href='./'><b>#ADOR</b></a>
        <a href='./'><b>#NewJeans_ETA</b></a>
      </div>
      <div>NewJeans (뉴진스) 'ETA' Official MV (Performance ver.)</div>
      <br/>
      <div>
        Producer: MIN HEE JIN<br/>
      </div>
      {
        isDetail
        ||
        <ShowmoreBtn onClick={() => setIsdetail(true)}>
          더보기
        </ShowmoreBtn>
      }
      <MoreDetailBox isDetail={isDetail}>
        <div>
          
          Music Video Director: Wooseok Shin<br/>
          <br/>
          © 2023 ADOR. All Rights Reserved.<br/>
          <br/>
          Connect with NewJeans<br/>
          <br/>
        </div>
        <div>
          PHONING <a href='./'>https://phoning.onelink.me/KG15/n7452q87</a><br/>
          OFFICIAL INSTAGRAM <a href='./'>https://www.instagram.com/newjeans_of...</a> <br/>
          OFFICIAL TWITTER <a href='./'>https://twitter.com/NewJeans_ADOR</a><br/>
          OFFICIAL TIKTOK <a href='./'>https://www.tiktok.com/@newjeans_offi...</a><br/>
          OFFICIAL WEVERSE <a href='./'>https://weverse.io/newjeansofficial</a><br/>
          OFFICIAL FACEBOOK <a href='./'>https://www.facebook.com/official.new...</a><br/>
          OFFICIAL JAPAN TWITTER <a href='./'>https://twitter.com/@NewJeans_jp</a><br/>
          OFFICIAL WEIBO  <a href='./'>https://weibo.com/NewJeansADOR</a><br/>
          OFFICIAL BILIBILI <a href='./'>https://space.bilibili.com/3493092783...</a><br/>
        </div>
        <br/>
        <div>
          <a href='./'>#Time_to_NewJeans</a><br/>
          <a href='./'>#NewJeans #뉴진스</a><br/>
          <a href='./'>#광고 #NewJeans_GetUp</a><br/>
          <a href='./'>#NewJeans_ETA </a><br/>
          <a href='./'>#ADOR #어도어</a><br/>
        </div>
        <button onClick={() => setIsdetail(false)}>간략히</button>
      </MoreDetailBox>
    </Description>
  )
}

export default Showmore