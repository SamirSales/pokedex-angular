import Config from '../../config';
import PokemonPageStoreFacade from '../shared/store/pokemon-page-store.facade';
import { AppRoutingModule } from '../../app-routing.module';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PokemonFilteringService } from '../shared/service/pokemon-filtering.service';
import { PokemonHttpClientService } from '../shared/service/pokemon-http-client.service';
import { PokemonInterface } from '../shared/model/pokemon.model';
import { PokemonPageReducerState } from '../shared/store/reducers';
import { PokemonPageState } from '../shared/store/reducers/pokemonPage.reducer';
import { Store } from '@ngrx/store';
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
  // selectedIndex: number = 1;

  pokemonListStateObservable: Observable<PokemonPageState>;
  pokemonPageStoreFacade: PokemonPageStoreFacade;

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
    private pokemonFilteringService: PokemonFilteringService,
    private store: Store<PokemonPageReducerState>
  ) {
    this.pokemonListStateObservable = this.store.select('pokemonPage');
    this.pokemonPageStoreFacade = new PokemonPageStoreFacade(this.store);
  }

  ngOnInit(): void {}

  async onChangeSelectedPaginatorIndex(index: number) {
    const selectedIndex = await this.pokemonPageStoreFacade.getIndexPage();

    if (selectedIndex != index) {
      this.pokemonPageStoreFacade.setIndexPage(index);
      this.refreshPokemonList();
    }
  }

  async refreshPokemonList() {
    this.pokemonPageStoreFacade.startLoadingFlag();
    const selectedIndex = await this.pokemonPageStoreFacade.getIndexPage();
    this.pokemonsPerPage = await this.pokemonPageStoreFacade.getItemsPerPage();

    // this.pokemonHttpClientService.getPageByNumberAndSize(selectedIndex, this.pokemonsPerPage).subscribe({
    //   next: (pokemons) => {
    //     this.pokemonPageStoreFacade.setPokemonList(pokemons);
    //   },
    //   error: () => {
    //     this.pokemonPageStoreFacade.stopLoadingFlag();
    //   }
    // });
  }

  getPageQuantity() {
    return Math.ceil(Config.MAX_NUMBER_OF_POKEMONS / this.pokemonsPerPage);
  }

  onClickItem(pokemon: PokemonInterface) {
    this.appRoutingModule.goToPokemonDetailsPageById(pokemon.id);
  }

  getPokemons() {
    if (this.pokemonFilteringService.isThereFiltering()) {
      return this.pokemonFilteringService.getList();
    }
    return this.pokemons;
  }

  shouldShowPaginator() {
    return !this.pokemonFilteringService.isThereFiltering();
  }
}
