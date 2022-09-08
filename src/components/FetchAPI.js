import { React, useState, useEffect } from 'react'
//  axios allows easier API fetching
import Axios from 'axios'


const FetchAPI = () => {
    const [pokemon, setPokemon] = useState()
    const [pokemonImg, setPokemonImg] = useState()
    const [counter, setCounter] = useState(1)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        //  when request made, setloading true
        setLoading(true)
        Axios.get(`https://pokeapi.co/api/v2/pokemon/${counter}`).then((response) => {
            //  when request completes, setloading false
            console.log("PokeID:" + counter)
            console.log(response.data.name)
            console.log(response.data.sprites.front_default)
            setPokemon(response.data.name)
            setPokemonImg(response.data.sprites.front_default)

            //  pass page parameter: everytime page changes, run the code inside
            if (loading) return "Loading Pokedex"
        })
    }, [counter, loading])

    function incrementCounter() {
        setCounter(counter + 1)
    }

    function decrementCounter() {
        if (counter > 1) {
            setCounter(counter - 1)
        } else {
            setCounter(898)
        }
    }

    function setGen(num) {
        setCounter(num)
    }

  return (
    <>  
        <div className="flex justify-start border-y-4 bg-lightPurple border-lightPurple">
            <span className="m-4 changaFont">No. {counter}</span>
            <span className="capitalize m-4 changaFont">{pokemon}</span>
        </div>
        <div className="flex w-full h-screen pb-56">
            <div className="flex flex-col flex-1">

                <div className="flex justify-center">
                    <div>
                        <img src={pokemonImg} alt='pokemonImg' className="h-72 border-4 border-lightPurple bg-white mt-10"/>
                    </div>
                </div>
                <div className="flex justify-center p-4">
                    <span>Type 1</span>
                </div>
                <div className="flex justify-center p-4">
                    <button>Front</button>
                    <button>Back</button>
                </div>
                <div className="flex justify-center p-4">
                    <button onClick={decrementCounter}>-</button>
                    <button onClick={incrementCounter}>+</button>
                </div>
            </div>
            <div className="flex flex-col justify-top basis-44 mt-10">
                <button className="changaFont" onClick={() => setGen(1)}>generation 1</button>
                <button className="changaFont" onClick={() => setGen(152)}>generation 2</button>
                <button className="changaFont" onClick={() => setGen(252)}>generation 3</button>
                <button className="changaFont" onClick={() => setGen(387)}>generation 4</button>
                <button className="changaFont" onClick={() => setGen(495)}>generation 5</button>
                <button className="changaFont" onClick={() => setGen(650)}>generation 6</button>
                <button className="changaFont" onClick={() => setGen(722)}>generation 7</button>

            </div>
        </div>
    </>
  )
}

export default FetchAPI