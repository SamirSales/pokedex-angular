import { Actions, ofType, createEffect } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { Injectable } from '@angular/core';
import { PokemonActionType } from '../actions/pokemon.action';
import { PokemonHttpClientService } from '../../service/pokemon-http-client.service';
import { map, mergeMap, catchError, withLatestFrom, tap } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { PokemonPageReducerState } from '../reducers';
import PokemonPageStoreHandler from '../PokemonPageStoreHandler';

@Injectable()
export class LoadPokemonPageEffect {
  pokemonPageStoreHandler;

  load$ = createEffect(() =>
    this.actions$.pipe(
      ofType(PokemonActionType.POKEMON_START_LOADING),
      tap(() => console.log('tap', this.store)),
      withLatestFrom(new PokemonPageStoreHandler(this.store).getIndexPage2()),
      withLatestFrom(new PokemonPageStoreHandler(this.store).getItemsPerPage()),
      mergeMap((arr) => {
        const selectedIndex = arr[0][1];
        const itemsPerPage = arr[1];

        console.log('itemsPerPage', itemsPerPage);
        console.log('selectedIndex', selectedIndex);

        return this.pokemonHttpClientService.getPageByNumberAndSize(selectedIndex, itemsPerPage).pipe(
          map((pokemons) => {
            console.log('EFFECT!!!', pokemons);
            return { type: PokemonActionType.POKEMON_STOP_LOADING };
          }),
          catchError(() => EMPTY)
        );
      })
    )
  );

  constructor(
    private actions$: Actions,
    private pokemonHttpClientService: PokemonHttpClientService,
    private store: Store<PokemonPageReducerState>
  ) {
    this.pokemonPageStoreHandler = new PokemonPageStoreHandler(this.store);
  }
}
