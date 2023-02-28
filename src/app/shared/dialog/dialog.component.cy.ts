import { DialogComponent } from './dialog.component';
import { createOutputSpy } from 'cypress/angular';

import { TranslateModule } from '@ngx-translate/core';
import { TestBed, async } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

beforeEach(async(() => {
  TestBed.configureTestingModule({
    imports: [TranslateModule.forRoot(), BrowserAnimationsModule]
  }).compileComponents();
}));

describe('DialogComponent', () => {
  it('mounts', () => {
    cy.mount(DialogComponent, {
      componentProperties: {
        visible: true,
        animationState: 'visible'
      }
    });
  });

  it('there is output click for backside click', () => {
    cy.mount(DialogComponent, {
      componentProperties: {
        closeEvent: createOutputSpy('closeSpy'),
        visible: true,
        animationState: 'visible'
      }
    });
    cy.get('.modal-backside').click();
    cy.get('@closeSpy').should('have.been.calledWith');
  });

  it('there is output for close button click', () => {
    cy.mount(DialogComponent, {
      componentProperties: {
        closeEvent: createOutputSpy('closeSpy'),
        visible: true,
        animationState: 'visible'
      }
    });
    cy.get('app-button').click();
    cy.get('@closeSpy').should('have.been.calledWith');
  });
});
