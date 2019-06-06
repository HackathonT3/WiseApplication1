import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { CertificationTestRoutingModule } from './certification-test-routing.module';
import { NativeScriptCommonModule } from 'nativescript-angular/common';
import { CertificationTestComponent } from './certification-test.component';

@NgModule({
  declarations: [CertificationTestComponent],
  imports: [
    CertificationTestRoutingModule,
    NativeScriptCommonModule
  ],
  schemas: [NO_ERRORS_SCHEMA]
})
export class CertificationTestModule { }
