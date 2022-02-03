import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, forkJoin } from 'rxjs';
import { map } from 'rxjs/operators';

import PokemonModel from '../model/pokemon.model';
import PokemonDetailsModel from '../model/pokemon-details.model';
import PokemonEvolutionChainModel from '../model/pokemon-evolution-chain.model';
import Config from '../config';

@Injectable()
export class PokemonHttpClientService {
    BASE_URL = 'https://pokeapi.co/api/v2';

    constructor(public httpClient: HttpClient) {}

    getPageByNumberAndSize(pageNumber: number, pageSize: number): Observable<any> {
        const initialPokemonNumber = pageSize * (pageNumber - 1) + 1;
        const promises = [];

        for (let i = 0; i < pageSize; i++) {
            if (initialPokemonNumber + i <= Config.MAX_NUMBER_OF_POKEMONS) {
                const promise = this.getByNameOrId(initialPokemonNumber + i);
                promises.push(promise);
            }
        }

        return forkJoin(promises);
    }

    getByNameOrId(nameOrId: any): Observable<PokemonModel> {
        return this.httpClient.get(this.BASE_URL + '/pokemon/' + nameOrId).pipe(
            map((data) => {
                return new PokemonModel(data);
            })
        );
    }

    getMoreInfoById(pokemonId: any): Observable<PokemonDetailsModel> {
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
