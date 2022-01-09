import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, forkJoin } from 'rxjs';
import { map } from 'rxjs/operators';

import PokemonModel from '../model/PokemonModel';
import PokemonDetailsModel from '../model/PokemonDetailsModel';
import PokemonEvolutionChainModel from '../model/PokemonEvolutionChainModel';

@Injectable({
    providedIn: 'root'
})
export class PokemonHttpClientService {
    BASE_URL = 'https://pokeapi.co/api/v2';
    MAX_NUMBER_OF_POKEMONS = 150;

    constructor(public httpClient: HttpClient) {}

    getPageByNumberAndSize(pageNumber: number, pageSize: number): Observable<any> {
        const initialPokemonNumber = pageSize * (pageNumber - 1) + 1;
        const promises = [];

        for (let i = 0; i < pageSize; i++) {
            if (initialPokemonNumber + i <= this.MAX_NUMBER_OF_POKEMONS) {
                const promise = this.getByNameOrId(initialPokemonNumber + i);
                promises.push(promise);
            }
        }

        return forkJoin(promises);
    }

    getByNameOrId(nameOrId: any): Observable<any> {
        return this.httpClient.get(this.BASE_URL + '/pokemon/' + nameOrId).pipe(
            map((data) => {
                return new PokemonModel(data);
            })
        );
    }

    getMoreInfoById(pokemonId: any): Observable<any> {
        return this.httpClient.get(this.BASE_URL + '/pokemon-species/' + pokemonId).pipe(
            map((data) => {
                return new PokemonDetailsModel(data);
            })
        );
    }

    getEvolutionChainByURL(url: string): Observable<any> {
        return this.httpClient.get(url).pipe(
            map((data) => {
                return new PokemonEvolutionChainModel(data);
            })
        );
    }
}
