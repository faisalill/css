import React from 'react'
import {SiReactivex} from 'react-icons/si'
import { useSelector } from 'react-redux'
const Navbar = () => {
  const theme = useSelector((state)=>state.theme.value.LightTheme)
  return (
    <div className={theme? "navbar dark-nav" : "navbar light-nav"}>
        <a href="#"><SiReactivex size='30' className='logo'/></a>
        <ul>
            <li><a href="#">Home</a></li>
            <li><a href="https://github.com/faisalill" target='_blank'>About</a></li>
            <li><a href="https://twitter.com/faisalilly" target='_blank'>Email</a></li>
            <li><a href="https://github.com/faisalill" target='_blank'>GitHub</a></li>
            <li><a href="https://twitter.com/faisalilly" target='_blank'>Twitter</a></li>
        </ul>
    </div>
  )
}

export default Navbar
