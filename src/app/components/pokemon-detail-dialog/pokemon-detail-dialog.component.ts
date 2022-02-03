import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-pokemon-detail-dialog',
    templateUrl: './pokemon-detail-dialog.component.html',
    styleUrls: ['./pokemon-detail-dialog.component.css']
})
export class PokemonDetailDialogComponent implements OnInit {
    visible: boolean = false;

    constructor() {}

    ngOnInit(): void {}

    toggleVisibility() {
        this.visible = !this.visible;
    }

    close() {
        this.visible = false;
    }

    getDialogStyle() {
        return 'display: ' + (this.visible ? 'block' : 'none');
    }
}
