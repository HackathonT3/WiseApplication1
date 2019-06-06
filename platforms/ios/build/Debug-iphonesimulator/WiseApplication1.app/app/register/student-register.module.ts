import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { ModalDialogService } from 'nativescript-angular/directives/dialogs';
import { NativeScriptFormsModule } from 'nativescript-angular/forms';
import { StudentRegisterRoutingModule } from './student-register-routing.module';
import { NativeScriptCommonModule } from 'nativescript-angular/common';
import { StudentRegisterComponent } from './student-register.component';
import { DOBModalComponent } from './modal/dob/dob.modal';

@NgModule({
  declarations: [
    StudentRegisterComponent,
    DOBModalComponent
  ],
  entryComponents: [DOBModalComponent],
  imports: [
    StudentRegisterRoutingModule,
    NativeScriptCommonModule,
    NativeScriptFormsModule
  ],
  providers: [ModalDialogService],
  schemas: [NO_ERRORS_SCHEMA]
})
export class StudentRegisterModule { }
