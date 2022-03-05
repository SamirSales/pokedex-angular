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

    constructor(private translate: TranslateService) {}

    ngOnInit(): void {}

    onChangeValue(value: string) {
        this.ngModelChange.emit(value);
    }

    getPlaceholderText() {
        return this.translate.instant('general.search') + '...';
    }
}
