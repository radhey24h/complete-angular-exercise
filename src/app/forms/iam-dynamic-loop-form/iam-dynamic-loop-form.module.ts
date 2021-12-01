import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IamDynamicLoopFormComponent } from './iam-dynamic-loop-form/iam-dynamic-loop-form.component';
import { MatSelectModule } from '@angular/material/select';

@NgModule({
  declarations: [IamDynamicLoopFormComponent],
  imports: [
    CommonModule,
    MatSelectModule
  ],
  exports: [IamDynamicLoopFormComponent]
})
export class IamDynamicLoopFormModule { }
