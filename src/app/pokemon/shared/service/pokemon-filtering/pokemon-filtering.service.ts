import { Injectable } from '@angular/core';
import { PokemonInterface } from '../../model/pokemon.model';
import Config from '../../../../config';
import { PokemonHttpClientService } from '../pokemon-http-client/pokemon-http-client.service';

@Injectable({
  providedIn: 'root'
})
export class PokemonFilteringService {
  filteredList: PokemonInterface[] = [];
  typeNames: string[] = [];
  textSearch: string = '';

  constructor(private pokemonHttpClientService: PokemonHttpClientService) {}

  setTypes(typeNames: string[]) {
    this.typeNames = typeNames;
    this.resetFilteredList();
  }

  setFilteredPokemonListByText(text: string) {
    this.textSearch = text;
    this.resetFilteredList();
  }

  resetFilteredList() {
    this.clear();
    const observables = [...Array(Config.MAX_NUMBER_OF_POKEMONS).keys()].map((n) => {
      const id = n + 1;
      return this.pokemonHttpClientService.getByNameOrId(id);
    });

    observables.map((observable) =>
      observable.subscribe((pokemon) => {
        if (this.isPokemonMatchingWithTextSearch(pokemon) && this.isPokemonMatchingWithTypes(pokemon)) {
          this.add(pokemon);
        }
      })
    );
  }

  add(pokemon: PokemonInterface) {
    this.filteredList.push(pokemon);
  }

  getList() {
    return this.filteredList;
  }

  clear() {
    this.filteredList = [];
  }

  isThereFiltering() {
    return this.textSearch.trim().length > 2 || this.typeNames.length > 0;
  }

  isPokemonMatchingWithTypes(pokemon: PokemonInterface) {
    const pokemonTypeNames = pokemon.types.map((t) => t.name);
    for (let typeName of this.typeNames) {
      if (!pokemonTypeNames.includes(typeName)) {
        return false;
      }
    }
    return true;
  }

  isPokemonMatchingWithTextSearch(pokemon: PokemonInterface) {
    return this.textSearch.trim().length <= 2 || pokemon.name.toLowerCase().includes(this.textSearch.toLowerCase());
  }
}
