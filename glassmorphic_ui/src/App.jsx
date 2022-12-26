import React, {useState} from 'react'
import CharacterImage from './assets/character.png'
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
    <div className="container">
      <div className={DarkMode ? "text text-dark": "text text-light"}>
        <h1>Glassmorphic UI</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam ad doloremque iure dolor eos. Est nostrum blanditiis laboriosam eius cum, numquam distinctio repudiandae velit tenetur ratione aliquid architecto ipsa ea quibusdam, enim molestias magnam assumenda?</p>
        <span>Read More</span>
      </div>
      <div className={DarkMode ? "character character-dark" : "character character-light"}>
        <img src={CharacterImage} className='characterImage' />
      </div>
    </div>
    <button onClick={()=>{setDarkMode((val)=>!val)}}>Theme</button>
    </div>
    </>
  )
}

export default App
