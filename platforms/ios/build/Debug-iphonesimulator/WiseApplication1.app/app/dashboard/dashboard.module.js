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
var DashboardModule = /** @class */ (function () {
    function DashboardModule() {
    }
    DashboardModule = __decorate([
        core_1.NgModule({
            declarations: [dashboard_component_1.DashboardComponent],
            imports: [
                dashboard_routing_module_1.DashboardRoutingModule,
                common_1.NativeScriptCommonModule
            ],
            schemas: [core_1.NO_ERRORS_SCHEMA],
            providers: [photos_service_1.PhotosService, local_storage_service_1.LocalStorage, camera_service_1.CameraService, page_1.Page, fileReader_service_1.FileReaderService, nativescript_angular_1.ModalDialogService]
        })
    ], DashboardModule);
    return DashboardModule;
}());
exports.DashboardModule = DashboardModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGFzaGJvYXJkLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImRhc2hib2FyZC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBOEY7QUFFOUYsdUVBQW9FO0FBQ3BFLHNEQUF1RTtBQUN2RSw2REFBMkQ7QUFDM0Qsd0RBQW9EO0FBQ3BELHNFQUEwRDtBQUMxRCx3REFBb0Q7QUFDcEQsZ0NBQTZCO0FBQzdCLGdFQUE0RDtBQUM1RCw2REFBd0Q7QUFheEQ7SUFBQTtJQUErQixDQUFDO0lBQW5CLGVBQWU7UUFWM0IsZUFBUSxDQUFDO1lBQ1IsWUFBWSxFQUFFLENBQUMsd0NBQWtCLENBQUM7WUFDbEMsT0FBTyxFQUFFO2dCQUNQLGlEQUFzQjtnQkFDdEIsaUNBQXdCO2FBQ3pCO1lBQ0QsT0FBTyxFQUFFLENBQUMsdUJBQWdCLENBQUM7WUFDM0IsU0FBUyxFQUFHLENBQUMsOEJBQWEsRUFBQyxvQ0FBWSxFQUFDLDhCQUFhLEVBQUMsV0FBSSxFQUFDLHNDQUFpQixFQUFDLHlDQUFrQixDQUFDO1NBRWpHLENBQUM7T0FDVyxlQUFlLENBQUk7SUFBRCxzQkFBQztDQUFBLEFBQWhDLElBQWdDO0FBQW5CLDBDQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDaGFuZ2VEZXRlY3RvclJlZiwgTmdNb2R1bGUsIE5PX0VSUk9SU19TQ0hFTUEsIFZpZXdDb250YWluZXJSZWZ9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBEYXNoYm9hcmRSb3V0aW5nTW9kdWxlIH0gZnJvbSAnLi9kYXNoYm9hcmQtcm91dGluZy5tb2R1bGUnO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Q29tbW9uTW9kdWxlIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IERhc2hib2FyZENvbXBvbmVudCB9IGZyb20gJy4vZGFzaGJvYXJkLmNvbXBvbmVudCc7XG5pbXBvcnQge1Bob3Rvc1NlcnZpY2V9IGZyb20gXCJ+L2NvcmUvcGhvdG9zLnNlcnZpY2VcIjtcbmltcG9ydCB7TG9jYWxTdG9yYWdlfSBmcm9tIFwifi9jb3JlL2xvY2FsLXN0b3JhZ2Uuc2VydmljZVwiO1xuaW1wb3J0IHtDYW1lcmFTZXJ2aWNlfSBmcm9tIFwifi9jb3JlL2NhbWVyYS5zZXJ2aWNlXCI7XG5pbXBvcnQge1BhZ2V9IGZyb20gXCJ1aS9wYWdlXCI7XG5pbXBvcnQge0ZpbGVSZWFkZXJTZXJ2aWNlfSBmcm9tIFwifi9jb3JlL2ZpbGVSZWFkZXIuc2VydmljZVwiO1xuaW1wb3J0IHtNb2RhbERpYWxvZ1NlcnZpY2V9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhclwiO1xuXG5cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW0Rhc2hib2FyZENvbXBvbmVudF0sXG4gIGltcG9ydHM6IFtcbiAgICBEYXNoYm9hcmRSb3V0aW5nTW9kdWxlLFxuICAgIE5hdGl2ZVNjcmlwdENvbW1vbk1vZHVsZVxuICBdLFxuICBzY2hlbWFzOiBbTk9fRVJST1JTX1NDSEVNQV0sXG4gIHByb3ZpZGVycyA6IFtQaG90b3NTZXJ2aWNlLExvY2FsU3RvcmFnZSxDYW1lcmFTZXJ2aWNlLFBhZ2UsRmlsZVJlYWRlclNlcnZpY2UsTW9kYWxEaWFsb2dTZXJ2aWNlXVxuXG59KVxuZXhwb3J0IGNsYXNzIERhc2hib2FyZE1vZHVsZSB7IH1cbiJdfQ==