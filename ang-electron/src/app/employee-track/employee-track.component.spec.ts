import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeTrackComponent } from './employee-track.component';

describe('EmployeeTrackComponent', () => {
  let component: EmployeeTrackComponent;
  let fixture: ComponentFixture<EmployeeTrackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeTrackComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeTrackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
