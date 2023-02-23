import { Actions, ofType, createEffect } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { Injectable } from '@angular/core';
import { PokemonActionType } from '../actions/pokemon.action';
import { PokemonHttpClientService } from '../../service/pokemon-http-client.service';
import { map, mergeMap, catchError } from 'rxjs/operators';

@Injectable()
export class LoadPokemonPageEffect {
  load$ = createEffect(() =>
    this.actions$.pipe(
      ofType(PokemonActionType.POKEMON_EDIT_LIST),
      mergeMap(() =>
        this.pokemonHttpClientService.getPageByNumberAndSize(1, 12).pipe(
          map((pokemons) => {
            console.log('EFFECT =====', pokemons);
            return { type: PokemonActionType.POKEMON_STOP_LOADING };
          }),
          catchError(() => EMPTY)
        )
      )
    )
  );

  constructor(private actions$: Actions, private pokemonHttpClientService: PokemonHttpClientService) {}
}
