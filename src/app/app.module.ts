import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToolbarComponent } from './shared/toolbar/toolbar.component';
import { PokemonTableComponent } from './pokemon/pokemon-table/pokemon-table.component';
import { PokemonListPageComponent } from './pokemon/pokemon-list-page/pokemon-list-page.component';
import { MoreInfoPageComponent } from './shared/more-info-page/more-info-page.component';
import { NotFoundPageComponent } from './shared/not-found-page/not-found-page.component';
import { TableComponent } from './shared/table/table.component';
import { SearchTextFieldComponent } from './shared/search-text-field/search-text-field.component';
import { TablePaginatorComponent } from './shared/table-paginator/table-paginator.component';
import { LoaderComponent } from './shared/loader/loader.component';
import { PokemonTypeLabelsComponent } from './pokemon/pokemon-type-labels/pokemon-type-labels.component';

import { PokemonHttpClientService } from './pokemon/shared/pokemon-http-client.service';
import { PokemonDetailDialogComponent } from './pokemon/pokemon-detail-dialog/pokemon-detail-dialog.component';
import { ClickStopPropagationDirective } from './shared/click-stop-propagation.directive';
import { PokemonCardsComponent } from './pokemon/pokemon-cards/pokemon-cards.component';
import { DialogComponent } from './shared/dialog/dialog.component';
import { ErrorDialogComponent } from './shared/dialog/error-dialog/error-dialog.component';
import { DropdownComponent } from './shared/dropdown/dropdown.component';
import { DropdownIdiomsComponent } from './shared/dropdown/dropdown-idioms/dropdown-idioms.component';
import { ButtonComponent } from './shared/button/button.component';
import { PokemonEvolutionChainLayoutComponent } from './pokemon/pokemon-evolution-chain-layout/pokemon-evolution-chain-layout.component';
import { PokemonEvolutionLinkComponent } from './pokemon/pokemon-evolution-chain-layout/pokemon-evolution-link/pokemon-evolution-link.component';

@NgModule({
    declarations: [
        AppComponent,
        ToolbarComponent,
        PokemonTableComponent,
        PokemonListPageComponent,
        MoreInfoPageComponent,
        NotFoundPageComponent,
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
