import { Component, OnInit } from '@angular/core';
import { PokemonDetailDialogService } from '../../../services/pokemon-detail-dialog.service';
import { PokemonInterface, PokemonModelMapper } from '../../../model/pokemon.model';
import { TranslateService } from '@ngx-translate/core';

@Component({
    selector: 'app-pokemon-detail-dialog',
    templateUrl: './pokemon-detail-dialog.component.html',
    styleUrls: ['./pokemon-detail-dialog.component.css']
})
export class PokemonDetailDialogComponent implements OnInit {
    pokemon: PokemonInterface = PokemonModelMapper.getEmpty();

    constructor(private pokemonDetailDialogService: PokemonDetailDialogService, private translate: TranslateService) {}

    ngOnInit(): void {
        this.pokemonDetailDialogService.selectedPokemonChanged.subscribe((pokemon) => {
            this.pokemon = pokemon;
        });
    }

    close() {
        this.pokemonDetailDialogService.close();
    }

    getDialogStyle() {
        return 'display: ' + (this.isVisible() ? 'block' : 'none');
    }

    isVisible() {
        if (this.pokemonDetailDialogService != undefined || this.pokemonDetailDialogService != null) {
            return this.pokemonDetailDialogService.isVisible();
        }
        return false;
    }
}
