import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IamReactiveFormModule } from './forms/iam-reactive-form/iam-reactive-form.module';
import { IamDynamicLoopFormModule } from './forms/iam-dynamic-loop-form/iam-dynamic-loop-form.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    IamReactiveFormModule,
    IamDynamicLoopFormModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
