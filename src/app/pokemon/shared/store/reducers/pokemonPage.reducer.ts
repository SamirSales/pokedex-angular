import { PokemonInterface } from '../../model/pokemon.model';
import { PokemonListEditAction, PokemonActionType } from '../actions/pokemon.action';

export interface PokemonPageState {
  pokemons: PokemonInterface[];
  isLoading: boolean;
  indexPage: number;
  itemsPerPage: number;
}

const initialState: PokemonPageState = {
  pokemons: [],
  isLoading: false,
  indexPage: 1,
  itemsPerPage: 12
};

export const pokemonPageReducer = (state: PokemonPageState = initialState, action: PokemonListEditAction) => {
  console.log(action.type, state);

  switch (action.type) {
    case PokemonActionType.POKEMON_EDIT_LIST:
      return newState(state, { pokemons: action.payload });

    case PokemonActionType.POKEMON_START_LOADING:
      return newState(state, { isLoading: true });

    case PokemonActionType.POKEMON_STOP_LOADING:
      return newState(state, { isLoading: false });
    default:
      return state;
  }
};

const newState = (state: PokemonPageState, newData: any) => {
  return Object.assign({}, state, newData);
};
