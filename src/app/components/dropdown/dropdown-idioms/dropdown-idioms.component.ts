import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
    selector: 'app-dropdown-idioms',
    templateUrl: './dropdown-idioms.component.html',
    styleUrls: ['./dropdown-idioms.component.css']
})
export class DropdownIdiomsComponent implements OnInit {
    idioms: string[] = ['English', 'Français'];
    selectedIdiom: string = 'English';

    constructor(private translate: TranslateService) {}

    ngOnInit(): void {}

    onIdiomSelection(idiom: string) {
        this.selectedIdiom = idiom;

        if (idiom === 'Français') {
            this.translate.use('fr');
        } else {
            this.translate.use('en');
        }
    }
}
