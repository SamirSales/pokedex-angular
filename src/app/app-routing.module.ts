import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PokemonsViewComponent } from './views/pokemons-view/pokemons-view.component';
import { MoreInfoViewComponent } from './views/more-info-view/more-info-view.component';
import { PageNotFoundViewComponent } from './views/page-not-found-view/page-not-found-view.component';

export const RoutePath = {
    POKEMONS: 'pokemons',
    MORE_INFO: 'more-info'
};

const routes: Routes = [
    { path: RoutePath.POKEMONS, component: PokemonsViewComponent },
    { path: RoutePath.MORE_INFO, component: MoreInfoViewComponent },
    { path: '', redirectTo: '/' + RoutePath.POKEMONS, pathMatch: 'full' },
    { path: '**', component: PageNotFoundViewComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { useHash: true })],
    exports: [RouterModule]
})
export class AppRoutingModule {}
