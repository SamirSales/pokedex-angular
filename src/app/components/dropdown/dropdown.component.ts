import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
    selector: 'app-dropdown',
    templateUrl: './dropdown.component.html',
    styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent implements OnInit {
    @Input() value: string = '';
    @Input() options: string[] = [];
    @Output() select = new EventEmitter<string>();

    constructor() {}

    ngOnInit(): void {}

    getText() {
        if (this.value.trim().length == 0) {
            return 'Select a value';
        }
        return this.value;
    }

    onSelectOption(option: string) {
        this.select.emit(option);
    }
}
