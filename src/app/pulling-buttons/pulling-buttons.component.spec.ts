import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PullingButtonsComponent } from './pulling-buttons.component';

describe('PullingButtonsComponent', () => {
  let component: PullingButtonsComponent;
  let fixture: ComponentFixture<PullingButtonsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PullingButtonsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PullingButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
