import React, { useState } from 'react'
import { styled } from 'styled-components'

const CommentInputBox = styled.div`
  display: flex;
  gap: 15px;
  margin-bottom: 20px;
  & > img{
    width: 40px;
    height: 40px;
    border-radius: 50px;
  }

  & > div{
    flex:1;
  }
`

const Label = styled.label`
    flex: 1;
    height: fit-content;
    border-bottom: 1px solid #606060;
    box-sizing: border-box;
    padding-bottom: 3px;
    position: relative;
    &::before{
      content: '';
      position: absolute;
      transition: 0.3s;
      width: ${props => props.isFocus ? "100%": "0"};
      height: 2px;
      top: 100%;
      left: 50%;
      transform: translateX(-50%);
      background-color: #000;

      
    }

`
const CommentInputStyle = styled.input`
  box-sizing: border-box;
  width: 100%;
  height: auto;
  border: none;
  outline: none;
`
const ButtonBox = styled.div`
  display: flex;
  margin-top: 10px;
  justify-content: flex-end;
  gap: 10px;

  & > button{
    border: none;
    padding: 9px 17px;
    border-radius: 50px;
    visibility: ${props => props.isEdit ? "visible" : "hidden" };
  }

  & > button:first-child{
    background-color: transparent;
    cursor: pointer;

    &:hover{
      background-color: rgba(0,0,0,0.1);
    }
  }

  & > button:last-child{

    background-color: ${props => props.value !== "" ?  "#065fd4": "rgba(0,0,0,0.05)"} ;
    color: ${props => props.value !== "" ?  "#fff": "#606060"} ;
    cursor: ${props => props.value !== "" && "pointer"} ;
  }
`

function CommentInput() {
  const [isFocus, setIsFocus] = useState(false)
  const [isEdit, setEdit] = useState(false)
  const [value, setValue] = useState("")
  
  return (
    <CommentInputBox>
      <img src={`${process.env.PUBLIC_URL}/profile.jpg`} alt="profile"/>
      <div>
        <Label htmlFor='comment-input' isFocus={isFocus}>
          <CommentInputStyle placeholder='댓글 추가...' id="comment-input" onFocus={() =>{ 
            setIsFocus(true)
            setEdit(true)
          }} 
        onBlur={() => setIsFocus(false)}
          onChange={(e) => setValue(e.target.value)}
          ></CommentInputStyle>
        </Label>
        <ButtonBox value={value} isEdit={isEdit}>
          <button onClick={() => setEdit(false)}>
            취소
          </button>
          <button>
            댓글
          </button>
        </ButtonBox>
      </div>
    </CommentInputBox>
  )
}

export default CommentInput