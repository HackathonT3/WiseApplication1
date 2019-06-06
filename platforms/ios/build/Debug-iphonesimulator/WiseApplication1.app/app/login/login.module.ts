import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule } from 'nativescript-angular/common';
import { LoginComponent } from './login.component';
import { LoginRoutingModule } from './login-routing.module';
import { SchoolSearchComponent } from './school-search/school-search.component';
import { NativeScriptFormsModule } from 'nativescript-angular';

@NgModule({
    declarations: [LoginComponent, SchoolSearchComponent],
    imports: [
        NativeScriptCommonModule,
        LoginRoutingModule,
        NativeScriptFormsModule
    ],
    schemas: [NO_ERRORS_SCHEMA],
    entryComponents: [SchoolSearchComponent]
})
export class LoginModule { }
