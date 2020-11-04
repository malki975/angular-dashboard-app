import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DailyFinesCollectionComponent } from './daily-fines-collection.component';

describe('DailyFinesCollectionComponent', () => {
  let component: DailyFinesCollectionComponent;
  let fixture: ComponentFixture<DailyFinesCollectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DailyFinesCollectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DailyFinesCollectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
