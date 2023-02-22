import { Action } from '@ngrx/store';
import { PokemonInterface } from '../../model/pokemon.model';

export const PokemonActionType = {
  POKEMON_EDIT_LIST: 'POKEMON_EDIT_LIST',
  POKEMON_START_LOADING: 'POKEMON_START_LOADING',
  POKEMON_STOP_LOADING: 'POKEMON_STOP_LOADING',
  POKEMON_EDIT_INDEX_PAGE: 'POKEMON_EDIT_INDEX_PAGE',
  POKEMON_EDIT_ITEMS_PER_PAGE: 'POKEMON_EDIT_ITEMS_PER_PAGE'
};

export class PokemonListEditAction implements Action {
  readonly type = PokemonActionType.POKEMON_EDIT_LIST;

  constructor(public payload: PokemonInterface[]) {}
}

export class PokemonStartLoadingAction implements Action {
  readonly type = PokemonActionType.POKEMON_START_LOADING;
}

export class PokemonStopLoadingAction implements Action {
  readonly type = PokemonActionType.POKEMON_STOP_LOADING;
}

export class PokemonIndexPageEditAction implements Action {
  readonly type = PokemonActionType.POKEMON_EDIT_INDEX_PAGE;

  constructor(public payload: number) {}
}

export type All = PokemonListEditAction | PokemonStartLoadingAction | PokemonStopLoadingAction;
