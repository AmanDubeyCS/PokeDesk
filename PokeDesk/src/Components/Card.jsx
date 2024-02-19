import React from 'react'
import './Style.css'

function Card({pokemon, loading, pokeInfo}) {
  return (
    <>
    { 
      loading ? <h1>Loading...</h1> :
      (pokemon.map((item) =>{
        return(
          <div className='card-container' key={item.id} onClick={()=>pokeInfo(item)}>
          <div className="pokemon-image">
              <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${item.id}.svg`} alt="" />
          </div>
          <div className="pokemon-info">
              <h1>{item.name}</h1>
          </div>
          </div>
        )
      }))
    }
      
    </>
  )
}

export default Card
