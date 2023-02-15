import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-search-text-field',
  templateUrl: './search-text-field.component.html',
  styleUrls: ['./search-text-field.component.css']
})
export class SearchTextFieldComponent implements OnInit {
  @Input() ngModel: string = '';
  @Output() ngModelChange = new EventEmitter<string>();
  @Output() delayedChange = new EventEmitter<string>();

  lastKeyboardPressingTime: number = 0;
  lastValue: string = '';
  timeout: any = null;

  constructor(private translate: TranslateService) {}

  ngOnInit(): void {
    this.lastValue = this.ngModel;
  }

  onChangeValue(event: any) {
    this.ngModelChange.emit(event.target.value);
    this.lastValue = event.target.value;
    this.emitDelayedChangeIfPossible();
  }

  emitDelayedChangeIfPossible() {
    const TIMEOUT_IN_MILISSECONDS = 500;

    if (this.lastKeyboardPressingTime == 0) {
      this.lastKeyboardPressingTime = new Date().getTime();

      this.timeout = setTimeout(() => this.emitDelayedLastValue(), TIMEOUT_IN_MILISSECONDS);
    } else {
      const newTime = new Date().getTime();
      if (this.lastKeyboardPressingTime - newTime < TIMEOUT_IN_MILISSECONDS) {
        this.lastKeyboardPressingTime = newTime;
        clearTimeout(this.timeout);
        this.timeout = setTimeout(() => this.emitDelayedLastValue(), TIMEOUT_IN_MILISSECONDS);
      }
    }
  }

  emitDelayedLastValue() {
    this.delayedChange.emit(this.lastValue);
  }

  getPlaceholderText() {
    return this.translate.instant('general.search') + '...';
  }
}
