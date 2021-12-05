import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class PokemonHttpClientServiceService {
    baseUrl = 'https://pokeapi.co/api/v2';

    constructor(public http: HttpClient) {}

    getPokemonById(pokemonId: number) {
        this.http.get<any[]>(this.baseUrl + '/pokemon/' + pokemonId).subscribe(
            (data) => {
                console.log('data', data);
            },
            (error) => {
                console.log('error!', error);
            }
        );
    }
}
