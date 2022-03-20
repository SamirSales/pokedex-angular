import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { PokemonInterface, PokemonModelMapper } from '../model/pokemon.model';
import PokemonDetailsModel from '../model/pokemon-details.model';
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
        this.setDetailedInformationOfPokemon();
    }

    getPokemonDescription() {
        if (this.details === null) {
            return '';
        }
        return this.details.getDescriptionByLocale(this.getLocale());
    }

    private setDetailedInformationOfPokemon() {
        this.pokemonHttpClientService.getMoreInfoById(this.pokemon.id).subscribe((details) => {
            console.log('data', details);
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
        this.pokemonHttpClientService.getEvolutionChainByURL(this.details.getEvolutionChainURL()).subscribe((data2) => {
            // console.log('evolution', data2);
        });
    }
}
