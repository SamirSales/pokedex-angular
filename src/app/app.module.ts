import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { PokemonTableComponent } from './components/pokemon-table/pokemon-table.component';
import { PokemonsViewComponent } from './views/pokemons-view/pokemons-view.component';
import { MoreInfoViewComponent } from './views/more-info-view/more-info-view.component';
import { PageNotFoundViewComponent } from './views/page-not-found-view/page-not-found-view.component';

@NgModule({
    declarations: [AppComponent, ToolbarComponent, PokemonTableComponent, PokemonsViewComponent, MoreInfoViewComponent, PageNotFoundViewComponent],
    imports: [BrowserModule, AppRoutingModule],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}
