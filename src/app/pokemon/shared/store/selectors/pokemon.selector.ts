import { createSelector } from '@ngrx/store';
import { PokemonPageReducerState } from '../reducers';
import { PokemonPageState } from '../reducers/pokemonPage.reducer';
import { PokemonInterface } from '../../model/pokemon.model';

const selectFeature = (state: PokemonPageReducerState) => state.pokemonPage;

export const selectIndexPage = createSelector(selectFeature, (state: PokemonPageState) => state.indexPage);

export const selectItemsPerPage = createSelector(selectFeature, (state: PokemonPageState) => state.itemsPerPage);

export const selectItems = createSelector(selectFeature, (state: PokemonPageState) => state.pokemons);

export interface PokemonPageData {
  pokemons: PokemonInterface[];
  indexPage: number;
  itemsPerPage: number;
  totalPages: number;
  isLoading: boolean;
  filtering: { textSearch: string; pokemonTypes: string[] };
}

export const selectPageData = createSelector(selectFeature, (state: PokemonPageState) => {
  const filteredPokemons = getFilteredPokemonByState(state);
  const indexPage = state.indexPage;
  const itemsPerPage = state.itemsPerPage;
  const totalPages = Math.ceil(filteredPokemons.length / itemsPerPage);

  const trueIndex = (indexPage - 1) * itemsPerPage;
  const pagePokemons = filteredPokemons.slice(trueIndex, trueIndex + itemsPerPage);

  return {
    pokemons: pagePokemons,
    indexPage: indexPage,
    itemsPerPage: itemsPerPage,
    totalPages: totalPages,
    isLoading: false,
    filtering: {
      textSearch: state.textSearch,
      pokemonTypes: state.types
    }
  };
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
