import { TestBed } from '@angular/core/testing';

import { PokemonHttpClientServiceService } from './pokemon-http-client-service.service';

describe('PokemonHttpClientServiceService', () => {
  let service: PokemonHttpClientServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PokemonHttpClientServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
