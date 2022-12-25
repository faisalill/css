import React, {useRef, useEffect} from 'react'
import {BiHomeAlt, BiShareAlt} from 'react-icons/bi'
import {MdOutlinePersonOutline,MdOutlineEmail} from 'react-icons/md'
import {BsChat} from 'react-icons/bs'
import { useState } from 'react'
const Navbar = () => {
    const bgCircleRef = useRef(null);
    const listRef = useRef([]);
    const [offsetMultiplier, setoffsetMultiplier] = useState(0)
    const [bgCircleOpacity,setbgCircleOpacity ] = useState(0)
    var LeftOffset = 45 + 90 * offsetMultiplier
    var bgcircleStyle = {
      left: LeftOffset,
      opacity: bgCircleOpacity,
    }

  return (
    <>
    <div className='navbar'>
    <ul className='navbar-ul' onMouseEnter={()=>{setbgCircleOpacity(1)}} onMouseLeave={()=>{setbgCircleOpacity(0)}}>
        <li className='navbar-li' onMouseMove={()=>{setoffsetMultiplier(0)}}><a href="#"><BiHomeAlt size='26' className='navbar-icon'/></a></li>
        <li className='navbar-li' onMouseMove={()=>{setoffsetMultiplier(1)}}><a href="#"><MdOutlinePersonOutline size='26' className='navbar-icon'/></a></li>
        <li className='navbar-li' onMouseMove={()=>{setoffsetMultiplier(2)}}><a href="#"><MdOutlineEmail size='26' className='navbar-icon'/></a></li>
        <li className='navbar-li' onMouseMove={()=>{setoffsetMultiplier(3)}}><a href="#"><BiShareAlt size='26' className='navbar-icon'/></a></li>
        <li className='navbar-li' onMouseMove={()=>{setoffsetMultiplier(4)}}><a href="#"><BsChat size='26' className='navbar-icon'/></a></li>
        <div className="bg-circle" style={bgcircleStyle}></div>
    </ul>
    </div>
    </>
  )
}

export default Navbar