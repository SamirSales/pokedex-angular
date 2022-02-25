import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { HttpErrorService } from './services/http-error.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnDestroy {
    title = 'pokedex-angular';
    private errorSubscrition: Subscription;

    constructor(private httpErrorService: HttpErrorService) {
        this.errorSubscrition = this.httpErrorService.getSubject().subscribe((error) => {
            console.log('error', error);
        });
    }

    ngOnDestroy(): void {
        this.errorSubscrition.unsubscribe();
    }
}
