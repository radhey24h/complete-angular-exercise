import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IamDynamicLoopFormComponent } from './iam-dynamic-loop-form.component';

describe('IamDynamicLoopFormComponent', () => {
  let component: IamDynamicLoopFormComponent;
  let fixture: ComponentFixture<IamDynamicLoopFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IamDynamicLoopFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IamDynamicLoopFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
