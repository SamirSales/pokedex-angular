import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { ButtonComponent } from './button/button.component';
import { DialogComponent } from './dialog/dialog.component';
import { SearchTextFieldComponent } from './search-text-field/search-text-field.component';

@NgModule({
  declarations: [ButtonComponent, DialogComponent, SearchTextFieldComponent],
  imports: [
    CommonModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  exports: [ButtonComponent, DialogComponent, SearchTextFieldComponent]
})
export class SharedModule {}

// required for AOT compilation
export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http);
}
