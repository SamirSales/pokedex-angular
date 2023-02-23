import { Actions, ofType, createEffect } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { Injectable } from '@angular/core';
import { PokemonActionType } from '../actions/pokemon.action';
import { PokemonHttpClientService } from '../../service/pokemon-http-client.service';
import { map, mergeMap, catchError, withLatestFrom } from 'rxjs/operators';
import PokemonPageStoreFacade from '../pokemon-page-store.facade';

@Injectable()
export class LoadPokemonPageEffect {
  load$ = createEffect(() =>
    this.actions$.pipe(
      ofType(PokemonActionType.POKEMON_START_LOADING),
      withLatestFrom(this.pokemonPageStoreFacade.getIndexPageObservable()),
      withLatestFrom(this.pokemonPageStoreFacade.getItemsPerPageObservable()),
      mergeMap((arr) => {
        const selectedIndex = arr[0][1];
        const itemsPerPage = arr[1];

        return this.pokemonHttpClientService.getPageByNumberAndSize(selectedIndex, itemsPerPage).pipe(
          map((pokemons) => {
            return { type: PokemonActionType.POKEMON_EDIT_LIST, payload: pokemons };
          }),
          catchError(() => EMPTY)
        );
      })
    )
  );

  constructor(
    private actions$: Actions,
    private pokemonHttpClientService: PokemonHttpClientService,
    private pokemonPageStoreFacade: PokemonPageStoreFacade
  ) {}
}
