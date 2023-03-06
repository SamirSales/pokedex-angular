import 'zone.js';
import 'zone.js/testing';
import '@angular/compiler';

// avoid 'Error: Need to call TestBed.initTestEnvironment() first'
import { BrowserDynamicTestingModule, platformBrowserDynamicTesting } from '@angular/platform-browser-dynamic/testing';
TestBed.initTestEnvironment(BrowserDynamicTestingModule, platformBrowserDynamicTesting());

import { first } from 'rxjs';
import { ButtonComponent } from './button.component';

import { TestBed } from '@angular/core/testing';

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
    spyOn(component.click, 'emit');

    // trigger the click
    const nativeElement = fixture.nativeElement;
    const button = nativeElement.querySelector('button');
    button.dispatchEvent(new Event('click'));

    fixture.detectChanges();

    expect(component.click.emit).toHaveBeenCalledWith();
  });
});
