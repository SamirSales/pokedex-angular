import { trigger, state, style, transition, animate } from '@angular/animations';
import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';

const ANIMATION_TIMEOUT = 120;

@Component({
    selector: 'app-dialog',
    templateUrl: './dialog.component.html',
    styleUrls: ['./dialog.component.css'],
    animations: [
        trigger('dialogState', [
            state(
                'visible',
                style({
                    transform: 'translateY(0) scale(1)',
                    opacity: 1
                })
            ),
            state(
                'hide',
                style({
                    transform: 'translateY(3.125rem) scale(0.5)',
                    opacity: 0
                })
            ),
            transition('visible <=> hide', animate(ANIMATION_TIMEOUT))
        ])
    ]
})
export class DialogComponent implements OnInit {
    @Input() visible: boolean = false;
    @Output('close') closeEvent = new EventEmitter();

    animationState: string = 'hide';

    constructor() {}

    ngOnInit(): void {}

    ngOnChanges(changes: SimpleChanges) {
        if (changes['visible'].currentValue) {
            this.animationState = 'visible';
        } else {
            this.animationState = 'hide';
        }
    }

    close() {
        this.animationState = 'hide';

        setTimeout(() => {
            this.visible = false;
            this.closeEvent.emit();
        }, ANIMATION_TIMEOUT);
    }

    getDialogStyle() {
        return 'display: ' + (this.visible ? 'block' : 'none');
    }
}
