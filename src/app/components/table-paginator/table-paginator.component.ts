import { Component, OnInit, ViewChild, ElementRef, SimpleChanges, ChangeDetectorRef } from '@angular/core';

@Component({
    selector: 'app-table-paginator',
    templateUrl: './table-paginator.component.html',
    styleUrls: ['./table-paginator.component.css']
})
export class TablePaginatorComponent implements OnInit {
    @ViewChild('tablePaginatorContainer', { static: false }) tablePaginatorContainer: ElementRef;

    pageQuantity = 30;
    selectedIndex = 4;
    widthContainer = 0;

    constructor(tablePaginatorContainer: ElementRef, private changeDetectorRef: ChangeDetectorRef) {
        this.tablePaginatorContainer = tablePaginatorContainer;
    }

    ngOnInit(): void {}

    ngAfterViewInit() {
        this.widthContainer = this.tablePaginatorContainer.nativeElement.offsetWidth;
        this.changeDetectorRef.detectChanges();
    }

    ngOnChanges(changes: SimpleChanges) {
        console.log('changes', changes);
        // changes of inputs
    }

    getElements() {
        const elements = [];
        const middleIndex = this.getMiddleIndex();
        const isPageQuantityToLarge = this.isPageQuantityToLarge();

        for (let i = 1; i <= this.pageQuantity; i++) {
            if (isPageQuantityToLarge && i === middleIndex) {
                elements.push(this.getThreePointsButtonElement());
                i = this.pageQuantity - middleIndex;
            } else {
                elements.push(this.getButtonElementByValue(i));
            }
        }

        return elements;
    }

    getThreePointsButtonElement() {
        return {
            value: '...',
            class: 'three-points',
            hasAction: false
        };
    }

    getButtonElementByValue(value: number) {
        return {
            value: value,
            class: value === this.selectedIndex ? 'selected' : '',
            hasAction: true
        };
    }

    getMiddleIndex() {
        return Math.floor(this.getPageButtonQuantity() / 2);
    }

    getPageButtonQuantity() {
        const arrowButtonQuantity = 2;
        const threePointsButtonQuantity = 1;
        const buttonQuantityPossible = this.getButtonQuantityPossible();

        if (this.isPageQuantityToLarge()) {
            return buttonQuantityPossible - arrowButtonQuantity - threePointsButtonQuantity;
        }
        return this.pageQuantity;
    }

    isPageQuantityToLarge() {
        const buttonQuantityPossible = this.getButtonQuantityPossible();
        return this.pageQuantity > buttonQuantityPossible;
    }

    getButtonQuantityPossible() {
        const buttonWidth = 44;
        return Math.floor(this.widthContainer / buttonWidth) - 2;
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
