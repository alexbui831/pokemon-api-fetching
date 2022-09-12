import React from 'react'

const PokeTypeList = ({ pokemonType }) => {
  return (
    <>
      {pokemonType.map(p => (
      <div className="changaFont capitalize text-right m-2 px-2" key={p}>{p}</div>))}
    </>
  )
}

export default PokeTypeList