import React, { useState } from 'react';
import PokedexTable from './PokedexTable';
import PokemonTypeSelection from './PokemonTypeSelection';

const FilterablePokedexTable = (props) => {
  const { pokemonArray } = props;
  const [selectedPokemon, setSelectedPokemon] = useState('pokemon');

  const filterPokemonArray = pokemonArray.filter((pokemon) => {
    return pokemon.name === selectedPokemon;
  });
  return (
    <div>
      <h1>Filterable pokemon</h1>
      <PokemonTypeSelection
        pokemonArray={pokemonArray}
        selectedPokemon={selectedPokemon}
        setSelectedPokemon={setSelectedPokemon}
      />
      {selectedPokemon !== 'pokemon' && (
        <PokedexTable pokemonArray={filterPokemonArray} />
      )}
    </div>
  );
};

export default FilterablePokedexTable;
