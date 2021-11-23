import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-search-text-field',
    templateUrl: './search-text-field.component.html',
    styleUrls: ['./search-text-field.component.css']
})
export class SearchTextFieldComponent implements OnInit {
    @Input() ngModel: string = '';
    @Output() ngModelChange = new EventEmitter<string>();

    constructor() {}

    ngOnInit(): void {}

    onChangeValue(value: string) {
        this.ngModelChange.emit(value);
    }
}
