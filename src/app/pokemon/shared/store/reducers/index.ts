import { PokemonListState, pokemonListReducer } from './pokemonList.reducer';
import { ActionReducerMap } from '@ngrx/store';

export const rootReducer = {};

export interface AppState {
  pokemons: PokemonListState;
}

export const reducers: ActionReducerMap<AppState, any> = {
  pokemons: pokemonListReducer
};
