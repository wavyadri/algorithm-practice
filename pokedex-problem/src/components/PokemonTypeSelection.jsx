import React from 'react';

const PokemonTypeSelection = (props) => {
  const { pokemonArray, selectedPokemon, setSelectedPokemon } = props;

  return (
    <div>
      <label htmlFor='pokemons'>Select a pokemon: </label>
      <select
        name='pokemons'
        value={selectedPokemon}
        onChange={(e) => setSelectedPokemon(e.target.value)}
      >
        <option value='pokemon' disabled>
          pokemon
        </option>
        {pokemonArray.map((pokemon) => {
          return (
            <option key={pokemon.id} value={pokemon.name}>
              {pokemon.name}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default PokemonTypeSelection;
