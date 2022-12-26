import React from 'react'
import LightBg from './Components/LightBg'
import DarkBg from './Components/DarkBg'
import DarkHomePage from './Components/DarkHomePage'
import LightHomePage from './Components/LightHomePage'
import { useState } from 'react'
const App = () => {
  const [Theme, setTheme] = useState(false)
  return (
    <>
    {Theme ? <DarkBg /> : <LightBg />}
    {Theme ? <DarkHomePage /> : <LightHomePage />}
    {/* <button onClick={()=>{setTheme((val)=>!val)}}>Toggle Theme</button> */}
    </>
  )
}

export default App
