import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DailyEmployeelogComponent } from './daily-employeelog.component';

describe('DailyEmployeelogComponent', () => {
  let component: DailyEmployeelogComponent;
  let fixture: ComponentFixture<DailyEmployeelogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DailyEmployeelogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DailyEmployeelogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
