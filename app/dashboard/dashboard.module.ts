import {ChangeDetectorRef, NgModule, NO_ERRORS_SCHEMA, ViewContainerRef} from '@angular/core';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { NativeScriptCommonModule } from 'nativescript-angular/common';
import { DashboardComponent } from './dashboard.component';
import {PhotosService} from "~/core/photos.service";
import {LocalStorage} from "~/core/local-storage.service";
import {CameraService} from "~/core/camera.service";
import {Page} from "ui/page";
import {FileReaderService} from "~/core/fileReader.service";
import {ModalDialogService} from "nativescript-angular";


@NgModule({
  declarations: [DashboardComponent],
  imports: [
    DashboardRoutingModule,
    NativeScriptCommonModule
  ],
  schemas: [NO_ERRORS_SCHEMA],
  providers : [PhotosService,LocalStorage,CameraService,Page,FileReaderService,ModalDialogService]

})
export class DashboardModule { }
