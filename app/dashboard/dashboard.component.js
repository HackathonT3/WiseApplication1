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
        this.isSelected = '0';
        this.selectedRoute = 'home';
        this.photos = this.photosService.getPhotos();
        this.letsInitialize();
    }
    DashboardComponent.prototype.ngOnInit = function () {
        this.page.actionBarHidden = true;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGFzaGJvYXJkLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImRhc2hib2FyZC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBdUY7QUFDdkYsZ0NBQStCO0FBQy9CLHFDQUFrQztBQUNsQyx5REFBdUQ7QUFDdkQseURBQXVEO0FBQ3ZELGlFQUErRDtBQUMvRCw4REFBNEQ7QUFDNUQsa0VBQTJGO0FBUTNGO0lBYUUsNEJBQW9CLGFBQTRCLEVBQVUsTUFBcUIsRUFBVSxJQUFVLEVBQVUsVUFBNkIsRUFBVSxLQUF5QixFQUFVLElBQXNCLEVBQVUsRUFBcUI7UUFBeE4sa0JBQWEsR0FBYixhQUFhLENBQWU7UUFBVSxXQUFNLEdBQU4sTUFBTSxDQUFlO1FBQVUsU0FBSSxHQUFKLElBQUksQ0FBTTtRQUFVLGVBQVUsR0FBVixVQUFVLENBQW1CO1FBQVUsVUFBSyxHQUFMLEtBQUssQ0FBb0I7UUFBVSxTQUFJLEdBQUosSUFBSSxDQUFrQjtRQUFVLE9BQUUsR0FBRixFQUFFLENBQW1CO1FBWDVPLGlGQUFpRjtRQUVqRixlQUFVLEdBQVcsaUJBQU0sQ0FBQyxVQUFVLENBQUMsU0FBUyxHQUFHLE9BQU8sQ0FBQztRQUMzRCxnQkFBVyxHQUFXLElBQUksQ0FBQyxVQUFVLENBQUM7UUFFdEMsV0FBTSxHQUFhLEVBQUUsQ0FBQztRQUV0QixjQUFTLEdBQVUsRUFBRSxDQUFDO1FBRXRCLGVBQVUsR0FBVyxHQUFHLENBQUM7UUFnRHpCLGtCQUFhLEdBQVcsTUFBTSxDQUFDO1FBN0M3QixJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDN0MsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO0lBQ3hCLENBQUM7SUFFRCxxQ0FBUSxHQUFSO1FBQ0UsSUFBSSxDQUFDLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDO0lBQ25DLENBQUM7SUFFRCwyQ0FBYyxHQUFkO1FBQUEsaUJBU0M7UUFSQyxJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDLElBQUksQ0FDakQsVUFBQSxHQUFHO1lBQ0QsS0FBSSxDQUFDLFNBQVMsR0FBRyxHQUFHLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDcEMsQ0FBQyxFQUNELFVBQUEsR0FBRztZQUNELE9BQU8sQ0FBQyxHQUFHLENBQUMsc0JBQXNCLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQzVELENBQUMsQ0FDSixDQUFBO0lBQ0gsQ0FBQztJQUVELHNDQUFTLEdBQVQ7UUFBQSxpQkF3QkM7UUF2QkMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLEVBQUU7YUFDbEIsSUFBSSxDQUFDLFVBQUEsVUFBVTtZQUNkLEtBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1lBQzdCLElBQU0sT0FBTyxHQUF1QjtnQkFDbEMsT0FBTyxFQUFFLFVBQVU7Z0JBQ25CLGdCQUFnQixFQUFFLEtBQUksQ0FBQyxJQUFJO2dCQUMzQixVQUFVLEVBQUUsSUFBSTthQUNqQixDQUFDO1lBQ0YsVUFBVSxDQUFDO2dCQUNULEtBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLGtDQUFlLEVBQUUsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUMsUUFBUTtvQkFDM0QsSUFBSSxRQUFRLElBQUksU0FBUyxFQUFFO3dCQUN6QixLQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsRUFBRSxHQUFHLENBQUMsQ0FBQztxQkFDL0I7eUJBQ0k7d0JBQ0gsS0FBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEVBQUUsR0FBRyxDQUFDLENBQUM7cUJBQzVCO2dCQUNILENBQUMsRUFBRSxVQUFBLEtBQUs7b0JBQ04sT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFDckIsQ0FBQyxDQUFDLENBQUM7WUFDTCxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDWCxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsVUFBQSxHQUFHO1lBQ2QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDM0IsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBSUQscUNBQVEsR0FBUixVQUFTLEtBQWEsRUFBRSxXQUFtQjtRQUN6QyxJQUFJLENBQUMsVUFBVSxHQUFHLFdBQVcsQ0FBQztRQUM5QixJQUFJLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQztRQUMzQixJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsRUFBRSxDQUFDO0lBQzFCLENBQUM7SUFqRVUsa0JBQWtCO1FBTjlCLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsY0FBYztZQUN4QixXQUFXLEVBQUUsNEJBQTRCO1lBQ3pDLFNBQVMsRUFBRSxDQUFDLDJCQUEyQixDQUFDO1lBQ3hDLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtTQUNwQixDQUFDO3lDQWNtQyw4QkFBYSxFQUFrQiw4QkFBYSxFQUFnQixXQUFJLEVBQXNCLHNDQUFpQixFQUFpQixpQ0FBa0IsRUFBZ0IsdUJBQWdCLEVBQWMsd0JBQWlCO09BYmpPLGtCQUFrQixDQWtFOUI7SUFBRCx5QkFBQztDQUFBLEFBbEVELElBa0VDO0FBbEVZLGdEQUFrQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBWaWV3Q29udGFpbmVyUmVmLCBDaGFuZ2VEZXRlY3RvclJlZiB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBQYWdlIH0gZnJvbSBcInVpL3BhZ2VcIjtcbmltcG9ydCB7IHNjcmVlbiB9IGZyb20gXCJwbGF0Zm9ybVwiO1xuaW1wb3J0IHsgUGhvdG9zU2VydmljZSB9IGZyb20gXCIuLi9jb3JlL3Bob3Rvcy5zZXJ2aWNlXCI7XG5pbXBvcnQgeyBDYW1lcmFTZXJ2aWNlIH0gZnJvbSBcIi4uL2NvcmUvY2FtZXJhLnNlcnZpY2VcIjtcbmltcG9ydCB7IEZpbGVSZWFkZXJTZXJ2aWNlIH0gZnJvbSBcIi4uL2NvcmUvZmlsZVJlYWRlci5zZXJ2aWNlXCI7XG5pbXBvcnQgeyBGaWx0ZXJDb21wb25lbnQgfSBmcm9tIFwiLi9maWx0ZXIvZmlsdGVyLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgTW9kYWxEaWFsb2dPcHRpb25zLCBNb2RhbERpYWxvZ1NlcnZpY2UgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvbW9kYWwtZGlhbG9nXCI7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25zLWRhc2hib2FyZCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9kYXNoYm9hcmQuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9kYXNoYm9hcmQuY29tcG9uZW50LmNzcyddLFxuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxufSlcbmV4cG9ydCBjbGFzcyBEYXNoYm9hcmRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIC8vIGdpdGh1YiByZXBvIGxpbmsgLSBodHRwczovL2dpdGh1Yi5jb20va3VtYXJhbmRlbmEvbmF0aXZlc2NyaXB0LWluc3RhZ3JhbS1jbG9uZVxuXG4gIHBob3RvV2lkdGg6IG51bWJlciA9IHNjcmVlbi5tYWluU2NyZWVuLndpZHRoRElQcyAqIDAuMzMzMzM7XG4gIHBob3RvSGVpZ2h0OiBudW1iZXIgPSB0aGlzLnBob3RvV2lkdGg7XG5cbiAgcGhvdG9zOiBzdHJpbmdbXSA9IFtdO1xuXG4gIGluc3RhZ3JhbTogYW55W10gPSBbXTtcblxuICBpc1NlbGVjdGVkOiBzdHJpbmcgPSAnMCc7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBwaG90b3NTZXJ2aWNlOiBQaG90b3NTZXJ2aWNlLCBwcml2YXRlIGNhbWVyYTogQ2FtZXJhU2VydmljZSwgcHJpdmF0ZSBwYWdlOiBQYWdlLCBwcml2YXRlIGZpbGVSZWFkZXI6IEZpbGVSZWFkZXJTZXJ2aWNlLCBwcml2YXRlIG1vZGFsOiBNb2RhbERpYWxvZ1NlcnZpY2UsIHByaXZhdGUgdnJlZjogVmlld0NvbnRhaW5lclJlZiwgcHJpdmF0ZSBjZDogQ2hhbmdlRGV0ZWN0b3JSZWYpIHtcbiAgICB0aGlzLnBob3RvcyA9IHRoaXMucGhvdG9zU2VydmljZS5nZXRQaG90b3MoKTtcbiAgICB0aGlzLmxldHNJbml0aWFsaXplKCk7XG4gIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLnBhZ2UuYWN0aW9uQmFySGlkZGVuID0gdHJ1ZTtcbiAgfVxuXG4gIGxldHNJbml0aWFsaXplKCkge1xuICAgIHRoaXMuZmlsZVJlYWRlci5yZWFkSlNPTignL2NvcmUvaW5zdGFncmFtLmpzb24nKS50aGVuKFxuICAgICAgICByZXMgPT4ge1xuICAgICAgICAgIHRoaXMuaW5zdGFncmFtID0gcmVzW1wiaW5zdGFncmFtXCJdO1xuICAgICAgICB9LFxuICAgICAgICBlcnIgPT4ge1xuICAgICAgICAgIGNvbnNvbGUubG9nKCdFcnJvciByZWFkaW5nIGpzb246ICcgKyBKU09OLnN0cmluZ2lmeShlcnIpKTtcbiAgICAgICAgfVxuICAgIClcbiAgfVxuXG4gIHRha2VQaG90bygpIHtcbiAgICB0aGlzLmNhbWVyYS50YWtlUGhvdG8oKVxuICAgICAgICAudGhlbihpbWFnZUFzc2V0ID0+IHtcbiAgICAgICAgICB0aGlzLm9uTmF2dGFwKCdsb2FkaW5nJywgJycpO1xuICAgICAgICAgIGNvbnN0IG9wdGlvbnM6IE1vZGFsRGlhbG9nT3B0aW9ucyA9IHtcbiAgICAgICAgICAgIGNvbnRleHQ6IGltYWdlQXNzZXQsXG4gICAgICAgICAgICB2aWV3Q29udGFpbmVyUmVmOiB0aGlzLnZyZWYsXG4gICAgICAgICAgICBmdWxsc2NyZWVuOiB0cnVlXG4gICAgICAgICAgfTtcbiAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHsgLy9odHRwczovL2dpdGh1Yi5jb20vTmF0aXZlU2NyaXB0L05hdGl2ZVNjcmlwdC9pc3N1ZXMvNTc0NCNpc3N1ZWNvbW1lbnQtMzg0NTg5NzM5XG4gICAgICAgICAgICB0aGlzLm1vZGFsLnNob3dNb2RhbChGaWx0ZXJDb21wb25lbnQsIG9wdGlvbnMpLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAgIGlmIChyZXNwb25zZSA9PSAnc3VjY2VzcycpIHtcbiAgICAgICAgICAgICAgICB0aGlzLm9uTmF2dGFwKCdwcm9maWxlJywgJzQnKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLm9uTmF2dGFwKCdob21lJywgJzAnKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSwgZXJyb3IgPT4ge1xuICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9LCAxMDAwKTtcbiAgICAgICAgfSkuY2F0Y2goZXJyID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKGVyci5tZXNzYWdlKTtcbiAgICB9KTtcbiAgfVxuXG4gIHNlbGVjdGVkUm91dGU6IHN0cmluZyA9ICdob21lJztcblxuICBvbk5hdnRhcChyb3V0ZTogc3RyaW5nLCBzZWxlY3RlZFRhYjogc3RyaW5nKSB7XG4gICAgdGhpcy5pc1NlbGVjdGVkID0gc2VsZWN0ZWRUYWI7XG4gICAgdGhpcy5zZWxlY3RlZFJvdXRlID0gcm91dGU7XG4gICAgdGhpcy5jZC5kZXRlY3RDaGFuZ2VzKCk7XG4gIH1cbn1cbiJdfQ==