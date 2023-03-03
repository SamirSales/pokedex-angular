import 'zone.js';
import 'zone.js/testing';
import '@angular/compiler';
import { PokemonDetailsService } from './pokemon-details.service';
import { PokemonHttpClientService } from '../pokemon-http-client/pokemon-http-client.service';

import { TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { TranslateModule } from '@ngx-translate/core';

// avoid 'Error: Need to call TestBed.initTestEnvironment() first'
import { BrowserDynamicTestingModule, platformBrowserDynamicTesting } from '@angular/platform-browser-dynamic/testing';
TestBed.initTestEnvironment(BrowserDynamicTestingModule, platformBrowserDynamicTesting());

describe('PokemonDetailsService', () => {
  let pokemonDetailsService: PokemonDetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, TranslateModule.forRoot()],
      providers: [PokemonHttpClientService, PokemonDetailsService]
    });
    pokemonDetailsService = TestBed.inject(PokemonDetailsService);
  });

  it('service has been created', () => {
    expect(pokemonDetailsService).toBeTruthy();
  });

  it('#getEvolutionTreeData should return an object', () => {
    expect(pokemonDetailsService.getEvolutionTreeData()).toBeDefined();
  });

  it('#getPokemonDescription should return an object', () => {
    expect(pokemonDetailsService.getPokemonDescription()).toBeDefined();
  });
});
