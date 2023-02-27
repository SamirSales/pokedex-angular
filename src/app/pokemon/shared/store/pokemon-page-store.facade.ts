import { Store } from '@ngrx/store';
import { PokemonPageReducerState } from './reducers';
import {
  PokemonStartLoadingAction,
  PokemonListEditAction,
  PokemonIndexPageEditAction,
  PokemonTextSearchEditAction,
  PokemonTypesEditAction
} from './actions/pokemon.action';
import { PokemonInterface } from '../model/pokemon.model';
import { PokemonPageState } from './reducers/pokemonPage.reducer';
import { firstValueFrom, Observable, map } from 'rxjs';
import * as selectors from './selectors/pokemon.selector';

import { Injectable } from '@angular/core';

@Injectable()
export default class PokemonPageStoreFacade {
  pokemonListStateObservable: Observable<PokemonPageState>;

  constructor(private store: Store<PokemonPageReducerState>) {
    this.pokemonListStateObservable = this.store.select('pokemonPage');
  }

  async getIndexPage() {
    const currentState = firstValueFrom(this.pokemonListStateObservable);
    return (await currentState).indexPage;
  }

  getIndexPageObservable(): Observable<number> {
    return this.store.select(selectors.selectIndexPage);
  }

  async getItemsPerPage() {
    const currentState = firstValueFrom(this.pokemonListStateObservable);
    return (await currentState).itemsPerPage;
  }

  getItemsPerPageObservable(): Observable<number> {
    return this.store.select(selectors.selectItemsPerPage);
  }

  async isLoading() {
    const currentState = firstValueFrom(this.pokemonListStateObservable);
    return (await currentState).isLoading;
  }

  setIndexPage(indexPage: number) {
    this.store.dispatch(new PokemonIndexPageEditAction(indexPage));
  }

  setTextSearch(textSearch: string) {
    this.store.dispatch(new PokemonTextSearchEditAction(textSearch));
  }

  setTypes(types: string[]) {
    this.store.dispatch(new PokemonTypesEditAction(types));
  }

  load() {
    this.store.dispatch(new PokemonStartLoadingAction());
  }

  setPokemonList(pokemons: PokemonInterface[]) {
    this.store.dispatch(new PokemonListEditAction(pokemons));
  }

  async isLoaded() {
    const promiseList = firstValueFrom(this.getListFromPage());
    const pokemons = await promiseList;
    return pokemons.length > 0;
  }

  getListFromPage() {
    return this.store.select(selectors.selectItemsFromPage);
  }

  getTotalPokemonsQuantityObs() {
    return this.store.select(selectors.selectAllFilteredPokemons).pipe(map((o) => o.length));
  }
}
