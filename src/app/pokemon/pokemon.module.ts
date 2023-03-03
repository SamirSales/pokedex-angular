import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { HttpClient } from '@angular/common/http';

import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { StoreModule } from '@ngrx/store';
import { reducers } from './shared/store/reducers';
import { EffectsModule } from '@ngrx/effects';
import { LoadPokemonPageEffect } from './shared/store/effects/pokemon-load-page.effect';
import { LoadAllPokemonEffect } from './shared/store/effects/pokemon-load-all.effect';

import { LoaderComponent } from '../shared/loader/loader.component';
import { PokemonCardsComponent } from './pokemon-cards/pokemon-cards.component';
import { PokemonDetailDialogComponent } from './pokemon-detail-dialog/pokemon-detail-dialog.component';
import { PokemonEvolutionChainLayoutComponent } from './pokemon-evolution-chain-layout/pokemon-evolution-chain-layout.component';
import { PokemonEvolutionLinkComponent } from './pokemon-evolution-chain-layout/pokemon-evolution-link/pokemon-evolution-link.component';
import { PokemonListPageComponent } from './pokemon-list-page/pokemon-list-page.component';
import { PokemonTypeLabelsComponent } from './pokemon-type-labels/pokemon-type-labels.component';
import { TablePaginatorComponent } from '../shared/table-paginator/table-paginator.component';

import { BackgroundColorByPokemonTypePipe } from './shared/pipe/background-color-by-pokemon-type.pipe';
import { TextColorByPokemonTypePipe } from './shared/pipe/text-color-by-pokemon-type.pipe';

import { PokemonHttpClientService } from './shared/service/pokemon-http-client/pokemon-http-client.service';
import { PokemonDetailsPageComponent } from './pokemon-details-page/pokemon-details-page.component';
import { PokemonTypeSelectorComponent } from './pokemon-type-selector/pokemon-type-selector.component';

import PokemonPageStoreFacade from './shared/store/pokemon-page-store.facade';

@NgModule({
  declarations: [
    BackgroundColorByPokemonTypePipe,
    LoaderComponent,
    PokemonCardsComponent,
    PokemonDetailDialogComponent,
    PokemonEvolutionChainLayoutComponent,
    PokemonEvolutionLinkComponent,
    PokemonListPageComponent,
    PokemonTypeLabelsComponent,
    TablePaginatorComponent,
    TextColorByPokemonTypePipe,
    PokemonDetailsPageComponent,
    PokemonTypeSelectorComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot([LoadPokemonPageEffect, LoadAllPokemonEffect]),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  providers: [PokemonHttpClientService, PokemonPageStoreFacade]
})
export class PokemonModule {}

// required for AOT compilation
export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http);
}
