import { trigger, state, style, transition, animate } from '@angular/animations';
import { Component, OnInit, Input } from '@angular/core';
import { PokemonHttpClientService } from '../../services/pokemon-http-client.service';
import { PokemonDetailDialogService } from '../../services/pokemon-detail-dialog.service';
import { PokemonInterface } from '../../model/pokemon.model';
import { HttpErrorService } from '../../services/http-error.service';
import Config from '../../config';

@Component({
    selector: 'app-pokemon-cards',
    templateUrl: './pokemon-cards.component.html',
    styleUrls: ['./pokemon-cards.component.css'],

    animations: [
        trigger('cardState', [
            state(
                'visible',
                style({
                    transform: 'translateX(0)',
                    opacity: 1
                })
            ),

            transition('void => *', [
                style({
                    transform: 'translateX(-100px)',
                    opacity: 0,
                    width: '106px'
                }),
                animate(400)
            ])
        ])
    ]
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
        private pokemonDetailDialogService: PokemonDetailDialogService,
        private httpErrorService: HttpErrorService
    ) {}

    ngOnInit(): void {
        this.refreshData();
    }

    onChangeSelectedPaginatorIndex(index: number) {
        if (this.selectedIndex != index) {
            this.selectedIndex = index;
            this.refreshData();
        }
    }

    refreshData() {
        this.isLoading = true;

        this.PokemonHttpClientService.getPageByNumberAndSize(this.selectedIndex, this.pokemonsPerPage).subscribe({
            next: (pokemons) => {
                this.pokemons = pokemons;
                this.isLoading = false;
            },
            error: () => {
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
