import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PokemonListPageComponent } from './pokemon/pokemon-list-page/pokemon-list-page.component';
import { MoreInfoPageComponent } from './shared/more-info-page/more-info-page.component';
import { NotFoundPageComponent } from './shared/not-found-page/not-found-page.component';

export const RoutePath = {
  POKEMONS: 'pokemons',
  MORE_INFO: 'more-info'
};

const routes: Routes = [
  { path: RoutePath.POKEMONS, component: PokemonListPageComponent },
  { path: RoutePath.MORE_INFO, component: MoreInfoPageComponent },
  { path: '', redirectTo: '/' + RoutePath.POKEMONS, pathMatch: 'full' },
  { path: '**', component: NotFoundPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
