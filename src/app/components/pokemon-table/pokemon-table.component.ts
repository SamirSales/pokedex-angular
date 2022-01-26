import { Component, OnInit, Input } from '@angular/core';
import { PokemonHttpClientService } from '../../services/pokemon-http-client.service';
import Config from '../../config';

@Component({
    selector: 'app-pokemon-table',
    templateUrl: './pokemon-table.component.html',
    styleUrls: ['./pokemon-table.component.css']
})
export class PokemonTableComponent implements OnInit {
    @Input() searchText: string = '';

    pokemonsPerPage: number = 5;
    pageQuantity: number = 10;
    selectedIndex: number = 1;
    isLoading: boolean = false;

    headers = [
        { text: 'Number', input: 'id' },
        { text: 'Image', input: 'imageURL' },
        { text: 'Name', input: 'name' },
        { text: 'Types', input: 'types' }
    ];

    pokemons = [];

    constructor(public PokemonHttpClientService: PokemonHttpClientService) {}

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
                console.log('data', pokemons);
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
        return Config.MAX_NUMBER_OF_POKEMONS / this.pokemonsPerPage;
    }
}
