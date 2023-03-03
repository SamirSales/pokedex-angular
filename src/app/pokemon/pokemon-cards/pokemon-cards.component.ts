import PokemonPageStoreFacade from '../shared/store/pokemon-page-store.facade';
import { AppRoutingModule } from '../../app-routing.module';
import { Component, OnInit } from '@angular/core';
import { PokemonFilteringService } from '../shared/service/pokemon-filtering/pokemon-filtering.service';
import { PokemonHttpClientService } from '../shared/service/pokemon-http-client/pokemon-http-client.service';
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
  headers = [
    { text: 'Number', input: 'id' },
    { text: 'Image', input: 'imageURL' },
    { text: 'Name', input: 'name' },
    { text: 'Types', input: 'types' }
  ];

  constructor(
    private appRoutingModule: AppRoutingModule,
    public pokemonHttpClientService: PokemonHttpClientService,
    private pokemonFilteringService: PokemonFilteringService,
    private pokemonPageStoreFacade: PokemonPageStoreFacade
  ) {}

  ngOnInit(): void {}

  getPokemonPageData() {
    return this.pokemonPageStoreFacade.getPageData();
  }

  async onChangeSelectedPaginatorIndex(index: number) {
    const selectedIndex = await this.pokemonPageStoreFacade.getIndexPage();

    if (selectedIndex != index) {
      this.pokemonPageStoreFacade.setIndexPage(index);
    }
  }

  onClickItem(pokemon: PokemonInterface) {
    this.appRoutingModule.goToPokemonDetailsPageById(pokemon.id);
  }

  shouldShowPaginator() {
    return !this.pokemonFilteringService.isThereFiltering();
  }
}
