import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokemonHttpClientService } from '../shared/service/pokemon-http-client.service';
import { PokemonInterface } from '../shared/model/pokemon.model';
import PokemonDetailsModel from '../shared/model/pokemon-details.model';
import { PokemonDetailDialogService } from '../shared/service/pokemon-detail-dialog.service';

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
    private route: ActivatedRoute,
    private pokemonHttpClientService: PokemonHttpClientService,
    private pokemonDetailDialogService: PokemonDetailDialogService
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
        });

        this.pokemonHttpClientService.getMoreInfoById(this.selectedId).subscribe((pokemonDetails) => {
          this.pokemonDetails = pokemonDetails;
        });
      }
    });
  }

  getPokemonDescription() {
    return this.pokemonDetailDialogService.getPokemonDescription();
  }
}
