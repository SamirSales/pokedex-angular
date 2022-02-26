import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
    selector: 'app-dialog',
    templateUrl: './dialog.component.html',
    styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {
    @Input() visible: boolean = true;
    @Output('close') closeEvent = new EventEmitter();

    constructor() {}

    ngOnInit(): void {}

    close() {
        this.visible = false;
        this.closeEvent.emit();
    }

    getDialogStyle() {
        return 'display: ' + (this.visible ? 'block' : 'none');
    }
}
