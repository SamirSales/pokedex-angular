import { Component, OnInit, Input, ContentChild, TemplateRef, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-table',
    templateUrl: './table.component.html',
    styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
    @Input() headers: { text: string; input: any }[] = [];
    @Input() items: any[] = [];

    @Output('clickItem') clickItemEventEmitter: EventEmitter<any> = new EventEmitter();

    @ContentChild(TemplateRef) templateRef: any;

    constructor() {}

    ngOnInit(): void {}

    getInputs(): any {
        return this.headers.map((header: { input: any }) => header.input);
    }

    onClickItem(index: number) {
        const item = this.items[index];
        this.clickItemEventEmitter.emit(item);
    }
}
