import { Component, OnInit, Input, ContentChild, TemplateRef } from '@angular/core';

@Component({
    selector: 'app-table',
    templateUrl: './table.component.html',
    styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
    @Input() headers: any = [
        //text, input
    ];

    @Input() items: any = [];

    @ContentChild(TemplateRef) templateRef: any;

    constructor() {}

    ngOnInit(): void {}

    getInputs(): any {
        return this.headers.map((header: any) => header.input);
    }
}
