import { createSelector } from '@ngrx/store';
import { PokemonPageReducerState } from '../reducers';
import { PokemonPageState } from '../reducers/pokemonPage.reducer';

const selectFeature = (state: PokemonPageReducerState) => state.pokemonPage;

export const selectIndexPage = createSelector(selectFeature, (state: PokemonPageState) => state.indexPage);

export const selectItemsPerPage = createSelector(selectFeature, (state: PokemonPageState) => state.itemsPerPage);
