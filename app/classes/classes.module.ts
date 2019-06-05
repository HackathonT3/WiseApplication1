import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { ClassesRoutingModule } from './classes-routing.module';
import { NativeScriptCommonModule } from 'nativescript-angular/common';
import { ClassesComponent } from './classes.component';

@NgModule({
  declarations: [ClassesComponent],
  imports: [
    ClassesRoutingModule,
    NativeScriptCommonModule
  ],
  schemas: [NO_ERRORS_SCHEMA]
})
export class ClassesModule { }
