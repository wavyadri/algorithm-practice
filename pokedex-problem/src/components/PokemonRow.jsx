import React from 'react';

const PokemonRow = (props) => {
  const { pokemon } = props;
  return (
    <div>
      <p className='name'>Name: {pokemon.name}</p>
      <img src={pokemon.url} alt={pokemon.name} className='sprite' />
    </div>
  );
};

export default PokemonRow;
