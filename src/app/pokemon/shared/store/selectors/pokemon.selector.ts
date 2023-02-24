import { createSelector } from '@ngrx/store';
import { PokemonPageReducerState } from '../reducers';
import { PokemonPageState } from '../reducers/pokemonPage.reducer';

const selectFeature = (state: PokemonPageReducerState) => state.pokemonPage;

export const selectIndexPage = createSelector(selectFeature, (state: PokemonPageState) => state.indexPage);

export const selectItemsPerPage = createSelector(selectFeature, (state: PokemonPageState) => state.itemsPerPage);

export const selectItems = createSelector(selectFeature, (state: PokemonPageState) => state.pokemons);

export const selectItemsFromPage = createSelector(selectFeature, (state: PokemonPageState) => {
  const pokemons = state.pokemons;
  const indexPage = state.indexPage;
  const itemsPerPage = state.itemsPerPage;

  const trueIndex = (indexPage - 1) * itemsPerPage;
  const result = pokemons.slice(trueIndex, trueIndex + itemsPerPage);
  console.log('t select', result);
  return result;
});
