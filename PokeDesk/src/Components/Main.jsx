import React, { useEffect, useState } from 'react'
import Card from './Card'
import './Style.css'
import PokemonInfo from './PokemonInfo'

function Main() {
    const [pokeData, setPokeData] = useState([])
    const [loading, setLoading] = useState(true)
    const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon/")
    const [next, setNext] = useState()
    const [prev, setPrev] = useState()
 
    useEffect(() => {
        const fetch = async() =>{
            setLoading(true)
            const res = await fetch(url)
            setNext(res.data.next)
            setPrev(res.data.previous)
            getPokemon(res.data.result)
            setLoading(false)
            console.log(pokeData)
        }
    }, [])

    const getPokemon = async() => {
        res.map(async(item) => {
            const result = await fetch(item.url)
            setPokeData(state => {
                state = [...state,result.data]
                return state
            })
        })
    }

  return (
    <>
      <div className="container">
        <div className="left-content">
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <div className="button">
                <button>Previous</button>
                <button>Next</button>
            </div>
        </div>
        <div className="right-content">
            <PokemonInfo />
        </div>
      </div>
    </>
  )
}

export default Main
