import PokemonPageStoreFacade from '../shared/store/pokemon-page-store.facade';
import { Component, OnInit } from '@angular/core';
import { PokemonFilteringService } from '../shared/service/pokemon-filtering.service';

@Component({
  selector: 'app-pokemon-list-page',
  templateUrl: './pokemon-list-page.component.html',
  styleUrls: ['./pokemon-list-page.component.css']
})
export class PokemonListPageComponent implements OnInit {
  searchText: string = '';

  constructor(private pokemonFilteringService: PokemonFilteringService, private pokemonPageStoreFacade: PokemonPageStoreFacade) {}

  ngOnInit(): void {
    this.pokemonPageStoreFacade.load();
  }

  onTextSearchChangeWithDelay(textSearch: string) {
    this.pokemonFilteringService.setFilteredPokemonListByText(textSearch);
  }
}
