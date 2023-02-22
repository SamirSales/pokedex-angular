import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { PokemonModule } from './pokemon/pokemon.module';
import { MoreInfoModule } from './more-info/more-info.module';
import { SharedModule } from './shared/shared.module';

import { AppComponent } from './app.component';
import { ClickStopPropagationDirective } from './shared/click-stop-propagation.directive';
import { DropdownComponent } from './shared/dropdown/dropdown.component';
import { DropdownIdiomsComponent } from './shared/dropdown/dropdown-idioms/dropdown-idioms.component';
import { ErrorDialogComponent } from './shared/dialog/error-dialog/error-dialog.component';
import { NotFoundPageComponent } from './shared/not-found-page/not-found-page.component';
import { ToolbarComponent } from './shared/toolbar/toolbar.component';

@NgModule({
  declarations: [
    AppComponent,
    ClickStopPropagationDirective,
    DropdownComponent,
    DropdownIdiomsComponent,
    ErrorDialogComponent,
    NotFoundPageComponent,
    ToolbarComponent
  ],
  imports: [
    PokemonModule,
    MoreInfoModule,
    SharedModule,
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
    }),
    StoreDevtoolsModule.instrument({ maxAge: 10 })
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}

// required for AOT compilation
export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http);
}
