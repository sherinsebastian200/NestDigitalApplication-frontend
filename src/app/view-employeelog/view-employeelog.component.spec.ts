import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewEmployeelogComponent } from './view-employeelog.component';

describe('ViewEmployeelogComponent', () => {
  let component: ViewEmployeelogComponent;
  let fixture: ComponentFixture<ViewEmployeelogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewEmployeelogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewEmployeelogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
