import PokemonPageStoreFacade from '../shared/store/pokemon-page-store.facade';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PokemonFilteringService } from '../shared/service/pokemon-filtering.service';
import { PokemonHttpClientService } from '../shared/service/pokemon-http-client.service';
import { PokemonPageReducerState } from '../shared/store/reducers';
import { PokemonPageState } from '../shared/store/reducers/pokemonPage.reducer';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-pokemon-list-page',
  templateUrl: './pokemon-list-page.component.html',
  styleUrls: ['./pokemon-list-page.component.css']
})
export class PokemonListPageComponent implements OnInit {
  searchText: string = '';

  pokemonListStateObservable: Observable<PokemonPageState>;
  pokemonPageStoreFacade: PokemonPageStoreFacade;

  constructor(
    private pokemonHttpClientService: PokemonHttpClientService,
    private pokemonFilteringService: PokemonFilteringService,
    private store: Store<PokemonPageReducerState>
  ) {
    this.pokemonListStateObservable = this.store.select('pokemonPage');
    this.pokemonPageStoreFacade = new PokemonPageStoreFacade(this.store);
  }

  ngOnInit(): void {
    this.refreshData();
  }

  async refreshData() {
    console.log('start...');
    this.pokemonPageStoreFacade.startLoadingFlag();
    const selectedIndex = await this.pokemonPageStoreFacade.getIndexPage();
    const pokemonsPerPage = await this.pokemonPageStoreFacade.getItemsPerPage();

    this.pokemonHttpClientService.getPageByNumberAndSize(selectedIndex, pokemonsPerPage).subscribe({
      next: (pokemons) => {
        this.pokemonPageStoreFacade.setPokemonList(pokemons);
      },
      error: () => {
        this.pokemonPageStoreFacade.stopLoadingFlag(); //TODO: should I remove this line?
      }
    });
  }

  onTextSearchChangeWithDelay(textSearch: string) {
    this.pokemonFilteringService.setFilteredPokemonListByText(textSearch);
  }
}
