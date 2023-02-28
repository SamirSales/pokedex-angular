import { ButtonComponent } from './button.component';
import { createOutputSpy } from 'cypress/angular';

describe('ButtonComponent', () => {
  it('mounts', () => {
    cy.mount(ButtonComponent);
  });

  it('button text should be empty by default', () => {
    cy.mount(ButtonComponent);
    cy.get('button').should('have.text', '');
  });

  it('there is output for click', () => {
    cy.mount(ButtonComponent, {
      componentProperties: {
        click: createOutputSpy('clickSpy')
      }
    });
    cy.get('button').click();
    cy.get('@clickSpy').should('have.been.calledWith');
  });
});
