import { Injectable } from '@angular/core';
import { PokemonInterface } from '../model/pokemon.model';
import Config from '../../../config';
import { PokemonHttpClientService } from './pokemon-http-client.service';

@Injectable({
  providedIn: 'root'
})
export class PokemonFilteringService {
  filteredList: PokemonInterface[] = [];

  constructor(private pokemonHttpClientService: PokemonHttpClientService) {}

  setFilteredPokemonListByText(text: string) {
    this.clear();

    if (text.trim().length > 2) {
      const observables = [...Array(Config.MAX_NUMBER_OF_POKEMONS).keys()].map((n) => {
        const id = n + 1;
        return this.pokemonHttpClientService.getByNameOrId(id);
      });

      observables.map((observable) =>
        observable.subscribe((pokemon) => {
          if (pokemon.name.toLowerCase().includes(text.toLowerCase())) {
            this.add(pokemon);
          }
        })
      );
    }
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

  isThereFilteredPokemon() {
    return this.filteredList.length > 0;
  }
}
