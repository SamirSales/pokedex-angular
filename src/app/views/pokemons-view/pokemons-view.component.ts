import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-pokemons-view',
    templateUrl: './pokemons-view.component.html',
    styleUrls: ['./pokemons-view.component.css']
})
export class PokemonsViewComponent implements OnInit {
    searchText: string = '';

    constructor() {}

    ngOnInit(): void {}
}
