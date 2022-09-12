import React from 'react';

const PokeTypeList = ({ pokemonType }) => {
  //  maps a dive for each poke type

  return (
    <>
      {pokemonType.map(p => (
      <div className="font-changa text-white text-xl hover:text-black capitalize text-right mt-1 px-2" key={p}>{p}</div>))}
    </>
  )
}

export default PokeTypeList