import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { PokemonInterface, PokemonModelMapper } from '../model/pokemon.model';

@Injectable({
    providedIn: 'root'
})
export class PokemonDetailDialogService {
    selectedPokemonChanged = new Subject<PokemonInterface>();

    private isDialogVisible: boolean = false;
    private pokemon = PokemonModelMapper.getEmpty();

    constructor() {}

    isVisible() {
        return this.isDialogVisible;
    }

    close() {
        this.isDialogVisible = false;
    }

    open() {
        this.isDialogVisible = true;
    }

    setPokemon(pokemon: PokemonInterface) {
        this.pokemon = pokemon;
        this.selectedPokemonChanged.next(this.pokemon);
    }
}
