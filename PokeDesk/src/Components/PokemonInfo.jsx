import React from 'react'
import charmender from './pngwing.com.png'

function PokemonInfo() {
  return (
    <div className='Poke-info-container'>
        <div className='Poke-Image'>
            <img src={charmender} alt="" />
            <h1>Charizard</h1>
        </div>
        <div className="abilities">
        <div className='group'>
            <h2>blaze</h2>
        </div>
        <div className='group'>
            <h2>solar-power</h2>
        </div>
        </div>
        <div className="base-stats">
            <h3>Hp : 30</h3>
            <h3>Attach : 52</h3>
            <h3>defence : 43</h3>
            <h3>special-attack : 50</h3>
            <h3>Speed: 90</h3>
        </div>
      
    </div>
  )
}

export default PokemonInfo
