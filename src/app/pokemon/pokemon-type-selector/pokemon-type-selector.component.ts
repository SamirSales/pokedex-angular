import { Component } from '@angular/core';
import PokemonPageStoreFacade from '../shared/store/pokemon-page-store.facade';

@Component({
  selector: 'app-pokemon-type-selector',
  templateUrl: './pokemon-type-selector.component.html',
  styleUrls: ['./pokemon-type-selector.component.css']
})
export class PokemonTypeSelectorComponent {
  pokemonTypes = [
    { name: 'normal', value: false },
    { name: 'fighting', value: false },
    { name: 'flying', value: false },
    { name: 'poison', value: false },
    { name: 'ground', value: false },
    { name: 'rock', value: false },
    { name: 'bug', value: false },
    { name: 'ghost', value: false },
    { name: 'steel', value: false },
    { name: 'water', value: false },
    { name: 'fire', value: false },
    { name: 'grass', value: false },
    { name: 'electric', value: false },
    { name: 'psychic', value: false },
    { name: 'ice', value: false },
    { name: 'dragon', value: false },
    { name: 'dark', value: false },
    { name: 'fairy', value: false }
  ];

  constructor(private pokemonPageStoreFacade: PokemonPageStoreFacade) {}

  onClickCheckbox(type: { name: string; value: boolean }) {
    type.value = !type.value;
    const selectedTypeNames = this.pokemonTypes.filter((o) => o.value).map((o) => o.name);
    this.pokemonPageStoreFacade.setTypes(selectedTypeNames);
  }
}
