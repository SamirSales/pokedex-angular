import { Component, OnInit } from '@angular/core';
import { PokemonDetailDialogService } from '../../services/pokemon-detail-dialog.service';
import { PokemonInterface, PokemonModelMapper } from '../../model/pokemon.model';

@Component({
    selector: 'app-pokemon-evolution-chain-layout',
    templateUrl: './pokemon-evolution-chain-layout.component.html',
    styleUrls: ['./pokemon-evolution-chain-layout.component.css']
})
export class PokemonEvolutionChainLayoutComponent implements OnInit {
    pokemon: PokemonInterface = PokemonModelMapper.getEmpty();

    constructor(private pokemonDetailDialogService: PokemonDetailDialogService) {}

    getSelectedPokemonEvolutionTreeData() {
        return this.pokemonDetailDialogService.getEvolutionTreeData();
    }

    ngOnInit(): void {}
}
