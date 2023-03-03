import 'zone.js';
import 'zone.js/testing';
import '@angular/compiler';
import { PokemonHttpClientService } from './pokemon-http-client.service';

import { TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';

// avoid 'Error: Need to call TestBed.initTestEnvironment() first'
import { BrowserDynamicTestingModule, platformBrowserDynamicTesting } from '@angular/platform-browser-dynamic/testing';
TestBed.initTestEnvironment(BrowserDynamicTestingModule, platformBrowserDynamicTesting());

describe('PokemonHttpClientService', () => {
  let pokemonHttpClientService: PokemonHttpClientService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [PokemonHttpClientService]
    });
    pokemonHttpClientService = TestBed.inject(PokemonHttpClientService);
  });

  it('service has been created', () => {
    expect(pokemonHttpClientService).toBeTruthy();
  });

  it('#getAll should return an object', () => {
    expect(pokemonHttpClientService.getAll()).toBeDefined();
  });

  it('#getByNameOrId should return an object', () => {
    expect(pokemonHttpClientService.getByNameOrId(1)).toBeDefined();
  });

  it('#getEvolutionChainByURL should return an object', () => {
    expect(pokemonHttpClientService.getEvolutionChainByURL('')).toBeDefined();
  });

  it('#getMoreInfoById should return an object', () => {
    expect(pokemonHttpClientService.getMoreInfoById(1)).toBeDefined();
  });

  it('#getPageByNumberAndSize should return an object', () => {
    expect(pokemonHttpClientService.getPageByNumberAndSize(1, 12)).toBeDefined();
  });
});
