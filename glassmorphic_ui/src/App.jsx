import React, {useState} from 'react'
import './App.css'
const App = () => {
  const [DarkMode, setDarkMode] = useState(true)
  return (
    <>
    <div className={DarkMode ? "background-dark" : "background-light"}>
    </div>
    <div className="page-container">
    <div className={DarkMode ? "navbar navbar-dark" : "navbar navbar-light"}>
      <h2>Logo</h2>
      <ul>
        <li className='not-menu'><a href="#">Home</a></li>
        <li className='not-menu'><a href="#">About</a></li>
        <li className='not-menu'><a href="#">Github</a></li>
        <li className='not-menu'><a href="#">Twitter</a></li>
        <li className="menu">Menu</li>
      </ul>
    </div>
    </div>
    <button onClick={()=>{setDarkMode((val)=>!val)}}>Theme</button>
    </>
  )
}

export default App
