import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonthlyExecutionComponent } from './monthly-execution.component';

describe('MonthlyExecutionComponent', () => {
  let component: MonthlyExecutionComponent;
  let fixture: ComponentFixture<MonthlyExecutionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MonthlyExecutionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MonthlyExecutionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
