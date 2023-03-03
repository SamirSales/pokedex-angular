import { Component, OnInit } from '@angular/core';
import { PokemonDetailsService } from '../shared/service/pokemon-details/pokemon-details.service';
import { PokemonInterface, PokemonModelMapper } from '../shared/model/pokemon.model';

@Component({
  selector: 'app-pokemon-detail-dialog',
  templateUrl: './pokemon-detail-dialog.component.html',
  styleUrls: ['./pokemon-detail-dialog.component.css']
})
export class PokemonDetailDialogComponent implements OnInit {
  pokemon: PokemonInterface = PokemonModelMapper.getEmpty();

  constructor(private pokemonDetailsService: PokemonDetailsService) {}

  ngOnInit(): void {
    this.pokemonDetailsService.selectedPokemonChanged.subscribe((pokemon) => {
      this.pokemon = pokemon;
    });
  }

  close() {
    this.pokemonDetailsService.close();
  }

  getPokemonDescription() {
    return this.pokemonDetailsService.getPokemonDescription();
  }

  getDialogStyle() {
    return 'display: ' + (this.isVisible() ? 'block' : 'none');
  }

  isVisible() {
    if (this.pokemonDetailsService != undefined || this.pokemonDetailsService != null) {
      return this.pokemonDetailsService.isVisible();
    }
    return false;
  }
}
