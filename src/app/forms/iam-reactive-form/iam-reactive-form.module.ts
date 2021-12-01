import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IamDynamicFormArrayTextboxComponent } from './iam-dynamic-form-array-textbox/iam-dynamic-form-array-textbox.component';
import { IamDynamicFormArrayDropdownComponent } from './iam-dynamic-form-array-dropdown/iam-dynamic-form-array-dropdown.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [IamDynamicFormArrayTextboxComponent, IamDynamicFormArrayDropdownComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [IamDynamicFormArrayTextboxComponent,IamDynamicFormArrayDropdownComponent]
})
export class IamReactiveFormModule { }
