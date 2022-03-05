import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { HttpErrorService } from './services/http-error.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnDestroy {
    title = 'pokedex-angular';
    private errorSubscrition: Subscription;

    shouldShowErrorDialog: boolean = false;
    httpErrorResponse = null;

    constructor(private httpErrorService: HttpErrorService, private translate: TranslateService) {
        this.errorSubscrition = this.httpErrorService.getSubject().subscribe((error) => {
            this.shouldShowErrorDialog = true;
            this.httpErrorResponse = error;
        });

        this.translate.setDefaultLang('en');
    }

    ngOnDestroy(): void {
        this.errorSubscrition.unsubscribe();
    }
}
