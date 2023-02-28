import { DropdownComponent } from './dropdown.component';

import { TestBed, async } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

beforeEach(async(() => {
  TestBed.configureTestingModule({
    imports: [BrowserAnimationsModule]
  }).compileComponents();
}));

describe('DropdownComponent', () => {
  it('mounts', () => {
    cy.mount(DropdownComponent, {
      componentProperties: {
        options: ['option1', 'option2', 'option3'],
        value: ''
      }
    });
  });
});
