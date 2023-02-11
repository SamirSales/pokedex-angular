import { HttpErrorResponse } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-error-dialog',
  templateUrl: './error-dialog.component.html',
  styleUrls: ['./error-dialog.component.css']
})
export class ErrorDialogComponent implements OnInit {
  @Input() error: HttpErrorResponse | null = null;
  @Input() visible: boolean = false;
  @Output() close = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}
}
