import { Actions, ofType, createEffect } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { Injectable } from '@angular/core';
import { PokemonActionType } from '../actions/pokemon.action';
import { PokemonHttpClientService } from '../../service/pokemon-http-client/pokemon-http-client.service';
import { map, mergeMap, catchError } from 'rxjs/operators';

@Injectable()
export class LoadAllPokemonEffect {
  load$ = createEffect(() =>
    this.actions$.pipe(
      ofType(PokemonActionType.POKEMON_START_LOADING),
      mergeMap(() => {
        return this.pokemonHttpClientService.getAll().pipe(
          map((pokemons) => {
            return { type: PokemonActionType.POKEMON_EDIT_LIST, payload: pokemons };
          }),
          catchError(() => EMPTY)
        );
      })
    )
  );

  constructor(private actions$: Actions, private pokemonHttpClientService: PokemonHttpClientService) {}
}
