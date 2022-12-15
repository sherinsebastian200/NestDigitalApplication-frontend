import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewEmployeeprofileComponent } from './view-employeeprofile.component';

describe('ViewEmployeeprofileComponent', () => {
  let component: ViewEmployeeprofileComponent;
  let fixture: ComponentFixture<ViewEmployeeprofileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewEmployeeprofileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewEmployeeprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
