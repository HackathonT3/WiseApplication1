import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { NativeScriptRouterModule } from 'nativescript-angular/router';
import { StudentRegisterComponent } from './student-register.component';

const routes: Routes = [
  { path: "", component: StudentRegisterComponent }
];

@NgModule({
  imports: [NativeScriptRouterModule.forChild(routes)],
  exports: [NativeScriptRouterModule]
})
export class StudentRegisterRoutingModule { }
