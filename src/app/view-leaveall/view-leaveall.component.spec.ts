import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewLeaveallComponent } from './view-leaveall.component';

describe('ViewLeaveallComponent', () => {
  let component: ViewLeaveallComponent;
  let fixture: ComponentFixture<ViewLeaveallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewLeaveallComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewLeaveallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
