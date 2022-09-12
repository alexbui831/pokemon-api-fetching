import { React, useState, useEffect } from 'react';
//  axios allows easier API fetching
import Axios from 'axios';
import PokeTypeList from './PokeTypeList';
import PokeStatList from './PokeStatList';

import { BsFillArrowLeftSquareFill, BsFillArrowRightSquareFill } from 'react-icons/bs';

const FetchAPI = () => {
    const [pokemon, setPokemon] = useState();
    const [pokemonType, setPokemonType] = useState([]);
    const [pokemonStats, setPokemonStats] = useState([]);
    const [pokemonImg, setPokemonImg] = useState();
    const [prevPokemonImg, setPrevPokemonImg] = useState();
    const [nextPokemonImg, setNextPokemonImg] = useState();
    const [counter, setCounter] = useState(2);
    const [prevCounter, setPrevCounter] = useState(1);
    const [nextCounter, setNextCounter] = useState(3);
    const [picSetting, setPicSetting] = useState(true);
    const [pokeLink, setPokeLink] = useState();

    if (prevCounter === 0) {
        setPrevCounter(898);
    }

    useEffect(() => {
        Axios.get(`https://pokeapi.co/api/v2/pokemon/${prevCounter}`).then((response) => {

            if (picSetting === true) {
                setPrevPokemonImg(response.data.sprites.front_default);
            } else {
                setPrevPokemonImg(response.data.sprites.back_default);
            }
        })
        Axios.get(`https://pokeapi.co/api/v2/pokemon/${counter}`).then((response) => {
            //  sets Pokemon name
            setPokemon(response.data.name);
            
            //  fetches Pokemon types in an array 
            const pokeTypeArr = (response.data.types.map(p => p.type));
            const pokeTypeArrMap = pokeTypeArr.map(p => p.name);

            //  sets deconstructed array into pokemonType
            setPokemonType(pokeTypeArrMap);

            //  fetches Pokemon base stats from the API 
            const pokeStatsArr = (response.data.stats.map(p => p.base_stat));
            setPokemonStats(pokeStatsArr);

            //  sets a link on the pokemon's name so user can find out more info about them
            setPokeLink(`https://www.pokemon.com/us/pokedex/${response.data.name}`);

            if (picSetting === true) {
            setPokemonImg(response.data.sprites.front_default);
            } else {
                setPokemonImg(response.data.sprites.back_default);
            }
        })
        Axios.get(`https://pokeapi.co/api/v2/pokemon/${nextCounter}`).then((response) => {

            if (picSetting === true) {
            setNextPokemonImg(response.data.sprites.front_default);
            } else {
                setNextPokemonImg(response.data.sprites.back_default);
            }
        })
        
    }, [counter, picSetting])
    
    function setPicFront() {
        setPicSetting(true);
    }

    function setPicBack() {
        setPicSetting(false);
    }

    //  increments, decrements, or sets counter so API knows where the pokedex should begin
    function incrementCounter() {
        if (counter === 897) {
            setPrevCounter(898);
            setCounter(1);
            setNextCounter(2);
        } else {
            setPrevCounter(counter);
            setCounter(counter + 1);
            setNextCounter(counter + 2);
        }
    }

    function decrementCounter() {
        if (counter > 1) {
            setPrevCounter(counter - 2);
            setCounter(counter - 1);
            setNextCounter(counter);
        } else {
            setPrevCounter(897);
            setCounter(898);
            setNextCounter(counter);
        }
    }

    function setGen(pokeID) {
        if (pokeID === 1) {
            setPrevCounter(898);
            setCounter(pokeID);
            setNextCounter(pokeID+1);
        }   else {
            setPrevCounter(pokeID - 1);
            setCounter(pokeID);
            setNextCounter(pokeID+1);
        }
    }

  return (
    <>  
        <div className="flex justify-start border-y-2 bg-lightPurple border-lightPurple py-3 pt-4">
            <div>
                <span className="m-4 font-changa text-3xl text-black">No. {counter}</span>
                <a className="uppercase m-4 font-changa text-3xl text-white pr-6 hover:text-black border-r-2 border-accentPurple"rel="noreferrer" href={pokeLink} target="_blank">{pokemon}</a>
            </div>
            <div className="flex">
                <div className="font-changa text-black text-xl mt-1 mx-4">TYPE :</div>
                <PokeTypeList pokemonType={pokemonType} />
            </div>
        </div>
        <div className="flex w-full pb-36">
            <div className="flex flex-col flex-1">
                <div className="flex justify-center">
                    <button className="mt-4 mr-4" onClick={decrementCounter}>
                        <BsFillArrowLeftSquareFill
                            size={40} 
                            color={"white"}
                            onMouseOver={({target})=>target.style.color="#2D0238"}
                            onMouseOut={({target})=>target.style.color="white"}/>
                    </button>
                    <div>
                        <img src={prevPokemonImg} alt='pokemonImg' className="h-56 m-4 border-4 border-lightPurple bg-white mt-20 mr-10"/>
                    </div>
                    <div>
                        <img src={pokemonImg} alt='pokemonImg' className="h-72 m-4 border-4 border-lightPurple bg-white mt-10"/>
                    </div>
                    <div>
                        <img src={nextPokemonImg} alt='pokemonImg' className="h-56 m-4 border-4 border-lightPurple bg-white mt-20 ml-10"/>
                    </div>
                    <button className="mt-4 ml-4 font-changa text-white text-4xl" onClick={incrementCounter}>
                        <BsFillArrowRightSquareFill
                            size={40} 
                            color={"white"} 
                            onMouseOver={({target})=>target.style.color="#2D0238"}
                            onMouseOut={({target})=>target.style.color="white"}/>
                    </button>
                </div>
                <div className="flex justify-center p-4">
                    <button className="changaFont p-2 px-12 m-4 mx-5 mt-6" onClick={setPicFront}>Front</button>
                    <button className="changaFont p-2 px-12 m-4 mx-5 mt-6" onClick={setPicBack}>Back</button>
                </div>
            </div>
            <div className="flex flex-col justify-top basis-44 mt-10">
                <button className="changaFont" onClick={() => setGen(2)}>generation 1</button>
                <button className="changaFont" onClick={() => setGen(153)}>generation 2</button>
                <button className="changaFont" onClick={() => setGen(253)}>generation 3</button>
                <button className="changaFont" onClick={() => setGen(388)}>generation 4</button>
                <button className="changaFont" onClick={() => setGen(496)}>generation 5</button>
                <button className="changaFont" onClick={() => setGen(651)}>generation 6</button>
                <button className="changaFont" onClick={() => setGen(723)}>generation 7</button>
            </div>
        </div>
        <div className="flex justify-center font-changa pt-1 pb-1.5 bg-purple">
            <PokeStatList pokemonStats={pokemonStats}/>
        </div>
    </>
  )
}

export default FetchAPI