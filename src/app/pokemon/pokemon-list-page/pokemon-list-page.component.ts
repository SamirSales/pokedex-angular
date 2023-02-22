import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { firstValueFrom, Observable } from 'rxjs';
import { PokemonInterface, PokemonModelMapper } from '../shared/model/pokemon.model';
import { PokemonFilteringService } from '../shared/service/pokemon-filtering.service';
import { PokemonListEditAction, PokemonStartLoadingAction, PokemonStopLoadingAction } from '../shared/store/actions/pokemon.action';
import { PokemonPageReducerState } from '../shared/store/reducers';
import { PokemonPageState } from '../shared/store/reducers/pokemonPage.reducer';
import { PokemonHttpClientService } from '../shared/service/pokemon-http-client.service';
import PokemonPageStoreHandler from '../shared/store/PokemonPageStoreHandler';

import { take, filter } from 'rxjs/operators';
import { select } from '@ngrx/store';

@Component({
  selector: 'app-pokemon-list-page',
  templateUrl: './pokemon-list-page.component.html',
  styleUrls: ['./pokemon-list-page.component.css']
})
export class PokemonListPageComponent implements OnInit {
  searchText: string = '';

  pokemonListStateObservable: Observable<PokemonPageState>;
  pokemonPageStoreHandler: PokemonPageStoreHandler;

  constructor(
    private pokemonHttpClientService: PokemonHttpClientService,
    private pokemonFilteringService: PokemonFilteringService,
    private store: Store<PokemonPageReducerState>
  ) {
    this.pokemonListStateObservable = this.store.select('pokemonPage');
    this.pokemonPageStoreHandler = new PokemonPageStoreHandler(this.store);
  }

  ngOnInit(): void {
    this.refreshData();
  }

  async refreshData() {
    this.pokemonPageStoreHandler.startLoadingFlag();
    const selectedIndex = await this.pokemonPageStoreHandler.getIndexPage();
    const pokemonsPerPage = await this.pokemonPageStoreHandler.getItemsPerPage();

    this.pokemonHttpClientService.getPageByNumberAndSize(selectedIndex, pokemonsPerPage).subscribe({
      next: (pokemons) => {
        this.pokemonPageStoreHandler.setPokemonList(pokemons);
        this.pokemonPageStoreHandler.stopLoadingFlag();
      },
      error: () => {
        this.pokemonPageStoreHandler.stopLoadingFlag();
      }
    });
  }

  onTextSearchChangeWithDelay(textSearch: string) {
    this.pokemonFilteringService.setFilteredPokemonListByText(textSearch);
  }

  dispatchAction() {
    this.store.dispatch(new PokemonListEditAction([PokemonModelMapper.getEmpty()]));
  }
}
