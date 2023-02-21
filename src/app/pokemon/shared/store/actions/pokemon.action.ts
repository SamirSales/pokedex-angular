import { Action } from '@ngrx/store';
import { PokemonInterface } from '../../model/pokemon.model';

export const PokemonActionType = {
  POKEMON_EDIT_LIST: 'POKEMON_EDIT_LIST',
  EDIT_LIST2: 'EDIT_LIST2'
};

export class PokemonAction implements Action {
  readonly type = PokemonActionType.POKEMON_EDIT_LIST;

  constructor(public payload: PokemonInterface[]) {}
}

export class EditList2 implements Action {
  readonly type = PokemonActionType.EDIT_LIST2;

  constructor(public payload: []) {}
}

export type All = PokemonAction | EditList2;
