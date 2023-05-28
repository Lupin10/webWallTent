import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeTComponent } from './employee-t.component';

describe('EmployeeTComponent', () => {
  let component: EmployeeTComponent;
  let fixture: ComponentFixture<EmployeeTComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmployeeTComponent]
    });
    fixture = TestBed.createComponent(EmployeeTComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
