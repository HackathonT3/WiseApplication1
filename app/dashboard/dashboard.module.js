"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var dashboard_routing_module_1 = require("./dashboard-routing.module");
var common_1 = require("nativescript-angular/common");
var dashboard_component_1 = require("./dashboard.component");
var photos_service_1 = require("~/core/photos.service");
var local_storage_service_1 = require("~/core/local-storage.service");
var camera_service_1 = require("~/core/camera.service");
var page_1 = require("ui/page");
var fileReader_service_1 = require("~/core/fileReader.service");
var nativescript_angular_1 = require("nativescript-angular");
var action_button_module_1 = require("./action-button/action-button.module");
var landmarks_service_1 = require("./landmarks-service");
var animations_service_1 = require("./animations-service");
var DashboardModule = /** @class */ (function () {
    function DashboardModule() {
    }
    DashboardModule = __decorate([
        core_1.NgModule({
            declarations: [dashboard_component_1.DashboardComponent],
            imports: [
                dashboard_routing_module_1.DashboardRoutingModule,
                common_1.NativeScriptCommonModule,
                action_button_module_1.ActionButtonModule
            ],
            schemas: [core_1.NO_ERRORS_SCHEMA],
            providers: [photos_service_1.PhotosService, local_storage_service_1.LocalStorage, camera_service_1.CameraService, page_1.Page, fileReader_service_1.FileReaderService, nativescript_angular_1.ModalDialogService, landmarks_service_1.LandmarksService, animations_service_1.AnimationsService]
        })
    ], DashboardModule);
    return DashboardModule;
}());
exports.DashboardModule = DashboardModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGFzaGJvYXJkLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImRhc2hib2FyZC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBOEY7QUFFOUYsdUVBQW9FO0FBQ3BFLHNEQUF1RTtBQUN2RSw2REFBMkQ7QUFDM0Qsd0RBQW9EO0FBQ3BELHNFQUEwRDtBQUMxRCx3REFBb0Q7QUFDcEQsZ0NBQTZCO0FBQzdCLGdFQUE0RDtBQUM1RCw2REFBd0Q7QUFDeEQsNkVBQTBFO0FBQzFFLHlEQUF1RDtBQUN2RCwyREFBeUQ7QUFjekQ7SUFBQTtJQUErQixDQUFDO0lBQW5CLGVBQWU7UUFYM0IsZUFBUSxDQUFDO1lBQ1IsWUFBWSxFQUFFLENBQUMsd0NBQWtCLENBQUM7WUFDbEMsT0FBTyxFQUFFO2dCQUNQLGlEQUFzQjtnQkFDdEIsaUNBQXdCO2dCQUN4Qix5Q0FBa0I7YUFDbkI7WUFDRCxPQUFPLEVBQUUsQ0FBQyx1QkFBZ0IsQ0FBQztZQUMzQixTQUFTLEVBQUcsQ0FBQyw4QkFBYSxFQUFDLG9DQUFZLEVBQUMsOEJBQWEsRUFBQyxXQUFJLEVBQUMsc0NBQWlCLEVBQUMseUNBQWtCLEVBQUMsb0NBQWdCLEVBQUMsc0NBQWlCLENBQUM7U0FFcEksQ0FBQztPQUNXLGVBQWUsQ0FBSTtJQUFELHNCQUFDO0NBQUEsQUFBaEMsSUFBZ0M7QUFBbkIsMENBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NoYW5nZURldGVjdG9yUmVmLCBOZ01vZHVsZSwgTk9fRVJST1JTX1NDSEVNQSwgVmlld0NvbnRhaW5lclJlZn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IERhc2hib2FyZFJvdXRpbmdNb2R1bGUgfSBmcm9tICcuL2Rhc2hib2FyZC1yb3V0aW5nLm1vZHVsZSc7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRDb21tb25Nb2R1bGUgfSBmcm9tICduYXRpdmVzY3JpcHQtYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgRGFzaGJvYXJkQ29tcG9uZW50IH0gZnJvbSAnLi9kYXNoYm9hcmQuY29tcG9uZW50JztcbmltcG9ydCB7UGhvdG9zU2VydmljZX0gZnJvbSBcIn4vY29yZS9waG90b3Muc2VydmljZVwiO1xuaW1wb3J0IHtMb2NhbFN0b3JhZ2V9IGZyb20gXCJ+L2NvcmUvbG9jYWwtc3RvcmFnZS5zZXJ2aWNlXCI7XG5pbXBvcnQge0NhbWVyYVNlcnZpY2V9IGZyb20gXCJ+L2NvcmUvY2FtZXJhLnNlcnZpY2VcIjtcbmltcG9ydCB7UGFnZX0gZnJvbSBcInVpL3BhZ2VcIjtcbmltcG9ydCB7RmlsZVJlYWRlclNlcnZpY2V9IGZyb20gXCJ+L2NvcmUvZmlsZVJlYWRlci5zZXJ2aWNlXCI7XG5pbXBvcnQge01vZGFsRGlhbG9nU2VydmljZX0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyXCI7XG5pbXBvcnQgeyBBY3Rpb25CdXR0b25Nb2R1bGUgfSBmcm9tIFwiLi9hY3Rpb24tYnV0dG9uL2FjdGlvbi1idXR0b24ubW9kdWxlXCI7XG5pbXBvcnQgeyBMYW5kbWFya3NTZXJ2aWNlIH0gZnJvbSAnLi9sYW5kbWFya3Mtc2VydmljZSc7XG5pbXBvcnQgeyBBbmltYXRpb25zU2VydmljZSB9IGZyb20gJy4vYW5pbWF0aW9ucy1zZXJ2aWNlJztcblxuXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFtEYXNoYm9hcmRDb21wb25lbnRdLFxuICBpbXBvcnRzOiBbXG4gICAgRGFzaGJvYXJkUm91dGluZ01vZHVsZSxcbiAgICBOYXRpdmVTY3JpcHRDb21tb25Nb2R1bGUsXG4gICAgQWN0aW9uQnV0dG9uTW9kdWxlXG4gIF0sXG4gIHNjaGVtYXM6IFtOT19FUlJPUlNfU0NIRU1BXSxcbiAgcHJvdmlkZXJzIDogW1Bob3Rvc1NlcnZpY2UsTG9jYWxTdG9yYWdlLENhbWVyYVNlcnZpY2UsUGFnZSxGaWxlUmVhZGVyU2VydmljZSxNb2RhbERpYWxvZ1NlcnZpY2UsTGFuZG1hcmtzU2VydmljZSxBbmltYXRpb25zU2VydmljZV1cblxufSlcbmV4cG9ydCBjbGFzcyBEYXNoYm9hcmRNb2R1bGUgeyB9XG4iXX0=