import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewSecurityprofileComponent } from './view-securityprofile.component';

describe('ViewSecurityprofileComponent', () => {
  let component: ViewSecurityprofileComponent;
  let fixture: ComponentFixture<ViewSecurityprofileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewSecurityprofileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewSecurityprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
