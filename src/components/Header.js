import React from 'react';
import { GiPokecog } from "react-icons/gi";
import { AiFillGithub } from "react-icons/ai";

const Header = () => {
  return (
    <>
        <div className="flex justify-between">
            <div className="flex justify-start m-4 pt-4 luckiestFont">
              <GiPokecog size={36} style = {{transform: 'rotate(146deg)' }}/>
              <div className="ml-4">POKEDEX API</div>
            </div>
            <div className="flex justify-end m-4 pt-4 text-white font-changa">
              <AiFillGithub size={20}/>
              <a rel="noreferrer" href="https://github.com/alexbui831/pokemon-api-fetching" target="_blank">gitHub : Alexander Bui</a>
            </div>
        </div>
    </>
  )
}

export default Header