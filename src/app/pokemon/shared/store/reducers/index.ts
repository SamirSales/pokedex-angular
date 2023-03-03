import { PokemonPageState, pokemonPageReducer } from './pokemon-page.reducer';
import { ActionReducerMap } from '@ngrx/store';

export const rootReducer = {};

export interface PokemonPageReducerState {
  pokemonPage: PokemonPageState;
}

export const reducers: ActionReducerMap<PokemonPageReducerState, any> = {
  pokemonPage: pokemonPageReducer
};
