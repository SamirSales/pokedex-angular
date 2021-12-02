import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-pokemon-table',
    templateUrl: './pokemon-table.component.html',
    styleUrls: ['./pokemon-table.component.css']
})
export class PokemonTableComponent implements OnInit {
    @Input() searchText: string = '';

    pageQuantity: number = 23;
    selectedIndex: number = 3;
    isLoading: boolean = true;

    headers = [
        { text: 'Number', input: 'number' },
        { text: 'Image', input: 'image' },
        { text: 'Name', input: 'name' },
        { text: 'Type', input: 'type' }
    ];

    pokemons = [
        { number: 1, image: 'src1', name: 'name1', type: 'type1' },
        { number: 2, image: 'src2', name: 'name2', type: 'type2' },
        { number: 3, image: 'src3', name: 'name3', type: 'type3' },
        { number: 4, image: 'src4', name: 'name4', type: 'type4' },
        { number: 5, image: 'src5', name: 'name5', type: 'type5' },
        { number: 6, image: 'src6', name: 'name6', type: 'type6' },
        { number: 7, image: 'src7', name: 'name7', type: 'type7' },
        { number: 8, image: 'src8', name: 'name8', type: 'type8' }
    ];

    constructor() {}

    ngOnInit(): void {}

    onChangeSelectedPaginatorIndex(index: number) {
        this.selectedIndex = index;
    }
}
