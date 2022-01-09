import { TestBed } from '@angular/core/testing';

import { PokemonHttpClientService } from './pokemon-http-client.service';

describe('PokemonHttpClientService', () => {
    let service: PokemonHttpClientService;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(PokemonHttpClientService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
