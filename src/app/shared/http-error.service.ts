import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpErrorService {
  private error = new Subject<HttpErrorResponse>();

  constructor() {}

  submit(error: HttpErrorResponse) {
    this.error.next(error);
  }

  getSubject(): Subject<HttpErrorResponse> {
    return this.error;
  }
}
