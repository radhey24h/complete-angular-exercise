import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IamDynamicFormArrayTextboxComponent } from './iam-dynamic-form-array-textbox.component';

describe('IamDynamicFormArrayTextboxComponent', () => {
  let component: IamDynamicFormArrayTextboxComponent;
  let fixture: ComponentFixture<IamDynamicFormArrayTextboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IamDynamicFormArrayTextboxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IamDynamicFormArrayTextboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
