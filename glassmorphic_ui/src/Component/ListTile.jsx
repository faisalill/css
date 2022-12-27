import React from 'react'
import '../css/ListTile.css'
import Tilt from 'react-tilt'
const ListTile = (props) => {
  return (
    <div className='list-tile'>
      <h2>List</h2>
      <Tilt>
      <div className={props.DarkMode ? "tile tile-dark" : "tile tile-light"}>
        <div className={props.DarkMode ? "tile-image tile-image-dark" : "tile-image tile-image-light"}>img</div>
        <div className="desc">
            <h4>Denice</h4>
            <h5>Software Engineer</h5>
        </div>
      </div>
      </Tilt>
      <Tilt>
      <div className={props.DarkMode ? "tile tile-dark" : "tile tile-light"}>
        <div className={props.DarkMode ? "tile-image tile-image-dark" : "tile-image tile-image-light"}>img</div>
        <div className="desc">
            <h4>Sugendese</h4>
            <h5>Video Editor</h5>
        </div>
      </div>
      </Tilt>
      <Tilt>
      <div className={props.DarkMode ? "tile tile-dark" : "tile tile-light"}>
        <div className={props.DarkMode ? "tile-image tile-image-dark" : "tile-image tile-image-light"}>img</div>
        <div className="desc">
            <h4>Ligma</h4>
            <h5>Professional baller</h5>
        </div>
      </div>
      </Tilt>
      <Tilt>
      <div className={props.DarkMode ? "tile tile-dark" : "tile tile-light"}>
        <div className={props.DarkMode ? "tile-image tile-image-dark" : "tile-image tile-image-light"}>img</div>
        <div className="desc">
            <h4>Jack</h4>
            <h5>Vlogger</h5>
        </div>
      </div>
      </Tilt>
    </div>
  )
}

export default ListTile
