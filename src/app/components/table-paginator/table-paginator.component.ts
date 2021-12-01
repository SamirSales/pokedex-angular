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
        const marge = this.getMarge();

        for (let index = 1; index <= this.pageQuantity; index++) {
            if (this.isIndexInVisibleRange(index)) {
                elements.push(this.getButtonElementByValue(index));
            } else {
                elements.push(this.getThreePointsButtonElement());

                if (index < this.selectedIndex) {
                    index = marge > 0 ? this.selectedIndex - marge : this.selectedIndex - 1;
                } else {
                    index = this.pageQuantity - 1;
                }
            }
        }

        return elements;
    }

    isIndexInVisibleRange(index: any) {
        if (!this.isPageQuantityToLarge() || index == 1 || index == this.pageQuantity || index == this.selectedIndex) {
            return true;
        }

        const marge = this.getMarge();
        const compensation = this.selectedIndex - marge < 0 ? (this.selectedIndex - marge - 1) * -1 : 0;
        return index >= this.selectedIndex - marge && index <= this.selectedIndex + marge + compensation;
    }

    getMarge() {
        const notArrowButtonQuantityPossible = this.getNotArrowButtonQuantityPossible();
        return Math.floor(notArrowButtonQuantityPossible / 2) - 2;
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
        const notArrowButtonQuantityPossible = this.getNotArrowButtonQuantityPossible();

        if (this.isPageQuantityToLarge()) {
            return notArrowButtonQuantityPossible - arrowButtonQuantity - threePointsButtonQuantity;
        }
        return this.pageQuantity;
    }

    isPageQuantityToLarge() {
        const notArrowButtonQuantityPossible = this.getNotArrowButtonQuantityPossible();
        return this.pageQuantity > notArrowButtonQuantityPossible;
    }

    getNotArrowButtonQuantityPossible() {
        const buttonWidth = 44;
        const arrowButtonsQuantity = 2;
        const errorPrevention = 1;
        const result = Math.floor(this.widthContainer / buttonWidth) - arrowButtonsQuantity - errorPrevention;
        return result > 0 ? result : 1;
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
