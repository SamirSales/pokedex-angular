import { pokemonPageReducer, PokemonPageState } from './pokemon-page.reducer';
import {
  PokemonTextSearchEditAction,
  PokemonListEditAction,
  PokemonTypesEditAction,
  PokemonIndexPageEditAction,
  PokemonStartLoadingAction,
  PokemonStopLoadingAction
} from '../actions/pokemon.action';
import { PokemonInterface, PokemonModelMapper } from '../../model/pokemon.model';

const initialState: PokemonPageState = {
  pokemons: [],
  isLoading: false,
  indexPage: 5,
  itemsPerPage: 12,
  textSearch: '',
  types: []
};

describe('pokemon-page.reducer', () => {
  it('result for PokemonListEditAction', () => {
    const payload: PokemonInterface[] = [PokemonModelMapper.getEmpty()];
    const action = new PokemonListEditAction(payload);

    const newState: PokemonPageState = pokemonPageReducer(initialState, action);
    expect(newState.pokemons).toBe(payload);
    expect(newState.isLoading).toBe(initialState.isLoading);
    expect(newState.indexPage).toBe(initialState.indexPage);
    expect(newState.itemsPerPage).toBe(initialState.itemsPerPage);
    expect(newState.textSearch).toBe(initialState.textSearch);
    expect(newState.types).toBe(initialState.types);
  });

  it('result for PokemonTextSearchEditAction', () => {
    const payload: string = 'search';
    const action = new PokemonTextSearchEditAction(payload);

    const newState: PokemonPageState = pokemonPageReducer(initialState, action);
    expect(newState.pokemons).toBe(initialState.pokemons);
    expect(newState.isLoading).toBe(initialState.isLoading);
    expect(newState.indexPage).toBe(1);
    expect(newState.itemsPerPage).toBe(initialState.itemsPerPage);
    expect(newState.textSearch).toBe(payload);
    expect(newState.types).toBe(initialState.types);
  });

  it('result for PokemonTypesEditAction', () => {
    const payload: string[] = ['normal'];
    const action = new PokemonTypesEditAction(payload);

    const newState: PokemonPageState = pokemonPageReducer(initialState, action);
    expect(newState.pokemons).toBe(initialState.pokemons);
    expect(newState.isLoading).toBe(initialState.isLoading);
    expect(newState.indexPage).toBe(1);
    expect(newState.itemsPerPage).toBe(initialState.itemsPerPage);
    expect(newState.textSearch).toBe(initialState.textSearch);
    expect(newState.types).toBe(payload);
  });

  it('result for PokemonIndexPageEditAction', () => {
    const payload: number = 9;
    const action = new PokemonIndexPageEditAction(payload);

    const newState: PokemonPageState = pokemonPageReducer(initialState, action);
    expect(newState.pokemons).toBe(initialState.pokemons);
    expect(newState.isLoading).toBe(initialState.isLoading);
    expect(newState.indexPage).toBe(payload);
    expect(newState.itemsPerPage).toBe(initialState.itemsPerPage);
    expect(newState.textSearch).toBe(initialState.textSearch);
    expect(newState.types).toBe(initialState.types);
  });

  it('result for PokemonStartLoadingAction', () => {
    const action = new PokemonStartLoadingAction(null);

    const newState: PokemonPageState = pokemonPageReducer(initialState, action);
    expect(newState.pokemons).toBe(initialState.pokemons);
    expect(newState.isLoading).toBe(true);
    expect(newState.indexPage).toBe(initialState.indexPage);
    expect(newState.itemsPerPage).toBe(initialState.itemsPerPage);
    expect(newState.textSearch).toBe(initialState.textSearch);
    expect(newState.types).toBe(initialState.types);
  });

  it('result for PokemonStopLoadingAction', () => {
    const action = new PokemonStopLoadingAction(null);

    const newState: PokemonPageState = pokemonPageReducer(initialState, action);
    expect(newState.pokemons).toBe(initialState.pokemons);
    expect(newState.isLoading).toBe(false);
    expect(newState.indexPage).toBe(initialState.indexPage);
    expect(newState.itemsPerPage).toBe(initialState.itemsPerPage);
    expect(newState.textSearch).toBe(initialState.textSearch);
    expect(newState.types).toBe(initialState.types);
  });
});
