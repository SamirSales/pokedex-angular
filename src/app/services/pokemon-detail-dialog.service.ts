import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import PokemonModel from '../model/pokemon.model';

@Injectable({
    providedIn: 'root'
})
export class PokemonDetailDialogService {
    selectedPokemonChanged = new Subject<PokemonModel>();

    private isDialogVisible: boolean = false;
    private pokemon = new PokemonModel(null);

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

    setPokemon(pokemon: PokemonModel) {
        this.pokemon = pokemon;
        this.selectedPokemonChanged.next(this.pokemon);
    }
}
