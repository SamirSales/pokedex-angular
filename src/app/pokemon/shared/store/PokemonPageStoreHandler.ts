import { Store } from '@ngrx/store';
import { PokemonPageReducerState } from './reducers';
import { PokemonStartLoadingAction, PokemonStopLoadingAction, PokemonListEditAction } from './actions/pokemon.action';
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

  async getItemsPerPage() {
    const currentState = firstValueFrom(this.pokemonListStateObservable);
    return (await currentState).itemsPerPage;
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
