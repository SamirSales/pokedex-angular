import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { PokemonInterface, PokemonModelMapper } from './pokemon.model';
import { PokemonHttpClientService } from './pokemon-http-client.service';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
    providedIn: 'root'
})
export class PokemonDetailDialogService {
    selectedPokemonChanged = new Subject<PokemonInterface>();

    private isDialogVisible: boolean = false;
    private pokemon = PokemonModelMapper.getEmpty();
    private details: any = null;
    private pokemonEvolutionChainModel: any = null;

    constructor(private pokemonHttpClientService: PokemonHttpClientService, private translate: TranslateService) {}

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
        this.details = null;
        this.pokemonEvolutionChainModel = null;
        this.setDetailedInformationOfPokemon();
    }

    getPokemonDescription() {
        if (this.details == null) {
            return '';
        }
        return this.details.getDescriptionByLocale(this.getLocale());
    }

    getEvolutionTreeData() {
        if (this.pokemonEvolutionChainModel === null) {
            return [];
        }
        return this.pokemonEvolutionChainModel.getTreeData();
    }

    private setDetailedInformationOfPokemon() {
        this.pokemonHttpClientService.getMoreInfoById(this.pokemon.id).subscribe((details) => {
            this.details = details;
            this.setEvolutionData();
        });
    }

    private getLocale() {
        if (this.translate.currentLang) {
            return this.translate.currentLang;
        }
        return this.translate.getDefaultLang();
    }

    private setEvolutionData() {
        this.pokemonHttpClientService
            .getEvolutionChainByURL(this.details.getEvolutionChainURL())
            .subscribe((pokemonEvolutionChainModel) => {
                this.pokemonEvolutionChainModel = pokemonEvolutionChainModel;
            });
    }
}
