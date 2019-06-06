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
var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(photosService, camera, page, fileReader, modal, vref, cd) {
        this.photosService = photosService;
        this.camera = camera;
        this.page = page;
        this.fileReader = fileReader;
        this.modal = modal;
        this.vref = vref;
        this.cd = cd;
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
    DashboardComponent = __decorate([
        core_1.Component({
            selector: 'ns-dashboard',
            templateUrl: './dashboard.component.html',
            styleUrls: ['./dashboard.component.css'],
            moduleId: module.id,
        }),
        __metadata("design:paramtypes", [photos_service_1.PhotosService, camera_service_1.CameraService, page_1.Page, fileReader_service_1.FileReaderService, modal_dialog_1.ModalDialogService, core_1.ViewContainerRef, core_1.ChangeDetectorRef])
    ], DashboardComponent);
    return DashboardComponent;
}());
exports.DashboardComponent = DashboardComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGFzaGJvYXJkLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImRhc2hib2FyZC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBdUY7QUFDdkYsZ0NBQStCO0FBQy9CLHFDQUFrQztBQUNsQyx5REFBdUQ7QUFDdkQseURBQXVEO0FBQ3ZELGlFQUErRDtBQUMvRCw4REFBNEQ7QUFDNUQsa0VBQTJGO0FBRTNGLHVEQUFvRDtBQVFwRDtJQWVFLDRCQUFvQixhQUE0QixFQUFVLE1BQXFCLEVBQVUsSUFBVSxFQUFVLFVBQTZCLEVBQVUsS0FBeUIsRUFBVSxJQUFzQixFQUFVLEVBQXFCO1FBQXhOLGtCQUFhLEdBQWIsYUFBYSxDQUFlO1FBQVUsV0FBTSxHQUFOLE1BQU0sQ0FBZTtRQUFVLFNBQUksR0FBSixJQUFJLENBQU07UUFBVSxlQUFVLEdBQVYsVUFBVSxDQUFtQjtRQUFVLFVBQUssR0FBTCxLQUFLLENBQW9CO1FBQVUsU0FBSSxHQUFKLElBQUksQ0FBa0I7UUFBVSxPQUFFLEdBQUYsRUFBRSxDQUFtQjtRQWI1TyxpRkFBaUY7UUFFakYsZUFBVSxHQUFXLGlCQUFNLENBQUMsVUFBVSxDQUFDLFNBQVMsR0FBRyxPQUFPLENBQUM7UUFDM0QsZ0JBQVcsR0FBVyxJQUFJLENBQUMsVUFBVSxDQUFDO1FBRXRDLFdBQU0sR0FBYSxFQUFFLENBQUM7UUFFdEIsY0FBUyxHQUFVLEVBQUUsQ0FBQztRQUV0QixZQUFPLEdBQVUsRUFBRSxDQUFDO1FBRXBCLGVBQVUsR0FBVyxHQUFHLENBQUM7UUFrRHpCLGtCQUFhLEdBQVcsTUFBTSxDQUFDO1FBL0M3QixJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDN0MsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO0lBQ3hCLENBQUM7SUFFRCxxQ0FBUSxHQUFSO1FBQ0UsSUFBSSxDQUFDLElBQUksQ0FBQyxlQUFlLEdB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QWlCLEVBQWlCLGlDQUFrQixFQUFnQix1QkFBZ0IsRUFBYyx3QkFBaUI7T0Fmak8sa0JBQWtCLENBbUY5QjtJQUFELHlCQUFDO0NBQUEsQUFuRkQsSUFtRkM7QUFuRlksZ0RBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIFZpZXdDb250YWluZXJSZWYsIENoYW5nZURldGVjdG9yUmVmIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFBhZ2UgfSBmcm9tIFwidWkvcGFnZVwiO1xuaW1wb3J0IHsgc2NyZWVuIH0gZnJvbSBcInBsYXRmb3JtXCI7XG5pbXBvcnQgeyBQaG90b3NTZXJ2aWNlIH0gZnJvbSBcIi4uL2NvcmUvcGhvdG9zLnNlcnZpY2VcIjtcbmltcG9ydCB7IENhbWVyYVNlcnZpY2UgfSBmcm9tIFwiLi4vY29yZS9jYW1lcmEuc2VydmljZVwiO1xuaW1wb3J0IHsgRmlsZVJlYWRlclNlcnZpY2UgfSBmcm9tIFwiLi4vY29yZS9maWxlUmVhZGVyLnNlcnZpY2VcIjtcbmltcG9ydCB7IEZpbHRlckNvbXBvbmVudCB9IGZyb20gXCIuL2ZpbHRlci9maWx0ZXIuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBNb2RhbERpYWxvZ09wdGlvbnMsIE1vZGFsRGlhbG9nU2VydmljZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9tb2RhbC1kaWFsb2dcIjtcbmltcG9ydCB7IFNlYXJjaEJhciB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL3NlYXJjaC1iYXJcIjtcbmltcG9ydCB7IGFsZXJ0IH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvZGlhbG9nc1wiO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICducy1kYXNoYm9hcmQnLFxuICB0ZW1wbGF0ZVVybDogJy4vZGFzaGJvYXJkLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vZGFzaGJvYXJkLmNvbXBvbmVudC5jc3MnXSxcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbn0pXG5leHBvcnQgY2xhc3MgRGFzaGJvYXJkQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICAvLyBnaXRodWIgcmVwbyBsaW5rIC0gaHR0cHM6Ly9naXRodWIuY29tL2t1bWFyYW5kZW5hL25hdGl2ZXNjcmlwdC1pbnN0YWdyYW0tY2xvbmVcblxuICBwaG90b1dpZHRoOiBudW1iZXIgPSBzY3JlZW4ubWFpblNjcmVlbi53aWR0aERJUHMgKiAwLjMzMzMzO1xuICBwaG90b0hlaWdodDogbnVtYmVyID0gdGhpcy5waG90b1dpZHRoO1xuXG4gIHBob3Rvczogc3RyaW5nW10gPSBbXTtcblxuICBpbnN0YWdyYW06IGFueVtdID0gW107XG5cbiAgY291cnNlczogYW55W10gPSBbXTtcblxuICBpc1NlbGVjdGVkOiBzdHJpbmcgPSAnMCc7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBwaG90b3NTZXJ2aWNlOiBQaG90b3NTZXJ2aWNlLCBwcml2YXRlIGNhbWVyYTogQ2FtZXJhU2VydmljZSwgcHJpdmF0ZSBwYWdlOiBQYWdlLCBwcml2YXRlIGZpbGVSZWFkZXI6IEZpbGVSZWFkZXJTZXJ2aWNlLCBwcml2YXRlIG1vZGFsOiBNb2RhbERpYWxvZ1NlcnZpY2UsIHByaXZhdGUgdnJlZjogVmlld0NvbnRhaW5lclJlZiwgcHJpdmF0ZSBjZDogQ2hhbmdlRGV0ZWN0b3JSZWYpIHtcbiAgICB0aGlzLnBob3RvcyA9IHRoaXMucGhvdG9zU2VydmljZS5nZXRQaG90b3MoKTtcbiAgICB0aGlzLmxldHNJbml0aWFsaXplKCk7XG4gIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLnBhZ2UuYWN0aW9uQmFySGlkZGVuID0gdHJ1ZTtcbiAgICB0aGlzLmNvdXJzZXMucHVzaChcIkVjb25vbWljc1wiKTtcbiAgICB0aGlzLmNvdXJzZXMucHVzaChcIlBlcnNvbmFsIEZpbmFuY2VcIik7XG4gIH1cblxuICBsZXRzSW5pdGlhbGl6ZSgpIHtcbiAgICB0aGlzLmZpbGVSZWFkZXIucmVhZEpTT04oJy9jb3JlL2luc3RhZ3JhbS5qc29uJykudGhlbihcbiAgICAgICAgcmVzID0+IHtcbiAgICAgICAgICB0aGlzLmluc3RhZ3JhbSA9IHJlc1tcImluc3RhZ3JhbVwiXTtcbiAgICAgICAgfSxcbiAgICAgICAgZXJyID0+IHtcbiAgICAgICAgICBjb25zb2xlLmxvZygnRXJyb3IgcmVhZGluZyBqc29uOiAnICsgSlNPTi5zdHJpbmdpZnkoZXJyKSk7XG4gICAgICAgIH1cbiAgICApXG4gIH1cblxuICB0YWtlUGhvdG8oKSB7XG4gICAgdGhpcy5jYW1lcmEudGFrZVBob3RvKClcbiAgICAgICAgLnRoZW4oaW1hZ2VBc3NldCA9PiB7XG4gICAgICAgICAgdGhpcy5vbk5hdnRhcCgnbG9hZGluZycsICcnKTtcbiAgICAgICAgICBjb25zdCBvcHRpb25zOiBNb2RhbERpYWxvZ09wdGlvbnMgPSB7XG4gICAgICAgICAgICBjb250ZXh0OiBpbWFnZUFzc2V0LFxuICAgICAgICAgICAgdmlld0NvbnRhaW5lclJlZjogdGhpcy52cmVmLFxuICAgICAgICAgICAgZnVsbHNjcmVlbjogdHJ1ZVxuICAgICAgICAgIH07XG4gICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7IC8vaHR0cHM6Ly9naXRodWIuY29tL05hdGl2ZVNjcmlwdC9OYXRpdmVTY3JpcHQvaXNzdWVzLzU3NDQjaXNzdWVjb21tZW50LTM4NDU4OTczOVxuICAgICAgICAgICAgdGhpcy5tb2RhbC5zaG93TW9kYWwoRmlsdGVyQ29tcG9uZW50LCBvcHRpb25zKS50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICBpZiAocmVzcG9uc2UgPT0gJ3N1Y2Nlc3MnKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5vbk5hdnRhcCgncHJvZmlsZScsICc0Jyk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5vbk5hdnRhcCgnaG9tZScsICcwJyk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sIGVycm9yID0+IHtcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfSwgMTAwMCk7XG4gICAgICAgIH0pLmNhdGNoKGVyciA9PiB7XG4gICAgICBjb25zb2xlLmxvZyhlcnIubWVzc2FnZSk7XG4gICAgfSk7XG4gIH1cblxuICBzZWxlY3RlZFJvdXRlOiBzdHJpbmcgPSAnaG9tZSc7XG5cbiAgb25OYXZ0YXAocm91dGU6IHN0cmluZywgc2VsZWN0ZWRUYWI6IHN0cmluZykge1xuICAgIHRoaXMuaXNTZWxlY3RlZCA9IHNlbGVjdGVkVGFiO1xuICAgIHRoaXMuc2VsZWN0ZWRSb3V0ZSA9IHJvdXRlO1xuICAgIHRoaXMuY2QuZGV0ZWN0Q2hhbmdlcygpO1xuICB9XG5cbiAgYWxlcnQobWVzc2FnZTogc3RyaW5nKSB7XG4gICAgcmV0dXJuIGFsZXJ0KHtcbiAgICAgICAgdGl0bGU6IFwiQ2hhbmdlIENvdXJzZVwiLFxuICAgICAgICBva0J1dHRvblRleHQ6IFwiT0tcIixcbiAgICAgICAgbWVzc2FnZTogbWVzc2FnZVxuICAgIH0pO1xuICB9XG5cbiAgb25Db3Vyc2VUYXAoYXJncykge1xuICAgIGxldCBjb3Vyc2UgPSB0aGlzLmNvdXJzZXNbYXJncy5pbmRleF07XG4gICAgdGhpcy5hbGVydChcIllvdSBoYXZlIGNoYW5nZWQgdG8gY291cnNlOiBcIiArIGNvdXJzZSk7XG4gIH1cbn1cbiJdfQ==