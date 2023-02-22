import { PokemonPageState, pokemonPageReducer } from './pokemonPage.reducer';
import { ActionReducerMap } from '@ngrx/store';

export const rootReducer = {};

export interface PokemonPageReducerState {
  pokemonPage: PokemonPageState;
}

export const reducers: ActionReducerMap<PokemonPageReducerState, any> = {
  pokemonPage: pokemonPageReducer
};
