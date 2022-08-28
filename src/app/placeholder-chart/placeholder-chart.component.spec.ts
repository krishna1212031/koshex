import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaceholderChartComponent } from './placeholder-chart.component';

describe('PlaceholderChartComponent', () => {
  let component: PlaceholderChartComponent;
  let fixture: ComponentFixture<PlaceholderChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlaceholderChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaceholderChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
