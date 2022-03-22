import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { PokemonTableComponent } from './components/table/pokemon-table/pokemon-table.component';
import { PokemonsViewComponent } from './views/pokemons-view/pokemons-view.component';
import { MoreInfoViewComponent } from './views/more-info-view/more-info-view.component';
import { PageNotFoundViewComponent } from './views/page-not-found-view/page-not-found-view.component';
import { TableComponent } from './components/table/table.component';
import { SearchTextFieldComponent } from './components/search-text-field/search-text-field.component';
import { TablePaginatorComponent } from './components/table-paginator/table-paginator.component';
import { LoaderComponent } from './components/loader/loader.component';
import { PokemonTypeLabelsComponent } from './components/pokemon-type-labels/pokemon-type-labels.component';

import { PokemonHttpClientService } from './services/pokemon-http-client.service';
import { PokemonDetailDialogComponent } from './components/dialog/pokemon-detail-dialog/pokemon-detail-dialog.component';
import { ClickStopPropagationDirective } from './directives/click-stop-propagation.directive';
import { PokemonCardsComponent } from './components/pokemon-cards/pokemon-cards.component';
import { DialogComponent } from './components/dialog/dialog.component';
import { ErrorDialogComponent } from './components/dialog/error-dialog/error-dialog.component';
import { DropdownComponent } from './components/dropdown/dropdown.component';
import { DropdownIdiomsComponent } from './components/dropdown/dropdown-idioms/dropdown-idioms.component';
import { ButtonComponent } from './components/button/button.component';
import { PokemonEvolutionChainLayoutComponent } from './components/pokemon-evolution-chain-layout/pokemon-evolution-chain-layout.component';
import { PokemonEvolutionLinkComponent } from './components/pokemon-evolution-chain-layout/pokemon-evolution-link/pokemon-evolution-link.component';

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
        PokemonCardsComponent,
        DialogComponent,
        ErrorDialogComponent,
        DropdownComponent,
        DropdownIdiomsComponent,
        ButtonComponent,
        PokemonEvolutionChainLayoutComponent,
        PokemonEvolutionLinkComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        BrowserAnimationsModule,
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: HttpLoaderFactory,
                deps: [HttpClient]
            }
        })
    ],
    providers: [PokemonHttpClientService],
    bootstrap: [AppComponent]
})
export class AppModule {}

// required for AOT compilation
export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
    return new TranslateHttpLoader(http);
}
