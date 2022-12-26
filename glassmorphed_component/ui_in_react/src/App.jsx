import React from 'react'
import LightBg from './Components/LightBg'
import DarkBg from './Components/DarkBg'
import { useSelector } from 'react-redux'
import {useDispatch} from 'react-redux'
import {changeTheme} from './features/Theme'
import Navbar from './Components/Navbar'
import './css/Navbar.css'
const App = () => {
  const dispatch = useDispatch()
  const theme = useSelector((state)=>state.theme.value.LightTheme)
  return (
    <>
    {theme ? <DarkBg /> : <LightBg />}
    <Navbar />
    <button onClick={()=>{dispatch(changeTheme())}}>Toggle Theme</button>
    </>
  )
}
export default App
