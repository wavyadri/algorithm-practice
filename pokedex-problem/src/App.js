import './App.css';
import PokemonRow from './components/PokemonRow';
import PokedexTable from './components/PokedexTable';

const bulbasaur = {
  id: 1,
  name: 'Bulbasaur',
  types: ['grass'],
  sprite: 'https://pokemon.com/pictures/bulbasaur.png',
};

const pokemonArray = [
  {
    id: 1,
    name: 'Bulbasaur',
    types: ['grass'],
    sprite: 'https://pokemon.com/pictures/bulbasaur.png',
  },
  {
    id: 2,
    name: 'Charmander',
    types: ['fire'],
    sprite: 'https://pokemon.com/pictures/bulbasaurr.png',
  },
];

function App() {
  return (
    <div className='App'>
      <PokemonRow pokemon={bulbasaur} />
      <PokedexTable pokemonArray={pokemonArray} />
    </div>
  );
}

export default App;
