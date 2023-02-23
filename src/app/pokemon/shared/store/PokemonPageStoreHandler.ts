import { Store, createSelector, createFeatureSelector } from '@ngrx/store';
import { PokemonPageReducerState } from './reducers';
import {
  PokemonStartLoadingAction,
  PokemonStopLoadingAction,
  PokemonListEditAction,
  PokemonIndexPageEditAction
} from './actions/pokemon.action';
import { PokemonInterface } from '../model/pokemon.model';
import { PokemonPageState } from './reducers/pokemonPage.reducer';
import { firstValueFrom, Observable } from 'rxjs';

export default class PokemonPageStoreHandler {
  pokemonListStateObservable: Observable<PokemonPageState>;

  constructor(private store: Store<PokemonPageReducerState>) {
    this.pokemonListStateObservable = this.store.select('pokemonPage');
  }

  async getIndexPage() {
    const currentState = firstValueFrom(this.pokemonListStateObservable);
    return (await currentState).indexPage;
  }

  getIndexPage2(): Observable<number> {
    const pokemonModuleState = createFeatureSelector<PokemonPageReducerState>('pokemonPage');

    return this.store.select(
      createSelector(pokemonModuleState, (state) => {
        const stateCopy = { indexPage: 1, ...state };
        console.log('stateCopy', stateCopy);
        return stateCopy.indexPage;
      })
    );
  }

  async getItemsPerPage() {
    const currentState = firstValueFrom(this.pokemonListStateObservable);
    return (await currentState).itemsPerPage;
  }

  async isLoading() {
    const currentState = firstValueFrom(this.pokemonListStateObservable);
    return (await currentState).isLoading;
  }

  setIndexPage(indexPage: number) {
    this.store.dispatch(new PokemonIndexPageEditAction(indexPage));
  }

  startLoadingFlag() {
    this.store.dispatch(new PokemonStartLoadingAction());
  }

  stopLoadingFlag() {
    this.store.dispatch(new PokemonStopLoadingAction());
  }

  setPokemonList(pokemons: PokemonInterface[]) {
    this.store.dispatch(new PokemonListEditAction(pokemons));
  }
}
