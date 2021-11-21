import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoreInfoViewComponent } from './more-info-view.component';

describe('MoreInfoViewComponent', () => {
  let component: MoreInfoViewComponent;
  let fixture: ComponentFixture<MoreInfoViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoreInfoViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MoreInfoViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
