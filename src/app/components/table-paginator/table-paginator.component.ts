import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-table-paginator',
    templateUrl: './table-paginator.component.html',
    styleUrls: ['./table-paginator.component.css']
})
export class TablePaginatorComponent implements OnInit {
    pageQuantity = 30;
    selectedIndex = 4;

    constructor() {}

    ngOnInit(): void {}

    getElements() {
        const elements = [];

        for (let i = 1; i <= this.pageQuantity; i++) {
            if (this.isPageQuantityToLarge() && i === this.getMiddleIndex()) {
                elements.push({
                    value: '...',
                    class: 'three-points',
                    hasAction: false
                });
            } else {
                elements.push({
                    value: i,
                    class: i === this.selectedIndex ? 'selected' : '',
                    hasAction: true
                });
            }
        }

        return elements;
    }

    getMiddleIndex() {
        return Math.floor(this.pageQuantity / 2);
    }

    isPageQuantityToLarge() {
        return true;
    }

    onClick(element: any) {
        if (element.hasAction) {
            this.selectedIndex = element.value;
        }
    }

    onClickLeftButton() {
        if (this.selectedIndex > 1) {
            this.selectedIndex -= 1;
        }
    }

    onClickRightButton() {
        if (this.selectedIndex < this.pageQuantity) {
            this.selectedIndex += 1;
        }
    }
}
