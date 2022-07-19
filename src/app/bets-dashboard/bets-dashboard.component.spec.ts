import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BetsDashboardComponent } from './bets-dashboard.component';

describe('BetsDashboardComponent', () => {
  let component: BetsDashboardComponent;
  let fixture: ComponentFixture<BetsDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BetsDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BetsDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
