import React from 'react';

const PokemonRow = (props) => {
  const { pokemon } = props;
  return (
    <div>
      <p className='id'>ID: {pokemon.id}</p>
      <p className='name'>Name: {pokemon.name}</p>
      <p className='type'>Type: {pokemon.type}</p>
      <img src={pokemon.sprite} alt={pokemon.name} className='sprite' />
    </div>
  );
};

export default PokemonRow;
