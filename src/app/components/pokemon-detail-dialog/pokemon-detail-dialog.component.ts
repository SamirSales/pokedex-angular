import { Component, OnInit } from '@angular/core';
import { PokemonDetailDialogService } from '../../services/pokemon-detail-dialog.service';
import PokemonModel from '../../model/pokemon.model';

@Component({
    selector: 'app-pokemon-detail-dialog',
    templateUrl: './pokemon-detail-dialog.component.html',
    styleUrls: ['./pokemon-detail-dialog.component.css']
})
export class PokemonDetailDialogComponent implements OnInit {
    visible: boolean = false;
    pokemon: PokemonModel = new PokemonModel(null);

    constructor(private pokemonDetailDialogService: PokemonDetailDialogService) {}

    ngOnInit(): void {
        this.pokemonDetailDialogService.selectedPokemonChanged.subscribe((pokemon) => {
            this.pokemon = pokemon;
        });
    }

    close() {
        this.pokemonDetailDialogService.close();
        this.visible = false;
    }

    getDialogStyle() {
        return 'display: ' + (this.pokemonDetailDialogService.isVisible() ? 'block' : 'none');
    }
}
