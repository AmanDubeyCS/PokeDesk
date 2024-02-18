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
    const [pokeDex, setPokeDex] = useState()

    const fetchData = async () => {
        setLoading(true)
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("data not found");
        }
        const res = await response.json();
        setNext(res.next)
        setPrev(res.previous)
        getPokemon(res.results)
        setLoading(false)
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    const getPokemon = async(res) => {
        res.map(async(item) => {
            const result = await fetch(item.url)
            const data = await result.json()
            setPokeData((state) => {
                state = [...state,data]
                state.sort((a,b) => a.id>b.id? 1:-1)
                return state;
            })
        })
    }

    useEffect(() => {
        fetchData();
    }, [url]);


  return (
    <>
      <div className="container">
        <div className="left-content">
            <Card pokemon={pokeData} loading={loading} pokeInfo={poke=>setPokeDex(poke)}/>
            <div className="button">
               {prev && <button onClick={() => {setPokeData([]); setUrl(prev); }}>Previous</button>} 
                <button onClick={() => {setPokeData([]); setUrl(next); }}>Next</button>
            </div>
        </div>
        <div className="right-content">
            <div className="poke-Info-Card">
                <PokemonInfo data={pokeDex}/>
            </div> 
        </div>
      </div>
    </>
  )
}

export default Main
