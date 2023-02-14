import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { HttpClient } from '@angular/common/http';

import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

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

import { PokemonHttpClientService } from './shared/service/pokemon-http-client.service';
import { PokemonDetailsPageComponent } from './pokemon-details-page/pokemon-details-page.component';

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
    PokemonDetailsPageComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  providers: [PokemonHttpClientService]
})
export class PokemonModule {}

// required for AOT compilation
export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http);
}
