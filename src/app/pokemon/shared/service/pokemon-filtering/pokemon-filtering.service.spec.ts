import 'zone.js';
import 'zone.js/testing';
import '@angular/compiler';
import { PokemonFilteringService } from './pokemon-filtering.service';
import { PokemonHttpClientService } from '../pokemon-http-client/pokemon-http-client.service';

import { TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { PokemonModelMapper } from '../../model/pokemon.model';

// avoid 'Error: Need to call TestBed.initTestEnvironment() first'
import { BrowserDynamicTestingModule, platformBrowserDynamicTesting } from '@angular/platform-browser-dynamic/testing';
TestBed.initTestEnvironment(BrowserDynamicTestingModule, platformBrowserDynamicTesting());

describe('PokemonFilteringService', () => {
  let pokemonHttpClientService: PokemonFilteringService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [PokemonHttpClientService, PokemonFilteringService]
    });
    pokemonHttpClientService = TestBed.inject(PokemonFilteringService);
  });

  it('service has been created', () => {
    expect(pokemonHttpClientService).toBeTruthy();
  });

  it('#getList should return something', () => {
    expect(pokemonHttpClientService.getList());
  });

  it('#isThereFiltering should return something', () => {
    expect(pokemonHttpClientService.isThereFiltering()).toBeDefined();
  });

  it('#isPokemonMatchingWithTextSearch should return something', () => {
    const pokemon = PokemonModelMapper.getEmpty();
    expect(pokemonHttpClientService.isPokemonMatchingWithTextSearch(pokemon)).toBeDefined();
  });

  it('#getPageByNumberAndSize should return something', () => {
    const pokemon = PokemonModelMapper.getEmpty();
    expect(pokemonHttpClientService.isPokemonMatchingWithTypes(pokemon)).toBeDefined();
  });
});
