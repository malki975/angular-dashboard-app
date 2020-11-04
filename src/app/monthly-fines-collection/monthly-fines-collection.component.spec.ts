import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonthlyFinesCollectionComponent } from './monthly-fines-collection.component';

describe('MonthlyFinesCollectionComponent', () => {
  let component: MonthlyFinesCollectionComponent;
  let fixture: ComponentFixture<MonthlyFinesCollectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MonthlyFinesCollectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MonthlyFinesCollectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
