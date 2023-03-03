import PokemonDetailsModel from '../shared/model/pokemon-details.model';
import { ActivatedRoute } from '@angular/router';
import { AppRoutingModule } from '../../app-routing.module';
import { Component } from '@angular/core';
import { PokemonDetailsService } from '../shared/service/pokemon-details.service';
import { PokemonHttpClientService } from '../shared/service/pokemon-http-client/pokemon-http-client.service';
import { PokemonInterface } from '../shared/model/pokemon.model';

@Component({
  selector: 'app-pokemon-details-page',
  templateUrl: './pokemon-details-page.component.html',
  styleUrls: ['./pokemon-details-page.component.css']
})
export class PokemonDetailsPageComponent {
  selectedId: string | null = null;
  pokemon: PokemonInterface | null = null;
  pokemonDetails: PokemonDetailsModel | null = null;

  constructor(
    private appRoutingModule: AppRoutingModule,
    private pokemonDetailsService: PokemonDetailsService,
    private pokemonHttpClientService: PokemonHttpClientService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.loadPokemonDetailsByIdFromURL();
  }

  loadPokemonDetailsByIdFromURL() {
    this.route.params.subscribe((paramsId) => {
      this.selectedId = paramsId['id'];

      if (this.selectedId != null) {
        this.pokemonHttpClientService.getByNameOrId(this.selectedId).subscribe((pokemon) => {
          this.pokemon = pokemon;
          this.pokemonDetailsService.setPokemon(pokemon);
        });

        this.pokemonHttpClientService.getMoreInfoById(this.selectedId).subscribe((pokemonDetails) => {
          this.pokemonDetails = pokemonDetails;
        });
      }
    });
  }

  getPokemonDescription() {
    return this.pokemonDetailsService.getPokemonDescription();
  }

  goToPokemonCardListPage() {
    this.appRoutingModule.goToPokemonCardListPage();
  }
}
