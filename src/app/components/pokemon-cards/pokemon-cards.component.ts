import { Component, OnInit, Input } from '@angular/core';
import { PokemonHttpClientService } from '../../services/pokemon-http-client.service';
import { PokemonDetailDialogService } from '../../services/pokemon-detail-dialog.service';
import { PokemonInterface } from '../../model/pokemon.model';
import Config from '../../config';

@Component({
    selector: 'app-pokemon-cards',
    templateUrl: './pokemon-cards.component.html',
    styleUrls: ['./pokemon-cards.component.css']
})
export class PokemonCardsComponent implements OnInit {
    @Input() searchText: string = '';

    pokemonsPerPage: number = 12;
    pageQuantity: number = 10;
    selectedIndex: number = 1;
    isLoading: boolean = false;

    headers = [
        { text: 'Number', input: 'id' },
        { text: 'Image', input: 'imageURL' },
        { text: 'Name', input: 'name' },
        { text: 'Types', input: 'types' }
    ];

    pokemons: PokemonInterface[] = [];

    constructor(
        public PokemonHttpClientService: PokemonHttpClientService,
        private pokemonDetailDialogService: PokemonDetailDialogService
    ) {}

    ngOnInit(): void {
        this.refreshData();
    }

    onChangeSelectedPaginatorIndex(index: number) {
        this.selectedIndex = index;
        this.refreshData();
    }

    refreshData() {
        this.isLoading = true;
        this.PokemonHttpClientService.getPageByNumberAndSize(this.selectedIndex, this.pokemonsPerPage).subscribe({
            next: (pokemons) => {
                this.pokemons = pokemons;
                this.isLoading = false;
            },
            error: (error) => {
                console.log('error!', error);
                this.isLoading = false;
            }
        });
    }

    getPageQuantity() {
        return Math.ceil(Config.MAX_NUMBER_OF_POKEMONS / this.pokemonsPerPage);
    }

    onClickItem(pokemon: any) {
        this.pokemonDetailDialogService.setPokemon(pokemon);
        this.pokemonDetailDialogService.open();
    }
}
