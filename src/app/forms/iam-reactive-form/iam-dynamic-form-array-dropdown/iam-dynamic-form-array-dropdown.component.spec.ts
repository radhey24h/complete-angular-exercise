import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IamDynamicFormArrayDropdownComponent } from './iam-dynamic-form-array-dropdown.component';

describe('IamDynamicFormArrayDropdownComponent', () => {
  let component: IamDynamicFormArrayDropdownComponent;
  let fixture: ComponentFixture<IamDynamicFormArrayDropdownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IamDynamicFormArrayDropdownComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IamDynamicFormArrayDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
