import { Component, OnInit, Input, ContentChild, TemplateRef } from '@angular/core';

@Component({
    selector: 'app-table',
    templateUrl: './table.component.html',
    styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
    @Input() headers: { text: string; input: any }[] = [];
    @Input() items = [];

    @ContentChild(TemplateRef) templateRef: any;

    constructor() {}

    ngOnInit(): void {}

    getInputs(): any {
        return this.headers.map((header: { input: any }) => header.input);
    }
}
