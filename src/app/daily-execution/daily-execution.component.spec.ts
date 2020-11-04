import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DailyExecution } from './daily-execution.component';

describe('DailyExecutionChartComponent', () => {
  let component: DailyExecution;
  let fixture: ComponentFixture<DailyExecution>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DailyExecution ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DailyExecution);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
