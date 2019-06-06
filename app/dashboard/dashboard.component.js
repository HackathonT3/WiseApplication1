"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var page_1 = require("ui/page");
var platform_1 = require("platform");
var photos_service_1 = require("../core/photos.service");
var camera_service_1 = require("../core/camera.service");
var fileReader_service_1 = require("../core/fileReader.service");
var filter_component_1 = require("./filter/filter.component");
var modal_dialog_1 = require("nativescript-angular/modal-dialog");
var dialogs_1 = require("tns-core-modules/ui/dialogs");
var nativescript_angular_1 = require("nativescript-angular");
var appSettings = require("tns-core-modules/application-settings");
var dialogs_2 = require("tns-core-modules/ui/dialogs");
var landmarks_service_1 = require("./landmarks-service");
var animations_service_1 = require("./animations-service");
var enums_1 = require("tns-core-modules/ui/enums");
var common_1 = require("@angular/common");
var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(photosService, camera, page, fileReader, modal, vref, cd, nav, landmarksService, animationsService, location) {
        this.photosService = photosService;
        this.camera = camera;
        this.page = page;
        this.fileReader = fileReader;
        this.modal = modal;
        this.vref = vref;
        this.cd = cd;
        this.nav = nav;
        this.landmarksService = landmarksService;
        this.animationsService = animationsService;
        this.location = location;
        // github repo link - https://github.com/kumarandena/nativescript-instagram-clone
        this.photoWidth = platform_1.screen.mainScreen.widthDIPs * 0.33333;
        this.photoHeight = this.photoWidth;
        this.photos = [];
        this.instagram = [];
        this.courses = [];
        this.classes = [];
        this.isSelected = '0';
        this._adjustedOffset = 0;
        this.selectedRoute = 'home';
        this.page['scrollableContent'] = true;
        this._landmarks = this.landmarksService.getLandmarks();
        this.photos = this.photosService.getPhotos();
        this.letsInitialize();
    }
    DashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
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
        this.location.onPopState(function () {
            _this._onNavigatedTo();
        });
    };
    DashboardComponent.prototype.letsInitialize = function () {
        var _this = this;
        this.fileReader.readJSON('/core/instagram.json').then(function (res) {
            _this.instagram = res["instagram"];
        }, function (err) {
            console.log('Error reading json: ' + JSON.stringify(err));
        });
    };
    DashboardComponent.prototype.takePhoto = function () {
        var _this = this;
        this.camera.takePhoto()
            .then(function (imageAsset) {
            _this.onNavtap('loading', '');
            var options = {
                context: imageAsset,
                viewContainerRef: _this.vref,
                fullscreen: true
            };
            setTimeout(function () {
                _this.modal.showModal(filter_component_1.FilterComponent, options).then(function (response) {
                    if (response == 'success') {
                        _this.onNavtap('profile', '4');
                    }
                    else {
                        _this.onNavtap('home', '0');
                    }
                }, function (error) {
                    console.log(error);
                });
            }, 1000);
        }).catch(function (err) {
            console.log(err.message);
        });
    };
    Object.defineProperty(DashboardComponent.prototype, "userName", {
        get: function () {
            return appSettings.getString("user");
        },
        enumerable: true,
        configurable: true
    });
    DashboardComponent.prototype.onNavtap = function (route, selectedTab) {
        this.isSelected = selectedTab;
        this.selectedRoute = route;
        this.cd.detectChanges();
    };
    DashboardComponent.prototype.alert = function (message) {
        return dialogs_1.alert({
            title: "Change Course",
            okButtonText: "OK",
            message: message
        });
    };
    DashboardComponent.prototype.onCourseTap = function (args) {
        var course = this.courses[args.index];
        this.alert("You have changed to course: " + course);
    };
    DashboardComponent.prototype.onClassTap = function (args) {
        var item = this.classes[args.index];
        this.alert("You have chosen class: " + item);
    };
    DashboardComponent.prototype.tapHeader = function (header) {
        if (header.route) {
            this.nav.navigate(["/" + header.route]);
        }
    };
    DashboardComponent.prototype.manageUser = function () {
        var _this = this;
        var options = {
            title: "My Account",
            message: "Do you want to log out?",
            cancelButtonText: "Cancel",
            actions: ["Logout"]
        };
        dialogs_2.action(options).then(function (result) {
            if (result === "Logout") {
                _this.nav.navigate(["/login"]);
            }
        });
    };
    Object.defineProperty(DashboardComponent.prototype, "landmarks", {
        get: function () {
            return this._landmarks;
        },
        enumerable: true,
        configurable: true
    });
    DashboardComponent.prototype.measureOffset = function (view1, view2) {
        var offset = view1.getLocationRelativeTo(view2).y;
        if (view2.ios && view2.ios.adjustedContentInset) {
            this._adjustedOffset = view2.ios.adjustedContentInset.top;
        }
        return offset - this._adjustedOffset;
    };
    DashboardComponent.prototype._prepareForBackNavigation = function () {
        this._listRef.nativeElement.opacity = 0;
        this._selectedView.opacity = 0;
        this._imageRef.nativeElement.src = this.landmarksService.getSelected().image;
        this._imageContainerRef.nativeElement.translateY = this._adjustedOffset;
        this._imageContainerRef.nativeElement.opacity = 1;
        // this._buttonRef.makeArrow();
        // this._searchRef.nativeElement.opacity = 0;
    };
    DashboardComponent.prototype.onNavigationItemTap = function (args) {
        var _this = this;
        this.landmarksService.setSelectedId(args.index);
        this._selectedView = args.view;
        this.animationsService.animationOffset = this.measureOffset(args.view, args.object);
        this.nav.navigate(['/details'], { animated: false });
        setTimeout(function () {
            _this._prepareForBackNavigation();
        });
    };
    DashboardComponent.prototype._onNavigatedTo = function () {
        var _this = this;
        var offset = this.animationsService.animationOffset + this._adjustedOffset;
        this._imageContainerRef.nativeElement.animate({
            translate: { x: 0, y: offset },
            duration: 200,
            curve: enums_1.AnimationCurve.easeOut
        }).then(function () {
            _this._selectedView.opacity = 1;
            _this._imageContainerRef.nativeElement.animate({
                opacity: 0,
                duration: 400,
                curve: enums_1.AnimationCurve.easeOut
            }).then(function () {
                _this._imageContainerRef.nativeElement.translateY = 0;
            });
        }).catch(function () { });
        this._listRef.nativeElement.animate({
            opacity: 1,
            duration: 200
        }).catch(function () { });
        // this._searchRef.nativeElement.animate({
        //     opacity: 1,
        //     duration: 200
        // }).catch(() => { });
    };
    DashboardComponent.prototype.onCertificationTapped = function () {
        this.nav.navigate(["/certification"]);
    };
    __decorate([
        core_1.ViewChild("list"),
        __metadata("design:type", core_1.ElementRef)
    ], DashboardComponent.prototype, "_listRef", void 0);
    __decorate([
        core_1.ViewChild("animatingImage"),
        __metadata("design:type", core_1.ElementRef)
    ], DashboardComponent.prototype, "_imageRef", void 0);
    __decorate([
        core_1.ViewChild("animatingImageContainer"),
        __metadata("design:type", core_1.ElementRef)
    ], DashboardComponent.prototype, "_imageContainerRef", void 0);
    DashboardComponent = __decorate([
        core_1.Component({
            selector: 'ns-dashboard',
            templateUrl: './dashboard.component.html',
            styleUrls: ['./dashboard.component.css'],
            moduleId: module.id,
        }),
        __metadata("design:paramtypes", [photos_service_1.PhotosService,
            camera_service_1.CameraService,
            page_1.Page,
            fileReader_service_1.FileReaderService,
            modal_dialog_1.ModalDialogService,
            core_1.ViewContainerRef,
            core_1.ChangeDetectorRef,
            nativescript_angular_1.RouterExtensions,
            landmarks_service_1.LandmarksService,
            animations_service_1.AnimationsService,
            common_1.PlatformLocation])
    ], DashboardComponent);
    return DashboardComponent;
}());
exports.DashboardComponent = DashboardComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGFzaGJvYXJkLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImRhc2hib2FyZC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBOEc7QUFDOUcsZ0NBQStCO0FBQy9CLHFDQUFrQztBQUNsQyx5REFBdUQ7QUFDdkQseURBQXVEO0FBQ3ZELGlFQUErRDtBQUMvRCw4REFBNEQ7QUFDNUQsa0VBQTJGO0FBRTNGLHVEQUFvRDtBQUNwRCw2REFBd0Q7QUFDeEQsbUVBQXFFO0FBQ3JFLHVEQUFxRDtBQUNyRCx5REFBdUQ7QUFFdkQsMkRBQXlEO0FBR3pELG1EQUEyRDtBQUMzRCwwQ0FBbUQ7QUFRbkQ7SUEyQkksNEJBQ1ksYUFBNEIsRUFDNUIsTUFBcUIsRUFDckIsSUFBVSxFQUNWLFVBQTZCLEVBQzdCLEtBQXlCLEVBQ3pCLElBQXNCLEVBQ3RCLEVBQXFCLEVBQ3JCLEdBQXFCLEVBQ3JCLGdCQUFrQyxFQUNsQyxpQkFBb0MsRUFDcEMsUUFBMEI7UUFWMUIsa0JBQWEsR0FBYixhQUFhLENBQWU7UUFDNUIsV0FBTSxHQUFOLE1BQU0sQ0FBZTtRQUNyQixTQUFJLEdBQUosSUFBSSxDQUFNO1FBQ1YsZUFBVSxHQUFWLFVBQVUsQ0FBbUI7UUFDN0IsVUFBSyxHQUFMLEtBQUssQ0FBb0I7UUFDekIsU0FBSSxHQUFKLElBQUksQ0FBa0I7UUFDdEIsT0FBRSxHQUFGLEVBQUUsQ0FBbUI7UUFDckIsUUFBRyxHQUFILEdBQUcsQ0FBa0I7UUFDckIscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQUNsQyxzQkFBaUIsR0FBakIsaUJBQWlCLENBQW1CO1FBQ3BDLGFBQVEsR0FBUixRQUFRLENBQWtCO1FBcEN4QyxpRkFBaUY7UUFFakYsZUFBVSxHQUFXLGlCQUFNLENBQUMsVUFBVSxDQUFDLFNBQVMsR0FBRyxPQUFPLENBQUM7UUFDM0QsZ0JBQVcsR0FBVyxJQUFJLENBQUMsVUFBVSxDQUFDO1FBRXRDLFdBQU0sR0FB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SUFDWDtRQUE1QixnQkFBUyxDQUFDLGdCQUFnQixDQUFDO2tDQUFZLGlCQUFVO3lEQUFDO0lBQ2I7UUFBckMsZ0JBQVMsQ0FBQyx5QkFBeUIsQ0FBQztrQ0FBcUIsaUJBQVU7a0VBQUM7SUF4QjFELGtCQUFrQjtRQU45QixnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLGNBQWM7WUFDeEIsV0FBVyxFQUFFLDRCQUE0QjtZQUN6QyxTQUFTLEVBQUUsQ0FBQywyQkFBMkIsQ0FBQztZQUN4QyxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7U0FDcEIsQ0FBQzt5Q0E2QjZCLDhCQUFhO1lBQ3BCLDhCQUFhO1lBQ2YsV0FBSTtZQUNFLHNDQUFpQjtZQUN0QixpQ0FBa0I7WUFDbkIsdUJBQWdCO1lBQ2xCLHdCQUFpQjtZQUNoQix1Q0FBZ0I7WUFDSCxvQ0FBZ0I7WUFDZixzQ0FBaUI7WUFDMUIseUJBQWdCO09BdEM3QixrQkFBa0IsQ0F1TjlCO0lBQUQseUJBQUM7Q0FBQSxBQXZORCxJQXVOQztBQXZOWSxnREFBa0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgVmlld0NvbnRhaW5lclJlZiwgQ2hhbmdlRGV0ZWN0b3JSZWYsIFZpZXdDaGlsZCwgRWxlbWVudFJlZiB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBQYWdlIH0gZnJvbSBcInVpL3BhZ2VcIjtcbmltcG9ydCB7IHNjcmVlbiB9IGZyb20gXCJwbGF0Zm9ybVwiO1xuaW1wb3J0IHsgUGhvdG9zU2VydmljZSB9IGZyb20gXCIuLi9jb3JlL3Bob3Rvcy5zZXJ2aWNlXCI7XG5pbXBvcnQgeyBDYW1lcmFTZXJ2aWNlIH0gZnJvbSBcIi4uL2NvcmUvY2FtZXJhLnNlcnZpY2VcIjtcbmltcG9ydCB7IEZpbGVSZWFkZXJTZXJ2aWNlIH0gZnJvbSBcIi4uL2NvcmUvZmlsZVJlYWRlci5zZXJ2aWNlXCI7XG5pbXBvcnQgeyBGaWx0ZXJDb21wb25lbnQgfSBmcm9tIFwiLi9maWx0ZXIvZmlsdGVyLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgTW9kYWxEaWFsb2dPcHRpb25zLCBNb2RhbERpYWxvZ1NlcnZpY2UgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvbW9kYWwtZGlhbG9nXCI7XG5pbXBvcnQgeyBTZWFyY2hCYXIgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9zZWFyY2gtYmFyXCI7XG5pbXBvcnQgeyBhbGVydCB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2RpYWxvZ3NcIjtcbmltcG9ydCB7IFJvdXRlckV4dGVuc2lvbnMgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXJcIjtcbmltcG9ydCAqIGFzIGFwcFNldHRpbmdzIGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL2FwcGxpY2F0aW9uLXNldHRpbmdzXCI7XG5pbXBvcnQgeyBhY3Rpb24gfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9kaWFsb2dzXCI7XG5pbXBvcnQgeyBMYW5kbWFya3NTZXJ2aWNlIH0gZnJvbSBcIi4vbGFuZG1hcmtzLXNlcnZpY2VcIjtcbmltcG9ydCB7IExhbmRtYXJrIH0gZnJvbSBcIi4vbGFuZG1hcmtcIjtcbmltcG9ydCB7IEFuaW1hdGlvbnNTZXJ2aWNlIH0gZnJvbSBcIi4vYW5pbWF0aW9ucy1zZXJ2aWNlXCI7XG5pbXBvcnQgeyBWaWV3IH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvY29yZS92aWV3XCI7XG5pbXBvcnQgeyBBY3Rpb25CdXR0b25Db21wb25lbnQgfSBmcm9tIFwiLi9hY3Rpb24tYnV0dG9uL2FjdGlvbi1idXR0b24uY29tcG9uZW50XCI7XG5pbXBvcnQgeyBBbmltYXRpb25DdXJ2ZSB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2VudW1zXCI7XG5pbXBvcnQgeyBQbGF0Zm9ybUxvY2F0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbnMtZGFzaGJvYXJkJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2Rhc2hib2FyZC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2Rhc2hib2FyZC5jb21wb25lbnQuY3NzJ10sXG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG59KVxuZXhwb3J0IGNsYXNzIERhc2hib2FyZENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgLy8gZ2l0aHViIHJlcG8gbGluayAtIGh0dHBzOi8vZ2l0aHViLmNvbS9rdW1hcmFuZGVuYS9uYXRpdmVzY3JpcHQtaW5zdGFncmFtLWNsb25lXG5cbiAgcGhvdG9XaWR0aDogbnVtYmVyID0gc2NyZWVuLm1haW5TY3JlZW4ud2lkdGhESVBzICogMC4zMzMzMztcbiAgcGhvdG9IZWlnaHQ6IG51bWJlciA9IHRoaXMucGhvdG9XaWR0aDtcblxuICBwaG90b3M6IHN0cmluZ1tdID0gW107XG5cbiAgaW5zdGFncmFtOiBhbnlbXSA9IFtdO1xuXG4gIGNvdXJzZXM6IGFueVtdID0gW107XG5cbiAgY2xhc3NlczogYW55W10gPVtdO1xuXG4gIGlzU2VsZWN0ZWQ6IHN0cmluZyA9ICcwJztcblxuICBwcml2YXRlIF9sYW5kbWFya3M6IExhbmRtYXJrW107XG4gIHByaXZhdGUgX3NlbGVjdGVkVmlldzogVmlldztcbiAgcHJpdmF0ZSBfYWRqdXN0ZWRPZmZzZXQ6IG51bWJlciA9IDA7XG4gIC8vIEBWaWV3Q2hpbGQoXCJhY3Rpb25CdXR0b25cIikgX2J1dHRvblJlZjogQWN0aW9uQnV0dG9uQ29tcG9uZW50O1xuICAvLyBAVmlld0NoaWxkKFwic2VhcmNoXCIpIF9zZWFyY2hSZWY6IEVsZW1lbnRSZWY7XG4gIEBWaWV3Q2hpbGQoXCJsaXN0XCIpIF9saXN0UmVmOiBFbGVtZW50UmVmO1xuICBAVmlld0NoaWxkKFwiYW5pbWF0aW5nSW1hZ2VcIikgX2ltYWdlUmVmOiBFbGVtZW50UmVmO1xuICBAVmlld0NoaWxkKFwiYW5pbWF0aW5nSW1hZ2VDb250YWluZXJcIikgX2ltYWdlQ29udGFpbmVyUmVmOiBFbGVtZW50UmVmO1xuXG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJpdmF0ZSBwaG90b3NTZXJ2aWNlOiBQaG90b3NTZXJ2aWNlLFxuICAgICAgICBwcml2YXRlIGNhbWVyYTogQ2FtZXJhU2VydmljZSxcbiAgICAgICAgcHJpdmF0ZSBwYWdlOiBQYWdlLFxuICAgICAgICBwcml2YXRlIGZpbGVSZWFkZXI6IEZpbGVSZWFkZXJTZXJ2aWNlLFxuICAgICAgICBwcml2YXRlIG1vZGFsOiBNb2RhbERpYWxvZ1NlcnZpY2UsXG4gICAgICAgIHByaXZhdGUgdnJlZjogVmlld0NvbnRhaW5lclJlZixcbiAgICAgICAgcHJpdmF0ZSBjZDogQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICAgICAgIHByaXZhdGUgbmF2OiBSb3V0ZXJFeHRlbnNpb25zLFxuICAgICAgICBwcml2YXRlIGxhbmRtYXJrc1NlcnZpY2U6IExhbmRtYXJrc1NlcnZpY2UsXG4gICAgICAgIHByaXZhdGUgYW5pbWF0aW9uc1NlcnZpY2U6IEFuaW1hdGlvbnNTZXJ2aWNlLFxuICAgICAgICBwcml2YXRlIGxvY2F0aW9uOiBQbGF0Zm9ybUxvY2F0aW9uKSB7XG4gICAgICAgICAgdGhpcy5wYWdlWydzY3JvbGxhYmxlQ29udGVudCddID0gdHJ1ZTtcbiAgICAgICAgICB0aGlzLl9sYW5kbWFya3MgPSB0aGlzLmxhbmRtYXJrc1NlcnZpY2UuZ2V0TGFuZG1hcmtzKCk7XG5cbiAgICAgICAgdGhpcy5waG90b3MgPSB0aGlzLnBob3Rvc1NlcnZpY2UuZ2V0UGhvdG9zKCk7XG4gICAgICAgIHRoaXMubGV0c0luaXRpYWxpemUoKTtcbiAgICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5wYWdlLmFjdGlvbkJhckhpZGRlbiA9IHRydWU7XG4gICAgdGhpcy5jb3Vyc2VzLnB1c2goXCJFY29ub21pY3NcIik7XG4gICAgdGhpcy5jb3Vyc2VzLnB1c2goXCJQZXJzb25hbCBGaW5hbmNlXCIpO1xuICAgIHRoaXMuY291cnNlcy5wdXNoKFwiQnVzaW5lc3MgQ2xhc3NcIik7XG4gICAgdGhpcy5jb3Vyc2VzLnB1c2goXCJDb25zdW1lciBTY2llbmNlXCIpO1xuICAgIHRoaXMuY291cnNlcy5wdXNoKFwiTWF0aG1hdGljc1wiKTtcbiAgICB0aGlzLmNvdXJzZXMucHVzaChcIkZpbmFuY2lhbCBQbGFubmluZ1wiKTtcbiAgICB0aGlzLmNvdXJzZXMucHVzaChcIkFjYWRlbXkgb2YgRmluYW5jZVwiKTtcbiAgICB0aGlzLmNvdXJzZXMucHVzaChcIkVudHJlcHJlbmV1cnNoaXBcIik7XG4gICAgdGhpcy5jbGFzc2VzLnB1c2goXCJDbGFzcyAxXCIpO1xuICAgIHRoaXMuY2xhc3Nlcy5wdXNoKFwiQ2xhc3MgMlwiKTtcbiAgICB0aGlzLmxvY2F0aW9uLm9uUG9wU3RhdGUoKCkgPT4ge1xuICAgICAgdGhpcy5fb25OYXZpZ2F0ZWRUbygpO1xuICB9KTtcbiAgfVxuXG4gIGxldHNJbml0aWFsaXplKCkge1xuICAgIHRoaXMuZmlsZVJlYWRlci5yZWFkSlNPTignL2NvcmUvaW5zdGFncmFtLmpzb24nKS50aGVuKFxuICAgICAgICByZXMgPT4ge1xuICAgICAgICAgIHRoaXMuaW5zdGFncmFtID0gcmVzW1wiaW5zdGFncmFtXCJdO1xuICAgICAgICB9LFxuICAgICAgICBlcnIgPT4ge1xuICAgICAgICAgIGNvbnNvbGUubG9nKCdFcnJvciByZWFkaW5nIGpzb246ICcgKyBKU09OLnN0cmluZ2lmeShlcnIpKTtcbiAgICAgICAgfVxuICAgIClcbiAgfVxuXG4gIHRha2VQaG90bygpIHtcbiAgICB0aGlzLmNhbWVyYS50YWtlUGhvdG8oKVxuICAgICAgICAudGhlbihpbWFnZUFzc2V0ID0+IHtcbiAgICAgICAgICB0aGlzLm9uTmF2dGFwKCdsb2FkaW5nJywgJycpO1xuICAgICAgICAgIGNvbnN0IG9wdGlvbnM6IE1vZGFsRGlhbG9nT3B0aW9ucyA9IHtcbiAgICAgICAgICAgIGNvbnRleHQ6IGltYWdlQXNzZXQsXG4gICAgICAgICAgICB2aWV3Q29udGFpbmVyUmVmOiB0aGlzLnZyZWYsXG4gICAgICAgICAgICBmdWxsc2NyZWVuOiB0cnVlXG4gICAgICAgICAgfTtcbiAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHsgLy9odHRwczovL2dpdGh1Yi5jb20vTmF0aXZlU2NyaXB0L05hdGl2ZVNjcmlwdC9pc3N1ZXMvNTc0NCNpc3N1ZWNvbW1lbnQtMzg0NTg5NzM5XG4gICAgICAgICAgICB0aGlzLm1vZGFsLnNob3dNb2RhbChGaWx0ZXJDb21wb25lbnQsIG9wdGlvbnMpLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAgIGlmIChyZXNwb25zZSA9PSAnc3VjY2VzcycpIHtcbiAgICAgICAgICAgICAgICB0aGlzLm9uTmF2dGFwKCdwcm9maWxlJywgJzQnKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLm9uTmF2dGFwKCdob21lJywgJzAnKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSwgZXJyb3IgPT4ge1xuICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9LCAxMDAwKTtcbiAgICAgICAgfSkuY2F0Y2goZXJyID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKGVyci5tZXNzYWdlKTtcbiAgICB9KTtcbiAgfVxuXG4gIHNlbGVjdGVkUm91dGU6IHN0cmluZyA9ICdob21lJztcblxuICBnZXQgdXNlck5hbWUoKSB7XG4gICAgICByZXR1cm4gYXBwU2V0dGluZ3MuZ2V0U3RyaW5nKFwidXNlclwiKTtcbiAgfVxuXG4gIG9uTmF2dGFwKHJvdXRlOiBzdHJpbmcsIHNlbGVjdGVkVGFiOiBzdHJpbmcpIHtcbiAgICB0aGlzLmlzU2VsZWN0ZWQgPSBzZWxlY3RlZFRhYjtcbiAgICB0aGlzLnNlbGVjdGVkUm91dGUgPSByb3V0ZTtcbiAgICB0aGlzLmNkLmRldGVjdENoYW5nZXMoKTtcbiAgfVxuXG4gIGFsZXJ0KG1lc3NhZ2U6IHN0cmluZykge1xuICAgIHJldHVybiBhbGVydCh7XG4gICAgICAgIHRpdGxlOiBcIkNoYW5nZSBDb3Vyc2VcIixcbiAgICAgICAgb2tCdXR0b25UZXh0OiBcIk9LXCIsXG4gICAgICAgIG1lc3NhZ2U6IG1lc3NhZ2VcbiAgICB9KTtcbiAgfVxuXG4gIG9uQ291cnNlVGFwKGFyZ3MpIHtcbiAgICBsZXQgY291cnNlID0gdGhpcy5jb3Vyc2VzW2FyZ3MuaW5kZXhdO1xuICAgIHRoaXMuYWxlcnQoXCJZb3UgaGF2ZSBjaGFuZ2VkIHRvIGNvdXJzZTogXCIgKyBjb3Vyc2UpO1xuICB9XG5cbiAgb25DbGFzc1RhcChhcmdzKSB7XG4gICAgbGV0IGl0ZW0gPSB0aGlzLmNsYXNzZXNbYXJncy5pbmRleF07XG4gICAgdGhpcy5hbGVydChcIllvdSBoYXZlIGNob3NlbiBjbGFzczogXCIgKyBpdGVtKTtcbiAgfVxuXG4gICAgdGFwSGVhZGVyKGhlYWRlcikge1xuICAgICAgICBpZiAoaGVhZGVyLnJvdXRlKSB7XG4gICAgICAgICAgICB0aGlzLm5hdi5uYXZpZ2F0ZShbXCIvXCIgKyBoZWFkZXIucm91dGVdKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgbWFuYWdlVXNlcigpIHtcbiAgICAgICAgbGV0IG9wdGlvbnMgPSB7XG4gICAgICAgICAgICB0aXRsZTogXCJNeSBBY2NvdW50XCIsXG4gICAgICAgICAgICBtZXNzYWdlOiBcIkRvIHlvdSB3YW50IHRvIGxvZyBvdXQ/XCIsXG4gICAgICAgICAgICBjYW5jZWxCdXR0b25UZXh0OiBcIkNhbmNlbFwiLFxuICAgICAgICAgICAgYWN0aW9uczogW1wiTG9nb3V0XCJdXG4gICAgICAgIH07XG5cbiAgICAgICAgYWN0aW9uKG9wdGlvbnMpLnRoZW4oKHJlc3VsdCkgPT4ge1xuICAgICAgICAgICAgaWYgKHJlc3VsdCA9PT0gXCJMb2dvdXRcIil7XG4gICAgICAgICAgICAgICAgdGhpcy5uYXYubmF2aWdhdGUoW1wiL2xvZ2luXCJdKTtcbiAgICAgICAgICAgIH1cbn0pO1xuICAgIH1cblxuICAgIGdldCBsYW5kbWFya3MoKSB7XG4gICAgICByZXR1cm4gdGhpcy5fbGFuZG1hcmtzO1xuICB9XG5cbiAgICBwcml2YXRlIG1lYXN1cmVPZmZzZXQodmlldzE6IFZpZXcsIHZpZXcyOiBWaWV3KSB7XG4gICAgICBsZXQgb2Zmc2V0ID0gdmlldzEuZ2V0TG9jYXRpb25SZWxhdGl2ZVRvKHZpZXcyKS55O1xuICAgICAgaWYgKHZpZXcyLmlvcyAmJiB2aWV3Mi5pb3MuYWRqdXN0ZWRDb250ZW50SW5zZXQpIHtcbiAgICAgICAgICB0aGlzLl9hZGp1c3RlZE9mZnNldCA9IHZpZXcyLmlvcy5hZGp1c3RlZENvbnRlbnRJbnNldC50b3A7XG4gICAgICB9XG4gICAgICByZXR1cm4gb2Zmc2V0IC0gdGhpcy5fYWRqdXN0ZWRPZmZzZXQ7XG4gIH1cblxuICBwcml2YXRlIF9wcmVwYXJlRm9yQmFja05hdmlnYXRpb24oKSB7XG4gICAgdGhpcy5fbGlzdFJlZi5uYXRpdmVFbGVtZW50Lm9wYWNpdHkgPSAwO1xuICAgIHRoaXMuX3NlbGVjdGVkVmlldy5vcGFjaXR5ID0gMDtcblxuICAgIHRoaXMuX2ltYWdlUmVmLm5hdGl2ZUVsZW1lbnQuc3JjID0gdGhpcy5sYW5kbWFya3NTZXJ2aWNlLmdldFNlbGVjdGVkKCkuaW1hZ2U7XG4gICAgdGhpcy5faW1hZ2VDb250YWluZXJSZWYubmF0aXZlRWxlbWVudC50cmFuc2xhdGVZID0gdGhpcy5fYWRqdXN0ZWRPZmZzZXQ7XG4gICAgdGhpcy5faW1hZ2VDb250YWluZXJSZWYubmF0aXZlRWxlbWVudC5vcGFjaXR5ID0gMTtcblxuICAgIC8vIHRoaXMuX2J1dHRvblJlZi5tYWtlQXJyb3coKTtcbiAgICAvLyB0aGlzLl9zZWFyY2hSZWYubmF0aXZlRWxlbWVudC5vcGFjaXR5ID0gMDtcbn1cblxuICAgIHB1YmxpYyBvbk5hdmlnYXRpb25JdGVtVGFwKGFyZ3M6IGFueSkge1xuICAgICAgdGhpcy5sYW5kbWFya3NTZXJ2aWNlLnNldFNlbGVjdGVkSWQoYXJncy5pbmRleCk7XG4gICAgICB0aGlzLl9zZWxlY3RlZFZpZXcgPSBhcmdzLnZpZXc7XG4gICAgICB0aGlzLmFuaW1hdGlvbnNTZXJ2aWNlLmFuaW1hdGlvbk9mZnNldCA9IHRoaXMubWVhc3VyZU9mZnNldChhcmdzLnZpZXcsIGFyZ3Mub2JqZWN0KTtcbiAgICAgIHRoaXMubmF2Lm5hdmlnYXRlKFsnL2RldGFpbHMnXSwgeyBhbmltYXRlZDogZmFsc2UgfSk7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICB0aGlzLl9wcmVwYXJlRm9yQmFja05hdmlnYXRpb24oKTtcbiAgICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBfb25OYXZpZ2F0ZWRUbygpIHtcbiAgICBsZXQgb2Zmc2V0ID0gdGhpcy5hbmltYXRpb25zU2VydmljZS5hbmltYXRpb25PZmZzZXQgKyB0aGlzLl9hZGp1c3RlZE9mZnNldDtcbiAgICB0aGlzLl9pbWFnZUNvbnRhaW5lclJlZi5uYXRpdmVFbGVtZW50LmFuaW1hdGUoe1xuICAgICAgICB0cmFuc2xhdGU6IHsgeDogMCwgeTogb2Zmc2V0IH0sXG4gICAgICAgIGR1cmF0aW9uOiAyMDAsXG4gICAgICAgIGN1cnZlOiBBbmltYXRpb25DdXJ2ZS5lYXNlT3V0XG4gICAgfSkudGhlbigoKSA9PiB7XG4gICAgICAgIHRoaXMuX3NlbGVjdGVkVmlldy5vcGFjaXR5ID0gMTtcbiAgICAgICAgdGhpcy5faW1hZ2VDb250YWluZXJSZWYubmF0aXZlRWxlbWVudC5hbmltYXRlKHtcbiAgICAgICAgICAgIG9wYWNpdHk6IDAsXG4gICAgICAgICAgICBkdXJhdGlvbjogNDAwLFxuICAgICAgICAgICAgY3VydmU6IEFuaW1hdGlvbkN1cnZlLmVhc2VPdXRcbiAgICAgICAgfSkudGhlbigoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLl9pbWFnZUNvbnRhaW5lclJlZi5uYXRpdmVFbGVtZW50LnRyYW5zbGF0ZVkgPSAwO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgfSkuY2F0Y2goKCkgPT4geyB9KTtcblxuICAgIHRoaXMuX2xpc3RSZWYubmF0aXZlRWxlbWVudC5hbmltYXRlKHtcbiAgICAgICAgb3BhY2l0eTogMSxcbiAgICAgICAgZHVyYXRpb246IDIwMFxuICAgIH0pLmNhdGNoKCgpID0+IHsgfSk7XG4gICAgLy8gdGhpcy5fc2VhcmNoUmVmLm5hdGl2ZUVsZW1lbnQuYW5pbWF0ZSh7XG4gICAgLy8gICAgIG9wYWNpdHk6IDEsXG4gICAgLy8gICAgIGR1cmF0aW9uOiAyMDBcbiAgICAvLyB9KS5jYXRjaCgoKSA9PiB7IH0pO1xufVxuXG4gICAgb25DZXJ0aWZpY2F0aW9uVGFwcGVkKCkge1xuICAgICAgICB0aGlzLm5hdi5uYXZpZ2F0ZShbXCIvY2VydGlmaWNhdGlvblwiXSk7XG4gICAgfVxufVxuIl19