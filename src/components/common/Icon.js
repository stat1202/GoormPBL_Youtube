import React from 'react'
import { RxHamburgerMenu } from "react-icons/rx";
import { BsBell, BsCameraVideo, BsFillMicFill, BsPlay, BsPlayFill } from "react-icons/bs"
import { GoHome, GoHomeFill, GoSearch, GoChevronLeft } from "react-icons/go"
import { MdOutlineVideoLibrary, MdVideoLibrary, MdOutlineSubscriptions, MdSubscriptions, MdInsertComment} from "react-icons/md"
import {PiDotsThreeVertical} from "react-icons/pi"
import {RiShareForwardFill} from "react-icons/ri"
import {IoMdThumbsUp,IoMdThumbsDown } from "react-icons/io"

function Icon({type}) {
  return (
    <React.Fragment>
      {
        type === "hamburger"
        &&
        <RxHamburgerMenu size={24} style={{cursor: "pointer"}}/>
      }
      {
        type === "bell"
        &&
        <BsBell size={24}/>
      }
      {
        type === "video"
        &&
        <BsCameraVideo size={24}/>
      }
      {
        type === "mic"
        &&
        <BsFillMicFill size={24}/>
      }
      {
        type === "home"
        &&
        <GoHome size={24}/>
      }
      {
        type === "home-fill"
        &&
        <GoHomeFill size={24}/>
      }
      {
        type === "shorts"
        &&
        <BsPlay size={24}/>
      }
      {
        type === "shorts-fill"
        &&
        <BsPlayFill size={24}/>
      }
      {
        type === "library"
        &&
        <MdOutlineVideoLibrary size={24}/>
      }
      {
        type === "library-fill"
        &&
        <MdVideoLibrary size={24}/>
      }
      {
        type === "subscriptions"
        &&
        <MdOutlineSubscriptions size={24}/>
      }
      {
        type === "subscriptions-fill"
        &&
        <MdSubscriptions size={24}/>
      }
      {
        type === "search"
        &&
        <GoSearch size={24}/>
      }
      {
        type === "settings"
        &&
        <PiDotsThreeVertical size={24}/>
      }
      {
        type === "arrow"
        &&
        <GoChevronLeft size={24}/>
      }
      {
        type === "share"
        &&
        <RiShareForwardFill size={24}/>
      }
      {
        type === "comment"
        &&
        <MdInsertComment size={24}/>
      }
      {
        type === "like"
        &&
        <IoMdThumbsUp size={24}/>
      }
      {
        type === "dislike"
        &&
        <IoMdThumbsDown size={24}/>
      }
      {
        type === "profile"
        &&
        <img src={`${process.env.PUBLIC_URL}/profile.jpg`} alt="profile" style={{ width:"32px", height: "32px", borderRadius: "50%", marginLeft: "10px", cursor: "pointer"}}/>
      }
      
    </React.Fragment>
  )
}

export default Icon


