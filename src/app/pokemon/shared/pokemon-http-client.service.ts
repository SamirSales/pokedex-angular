import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, forkJoin, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import { HttpErrorService } from '../../shared/http-error.service';
import { PokemonInterface, PokemonModelMapper } from './pokemon.model';
import PokemonDetailsModel from './pokemon-details.model';
import PokemonEvolutionChainModel from './pokemon-evolution-chain.model';
import Config from '../../config';

@Injectable()
export class PokemonHttpClientService {
    private BASE_URL = 'https://pokeapi.co/api/v2';

    constructor(private httpClient: HttpClient, private httpErrorService: HttpErrorService) {}

    getPageByNumberAndSize(pageNumber: number, pageSize: number): Observable<PokemonInterface[]> {
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

    getByNameOrId(nameOrId: any): Observable<PokemonInterface> {
        return this.httpClient.get(this.BASE_URL + '/pokemon/' + nameOrId).pipe(
            map((data) => {
                return PokemonModelMapper.getByDataResponse(data);
            }),
            catchError((error) => {
                this.httpErrorService.submit(error);
                return throwError(() => error);
            })
        );
    }

    getMoreInfoById(pokemonId: any): Observable<PokemonDetailsModel> {
        return this.httpClient.get(this.BASE_URL + '/pokemon-species/' + pokemonId).pipe(
            map((data) => {
                return new PokemonDetailsModel(data);
            }),
            catchError((error) => {
                this.httpErrorService.submit(error);
                return throwError(() => error);
            })
        );
    }

    getEvolutionChainByURL(url: string): Observable<any> {
        return this.httpClient.get(url).pipe(
            map((data) => {
                return new PokemonEvolutionChainModel(data);
            }),
            catchError((error) => {
                this.httpErrorService.submit(error);
                return throwError(() => error);
            })
        );
    }
}
