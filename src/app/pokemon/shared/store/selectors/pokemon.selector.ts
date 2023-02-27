import { createSelector } from '@ngrx/store';
import { PokemonPageReducerState } from '../reducers';
import { PokemonPageState } from '../reducers/pokemonPage.reducer';
import { PokemonInterface } from '../../model/pokemon.model';

const selectFeature = (state: PokemonPageReducerState) => state.pokemonPage;

export const selectIndexPage = createSelector(selectFeature, (state: PokemonPageState) => state.indexPage);

export const selectItemsPerPage = createSelector(selectFeature, (state: PokemonPageState) => state.itemsPerPage);

export const selectItems = createSelector(selectFeature, (state: PokemonPageState) => state.pokemons);

export const selectAllFilteredPokemons = createSelector(selectFeature, (state: PokemonPageState) => {
  return getFilteredPokemonByState(state);
});

export const selectItemsFromPage = createSelector(selectFeature, (state: PokemonPageState) => {
  const pokemons = getFilteredPokemonByState(state);
  const indexPage = state.indexPage;
  const itemsPerPage = state.itemsPerPage;

  const trueIndex = (indexPage - 1) * itemsPerPage;
  const result = pokemons.slice(trueIndex, trueIndex + itemsPerPage);
  return result;
});

const getFilteredPokemonByState = (state: PokemonPageState) => {
  const textSearch = state.textSearch;
  const types = state.types;
  return state.pokemons.filter((p) => isPokemonMatchingWithTextSearch(p, textSearch) && isPokemonMatchingWithTypes(p, types));
};

const isPokemonMatchingWithTextSearch = (pokemon: PokemonInterface, textSearch: string) => {
  return textSearch.trim().length <= 2 || pokemon.name.toLowerCase().includes(textSearch.toLowerCase());
};

const isPokemonMatchingWithTypes = (pokemon: PokemonInterface, types: string[]) => {
  const pokemonTypeNames = pokemon.types.map((t) => t.name);
  for (let typeName of types) {
    if (!pokemonTypeNames.includes(typeName)) {
      return false;
    }
  }
  return true;
};
