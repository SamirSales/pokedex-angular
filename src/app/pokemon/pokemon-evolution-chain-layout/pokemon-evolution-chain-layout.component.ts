import { Component, OnInit } from '@angular/core';
import { PokemonDetailsService } from '../shared/service/pokemon-details/pokemon-details.service';
import { PokemonInterface, PokemonModelMapper } from '../shared/model/pokemon.model';

@Component({
  selector: 'app-pokemon-evolution-chain-layout',
  templateUrl: './pokemon-evolution-chain-layout.component.html',
  styleUrls: ['./pokemon-evolution-chain-layout.component.css']
})
export class PokemonEvolutionChainLayoutComponent implements OnInit {
  pokemon: PokemonInterface | null = null;

  constructor(private pokemonDetailsService: PokemonDetailsService) {}

  getSelectedPokemonEvolutionTreeData() {
    return this.pokemonDetailsService.getEvolutionTreeData();
  }

  ngOnInit(): void {}
}
