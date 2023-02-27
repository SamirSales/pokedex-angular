import PokemonPageStoreFacade from '../shared/store/pokemon-page-store.facade';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pokemon-list-page',
  templateUrl: './pokemon-list-page.component.html',
  styleUrls: ['./pokemon-list-page.component.css']
})
export class PokemonListPageComponent implements OnInit {
  searchText: string = '';

  constructor(private pokemonPageStoreFacade: PokemonPageStoreFacade) {}

  ngOnInit(): void {
    this.loadIfNecessary();

    this.getPokemonPageData().subscribe((data) => {
      this.searchText = data.filtering.textSearch;
    });
  }

  async loadIfNecessary() {
    if (await this.isPokemonsNotLoaded()) {
      this.pokemonPageStoreFacade.load();
    }
  }

  async isPokemonsNotLoaded() {
    return !(await this.pokemonPageStoreFacade.isLoaded());
  }

  getPokemonPageData() {
    return this.pokemonPageStoreFacade.getPageData();
  }

  onTextSearchChangeWithDelay(textSearch: string) {
    this.pokemonPageStoreFacade.setTextSearch(textSearch);
  }
}
