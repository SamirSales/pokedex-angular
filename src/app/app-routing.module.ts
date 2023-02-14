import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PokemonListPageComponent } from './pokemon/pokemon-list-page/pokemon-list-page.component';
import { PokemonDetailsPageComponent } from './pokemon/pokemon-details-page/pokemon-details-page.component';
import { MoreInfoPageComponent } from './more-info/more-info-page/more-info-page.component';
import { NotFoundPageComponent } from './shared/not-found-page/not-found-page.component';

export const RoutePath = {
  POKEMONS: 'pokemons',
  POKEMON_DETAILS: 'pokemons/:id/details',
  MORE_INFO: 'more-info'
};

const routes: Routes = [
  { path: RoutePath.POKEMONS, component: PokemonListPageComponent },
  { path: RoutePath.POKEMON_DETAILS, component: PokemonDetailsPageComponent },
  { path: RoutePath.MORE_INFO, component: MoreInfoPageComponent },
  { path: '', redirectTo: '/' + RoutePath.POKEMONS, pathMatch: 'full' },
  { path: '**', component: NotFoundPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
