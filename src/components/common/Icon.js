import React from 'react'
import { RxHamburgerMenu } from "react-icons/rx";
import { BsBell, BsCameraVideo, BsFillMicFill, BsPlay, BsPlayFill } from "react-icons/bs"
import { GoHome, GoHomeFill, GoSearch, GoChevronLeft, GoClock } from "react-icons/go"
import { MdOutlineVideoLibrary, MdVideoLibrary, MdOutlineSubscriptions, MdSubscriptions, MdInsertComment} from "react-icons/md"
import { PiShareFatThin, PiDotsThreeVertical, PiClockCounterClockwiseLight, PiPlaylist, PiShuffleLight} from "react-icons/pi"
import {RiShareForwardFill} from "react-icons/ri"
import {IoMdThumbsUp,IoMdThumbsDown, IoIosList, IoIosPlay } from "react-icons/io"
import { BiGridHorizontal,} from "react-icons/bi"
import { AiOutlineDislike, AiOutlineLike } from "react-icons/ai"
import { BsFilterLeft } from "react-icons/bs"
import { HiBars2 } from "react-icons/hi2"

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
        type === "share-empty"
        &&
        <PiShareFatThin size={24}/>
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
        type === "like-empty"
        &&
        <AiOutlineLike size={24}/>
      }
      {
        type === "dislike"
        &&
        <IoMdThumbsDown size={24}/>
      }
      {
        type === "dislike-empty"
        &&
        <AiOutlineDislike size={24}/>
      }
      
      {
        type === "list"
        &&
        <IoIosList size={24}/>
      }
      {
        type === "grid"
        &&
        <BiGridHorizontal size={24}/>
      }
      {
        type === "clock"
        &&
        <GoClock size={24}/>
      }
      {
        type === "log"
        &&
        <PiClockCounterClockwiseLight size={24}/>
      }
      {
        type === "playlist"
        &&
        <PiPlaylist size={24}/>
      }
      {
        type === "shuffle"
        &&
        <PiShuffleLight size={24}/>
      }
      {
        type === "playsharp"
        &&
        <IoIosPlay size={24}/>
      }
      {
        type === "filter"
        &&
        <BsFilterLeft size={24}/>
      }
      {
        type === "double"
        &&
        <HiBars2 size={20}/>
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


