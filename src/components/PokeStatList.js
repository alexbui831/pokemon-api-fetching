import React from 'react';

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
        <div className="mx-2 text-white text-xl py-2">HP : {hp}</div>
        <div className="mx-2 text-white text-xl py-2">Attack : {atk}</div>
        <div className="mx-2 text-white text-xl py-2">Defense : {def}</div>
        <div className="mx-2 text-white text-xl py-2">Special Attack : {spatk}</div>
        <div className="mx-2 text-white text-xl py-2">Special Defense : {spdef}</div>
        <div className="mx-2 text-white text-xl py-2">Speed : {spd}</div>
    </>
  )
}

export default PokeStatList