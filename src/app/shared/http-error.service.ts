import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class HttpErrorService {
    private error = new Subject();

    constructor() {}

    submit(error: any) {
        this.error.next(error);
    }

    getSubject(): Subject<any> {
        return this.error;
    }
}
