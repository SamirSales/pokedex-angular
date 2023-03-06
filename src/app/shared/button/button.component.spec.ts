// import '@angular/compiler';

import { TestBed } from '@angular/core/testing';
import { ButtonComponent } from './button.component';
import { BrowserDynamicTestingModule } from '@angular/platform-browser-dynamic/testing';

describe('ButtonComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ButtonComponent],
      imports: [BrowserDynamicTestingModule]
    });
  });

  //   it('clicked', () => {
  //     const button = new ButtonComponent();

  //     button.click.pipe(first()).subscribe(() => {
  //       console.log('click aconteceu');
  //     });

  //     button.onClick();
  //   });

  it('asodijaosd', () => {
    const fixture = TestBed.createComponent(ButtonComponent);
    // spy on event emitter
    const component = fixture.componentInstance;
    // jest.spyOn(component.click, 'emit');

    // trigger the click
    const nativeElement = fixture.nativeElement;
    const button = nativeElement.querySelector('button');
    button.dispatchEvent(new Event('click'));

    fixture.detectChanges();

    expect(component.click.emit).toHaveBeenCalledWith();
  });
});
