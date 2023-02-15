import Config from '../../../config';
import PokemonDetailsModel from '../model/pokemon-details.model';
import PokemonEvolutionChainModel from '../model/pokemon-evolution-chain.model';
import { HttpClient } from '@angular/common/http';
import { HttpErrorService } from '../../../shared/http-error.service';
import { Injectable } from '@angular/core';
import { Observable, forkJoin, throwError } from 'rxjs';
import { PokemonInterface, PokemonModelMapper } from '../model/pokemon.model';
import { map, catchError } from 'rxjs/operators';
import { PokemonFilteringService } from './pokemon-filtering.service';

@Injectable()
export class PokemonHttpClientService {
  private BASE_URL = 'https://pokeapi.co/api/v2';

  constructor(
    private httpClient: HttpClient,
    private httpErrorService: HttpErrorService,
    private pokemonFilteringService: PokemonFilteringService
  ) {}

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

  setFilteredPokemonListByText(text: string) {
    this.pokemonFilteringService.clear();

    const observables = [...Array(Config.MAX_NUMBER_OF_POKEMONS).keys()].map((n) => {
      const id = n + 1;
      return this.getByNameOrId(id);
    });

    observables.map((observable) =>
      observable.subscribe((pokemon) => {
        if (pokemon.name.toLowerCase().includes(text.toLowerCase())) {
          this.pokemonFilteringService.add(pokemon);
        }
      })
    );
  }

  getByNameOrId(nameOrId: string | number): Observable<PokemonInterface> {
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

  getMoreInfoById(pokemonId: number | string): Observable<PokemonDetailsModel> {
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

  getEvolutionChainByURL(url: string): Observable<PokemonEvolutionChainModel> {
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
