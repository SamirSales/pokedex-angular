import { Injectable } from '@angular/core';
import { PokemonInterface } from '../model/pokemon.model';

@Injectable({
  providedIn: 'root'
})
export class PokemonFilteringService {
  filteredList: PokemonInterface[] = [];

  constructor() {}

  add(pokemon: PokemonInterface) {
    this.filteredList.push(pokemon);
  }

  getList() {
    return this.filteredList;
  }

  clear() {
    this.filteredList = [];
  }

  isThereFilteredPokemon() {
    return this.filteredList.length > 0;
  }
}
