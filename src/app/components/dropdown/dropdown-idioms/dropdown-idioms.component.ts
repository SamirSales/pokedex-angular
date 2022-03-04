import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-dropdown-idioms',
    templateUrl: './dropdown-idioms.component.html',
    styleUrls: ['./dropdown-idioms.component.css']
})
export class DropdownIdiomsComponent implements OnInit {
    idioms: string[] = ['English', 'Français', 'Português'];
    selectedIdiom: string = 'English';

    constructor() {}

    ngOnInit(): void {}

    onIdiomSelection(idiom: string) {
        this.selectedIdiom = idiom;
    }
}
