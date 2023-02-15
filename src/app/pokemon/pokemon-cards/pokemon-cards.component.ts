import Config from '../../config';
import { AppRoutingModule } from '../../app-routing.module';
import { Component, OnInit } from '@angular/core';
import { PokemonHttpClientService } from '../shared/service/pokemon-http-client.service';
import { PokemonFilteringService } from '../shared/service/pokemon-filtering.service';
import { PokemonInterface } from '../shared/model/pokemon.model';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-pokemon-cards',
  templateUrl: './pokemon-cards.component.html',
  styleUrls: ['./pokemon-cards.component.css'],

  animations: [
    trigger('cardState', [
      state(
        'visible',
        style({
          transform: 'scale(1)',
          opacity: 1
        })
      ),

      transition('void => *', [
        style({
          transform: 'scale(0)',
          opacity: 0
        }),
        animate(400)
      ])
    ])
  ]
})
export class PokemonCardsComponent implements OnInit {
  pokemonsPerPage: number = 12;
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

  constructor(
    private appRoutingModule: AppRoutingModule,
    public pokemonHttpClientService: PokemonHttpClientService,
    private pokemonFilteringService: PokemonFilteringService
  ) {}

  ngOnInit(): void {
    this.refreshData();
  }

  onChangeSelectedPaginatorIndex(index: number) {
    if (this.selectedIndex != index) {
      this.selectedIndex = index;
      this.refreshData();
    }
  }

  refreshData() {
    this.isLoading = true;

    this.pokemonHttpClientService.getPageByNumberAndSize(this.selectedIndex, this.pokemonsPerPage).subscribe({
      next: (pokemons) => {
        this.pokemons = pokemons;
        this.isLoading = false;
      },
      error: () => {
        this.isLoading = false;
      }
    });
  }

  getPageQuantity() {
    return Math.ceil(Config.MAX_NUMBER_OF_POKEMONS / this.pokemonsPerPage);
  }

  onClickItem(pokemon: PokemonInterface) {
    this.appRoutingModule.goToPokemonDetailsPageById(pokemon.id);
  }

  getPokemons() {
    if (this.pokemonFilteringService.isThereFilteredPokemon()) {
      return this.pokemonFilteringService.getList();
    }
    return this.pokemons;
  }

  shouldShowPaginator() {
    return !this.pokemonFilteringService.isThereFilteredPokemon();
  }
}
