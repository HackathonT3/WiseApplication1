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
var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(photosService, camera, page, fileReader, modal, vref, cd, nav) {
        this.photosService = photosService;
        this.camera = camera;
        this.page = page;
        this.fileReader = fileReader;
        this.modal = modal;
        this.vref = vref;
        this.cd = cd;
        this.nav = nav;
        // github repo link - https://github.com/kumarandena/nativescript-instagram-clone
        this.photoWidth = platform_1.screen.mainScreen.widthDIPs * 0.33333;
        this.photoHeight = this.photoWidth;
        this.photos = [];
        this.instagram = [];
        this.courses = [];
        this.classes = [];
        this.isSelected = '0';
        this.selectedRoute = 'home';
        this.photos = this.photosService.getPhotos();
        this.letsInitialize();
    }
    DashboardComponent.prototype.ngOnInit = function () {
        this.page.actionBarHidden = true;
        this.courses.push("Economics");
        this.courses.push("Personal Finance");
        this.classes.push("Class 1");
        this.classes.push("Class 2");
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
            nativescript_angular_1.RouterExtensions])
    ], DashboardComponent);
    return DashboardComponent;
}());
exports.DashboardComponent = DashboardComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGFzaGJvYXJkLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImRhc2hib2FyZC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBdUY7QUFDdkYsZ0NBQStCO0FBQy9CLHFDQUFrQztBQUNsQyx5REFBdUQ7QUFDdkQseURBQXVEO0FBQ3ZELGlFQUErRDtBQUMvRCw4REFBNEQ7QUFDNUQsa0VBQTJGO0FBRTNGLHVEQUFvRDtBQUNwRCw2REFBd0Q7QUFDeEQsbUVBQXFFO0FBQ3JFLHVEQUFxRDtBQVFyRDtJQWlCSSw0QkFDWSxhQUE0QixFQUM1QixNQUFxQixFQUNyQixJQUFVLEVBQ1YsVUFBNkIsRUFDN0IsS0FBeUIsRUFDekIsSUFBc0IsRUFDdEIsRUFBcUIsRUFDckIsR0FBcUI7UUFQckIsa0JBQWEsR0FBYixhQUFhLENBQWU7UUFDNUIsV0FBTSxHQUFOLE1BQU0sQ0FBZTtRQUNyQixTQUFJLEdBQUosSUFBSSxDQUFNO1FBQ1YsZUFBVSxHQUFWLFVBQVUsQ0FBbUI7UUFDN0IsVUFBSyxHQUFMLEtBQUssQ0FBb0I7UUFDekIsU0FBSSxHQUFKLElBQUksQ0FBa0I7UUFDdEIsT0FBRSxHQUFGLEVBQUUsQ0FBbUI7UUFDckIsUUFBRyxHQUFILEdBQUcsQ0FBa0I7UUF2Qm5DLGlGQUFpRjtRQUVqRixlQUFVLEdBQVcsaUJBQU0sQ0FBQyxVQUFVLENBQUMsU0FBUyxHQUFHLE9BQU8sQ0FBQztRQUMzRCxnQkFBVyxHQUFXLElBQUksQ0FBQyxVQUFVLENBQUM7UUFFdEMsV0FBTSxHQUFhLEVBQUUsQ0FBQztRQUV0QixjQUFTLEdBQVUsRUFBRSxDQUFDO1FBRXRCLFlBQU8sR0FBVSxFQUFFLENBQUM7UUFFcEIsWUFBTyxHQUFTLEVBQUUsQ0FBQztRQUVuQixlQUFVLEdBQVcsR0FBRyxDQUFDO1FBNkR6QixrQkFBYSxHQUFXLE1BQU0sQ0FBQztRQWpEekIsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBQzdDLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztJQUMxQixDQUFDO0lBRUgscUNBQVEsR0FBUjtRQUNFLElBQUksQ0FBQyxJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQztRQUNqQyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUMvQixJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO1FBQ3RDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQzdCLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQy9CLENBQUM7SUFFRCwyQ0FBYyxHQUFkO1FBQUEsaUJBU0M7UUFSQyxJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDLElBQUksQ0FDakQsVUFBQSxHQUFHO1lBQ0QsS0FBSSxDQUFDLFNBQVMsR0FBRyxHQUFHLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDcEMsQ0FBQyxFQUNELFVBQUEsR0FBRztZQUNELE9BQU8sQ0FBQyxHQUFHLENBQUMsc0JBQXNCLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQzVELENBQUMsQ0FDSixDQUFBO0lBQ0gsQ0FBQztJQUVELHNDQUFTLEdBQVQ7UUFBQSxpQkF3QkM7UUF2QkMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLEVBQUU7YUFDbEIsSUFBSSxDQUFDLFVBQUEsVUFBVTtZQUNkLEtBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1lBQzdCLElBQU0sT0FBTyxHQUF1QjtnQkFDbEMsT0FBTyxFQUFFLFVBQVU7Z0JBQ25CLGdCQUFnQixFQUFFLEtBQUksQ0FBQyxJQUFJO2dCQUMzQixVQUFVLEVBQUUsSUFBSTthQUNqQixDQUFDO1lBQ0YsVUFBVSxDQUFDO2dCQUNULEtBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLGtDQUFlLEVBQUUsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUMsUUFBUTtvQkFDM0QsSUFBSSxRQUFRLElBQUksU0FBUyxFQUFFO3dCQUN6QixLQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsRUFBRSxHQUFHLENBQUMsQ0FBQztxQkFDL0I7eUJBQ0k7d0JBQ0gsS0FBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEVBQUUsR0FBRyxDQUFDLENBQUM7cUJBQzVCO2dCQUNILENBQUMsRUFBRSxVQUFBLEtBQUs7b0JBQ04sT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFDckIsQ0FBQyxDQUFDLENBQUM7WUFDTCxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDWCxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsVUFBQSxHQUFHO1lBQ2QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDM0IsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBSUQsc0JBQUksd0NBQVE7YUFBWjtZQUNJLE9BQU8sV0FBVyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUN6QyxDQUFDOzs7T0FBQTtJQUVELHFDQUFRLEdBQVIsVUFBUyxLQUFhLEVBQUUsV0FBbUI7UUFDekMsSUFBSSxDQUFDLFVBQVUsR0FBRyxXQUFXLENBQUM7UUFDOUIsSUFBSSxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUM7UUFDM0IsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLEVBQUUsQ0FBQztJQUMxQixDQUFDO0lBRUQsa0NBQUssR0FBTCxVQUFNLE9BQWU7UUFDbkIsT0FBTyxlQUFLLENBQUM7WUFDVCxLQUFLLEVBQUUsZUFBZTtZQUN0QixZQUFZLEVBQUUsSUFBSTtZQUNsQixPQUFPLEVBQUUsT0FBTztTQUNuQixDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsd0NBQVcsR0FBWCxVQUFZLElBQUk7UUFDZCxJQUFJLE1BQU0sR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUN0QyxJQUFJLENBQUMsS0FBSyxDQUFDLDhCQUE4QixHQUFHLE1BQU0sQ0FBQyxDQUFDO0lBQ3RELENBQUM7SUFFRCx1Q0FBVSxHQUFWLFVBQVcsSUFBSTtRQUNiLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3BDLElBQUksQ0FBQyxLQUFLLENBQUMseUJBQXlCLEdBQUcsSUFBSSxDQUFDLENBQUM7SUFDL0MsQ0FBQztJQUVDLHNDQUFTLEdBQVQsVUFBVSxNQUFNO1FBQ1osSUFBSSxNQUFNLENBQUMsS0FBSyxFQUFFO1lBQ2QsSUFBSSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUE7U0FDMUM7SUFDTCxDQUFDO0lBRUQsdUNBQVUsR0FBVjtRQUFBLGlCQWFDO1FBWkcsSUFBSSxPQUFPLEdBQUc7WUFDVixLQUFLLEVBQUUsWUFBWTtZQUNuQixPQUFPLEVBQUUseUJBQXlCO1lBQ2xDLGdCQUFnQixFQUFFLFFBQVE7WUFDMUIsT0FBTyxFQUFFLENBQUMsUUFBUSxDQUFDO1NBQ3RCLENBQUM7UUFFRixnQkFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFDLE1BQU07WUFDeEIsSUFBSSxNQUFNLEtBQUssUUFBUSxFQUFDO2dCQUNwQixLQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7YUFDakM7UUFDYixDQUFDLENBQUMsQ0FBQztJQUNDLENBQUM7SUE3SFEsa0JBQWtCO1FBTjlCLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsY0FBYztZQUN4QixXQUFXLEVBQUUsNEJBQTRCO1lBQ3pDLFNBQVMsRUFBRSxDQUFDLDJCQUEyQixDQUFDO1lBQ3hDLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtTQUNwQixDQUFDO3lDQW1CNkIsOEJBQWE7WUFDcEIsOEJBQWE7WUFDZixXQUFJO1lBQ0Usc0NBQWlCO1lBQ3RCLGlDQUFrQjtZQUNuQix1QkFBZ0I7WUFDbEIsd0JBQWlCO1lBQ2hCLHVDQUFnQjtPQXpCeEIsa0JBQWtCLENBOEg5QjtJQUFELHlCQUFDO0NBQUEsQUE5SEQsSUE4SEM7QUE5SFksZ0RBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIFZpZXdDb250YWluZXJSZWYsIENoYW5nZURldGVjdG9yUmVmIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFBhZ2UgfSBmcm9tIFwidWkvcGFnZVwiO1xuaW1wb3J0IHsgc2NyZWVuIH0gZnJvbSBcInBsYXRmb3JtXCI7XG5pbXBvcnQgeyBQaG90b3NTZXJ2aWNlIH0gZnJvbSBcIi4uL2NvcmUvcGhvdG9zLnNlcnZpY2VcIjtcbmltcG9ydCB7IENhbWVyYVNlcnZpY2UgfSBmcm9tIFwiLi4vY29yZS9jYW1lcmEuc2VydmljZVwiO1xuaW1wb3J0IHsgRmlsZVJlYWRlclNlcnZpY2UgfSBmcm9tIFwiLi4vY29yZS9maWxlUmVhZGVyLnNlcnZpY2VcIjtcbmltcG9ydCB7IEZpbHRlckNvbXBvbmVudCB9IGZyb20gXCIuL2ZpbHRlci9maWx0ZXIuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBNb2RhbERpYWxvZ09wdGlvbnMsIE1vZGFsRGlhbG9nU2VydmljZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9tb2RhbC1kaWFsb2dcIjtcbmltcG9ydCB7IFNlYXJjaEJhciB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL3NlYXJjaC1iYXJcIjtcbmltcG9ydCB7IGFsZXJ0IH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvZGlhbG9nc1wiO1xuaW1wb3J0IHsgUm91dGVyRXh0ZW5zaW9ucyB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhclwiO1xuaW1wb3J0ICogYXMgYXBwU2V0dGluZ3MgZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvYXBwbGljYXRpb24tc2V0dGluZ3NcIjtcbmltcG9ydCB7IGFjdGlvbiB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2RpYWxvZ3NcIjtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbnMtZGFzaGJvYXJkJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2Rhc2hib2FyZC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2Rhc2hib2FyZC5jb21wb25lbnQuY3NzJ10sXG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG59KVxuZXhwb3J0IGNsYXNzIERhc2hib2FyZENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgLy8gZ2l0aHViIHJlcG8gbGluayAtIGh0dHBzOi8vZ2l0aHViLmNvbS9rdW1hcmFuZGVuYS9uYXRpdmVzY3JpcHQtaW5zdGFncmFtLWNsb25lXG5cbiAgcGhvdG9XaWR0aDogbnVtYmVyID0gc2NyZWVuLm1haW5TY3JlZW4ud2lkdGhESVBzICogMC4zMzMzMztcbiAgcGhvdG9IZWlnaHQ6IG51bWJlciA9IHRoaXMucGhvdG9XaWR0aDtcblxuICBwaG90b3M6IHN0cmluZ1tdID0gW107XG5cbiAgaW5zdGFncmFtOiBhbnlbXSA9IFtdO1xuXG4gIGNvdXJzZXM6IGFueVtdID0gW107XG5cbiAgY2xhc3NlczogYW55W10gPVtdO1xuXG4gIGlzU2VsZWN0ZWQ6IHN0cmluZyA9ICcwJztcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcml2YXRlIHBob3Rvc1NlcnZpY2U6IFBob3Rvc1NlcnZpY2UsXG4gICAgICAgIHByaXZhdGUgY2FtZXJhOiBDYW1lcmFTZXJ2aWNlLFxuICAgICAgICBwcml2YXRlIHBhZ2U6IFBhZ2UsXG4gICAgICAgIHByaXZhdGUgZmlsZVJlYWRlcjogRmlsZVJlYWRlclNlcnZpY2UsXG4gICAgICAgIHByaXZhdGUgbW9kYWw6IE1vZGFsRGlhbG9nU2VydmljZSxcbiAgICAgICAgcHJpdmF0ZSB2cmVmOiBWaWV3Q29udGFpbmVyUmVmLFxuICAgICAgICBwcml2YXRlIGNkOiBDaGFuZ2VEZXRlY3RvclJlZixcbiAgICAgICAgcHJpdmF0ZSBuYXY6IFJvdXRlckV4dGVuc2lvbnMpIHtcblxuICAgICAgICB0aGlzLnBob3RvcyA9IHRoaXMucGhvdG9zU2VydmljZS5nZXRQaG90b3MoKTtcbiAgICAgICAgdGhpcy5sZXRzSW5pdGlhbGl6ZSgpO1xuICAgIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLnBhZ2UuYWN0aW9uQmFySGlkZGVuID0gdHJ1ZTtcbiAgICB0aGlzLmNvdXJzZXMucHVzaChcIkVjb25vbWljc1wiKTtcbiAgICB0aGlzLmNvdXJzZXMucHVzaChcIlBlcnNvbmFsIEZpbmFuY2VcIik7XG4gICAgdGhpcy5jbGFzc2VzLnB1c2goXCJDbGFzcyAxXCIpO1xuICAgIHRoaXMuY2xhc3Nlcy5wdXNoKFwiQ2xhc3MgMlwiKTtcbiAgfVxuXG4gIGxldHNJbml0aWFsaXplKCkge1xuICAgIHRoaXMuZmlsZVJlYWRlci5yZWFkSlNPTignL2NvcmUvaW5zdGFncmFtLmpzb24nKS50aGVuKFxuICAgICAgICByZXMgPT4ge1xuICAgICAgICAgIHRoaXMuaW5zdGFncmFtID0gcmVzW1wiaW5zdGFncmFtXCJdO1xuICAgICAgICB9LFxuICAgICAgICBlcnIgPT4ge1xuICAgICAgICAgIGNvbnNvbGUubG9nKCdFcnJvciByZWFkaW5nIGpzb246ICcgKyBKU09OLnN0cmluZ2lmeShlcnIpKTtcbiAgICAgICAgfVxuICAgIClcbiAgfVxuXG4gIHRha2VQaG90bygpIHtcbiAgICB0aGlzLmNhbWVyYS50YWtlUGhvdG8oKVxuICAgICAgICAudGhlbihpbWFnZUFzc2V0ID0+IHtcbiAgICAgICAgICB0aGlzLm9uTmF2dGFwKCdsb2FkaW5nJywgJycpO1xuICAgICAgICAgIGNvbnN0IG9wdGlvbnM6IE1vZGFsRGlhbG9nT3B0aW9ucyA9IHtcbiAgICAgICAgICAgIGNvbnRleHQ6IGltYWdlQXNzZXQsXG4gICAgICAgICAgICB2aWV3Q29udGFpbmVyUmVmOiB0aGlzLnZyZWYsXG4gICAgICAgICAgICBmdWxsc2NyZWVuOiB0cnVlXG4gICAgICAgICAgfTtcbiAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHsgLy9odHRwczovL2dpdGh1Yi5jb20vTmF0aXZlU2NyaXB0L05hdGl2ZVNjcmlwdC9pc3N1ZXMvNTc0NCNpc3N1ZWNvbW1lbnQtMzg0NTg5NzM5XG4gICAgICAgICAgICB0aGlzLm1vZGFsLnNob3dNb2RhbChGaWx0ZXJDb21wb25lbnQsIG9wdGlvbnMpLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAgIGlmIChyZXNwb25zZSA9PSAnc3VjY2VzcycpIHtcbiAgICAgICAgICAgICAgICB0aGlzLm9uTmF2dGFwKCdwcm9maWxlJywgJzQnKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLm9uTmF2dGFwKCdob21lJywgJzAnKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSwgZXJyb3IgPT4ge1xuICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9LCAxMDAwKTtcbiAgICAgICAgfSkuY2F0Y2goZXJyID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKGVyci5tZXNzYWdlKTtcbiAgICB9KTtcbiAgfVxuXG4gIHNlbGVjdGVkUm91dGU6IHN0cmluZyA9ICdob21lJztcblxuICBnZXQgdXNlck5hbWUoKSB7XG4gICAgICByZXR1cm4gYXBwU2V0dGluZ3MuZ2V0U3RyaW5nKFwidXNlclwiKTtcbiAgfVxuXG4gIG9uTmF2dGFwKHJvdXRlOiBzdHJpbmcsIHNlbGVjdGVkVGFiOiBzdHJpbmcpIHtcbiAgICB0aGlzLmlzU2VsZWN0ZWQgPSBzZWxlY3RlZFRhYjtcbiAgICB0aGlzLnNlbGVjdGVkUm91dGUgPSByb3V0ZTtcbiAgICB0aGlzLmNkLmRldGVjdENoYW5nZXMoKTtcbiAgfVxuXG4gIGFsZXJ0KG1lc3NhZ2U6IHN0cmluZykge1xuICAgIHJldHVybiBhbGVydCh7XG4gICAgICAgIHRpdGxlOiBcIkNoYW5nZSBDb3Vyc2VcIixcbiAgICAgICAgb2tCdXR0b25UZXh0OiBcIk9LXCIsXG4gICAgICAgIG1lc3NhZ2U6IG1lc3NhZ2VcbiAgICB9KTtcbiAgfVxuXG4gIG9uQ291cnNlVGFwKGFyZ3MpIHtcbiAgICBsZXQgY291cnNlID0gdGhpcy5jb3Vyc2VzW2FyZ3MuaW5kZXhdO1xuICAgIHRoaXMuYWxlcnQoXCJZb3UgaGF2ZSBjaGFuZ2VkIHRvIGNvdXJzZTogXCIgKyBjb3Vyc2UpO1xuICB9XG5cbiAgb25DbGFzc1RhcChhcmdzKSB7XG4gICAgbGV0IGl0ZW0gPSB0aGlzLmNsYXNzZXNbYXJncy5pbmRleF07XG4gICAgdGhpcy5hbGVydChcIllvdSBoYXZlIGNob3NlbiBjbGFzczogXCIgKyBpdGVtKTtcbiAgfVxuXG4gICAgdGFwSGVhZGVyKGhlYWRlcikge1xuICAgICAgICBpZiAoaGVhZGVyLnJvdXRlKSB7XG4gICAgICAgICAgICB0aGlzLm5hdi5uYXZpZ2F0ZShbXCIvXCIgKyBoZWFkZXIucm91dGVdKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgbWFuYWdlVXNlcigpIHtcbiAgICAgICAgbGV0IG9wdGlvbnMgPSB7XG4gICAgICAgICAgICB0aXRsZTogXCJNeSBBY2NvdW50XCIsXG4gICAgICAgICAgICBtZXNzYWdlOiBcIkRvIHlvdSB3YW50IHRvIGxvZyBvdXQ/XCIsXG4gICAgICAgICAgICBjYW5jZWxCdXR0b25UZXh0OiBcIkNhbmNlbFwiLFxuICAgICAgICAgICAgYWN0aW9uczogW1wiTG9nb3V0XCJdXG4gICAgICAgIH07XG5cbiAgICAgICAgYWN0aW9uKG9wdGlvbnMpLnRoZW4oKHJlc3VsdCkgPT4ge1xuICAgICAgICAgICAgaWYgKHJlc3VsdCA9PT0gXCJMb2dvdXRcIil7XG4gICAgICAgICAgICAgICAgdGhpcy5uYXYubmF2aWdhdGUoW1wiL2xvZ2luXCJdKTtcbiAgICAgICAgICAgIH1cbn0pO1xuICAgIH1cbn1cbiJdfQ==