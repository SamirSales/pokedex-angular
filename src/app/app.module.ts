import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { PokemonTableComponent } from './components/pokemon-table/pokemon-table.component';
import { PokemonsViewComponent } from './views/pokemons-view/pokemons-view.component';
import { MoreInfoViewComponent } from './views/more-info-view/more-info-view.component';
import { PageNotFoundViewComponent } from './views/page-not-found-view/page-not-found-view.component';
import { TableComponent } from './components/table/table.component';
import { SearchTextFieldComponent } from './components/search-text-field/search-text-field.component';
import { TablePaginatorComponent } from './components/table-paginator/table-paginator.component';
import { LoaderComponent } from './components/loader/loader.component';
import { PokemonTypeLabelsComponent } from './components/pokemon-type-labels/pokemon-type-labels.component';

import { PokemonHttpClientService } from './services/pokemon-http-client.service';
import { PokemonDetailDialogComponent } from './components/pokemon-detail-dialog/pokemon-detail-dialog.component';
import { ClickStopPropagationDirective } from './directives/click-stop-propagation.directive';
import { PokemonCardsComponent } from './components/pokemon-cards/pokemon-cards.component';

@NgModule({
    declarations: [
        AppComponent,
        ToolbarComponent,
        PokemonTableComponent,
        PokemonsViewComponent,
        MoreInfoViewComponent,
        PageNotFoundViewComponent,
        TableComponent,
        SearchTextFieldComponent,
        TablePaginatorComponent,
        LoaderComponent,
        PokemonTypeLabelsComponent,
        PokemonDetailDialogComponent,
        ClickStopPropagationDirective,
        PokemonCardsComponent
    ],
    imports: [BrowserModule, AppRoutingModule, HttpClientModule],
    providers: [PokemonHttpClientService],
    bootstrap: [AppComponent]
})
export class AppModule {}
