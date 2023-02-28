import { ErrorDialogComponent } from './error-dialog.component';

describe('ErrorDialogComponent', () => {
  it('mounts', () => {
    cy.mount(ErrorDialogComponent, {
      componentProperties: {
        visible: true
      }
    });
  });
});
