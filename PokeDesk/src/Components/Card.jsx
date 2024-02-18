import React from 'react'
import charmender from './pngwing.com.png'
import './Style.css'

function Card() {
  return (
    <div className='card-container'>
        <div className="pokemon-image">
            <img src={charmender} alt="" />
        </div>
        <div className="pokemon-info">
            <h2>1</h2>
            <h1>Charmander</h1>
        </div>
    </div>
  )
}

export default Card
