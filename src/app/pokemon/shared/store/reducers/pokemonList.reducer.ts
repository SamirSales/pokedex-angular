import { PokemonInterface, PokemonModelMapper } from '../../model/pokemon.model';
import { PokemonAction, PokemonActionType } from '../actions/pokemon.action';

export interface PokemonListState {
  pokemons: PokemonInterface[];
}

const initialState: PokemonListState = {
  pokemons: []
};

export const pokemonListReducer = (state: PokemonListState = initialState, action: PokemonAction) => {
  console.log(action.type, state);

  switch (action.type) {
    case PokemonActionType.POKEMON_EDIT_LIST:
      return newState(state, action.payload);
    default:
      return state;
  }
};

//TODO: I am not sure if this method is necessary
const newState = (state: PokemonListState, newData: PokemonInterface[]) => {
  return Object.assign({}, state, newData);
};
