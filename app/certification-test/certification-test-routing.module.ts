import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { NativeScriptRouterModule } from 'nativescript-angular/router';
import { CertificationTestComponent } from './certification-test.component';

const routes: Routes = [
    { path: "", component: CertificationTestComponent }
];

@NgModule({
  imports: [NativeScriptRouterModule.forChild(routes)],
  exports: [NativeScriptRouterModule]
})
export class CertificationTestRoutingModule { }
