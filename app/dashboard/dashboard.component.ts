import { Component, OnInit, ViewContainerRef, ChangeDetectorRef, ViewChild, ElementRef } from "@angular/core";
import { Page } from "ui/page";
import { screen } from "platform";
import { PhotosService } from "../core/photos.service";
import { CameraService } from "../core/camera.service";
import { FileReaderService } from "../core/fileReader.service";
import { FilterComponent } from "./filter/filter.component";
import { ModalDialogOptions, ModalDialogService } from "nativescript-angular/modal-dialog";
import { SearchBar } from "tns-core-modules/ui/search-bar";
import { alert } from "tns-core-modules/ui/dialogs";
import { RouterExtensions } from "nativescript-angular";
import * as appSettings from "tns-core-modules/application-settings";
import { action } from "tns-core-modules/ui/dialogs";
import { LandmarksService } from "./landmarks-service";
import { Landmark } from "./landmark";
import { AnimationsService } from "./animations-service";
import { View } from "tns-core-modules/ui/core/view";
import { ActionButtonComponent } from "./action-button/action-button.component";
import { AnimationCurve } from "tns-core-modules/ui/enums";
import { PlatformLocation } from '@angular/common';

@Component({
  selector: 'ns-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  moduleId: module.id,
})
export class DashboardComponent implements OnInit {

  // github repo link - https://github.com/kumarandena/nativescript-instagram-clone

  photoWidth: number = screen.mainScreen.widthDIPs * 0.33333;
  photoHeight: number = this.photoWidth;

  photos: string[] = [];

  instagram: any[] = [];

  courses: any[] = [];

  classes: any[] =[];

  isSelected: string = '0';

  private _landmarks: Landmark[];
  private _selectedView: View;
  private _adjustedOffset: number = 0;
  @ViewChild("actionButton") _buttonRef: ActionButtonComponent;
  @ViewChild("search") _searchRef: ElementRef;
  @ViewChild("list") _listRef: ElementRef;
  @ViewChild("animatingImage") _imageRef: ElementRef;
  @ViewChild("animatingImageContainer") _imageContainerRef: ElementRef;


    constructor(
        private photosService: PhotosService,
        private camera: CameraService,
        private page: Page,
        private fileReader: FileReaderService,
        private modal: ModalDialogService,
        private vref: ViewContainerRef,
        private cd: ChangeDetectorRef,
        private nav: RouterExtensions,
        private landmarksService: LandmarksService,
        private animationsService: AnimationsService,
        private location: PlatformLocation) {
          this.page['scrollableContent'] = true;
          this._landmarks = this.landmarksService.getLandmarks();

        this.photos = this.photosService.getPhotos();
        this.letsInitialize();
    }

  ngOnInit(): void {
    this.page.actionBarHidden = true;
    this.courses.push("Economics");
    this.courses.push("Personal Finance");
    this.courses.push("Business Class");
    this.courses.push("Consumer Science");
    this.courses.push("Mathmatics");
    this.courses.push("Financial Planning");
    this.courses.push("Academy of Finance");
    this.courses.push("Entrepreneurship");
    this.classes.push("Class 1");
    this.classes.push("Class 2");
    this.location.onPopState(() => {
      this._onNavigatedTo();
  });
  }

  letsInitialize() {
    this.fileReader.readJSON('/core/instagram.json').then(
        res => {
          this.instagram = res["instagram"];
        },
        err => {
          console.log('Error reading json: ' + JSON.stringify(err));
        }
    )
  }

  takePhoto() {
    this.camera.takePhoto()
        .then(imageAsset => {
          this.onNavtap('loading', '');
          const options: ModalDialogOptions = {
            context: imageAsset,
            viewContainerRef: this.vref,
            fullscreen: true
          };
          setTimeout(() => { //https://github.com/NativeScript/NativeScript/issues/5744#issuecomment-384589739
            this.modal.showModal(FilterComponent, options).then((response) => {
              if (response == 'success') {
                this.onNavtap('profile', '4');
              }
              else {
                this.onNavtap('home', '0');
              }
            }, error => {
              console.log(error);
            });
          }, 1000);
        }).catch(err => {
      console.log(err.message);
    });
  }

  selectedRoute: string = 'home';

  get userName() {
      return appSettings.getString("user");
  }

  onNavtap(route: string, selectedTab: string) {
    this.isSelected = selectedTab;
    this.selectedRoute = route;
    this.cd.detectChanges();
  }

  alert(message: string) {
    return alert({
        title: "Change Course",
        okButtonText: "OK",
        message: message
    });
  }

  onCourseTap(args) {
    let course = this.courses[args.index];
    this.alert("You have changed to course: " + course);
  }

  onClassTap(args) {
    let item = this.classes[args.index];
    this.alert("You have chosen class: " + item);
  }

    tapHeader(header) {
        if (header.route) {
            this.nav.navigate(["/" + header.route])
        }
    }

    manageUser() {
        let options = {
            title: "My Account",
            message: "Do you want to log out?",
            cancelButtonText: "Cancel",
            actions: ["Logout"]
        };

        action(options).then((result) => {
            if (result === "Logout"){
                this.nav.navigate(["/login"]);
            }
});
    }

    get landmarks() {
      return this._landmarks;
  }

    private measureOffset(view1: View, view2: View) {
      let offset = view1.getLocationRelativeTo(view2).y;
      if (view2.ios && view2.ios.adjustedContentInset) {
          this._adjustedOffset = view2.ios.adjustedContentInset.top;
      }
      return offset - this._adjustedOffset;
  }

  private _prepareForBackNavigation() {
    this._listRef.nativeElement.opacity = 0;
    this._selectedView.opacity = 0;

    this._imageRef.nativeElement.src = this.landmarksService.getSelected().image;
    this._imageContainerRef.nativeElement.translateY = this._adjustedOffset;
    this._imageContainerRef.nativeElement.opacity = 1;

    this._buttonRef.makeArrow();
    this._searchRef.nativeElement.opacity = 0;
}

    public onNavigationItemTap(args: any) {
      this.landmarksService.setSelectedId(args.index);
      this._selectedView = args.view;
      this.animationsService.animationOffset = this.measureOffset(args.view, args.object);
      this.nav.navigate(['/details'], { animated: false });
      setTimeout(() => {
          this._prepareForBackNavigation();
      });
  }

  private _onNavigatedTo() {
    let offset = this.animationsService.animationOffset + this._adjustedOffset;
    this._imageContainerRef.nativeElement.animate({
        translate: { x: 0, y: offset },
        duration: 200,
        curve: AnimationCurve.easeOut
    }).then(() => {
        this._selectedView.opacity = 1;
        this._imageContainerRef.nativeElement.animate({
            opacity: 0,
            duration: 400,
            curve: AnimationCurve.easeOut
        }).then(() => {
            this._imageContainerRef.nativeElement.translateY = 0;
            })
        }).catch(() => { });

    this._listRef.nativeElement.animate({
        opacity: 1,
        duration: 200
    }).catch(() => { });
    this._searchRef.nativeElement.animate({
        opacity: 1,
        duration: 200
    }).catch(() => { });
}

    onCertificationTapped() {
        this.nav.navigate(["/certification"]);
    }
}
