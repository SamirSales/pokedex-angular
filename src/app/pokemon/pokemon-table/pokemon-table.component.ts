import { Component, OnInit, Input } from '@angular/core';
import { PokemonHttpClientService } from '../shared/pokemon-http-client.service';
import { PokemonDetailDialogService } from '../shared/pokemon-detail-dialog.service';
import { PokemonInterface } from '../shared/pokemon.model';
import Config from '../../config';

@Component({
  selector: 'app-pokemon-table',
  templateUrl: './pokemon-table.component.html',
  styleUrls: ['./pokemon-table.component.css']
})
export class PokemonTableComponent implements OnInit {
  @Input() searchText: string = '';

  pokemonsPerPage: number = 5;
  pageQuantity: number = 10;
  selectedIndex: number = 1;
  isLoading: boolean = false;

  headers = [
    { text: 'Number', input: 'id' },
    { text: 'Image', input: 'imageURL' },
    { text: 'Name', input: 'name' },
    { text: 'Types', input: 'types' }
  ];

  pokemons: PokemonInterface[] = [];

  constructor(public PokemonHttpClientService: PokemonHttpClientService, private pokemonDetailDialogService: PokemonDetailDialogService) {}

  ngOnInit(): void {
    this.refreshData();
  }

  onChangeSelectedPaginatorIndex(index: number) {
    this.selectedIndex = index;
    this.refreshData();
  }

  refreshData() {
    this.isLoading = true;
    this.PokemonHttpClientService.getPageByNumberAndSize(this.selectedIndex, this.pokemonsPerPage).subscribe({
      next: (pokemons) => {
        this.pokemons = pokemons;
        this.isLoading = false;
      },
      error: (error) => {
        console.log('error!', error);
        this.isLoading = false;
      }
    });
  }

  getPageQuantity() {
    return Math.ceil(Config.MAX_NUMBER_OF_POKEMONS / this.pokemonsPerPage);
  }

  onClickItem(pokemon: any) {
    this.pokemonDetailDialogService.setPokemon(pokemon);
    this.pokemonDetailDialogService.open();
  }
}
