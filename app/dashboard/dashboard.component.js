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
        this.isSelected = '0';
        this.selectedRoute = 'home';
        this.photos = this.photosService.getPhotos();
        this.letsInitialize();
    }
    DashboardComponent.prototype.ngOnInit = function () {
        this.page.actionBarHidden = true;
        this.courses.push("Economics");
        this.courses.push("Personal Finance");
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGFzaGJvYXJkLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImRhc2hib2FyZC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBdUY7QUFDdkYsZ0NBQStCO0FBQy9CLHFDQUFrQztBQUNsQyx5REFBdUQ7QUFDdkQseURBQXVEO0FBQ3ZELGlFQUErRDtBQUMvRCw4REFBNEQ7QUFDNUQsa0VBQTJGO0FBRTNGLHVEQUFvRDtBQUNwRCw2REFBd0Q7QUFDeEQsbUVBQXFFO0FBQ3JFLHVEQUFxRDtBQVFyRDtJQWVJLDRCQUNZLGFBQTRCLEVBQzVCLE1BQXFCLEVBQ3JCLElBQVUsRUFDVixVQUE2QixFQUM3QixLQUF5QixFQUN6QixJQUFzQixFQUN0QixFQUFxQixFQUNyQixHQUFxQjtRQVByQixrQkFBYSxHQUFiLGFBQWEsQ0FBZTtRQUM1QixXQUFNLEdBQU4sTUFBTSxDQUFlO1FBQ3JCLFNBQUksR0FBSixJQUFJLENBQU07UUFDVixlQUFVLEdBQVYsVUFBVSxDQUFtQjtRQUM3QixVQUFLLEdBQUwsS0FBSyxDQUFvQjtRQUN6QixTQUFJLEdBQUosSUFBSSxDQUFrQjtRQUN0QixPQUFFLEdBQUYsRUFBRSxDQUFtQjtRQUNyQixRQUFHLEdBQUgsR0FBRyxDQUFrQjtRQXJCbkMsaUZBQWlGO1FBRWpGLGVBQVUsR0FBVyxpQkFBTSxDQUFDLFVBQVUsQ0FBQyxTQUFTLEdBQUcsT0FBTyxDQUFDO1FBQzNELGdCQUFXLEdBQVcsSUFBSSxDQUFDLFVBQVUsQ0FBQztRQUV0QyxXQUFNLEdBQWEsRUFBRSxDQUFDO1FBRXRCLGNBQVMsR0FBVSxFQUFFLENBQUM7UUFFdEIsWUFBTyxHQUFVLEVBQUUsQ0FBQztRQUVwQixlQUFVLEdBQVcsR0FBRyxDQUFDO1FBMkR6QixrQkFBYSxHQUFXLE1BQU0sQ0FBQztRQS9DekIsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLFNBQVMsRUFBRSxDQUFDO1FB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TUFBTTtRQUNaLElBQUksTUFBTSxDQUFDLEtBQUssRUFBRTtZQUNkLElBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFBO1NBQzFDO0lBQ0wsQ0FBQztJQUVELHVDQUFVLEdBQVY7UUFBQSxpQkFhQztRQVpHLElBQUksT0FBTyxHQUFHO1lBQ1YsS0FBSyxFQUFFLFlBQVk7WUFDbkIsT0FBTyxFQUFFLHlCQUF5QjtZQUNsQyxnQkFBZ0IsRUFBRSxRQUFRO1lBQzFCLE9BQU8sRUFBRSxDQUFDLFFBQVEsQ0FBQztTQUN0QixDQUFDO1FBRUYsZ0JBQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQyxNQUFNO1lBQ3hCLElBQUksTUFBTSxLQUFLLFFBQVEsRUFBQztnQkFDcEIsS0FBSSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO2FBQ2pDO1FBQ2IsQ0FBQyxDQUFDLENBQUM7SUFDQyxDQUFDO0lBbkhRLGtCQUFrQjtRQU45QixnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLGNBQWM7WUFDeEIsV0FBVyxFQUFFLDRCQUE0QjtZQUN6QyxTQUFTLEVBQUUsQ0FBQywyQkFBMkIsQ0FBQztZQUN4QyxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7U0FDcEIsQ0FBQzt5Q0FpQjZCLDhCQUFhO1lBQ3BCLDhCQUFhO1lBQ2YsV0FBSTtZQUNFLHNDQUFpQjtZQUN0QixpQ0FBa0I7WUFDbkIsdUJBQWdCO1lBQ2xCLHdCQUFpQjtZQUNoQix1Q0FBZ0I7T0F2QnhCLGtCQUFrQixDQW9IOUI7SUFBRCx5QkFBQztDQUFBLEFBcEhELElBb0hDO0FBcEhZLGdEQUFrQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBWaWV3Q29udGFpbmVyUmVmLCBDaGFuZ2VEZXRlY3RvclJlZiB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBQYWdlIH0gZnJvbSBcInVpL3BhZ2VcIjtcbmltcG9ydCB7IHNjcmVlbiB9IGZyb20gXCJwbGF0Zm9ybVwiO1xuaW1wb3J0IHsgUGhvdG9zU2VydmljZSB9IGZyb20gXCIuLi9jb3JlL3Bob3Rvcy5zZXJ2aWNlXCI7XG5pbXBvcnQgeyBDYW1lcmFTZXJ2aWNlIH0gZnJvbSBcIi4uL2NvcmUvY2FtZXJhLnNlcnZpY2VcIjtcbmltcG9ydCB7IEZpbGVSZWFkZXJTZXJ2aWNlIH0gZnJvbSBcIi4uL2NvcmUvZmlsZVJlYWRlci5zZXJ2aWNlXCI7XG5pbXBvcnQgeyBGaWx0ZXJDb21wb25lbnQgfSBmcm9tIFwiLi9maWx0ZXIvZmlsdGVyLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgTW9kYWxEaWFsb2dPcHRpb25zLCBNb2RhbERpYWxvZ1NlcnZpY2UgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvbW9kYWwtZGlhbG9nXCI7XG5pbXBvcnQgeyBTZWFyY2hCYXIgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9zZWFyY2gtYmFyXCI7XG5pbXBvcnQgeyBhbGVydCB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2RpYWxvZ3NcIjtcbmltcG9ydCB7IFJvdXRlckV4dGVuc2lvbnMgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXJcIjtcbmltcG9ydCAqIGFzIGFwcFNldHRpbmdzIGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL2FwcGxpY2F0aW9uLXNldHRpbmdzXCI7XG5pbXBvcnQgeyBhY3Rpb24gfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9kaWFsb2dzXCI7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25zLWRhc2hib2FyZCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9kYXNoYm9hcmQuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9kYXNoYm9hcmQuY29tcG9uZW50LmNzcyddLFxuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxufSlcbmV4cG9ydCBjbGFzcyBEYXNoYm9hcmRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIC8vIGdpdGh1YiByZXBvIGxpbmsgLSBodHRwczovL2dpdGh1Yi5jb20va3VtYXJhbmRlbmEvbmF0aXZlc2NyaXB0LWluc3RhZ3JhbS1jbG9uZVxuXG4gIHBob3RvV2lkdGg6IG51bWJlciA9IHNjcmVlbi5tYWluU2NyZWVuLndpZHRoRElQcyAqIDAuMzMzMzM7XG4gIHBob3RvSGVpZ2h0OiBudW1iZXIgPSB0aGlzLnBob3RvV2lkdGg7XG5cbiAgcGhvdG9zOiBzdHJpbmdbXSA9IFtdO1xuXG4gIGluc3RhZ3JhbTogYW55W10gPSBbXTtcblxuICBjb3Vyc2VzOiBhbnlbXSA9IFtdO1xuXG4gIGlzU2VsZWN0ZWQ6IHN0cmluZyA9ICcwJztcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcml2YXRlIHBob3Rvc1NlcnZpY2U6IFBob3Rvc1NlcnZpY2UsXG4gICAgICAgIHByaXZhdGUgY2FtZXJhOiBDYW1lcmFTZXJ2aWNlLFxuICAgICAgICBwcml2YXRlIHBhZ2U6IFBhZ2UsXG4gICAgICAgIHByaXZhdGUgZmlsZVJlYWRlcjogRmlsZVJlYWRlclNlcnZpY2UsXG4gICAgICAgIHByaXZhdGUgbW9kYWw6IE1vZGFsRGlhbG9nU2VydmljZSxcbiAgICAgICAgcHJpdmF0ZSB2cmVmOiBWaWV3Q29udGFpbmVyUmVmLFxuICAgICAgICBwcml2YXRlIGNkOiBDaGFuZ2VEZXRlY3RvclJlZixcbiAgICAgICAgcHJpdmF0ZSBuYXY6IFJvdXRlckV4dGVuc2lvbnMpIHtcblxuICAgICAgICB0aGlzLnBob3RvcyA9IHRoaXMucGhvdG9zU2VydmljZS5nZXRQaG90b3MoKTtcbiAgICAgICAgdGhpcy5sZXRzSW5pdGlhbGl6ZSgpO1xuICAgIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLnBhZ2UuYWN0aW9uQmFySGlkZGVuID0gdHJ1ZTtcbiAgICB0aGlzLmNvdXJzZXMucHVzaChcIkVjb25vbWljc1wiKTtcbiAgICB0aGlzLmNvdXJzZXMucHVzaChcIlBlcnNvbmFsIEZpbmFuY2VcIik7XG4gIH1cblxuICBsZXRzSW5pdGlhbGl6ZSgpIHtcbiAgICB0aGlzLmZpbGVSZWFkZXIucmVhZEpTT04oJy9jb3JlL2luc3RhZ3JhbS5qc29uJykudGhlbihcbiAgICAgICAgcmVzID0+IHtcbiAgICAgICAgICB0aGlzLmluc3RhZ3JhbSA9IHJlc1tcImluc3RhZ3JhbVwiXTtcbiAgICAgICAgfSxcbiAgICAgICAgZXJyID0+IHtcbiAgICAgICAgICBjb25zb2xlLmxvZygnRXJyb3IgcmVhZGluZyBqc29uOiAnICsgSlNPTi5zdHJpbmdpZnkoZXJyKSk7XG4gICAgICAgIH1cbiAgICApXG4gIH1cblxuICB0YWtlUGhvdG8oKSB7XG4gICAgdGhpcy5jYW1lcmEudGFrZVBob3RvKClcbiAgICAgICAgLnRoZW4oaW1hZ2VBc3NldCA9PiB7XG4gICAgICAgICAgdGhpcy5vbk5hdnRhcCgnbG9hZGluZycsICcnKTtcbiAgICAgICAgICBjb25zdCBvcHRpb25zOiBNb2RhbERpYWxvZ09wdGlvbnMgPSB7XG4gICAgICAgICAgICBjb250ZXh0OiBpbWFnZUFzc2V0LFxuICAgICAgICAgICAgdmlld0NvbnRhaW5lclJlZjogdGhpcy52cmVmLFxuICAgICAgICAgICAgZnVsbHNjcmVlbjogdHJ1ZVxuICAgICAgICAgIH07XG4gICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7IC8vaHR0cHM6Ly9naXRodWIuY29tL05hdGl2ZVNjcmlwdC9OYXRpdmVTY3JpcHQvaXNzdWVzLzU3NDQjaXNzdWVjb21tZW50LTM4NDU4OTczOVxuICAgICAgICAgICAgdGhpcy5tb2RhbC5zaG93TW9kYWwoRmlsdGVyQ29tcG9uZW50LCBvcHRpb25zKS50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICBpZiAocmVzcG9uc2UgPT0gJ3N1Y2Nlc3MnKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5vbk5hdnRhcCgncHJvZmlsZScsICc0Jyk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5vbk5hdnRhcCgnaG9tZScsICcwJyk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sIGVycm9yID0+IHtcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfSwgMTAwMCk7XG4gICAgICAgIH0pLmNhdGNoKGVyciA9PiB7XG4gICAgICBjb25zb2xlLmxvZyhlcnIubWVzc2FnZSk7XG4gICAgfSk7XG4gIH1cblxuICBzZWxlY3RlZFJvdXRlOiBzdHJpbmcgPSAnaG9tZSc7XG5cbiAgZ2V0IHVzZXJOYW1lKCkge1xuICAgICAgcmV0dXJuIGFwcFNldHRpbmdzLmdldFN0cmluZyhcInVzZXJcIik7XG4gIH1cblxuICBvbk5hdnRhcChyb3V0ZTogc3RyaW5nLCBzZWxlY3RlZFRhYjogc3RyaW5nKSB7XG4gICAgdGhpcy5pc1NlbGVjdGVkID0gc2VsZWN0ZWRUYWI7XG4gICAgdGhpcy5zZWxlY3RlZFJvdXRlID0gcm91dGU7XG4gICAgdGhpcy5jZC5kZXRlY3RDaGFuZ2VzKCk7XG4gIH1cblxuICBhbGVydChtZXNzYWdlOiBzdHJpbmcpIHtcbiAgICByZXR1cm4gYWxlcnQoe1xuICAgICAgICB0aXRsZTogXCJDaGFuZ2UgQ291cnNlXCIsXG4gICAgICAgIG9rQnV0dG9uVGV4dDogXCJPS1wiLFxuICAgICAgICBtZXNzYWdlOiBtZXNzYWdlXG4gICAgfSk7XG4gIH1cblxuICBvbkNvdXJzZVRhcChhcmdzKSB7XG4gICAgbGV0IGNvdXJzZSA9IHRoaXMuY291cnNlc1thcmdzLmluZGV4XTtcbiAgICB0aGlzLmFsZXJ0KFwiWW91IGhhdmUgY2hhbmdlZCB0byBjb3Vyc2U6IFwiICsgY291cnNlKTtcbiAgfVxuICAgIHRhcEhlYWRlcihoZWFkZXIpIHtcbiAgICAgICAgaWYgKGhlYWRlci5yb3V0ZSkge1xuICAgICAgICAgICAgdGhpcy5uYXYubmF2aWdhdGUoW1wiL1wiICsgaGVhZGVyLnJvdXRlXSlcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG1hbmFnZVVzZXIoKSB7XG4gICAgICAgIGxldCBvcHRpb25zID0ge1xuICAgICAgICAgICAgdGl0bGU6IFwiTXkgQWNjb3VudFwiLFxuICAgICAgICAgICAgbWVzc2FnZTogXCJEbyB5b3Ugd2FudCB0byBsb2cgb3V0P1wiLFxuICAgICAgICAgICAgY2FuY2VsQnV0dG9uVGV4dDogXCJDYW5jZWxcIixcbiAgICAgICAgICAgIGFjdGlvbnM6IFtcIkxvZ291dFwiXVxuICAgICAgICB9O1xuXG4gICAgICAgIGFjdGlvbihvcHRpb25zKS50aGVuKChyZXN1bHQpID0+IHtcbiAgICAgICAgICAgIGlmIChyZXN1bHQgPT09IFwiTG9nb3V0XCIpe1xuICAgICAgICAgICAgICAgIHRoaXMubmF2Lm5hdmlnYXRlKFtcIi9sb2dpblwiXSk7XG4gICAgICAgICAgICB9XG59KTtcbiAgICB9XG59XG4iXX0=