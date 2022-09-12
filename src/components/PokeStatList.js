import React from 'react'

const PokeStatList = ({ pokemonStats }) => {

    // hp, attack, defense, special attack, special defense, speed
    const hp = pokemonStats[0];
    const atk = pokemonStats[1];
    const def = pokemonStats[2];
    const spatk = pokemonStats[3];
    const spdef = pokemonStats[4];
    const spd = pokemonStats[5];

  return (
    <>
        <div className="mx-2 text-white text-xl">HP : {hp}</div>
        <div className="mx-2 text-white text-xl">Attack : {atk}</div>
        <div className="mx-2 text-white text-xl">Defense : {def}</div>
        <div className="mx-2 text-white text-xl">Special Attack : {spatk}</div>
        <div className="mx-2 text-white text-xl">Special Defense : {spdef}</div>
        <div className="mx-2 text-white text-xl">Speed : {spd}</div>
    </>
  )
}

export default PokeStatList