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
var action_button_component_1 = require("./action-button/action-button.component");
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
        this._buttonRef.makeArrow();
        this._searchRef.nativeElement.opacity = 0;
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
        this._searchRef.nativeElement.animate({
            opacity: 1,
            duration: 200
        }).catch(function () { });
    };
    DashboardComponent.prototype.onCertificationTapped = function () {
        this.nav.navigate(["/certification"]);
    };
    __decorate([
        core_1.ViewChild("actionButton"),
        __metadata("design:type", action_button_component_1.ActionButtonComponent)
    ], DashboardComponent.prototype, "_buttonRef", void 0);
    __decorate([
        core_1.ViewChild("search"),
        __metadata("design:type", core_1.ElementRef)
    ], DashboardComponent.prototype, "_searchRef", void 0);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGFzaGJvYXJkLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImRhc2hib2FyZC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBOEc7QUFDOUcsZ0NBQStCO0FBQy9CLHFDQUFrQztBQUNsQyx5REFBdUQ7QUFDdkQseURBQXVEO0FBQ3ZELGlFQUErRDtBQUMvRCw4REFBNEQ7QUFDNUQsa0VBQTJGO0FBRTNGLHVEQUFvRDtBQUNwRCw2REFBd0Q7QUFDeEQsbUVBQXFFO0FBQ3JFLHVEQUFxRDtBQUNyRCx5REFBdUQ7QUFFdkQsMkRBQXlEO0FBRXpELG1GQUFnRjtBQUNoRixtREFBMkQ7QUFDM0QsMENBQW1EO0FBUW5EO0lBMkJJLDRCQUNZLGFBQTRCLEVBQzVCLE1BQXFCLEVBQ3JCLElBQVUsRUFDVixVQUE2QixFQUM3QixLQUF5QixFQUN6QixJQUFzQixFQUN0QixFQUFxQixFQUNyQixHQUFxQixFQUNyQixnQkFBa0MsRUFDbEMsaUJBQW9DLEVBQ3BDLFFBQTBCO1FBVjFCLGtCQUFhLEdBQWIsYUFBYSxDQUFlO1FBQzVCLFdBQU0sR0FBTixNQUFNLENBQWU7UUFDckIsU0FBSSxHQUFKLElBQUksQ0FBTTtRQUNWLGVBQVUsR0FBVixVQUFVLENBQW1CO1FBQzdCLFVBQUssR0FBTCxLQUFLLENBQW9CO1FBQ3pCLFNBQUksR0FBSixJQUFJLENBQWtCO1FBQ3RCLE9BQUUsR0FBRixFQUFFLENBQW1CO1FBQ3JCLFFBQUcsR0FBSCxHQUFHLENBQWtCO1FBQ3JCLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFDbEMsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFtQjtRQUNwQyxhQUFRLEdBQVIsUUFBUSxDQUFrQjtRQXBDeEMsaUZBQWlGO1FBRWpGLGVBQVUsR0FBVyxpQkFBTSxDQUFDLFVBQVUsQ0FBQyxTQUFTLEdBQUcsT0FBTyxDQUFDO1FBQzNELGdCQUFXLEdBQVcsSUFBSSxDQUFDLFVBQVUsQ0FBQztRQUV0QyxXQUFNLEdBQWEsRUFBRSxDQUFDO1FBRXRCLGNBQVMsR0FBVSxFQUFFLENBQUM7UUFFdEIsWUFBTyxHQUFVLEVBQUUsQ0FBQztRQUVwQixZQUFPLEdBQVMsRUFBRSxDQUFDO1FBRW5CLGVBQVUsR0FBVyxHQUFHLENBQUM7UUFJakIsb0JBQWUsR0FBVyxDQUFDLENBQUM7UUFpRnBDLGtCQUFhLEdBQVcsTUFBTSxDQUFDO1FBN0R2QixJQUFJLENBQUMsSUFBSSxDQUFDLG1CQUFtQixDQUFDLEdBQUcsSUFBSSxDQUFDO1FBQ3RDLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFlBQVksRUFBRSxDQUFDO1FBRXpELElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUM3QyxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7SUFDMUIsQ0FBQztJQUVILHFDQUFRLEdBQVI7UUFBQSxpQkFlQztRQWRDLElBQUksQ0FBQyxJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQztRQUNqQyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUMvQixJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO1FBQ3RDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLENBQUM7UUFDcEMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsQ0FBQztRQUN0QyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUNoQyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO1FBQ3hDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLG9CQUFvQixDQUFDLENBQUM7UUFDeEMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsQ0FBQztRQUN0QyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUM3QixJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUM3QixJQUFJLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQztZQUN2QixLQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDMUIsQ0FBQyxDQUFDLENBQUM7SUFDSCxDQUFDO0lBRUQsMkNBQWMsR0FBZDtRQUFBLGlCQVNDO1FBUkMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsc0JBQXNCLENBQUMsQ0FBQyxJQUFJLENBQ2pELFVBQUEsR0FBRztZQUNELEtBQUksQ0FBQyxTQUFTLEdBQUcsR0FBRyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQ3BDLENBQUMsRUFDRCxVQUFBLEdBQUc7WUFDRCxPQUFPLENBQUMsR0FBRyxDQUFDLHNCQUFzQixHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUM1RCxDQUFDLENBQ0osQ0FBQTtJQUNILENBQUM7SUFFRCxzQ0FBUyxHQUFUO1FBQUEsaUJBd0JDO1FBdkJDLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxFQUFFO2FBQ2xCLElBQUksQ0FBQyxVQUFBLFVBQVU7WUFDZCxLQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsRUFBRSxFQUFFLENBQUMsQ0FBQztZQUM3QixJQUFNLE9BQU8sR0FBdUI7Z0JBQ2xDLE9BQU8sRUFBRSxVQUFVO2dCQUNuQixnQkFBZ0IsRUFBRSxLQUFJLENBQUMsSUFBSTtnQkFDM0IsVUFBVSxFQUFFLElBQUk7YUFDakIsQ0FBQztZQUNGLFVBQVUsQ0FBQztnQkFDVCxLQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxrQ0FBZSxFQUFFLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFDLFFBQVE7b0JBQzNELElBQUksUUFBUSxJQUFJLFNBQVMsRUFBRTt3QkFDekIsS0FBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLEVBQUUsR0FBRyxDQUFDLENBQUM7cUJBQy9CO3lCQUNJO3dCQUNILEtBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxFQUFFLEdBQUcsQ0FBQyxDQUFDO3FCQUM1QjtnQkFDSCxDQUFDLEVBQUUsVUFBQSxLQUFLO29CQUNOLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQ3JCLENBQUMsQ0FBQyxDQUFDO1lBQ0wsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ1gsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLFVBQUEsR0FBRztZQUNkLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQzNCLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUlELHNCQUFJLHdDQUFRO2FBQVo7WUFDSSxPQUFPLFdBQVcsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDekMsQ0FBQzs7O09BQUE7SUFFRCxxQ0FBUSxHQUFSLFVBQVMsS0FBYSxFQUFFLFdBQW1CO1FBQ3pDLElBQUksQ0FBQyxVQUFVLEdBQUcsV0FBVyxDQUFDO1FBQzlCLElBQUksQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDO1FBQzNCLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxFQUFFLENBQUM7SUFDMUIsQ0FBQztJQUVELGtDQUFLLEdBQUwsVUFBTSxPQUFlO1FBQ25CLE9BQU8sZUFBSyxDQUFDO1lBQ1QsS0FBSyxFQUFFLGVBQWU7WUFDdEIsWUFBWSxFQUFFLElBQUk7WUFDbEIsT0FBTyxFQUFFLE9BQU87U0FDbkIsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELHdDQUFXLEdBQVgsVUFBWSxJQUFJO1FBQ2QsSUFBSSxNQUFNLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDdEMsSUFBSSxDQUFDLEtBQUssQ0FBQyw4QkFBOEIsR0FBRyxNQUFNLENBQUMsQ0FBQztJQUN0RCxDQUFDO0lBRUQsdUNBQVUsR0FBVixVQUFXLElBQUk7UUFDYixJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNwQyxJQUFJLENBQUMsS0FBSyxDQUFDLHlCQUF5QixHQUFHLElBQUksQ0FBQyxDQUFDO0lBQy9DLENBQUM7SUFFQyxzQ0FBUyxHQUFULFVBQVUsTUFBTTtRQUNaLElBQUksTUFBTSxDQUFDLEtBQUssRUFBRTtZQUNkLElBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFBO1NBQzFDO0lBQ0wsQ0FBQztJQUVELHVDQUFVLEdBQVY7UUFBQSxpQkFhQztRQVpHLElBQUksT0FBTyxHQUFHO1lBQ1YsS0FBSyxFQUFFLFlBQVk7WUFDbkIsT0FBTyxFQUFFLHlCQUF5QjtZQUNsQyxnQkFBZ0IsRUFBRSxRQUFRO1lBQzFCLE9BQU8sRUFBRSxDQUFDLFFBQVEsQ0FBQztTQUN0QixDQUFDO1FBRUYsZ0JBQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQyxNQUFNO1lBQ3hCLElBQUksTUFBTSxLQUFLLFFBQVEsRUFBQztnQkFDcEIsS0FBSSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO2FBQ2pDO1FBQ2IsQ0FBQyxDQUFDLENBQUM7SUFDQyxDQUFDO0lBRUQsc0JBQUkseUNBQVM7YUFBYjtZQUNFLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQztRQUMzQixDQUFDOzs7T0FBQTtJQUVTLDBDQUFhLEdBQXJCLFVBQXNCLEtBQVcsRUFBRSxLQUFXO1FBQzVDLElBQUksTUFBTSxHQUFHLEtBQUssQ0FBQyxxQkFBcUIsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDbEQsSUFBSSxLQUFLLENBQUMsR0FBRyxJQUFJLEtBQUssQ0FBQyxHQUFHLENBQUMsb0JBQW9CLEVBQUU7WUFDN0MsSUFBSSxDQUFDLGVBQWUsR0FBRyxLQUFLLENBQUMsR0FBRyxDQUFDLG9CQUFvQixDQUFDLEdBQUcsQ0FBQztTQUM3RDtRQUNELE9BQU8sTUFBTSxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUM7SUFDekMsQ0FBQztJQUVPLHNEQUF5QixHQUFqQztRQUNFLElBQUksQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLE9BQU8sR0FBRyxDQUFDLENBQUM7UUFDeEMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxPQUFPLEdBQUcsQ0FBQyxDQUFDO1FBRS9CLElBQUksQ0FBQyxTQUFTLENBQUMsYUFBYSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsV0FBVyxFQUFFLENBQUMsS0FBSyxDQUFDO1FBQzdFLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxhQUFhLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUM7UUFDeEUsSUFBSSxDQUFDLGtCQUFrQixDQUFDLGFBQWEsQ0FBQyxPQUFPLEdBQUcsQ0FBQyxDQUFDO1FBRWxELElBQUksQ0FBQyxVQUFVLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDNUIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMsT0FBTyxHQUFHLENBQUMsQ0FBQztJQUM5QyxDQUFDO0lBRVUsZ0RBQW1CLEdBQTFCLFVBQTJCLElBQVM7UUFBcEMsaUJBUUQ7UUFQRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNoRCxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7UUFDL0IsSUFBSSxDQUFDLGlCQUFpQixDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3BGLElBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUMsVUFBVSxDQUFDLEVBQUUsRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQztRQUNyRCxVQUFVLENBQUM7WUFDUCxLQUFJLENBQUMseUJBQXlCLEVBQUUsQ0FBQztRQUNyQyxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFTywyQ0FBYyxHQUF0QjtRQUFBLGlCQXlCRDtRQXhCRyxJQUFJLE1BQU0sR0FBRyxJQUFJLENBQUMsaUJBQWlCLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUM7UUFDM0UsSUFBSSxDQUFDLGtCQUFrQixDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUM7WUFDMUMsU0FBUyxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsTUFBTSxFQUFFO1lBQzlCLFFBQVEsRUFBRSxHQUFHO1lBQ2IsS0FBSyxFQUFFLHNCQUFjLENBQUMsT0FBTztTQUNoQyxDQUFDLENBQUMsSUFBSSxDQUFDO1lBQ0osS0FBSSxDQUFDLGFBQWEsQ0FBQyxPQUFPLEdBQUcsQ0FBQyxDQUFDO1lBQy9CLEtBQUksQ0FBQyxrQkFBa0IsQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDO2dCQUMxQyxPQUFPLEVBQUUsQ0FBQztnQkFDVixRQUFRLEVBQUUsR0FBRztnQkFDYixLQUFLLEVBQUUsc0JBQWMsQ0FBQyxPQUFPO2FBQ2hDLENBQUMsQ0FBQyxJQUFJLENBQUM7Z0JBQ0osS0FBSSxDQUFDLGtCQUFrQixDQUFDLGFBQWEsQ0FBQyxVQUFVLEdBQUcsQ0FBQyxDQUFDO1lBQ3JELENBQUMsQ0FBQyxDQUFBO1FBQ04sQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLGNBQVEsQ0FBQyxDQUFDLENBQUM7UUFFeEIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDO1lBQ2hDLE9BQU8sRUFBRSxDQUFDO1lBQ1YsUUFBUSxFQUFFLEdBQUc7U0FDaEIsQ0FBQyxDQUFDLEtBQUssQ0FBQyxjQUFRLENBQUMsQ0FBQyxDQUFDO1FBQ3BCLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQztZQUNsQyxPQUFPLEVBQUUsQ0FBQztZQUNWLFFBQVEsRUFBRSxHQUFHO1NBQ2hCLENBQUMsQ0FBQyxLQUFLLENBQUMsY0FBUSxDQUFDLENBQUMsQ0FBQztJQUN4QixDQUFDO0lBRUcsa0RBQXFCLEdBQXJCO1FBQ0ksSUFBSSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUM7SUFDMUMsQ0FBQztJQWxNd0I7UUFBMUIsZ0JBQVMsQ0FBQyxjQUFjLENBQUM7a0NBQWEsK0NBQXFCOzBEQUFDO0lBQ3hDO1FBQXBCLGdCQUFTLENBQUMsUUFBUSxDQUFDO2tDQUFhLGlCQUFVOzBEQUFDO0lBQ3pCO1FBQWxCLGdCQUFTLENBQUMsTUFBTSxDQUFDO2tDQUFXLGlCQUFVO3dEQUFDO0lBQ1g7UUFBNUIsZ0JBQVMsQ0FBQyxnQkFBZ0IsQ0FBQztrQ0FBWSxpQkFBVTt5REFBQztJQUNiO1FBQXJDLGdCQUFTLENBQUMseUJBQXlCLENBQUM7a0NBQXFCLGlCQUFVO2tFQUFDO0lBeEIxRCxrQkFBa0I7UUFOOUIsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxjQUFjO1lBQ3hCLFdBQVcsRUFBRSw0QkFBNEI7WUFDekMsU0FBUyxFQUFFLENBQUMsMkJBQTJCLENBQUM7WUFDeEMsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1NBQ3BCLENBQUM7eUNBNkI2Qiw4QkFBYTtZQUNwQiw4QkFBYTtZQUNmLFdBQUk7WUFDRSxzQ0FBaUI7WUFDdEIsaUNBQWtCO1lBQ25CLHVCQUFnQjtZQUNsQix3QkFBaUI7WUFDaEIsdUNBQWdCO1lBQ0gsb0NBQWdCO1lBQ2Ysc0NBQWlCO1lBQzFCLHlCQUFnQjtPQXRDN0Isa0JBQWtCLENBdU45QjtJQUFELHlCQUFDO0NBQUEsQUF2TkQsSUF1TkM7QUF2TlksZ0RBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIFZpZXdDb250YWluZXJSZWYsIENoYW5nZURldGVjdG9yUmVmLCBWaWV3Q2hpbGQsIEVsZW1lbnRSZWYgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgUGFnZSB9IGZyb20gXCJ1aS9wYWdlXCI7XG5pbXBvcnQgeyBzY3JlZW4gfSBmcm9tIFwicGxhdGZvcm1cIjtcbmltcG9ydCB7IFBob3Rvc1NlcnZpY2UgfSBmcm9tIFwiLi4vY29yZS9waG90b3Muc2VydmljZVwiO1xuaW1wb3J0IHsgQ2FtZXJhU2VydmljZSB9IGZyb20gXCIuLi9jb3JlL2NhbWVyYS5zZXJ2aWNlXCI7XG5pbXBvcnQgeyBGaWxlUmVhZGVyU2VydmljZSB9IGZyb20gXCIuLi9jb3JlL2ZpbGVSZWFkZXIuc2VydmljZVwiO1xuaW1wb3J0IHsgRmlsdGVyQ29tcG9uZW50IH0gZnJvbSBcIi4vZmlsdGVyL2ZpbHRlci5jb21wb25lbnRcIjtcbmltcG9ydCB7IE1vZGFsRGlhbG9nT3B0aW9ucywgTW9kYWxEaWFsb2dTZXJ2aWNlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL21vZGFsLWRpYWxvZ1wiO1xuaW1wb3J0IHsgU2VhcmNoQmFyIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvc2VhcmNoLWJhclwiO1xuaW1wb3J0IHsgYWxlcnQgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9kaWFsb2dzXCI7XG5pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyXCI7XG5pbXBvcnQgKiBhcyBhcHBTZXR0aW5ncyBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy9hcHBsaWNhdGlvbi1zZXR0aW5nc1wiO1xuaW1wb3J0IHsgYWN0aW9uIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvZGlhbG9nc1wiO1xuaW1wb3J0IHsgTGFuZG1hcmtzU2VydmljZSB9IGZyb20gXCIuL2xhbmRtYXJrcy1zZXJ2aWNlXCI7XG5pbXBvcnQgeyBMYW5kbWFyayB9IGZyb20gXCIuL2xhbmRtYXJrXCI7XG5pbXBvcnQgeyBBbmltYXRpb25zU2VydmljZSB9IGZyb20gXCIuL2FuaW1hdGlvbnMtc2VydmljZVwiO1xuaW1wb3J0IHsgVmlldyB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2NvcmUvdmlld1wiO1xuaW1wb3J0IHsgQWN0aW9uQnV0dG9uQ29tcG9uZW50IH0gZnJvbSBcIi4vYWN0aW9uLWJ1dHRvbi9hY3Rpb24tYnV0dG9uLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgQW5pbWF0aW9uQ3VydmUgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9lbnVtc1wiO1xuaW1wb3J0IHsgUGxhdGZvcm1Mb2NhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25zLWRhc2hib2FyZCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9kYXNoYm9hcmQuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9kYXNoYm9hcmQuY29tcG9uZW50LmNzcyddLFxuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxufSlcbmV4cG9ydCBjbGFzcyBEYXNoYm9hcmRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIC8vIGdpdGh1YiByZXBvIGxpbmsgLSBodHRwczovL2dpdGh1Yi5jb20va3VtYXJhbmRlbmEvbmF0aXZlc2NyaXB0LWluc3RhZ3JhbS1jbG9uZVxuXG4gIHBob3RvV2lkdGg6IG51bWJlciA9IHNjcmVlbi5tYWluU2NyZWVuLndpZHRoRElQcyAqIDAuMzMzMzM7XG4gIHBob3RvSGVpZ2h0OiBudW1iZXIgPSB0aGlzLnBob3RvV2lkdGg7XG5cbiAgcGhvdG9zOiBzdHJpbmdbXSA9IFtdO1xuXG4gIGluc3RhZ3JhbTogYW55W10gPSBbXTtcblxuICBjb3Vyc2VzOiBhbnlbXSA9IFtdO1xuXG4gIGNsYXNzZXM6IGFueVtdID1bXTtcblxuICBpc1NlbGVjdGVkOiBzdHJpbmcgPSAnMCc7XG5cbiAgcHJpdmF0ZSBfbGFuZG1hcmtzOiBMYW5kbWFya1tdO1xuICBwcml2YXRlIF9zZWxlY3RlZFZpZXc6IFZpZXc7XG4gIHByaXZhdGUgX2FkanVzdGVkT2Zmc2V0OiBudW1iZXIgPSAwO1xuICBAVmlld0NoaWxkKFwiYWN0aW9uQnV0dG9uXCIpIF9idXR0b25SZWY6IEFjdGlvbkJ1dHRvbkNvbXBvbmVudDtcbiAgQFZpZXdDaGlsZChcInNlYXJjaFwiKSBfc2VhcmNoUmVmOiBFbGVtZW50UmVmO1xuICBAVmlld0NoaWxkKFwibGlzdFwiKSBfbGlzdFJlZjogRWxlbWVudFJlZjtcbiAgQFZpZXdDaGlsZChcImFuaW1hdGluZ0ltYWdlXCIpIF9pbWFnZVJlZjogRWxlbWVudFJlZjtcbiAgQFZpZXdDaGlsZChcImFuaW1hdGluZ0ltYWdlQ29udGFpbmVyXCIpIF9pbWFnZUNvbnRhaW5lclJlZjogRWxlbWVudFJlZjtcblxuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHByaXZhdGUgcGhvdG9zU2VydmljZTogUGhvdG9zU2VydmljZSxcbiAgICAgICAgcHJpdmF0ZSBjYW1lcmE6IENhbWVyYVNlcnZpY2UsXG4gICAgICAgIHByaXZhdGUgcGFnZTogUGFnZSxcbiAgICAgICAgcHJpdmF0ZSBmaWxlUmVhZGVyOiBGaWxlUmVhZGVyU2VydmljZSxcbiAgICAgICAgcHJpdmF0ZSBtb2RhbDogTW9kYWxEaWFsb2dTZXJ2aWNlLFxuICAgICAgICBwcml2YXRlIHZyZWY6IFZpZXdDb250YWluZXJSZWYsXG4gICAgICAgIHByaXZhdGUgY2Q6IENoYW5nZURldGVjdG9yUmVmLFxuICAgICAgICBwcml2YXRlIG5hdjogUm91dGVyRXh0ZW5zaW9ucyxcbiAgICAgICAgcHJpdmF0ZSBsYW5kbWFya3NTZXJ2aWNlOiBMYW5kbWFya3NTZXJ2aWNlLFxuICAgICAgICBwcml2YXRlIGFuaW1hdGlvbnNTZXJ2aWNlOiBBbmltYXRpb25zU2VydmljZSxcbiAgICAgICAgcHJpdmF0ZSBsb2NhdGlvbjogUGxhdGZvcm1Mb2NhdGlvbikge1xuICAgICAgICAgIHRoaXMucGFnZVsnc2Nyb2xsYWJsZUNvbnRlbnQnXSA9IHRydWU7XG4gICAgICAgICAgdGhpcy5fbGFuZG1hcmtzID0gdGhpcy5sYW5kbWFya3NTZXJ2aWNlLmdldExhbmRtYXJrcygpO1xuXG4gICAgICAgIHRoaXMucGhvdG9zID0gdGhpcy5waG90b3NTZXJ2aWNlLmdldFBob3RvcygpO1xuICAgICAgICB0aGlzLmxldHNJbml0aWFsaXplKCk7XG4gICAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMucGFnZS5hY3Rpb25CYXJIaWRkZW4gPSB0cnVlO1xuICAgIHRoaXMuY291cnNlcy5wdXNoKFwiRWNvbm9taWNzXCIpO1xuICAgIHRoaXMuY291cnNlcy5wdXNoKFwiUGVyc29uYWwgRmluYW5jZVwiKTtcbiAgICB0aGlzLmNvdXJzZXMucHVzaChcIkJ1c2luZXNzIENsYXNzXCIpO1xuICAgIHRoaXMuY291cnNlcy5wdXNoKFwiQ29uc3VtZXIgU2NpZW5jZVwiKTtcbiAgICB0aGlzLmNvdXJzZXMucHVzaChcIk1hdGhtYXRpY3NcIik7XG4gICAgdGhpcy5jb3Vyc2VzLnB1c2goXCJGaW5hbmNpYWwgUGxhbm5pbmdcIik7XG4gICAgdGhpcy5jb3Vyc2VzLnB1c2goXCJBY2FkZW15IG9mIEZpbmFuY2VcIik7XG4gICAgdGhpcy5jb3Vyc2VzLnB1c2goXCJFbnRyZXByZW5ldXJzaGlwXCIpO1xuICAgIHRoaXMuY2xhc3Nlcy5wdXNoKFwiQ2xhc3MgMVwiKTtcbiAgICB0aGlzLmNsYXNzZXMucHVzaChcIkNsYXNzIDJcIik7XG4gICAgdGhpcy5sb2NhdGlvbi5vblBvcFN0YXRlKCgpID0+IHtcbiAgICAgIHRoaXMuX29uTmF2aWdhdGVkVG8oKTtcbiAgfSk7XG4gIH1cblxuICBsZXRzSW5pdGlhbGl6ZSgpIHtcbiAgICB0aGlzLmZpbGVSZWFkZXIucmVhZEpTT04oJy9jb3JlL2luc3RhZ3JhbS5qc29uJykudGhlbihcbiAgICAgICAgcmVzID0+IHtcbiAgICAgICAgICB0aGlzLmluc3RhZ3JhbSA9IHJlc1tcImluc3RhZ3JhbVwiXTtcbiAgICAgICAgfSxcbiAgICAgICAgZXJyID0+IHtcbiAgICAgICAgICBjb25zb2xlLmxvZygnRXJyb3IgcmVhZGluZyBqc29uOiAnICsgSlNPTi5zdHJpbmdpZnkoZXJyKSk7XG4gICAgICAgIH1cbiAgICApXG4gIH1cblxuICB0YWtlUGhvdG8oKSB7XG4gICAgdGhpcy5jYW1lcmEudGFrZVBob3RvKClcbiAgICAgICAgLnRoZW4oaW1hZ2VBc3NldCA9PiB7XG4gICAgICAgICAgdGhpcy5vbk5hdnRhcCgnbG9hZGluZycsICcnKTtcbiAgICAgICAgICBjb25zdCBvcHRpb25zOiBNb2RhbERpYWxvZ09wdGlvbnMgPSB7XG4gICAgICAgICAgICBjb250ZXh0OiBpbWFnZUFzc2V0LFxuICAgICAgICAgICAgdmlld0NvbnRhaW5lclJlZjogdGhpcy52cmVmLFxuICAgICAgICAgICAgZnVsbHNjcmVlbjogdHJ1ZVxuICAgICAgICAgIH07XG4gICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7IC8vaHR0cHM6Ly9naXRodWIuY29tL05hdGl2ZVNjcmlwdC9OYXRpdmVTY3JpcHQvaXNzdWVzLzU3NDQjaXNzdWVjb21tZW50LTM4NDU4OTczOVxuICAgICAgICAgICAgdGhpcy5tb2RhbC5zaG93TW9kYWwoRmlsdGVyQ29tcG9uZW50LCBvcHRpb25zKS50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICBpZiAocmVzcG9uc2UgPT0gJ3N1Y2Nlc3MnKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5vbk5hdnRhcCgncHJvZmlsZScsICc0Jyk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5vbk5hdnRhcCgnaG9tZScsICcwJyk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sIGVycm9yID0+IHtcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfSwgMTAwMCk7XG4gICAgICAgIH0pLmNhdGNoKGVyciA9PiB7XG4gICAgICBjb25zb2xlLmxvZyhlcnIubWVzc2FnZSk7XG4gICAgfSk7XG4gIH1cblxuICBzZWxlY3RlZFJvdXRlOiBzdHJpbmcgPSAnaG9tZSc7XG5cbiAgZ2V0IHVzZXJOYW1lKCkge1xuICAgICAgcmV0dXJuIGFwcFNldHRpbmdzLmdldFN0cmluZyhcInVzZXJcIik7XG4gIH1cblxuICBvbk5hdnRhcChyb3V0ZTogc3RyaW5nLCBzZWxlY3RlZFRhYjogc3RyaW5nKSB7XG4gICAgdGhpcy5pc1NlbGVjdGVkID0gc2VsZWN0ZWRUYWI7XG4gICAgdGhpcy5zZWxlY3RlZFJvdXRlID0gcm91dGU7XG4gICAgdGhpcy5jZC5kZXRlY3RDaGFuZ2VzKCk7XG4gIH1cblxuICBhbGVydChtZXNzYWdlOiBzdHJpbmcpIHtcbiAgICByZXR1cm4gYWxlcnQoe1xuICAgICAgICB0aXRsZTogXCJDaGFuZ2UgQ291cnNlXCIsXG4gICAgICAgIG9rQnV0dG9uVGV4dDogXCJPS1wiLFxuICAgICAgICBtZXNzYWdlOiBtZXNzYWdlXG4gICAgfSk7XG4gIH1cblxuICBvbkNvdXJzZVRhcChhcmdzKSB7XG4gICAgbGV0IGNvdXJzZSA9IHRoaXMuY291cnNlc1thcmdzLmluZGV4XTtcbiAgICB0aGlzLmFsZXJ0KFwiWW91IGhhdmUgY2hhbmdlZCB0byBjb3Vyc2U6IFwiICsgY291cnNlKTtcbiAgfVxuXG4gIG9uQ2xhc3NUYXAoYXJncykge1xuICAgIGxldCBpdGVtID0gdGhpcy5jbGFzc2VzW2FyZ3MuaW5kZXhdO1xuICAgIHRoaXMuYWxlcnQoXCJZb3UgaGF2ZSBjaG9zZW4gY2xhc3M6IFwiICsgaXRlbSk7XG4gIH1cblxuICAgIHRhcEhlYWRlcihoZWFkZXIpIHtcbiAgICAgICAgaWYgKGhlYWRlci5yb3V0ZSkge1xuICAgICAgICAgICAgdGhpcy5uYXYubmF2aWdhdGUoW1wiL1wiICsgaGVhZGVyLnJvdXRlXSlcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG1hbmFnZVVzZXIoKSB7XG4gICAgICAgIGxldCBvcHRpb25zID0ge1xuICAgICAgICAgICAgdGl0bGU6IFwiTXkgQWNjb3VudFwiLFxuICAgICAgICAgICAgbWVzc2FnZTogXCJEbyB5b3Ugd2FudCB0byBsb2cgb3V0P1wiLFxuICAgICAgICAgICAgY2FuY2VsQnV0dG9uVGV4dDogXCJDYW5jZWxcIixcbiAgICAgICAgICAgIGFjdGlvbnM6IFtcIkxvZ291dFwiXVxuICAgICAgICB9O1xuXG4gICAgICAgIGFjdGlvbihvcHRpb25zKS50aGVuKChyZXN1bHQpID0+IHtcbiAgICAgICAgICAgIGlmIChyZXN1bHQgPT09IFwiTG9nb3V0XCIpe1xuICAgICAgICAgICAgICAgIHRoaXMubmF2Lm5hdmlnYXRlKFtcIi9sb2dpblwiXSk7XG4gICAgICAgICAgICB9XG59KTtcbiAgICB9XG5cbiAgICBnZXQgbGFuZG1hcmtzKCkge1xuICAgICAgcmV0dXJuIHRoaXMuX2xhbmRtYXJrcztcbiAgfVxuXG4gICAgcHJpdmF0ZSBtZWFzdXJlT2Zmc2V0KHZpZXcxOiBWaWV3LCB2aWV3MjogVmlldykge1xuICAgICAgbGV0IG9mZnNldCA9IHZpZXcxLmdldExvY2F0aW9uUmVsYXRpdmVUbyh2aWV3MikueTtcbiAgICAgIGlmICh2aWV3Mi5pb3MgJiYgdmlldzIuaW9zLmFkanVzdGVkQ29udGVudEluc2V0KSB7XG4gICAgICAgICAgdGhpcy5fYWRqdXN0ZWRPZmZzZXQgPSB2aWV3Mi5pb3MuYWRqdXN0ZWRDb250ZW50SW5zZXQudG9wO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG9mZnNldCAtIHRoaXMuX2FkanVzdGVkT2Zmc2V0O1xuICB9XG5cbiAgcHJpdmF0ZSBfcHJlcGFyZUZvckJhY2tOYXZpZ2F0aW9uKCkge1xuICAgIHRoaXMuX2xpc3RSZWYubmF0aXZlRWxlbWVudC5vcGFjaXR5ID0gMDtcbiAgICB0aGlzLl9zZWxlY3RlZFZpZXcub3BhY2l0eSA9IDA7XG5cbiAgICB0aGlzLl9pbWFnZVJlZi5uYXRpdmVFbGVtZW50LnNyYyA9IHRoaXMubGFuZG1hcmtzU2VydmljZS5nZXRTZWxlY3RlZCgpLmltYWdlO1xuICAgIHRoaXMuX2ltYWdlQ29udGFpbmVyUmVmLm5hdGl2ZUVsZW1lbnQudHJhbnNsYXRlWSA9IHRoaXMuX2FkanVzdGVkT2Zmc2V0O1xuICAgIHRoaXMuX2ltYWdlQ29udGFpbmVyUmVmLm5hdGl2ZUVsZW1lbnQub3BhY2l0eSA9IDE7XG5cbiAgICB0aGlzLl9idXR0b25SZWYubWFrZUFycm93KCk7XG4gICAgdGhpcy5fc2VhcmNoUmVmLm5hdGl2ZUVsZW1lbnQub3BhY2l0eSA9IDA7XG59XG5cbiAgICBwdWJsaWMgb25OYXZpZ2F0aW9uSXRlbVRhcChhcmdzOiBhbnkpIHtcbiAgICAgIHRoaXMubGFuZG1hcmtzU2VydmljZS5zZXRTZWxlY3RlZElkKGFyZ3MuaW5kZXgpO1xuICAgICAgdGhpcy5fc2VsZWN0ZWRWaWV3ID0gYXJncy52aWV3O1xuICAgICAgdGhpcy5hbmltYXRpb25zU2VydmljZS5hbmltYXRpb25PZmZzZXQgPSB0aGlzLm1lYXN1cmVPZmZzZXQoYXJncy52aWV3LCBhcmdzLm9iamVjdCk7XG4gICAgICB0aGlzLm5hdi5uYXZpZ2F0ZShbJy9kZXRhaWxzJ10sIHsgYW5pbWF0ZWQ6IGZhbHNlIH0pO1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgdGhpcy5fcHJlcGFyZUZvckJhY2tOYXZpZ2F0aW9uKCk7XG4gICAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgX29uTmF2aWdhdGVkVG8oKSB7XG4gICAgbGV0IG9mZnNldCA9IHRoaXMuYW5pbWF0aW9uc1NlcnZpY2UuYW5pbWF0aW9uT2Zmc2V0ICsgdGhpcy5fYWRqdXN0ZWRPZmZzZXQ7XG4gICAgdGhpcy5faW1hZ2VDb250YWluZXJSZWYubmF0aXZlRWxlbWVudC5hbmltYXRlKHtcbiAgICAgICAgdHJhbnNsYXRlOiB7IHg6IDAsIHk6IG9mZnNldCB9LFxuICAgICAgICBkdXJhdGlvbjogMjAwLFxuICAgICAgICBjdXJ2ZTogQW5pbWF0aW9uQ3VydmUuZWFzZU91dFxuICAgIH0pLnRoZW4oKCkgPT4ge1xuICAgICAgICB0aGlzLl9zZWxlY3RlZFZpZXcub3BhY2l0eSA9IDE7XG4gICAgICAgIHRoaXMuX2ltYWdlQ29udGFpbmVyUmVmLm5hdGl2ZUVsZW1lbnQuYW5pbWF0ZSh7XG4gICAgICAgICAgICBvcGFjaXR5OiAwLFxuICAgICAgICAgICAgZHVyYXRpb246IDQwMCxcbiAgICAgICAgICAgIGN1cnZlOiBBbmltYXRpb25DdXJ2ZS5lYXNlT3V0XG4gICAgICAgIH0pLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5faW1hZ2VDb250YWluZXJSZWYubmF0aXZlRWxlbWVudC50cmFuc2xhdGVZID0gMDtcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0pLmNhdGNoKCgpID0+IHsgfSk7XG5cbiAgICB0aGlzLl9saXN0UmVmLm5hdGl2ZUVsZW1lbnQuYW5pbWF0ZSh7XG4gICAgICAgIG9wYWNpdHk6IDEsXG4gICAgICAgIGR1cmF0aW9uOiAyMDBcbiAgICB9KS5jYXRjaCgoKSA9PiB7IH0pO1xuICAgIHRoaXMuX3NlYXJjaFJlZi5uYXRpdmVFbGVtZW50LmFuaW1hdGUoe1xuICAgICAgICBvcGFjaXR5OiAxLFxuICAgICAgICBkdXJhdGlvbjogMjAwXG4gICAgfSkuY2F0Y2goKCkgPT4geyB9KTtcbn1cblxuICAgIG9uQ2VydGlmaWNhdGlvblRhcHBlZCgpIHtcbiAgICAgICAgdGhpcy5uYXYubmF2aWdhdGUoW1wiL2NlcnRpZmljYXRpb25cIl0pO1xuICAgIH1cbn1cbiJdfQ==