"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("nativescript-angular/common");
var angular_1 = require("nativescript-ui-sidedrawer/angular");
var angular_2 = require("nativescript-ui-listview/angular");
var angular_3 = require("nativescript-ui-calendar/angular");
var angular_4 = require("nativescript-ui-chart/angular");
var angular_5 = require("nativescript-ui-dataform/angular");
var angular_6 = require("nativescript-ui-autocomplete/angular");
var angular_7 = require("nativescript-ui-gauge/angular");
var forms_1 = require("nativescript-angular/forms");
var details_routing_module_1 = require("./details-routing.module");
var details_component_1 = require("./details.component");
var action_button_module_1 = require("../action-button/action-button.module");
var landmarks_service_1 = require("../landmarks-service");
var animations_service_1 = require("../animations-service");
var DetailsModule = /** @class */ (function () {
    function DetailsModule() {
    }
    DetailsModule = __decorate([
        core_1.NgModule({
            imports: [
                angular_1.NativeScriptUISideDrawerModule,
                angular_2.NativeScriptUIListViewModule,
                angular_3.NativeScriptUICalendarModule,
                angular_4.NativeScriptUIChartModule,
                angular_5.NativeScriptUIDataFormModule,
                angular_6.NativeScriptUIAutoCompleteTextViewModule,
                angular_7.NativeScriptUIGaugeModule,
                common_1.NativeScriptCommonModule,
                details_routing_module_1.DetailsRoutingModule,
                forms_1.NativeScriptFormsModule,
                action_button_module_1.ActionButtonModule
            ],
            declarations: [
                details_component_1.DetailsComponent
            ],
            schemas: [
                core_1.NO_ERRORS_SCHEMA
            ],
            providers: [animations_service_1.AnimationsService, landmarks_service_1.LandmarksService]
        })
    ], DetailsModule);
    return DetailsModule;
}());
exports.DetailsModule = DetailsModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGV0YWlscy5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJkZXRhaWxzLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEyRDtBQUMzRCxzREFBdUU7QUFDdkUsOERBQW9GO0FBQ3BGLDREQUFnRjtBQUNoRiw0REFBZ0Y7QUFDaEYseURBQTBFO0FBQzFFLDREQUFnRjtBQUNoRixnRUFBZ0c7QUFDaEcseURBQTBFO0FBQzFFLG9EQUFxRTtBQUVyRSxtRUFBZ0U7QUFDaEUseURBQXVEO0FBQ3ZELDhFQUEyRTtBQUMzRSwwREFBd0Q7QUFDeEQsNERBQTBEO0FBd0IxRDtJQUFBO0lBQTZCLENBQUM7SUFBakIsYUFBYTtRQXRCekIsZUFBUSxDQUFDO1lBQ1QsT0FBTyxFQUFFO2dCQUNSLHdDQUE4QjtnQkFDOUIsc0NBQTRCO2dCQUM1QixzQ0FBNEI7Z0JBQzVCLG1DQUF5QjtnQkFDekIsc0NBQTRCO2dCQUM1QixrREFBd0M7Z0JBQ3hDLG1DQUF5QjtnQkFDekIsaUNBQXdCO2dCQUN4Qiw2Q0FBb0I7Z0JBQ3BCLCtCQUF1QjtnQkFDdkIseUNBQWtCO2FBQ2xCO1lBQ0QsWUFBWSxFQUFFO2dCQUNiLG9DQUFnQjthQUNoQjtZQUNELE9BQU8sRUFBRTtnQkFDUix1QkFBZ0I7YUFDaEI7WUFDRCxTQUFTLEVBQUUsQ0FBQyxzQ0FBaUIsRUFBRSxvQ0FBZ0IsQ0FBQztTQUNoRCxDQUFDO09BQ1csYUFBYSxDQUFJO0lBQUQsb0JBQUM7Q0FBQSxBQUE5QixJQUE4QjtBQUFqQixzQ0FBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBOT19FUlJPUlNfU0NIRU1BIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdENvbW1vbk1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9jb21tb25cIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdFVJU2lkZURyYXdlck1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtdWktc2lkZWRyYXdlci9hbmd1bGFyXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRVSUxpc3RWaWV3TW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC11aS1saXN0dmlldy9hbmd1bGFyXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRVSUNhbGVuZGFyTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC11aS1jYWxlbmRhci9hbmd1bGFyXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRVSUNoYXJ0TW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC11aS1jaGFydC9hbmd1bGFyXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRVSURhdGFGb3JtTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC11aS1kYXRhZm9ybS9hbmd1bGFyXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRVSUF1dG9Db21wbGV0ZVRleHRWaWV3TW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC11aS1hdXRvY29tcGxldGUvYW5ndWxhclwiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0VUlHYXVnZU1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtdWktZ2F1Z2UvYW5ndWxhclwiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Rm9ybXNNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvZm9ybXNcIjtcblxuaW1wb3J0IHsgRGV0YWlsc1JvdXRpbmdNb2R1bGUgfSBmcm9tIFwiLi9kZXRhaWxzLXJvdXRpbmcubW9kdWxlXCI7XG5pbXBvcnQgeyBEZXRhaWxzQ29tcG9uZW50IH0gZnJvbSBcIi4vZGV0YWlscy5jb21wb25lbnRcIjtcbmltcG9ydCB7IEFjdGlvbkJ1dHRvbk1vZHVsZSB9IGZyb20gXCIuLi9hY3Rpb24tYnV0dG9uL2FjdGlvbi1idXR0b24ubW9kdWxlXCI7XG5pbXBvcnQgeyBMYW5kbWFya3NTZXJ2aWNlIH0gZnJvbSBcIi4uL2xhbmRtYXJrcy1zZXJ2aWNlXCI7XG5pbXBvcnQgeyBBbmltYXRpb25zU2VydmljZSB9IGZyb20gXCIuLi9hbmltYXRpb25zLXNlcnZpY2VcIjtcblxuQE5nTW9kdWxlKHtcblx0aW1wb3J0czogW1xuXHRcdE5hdGl2ZVNjcmlwdFVJU2lkZURyYXdlck1vZHVsZSxcblx0XHROYXRpdmVTY3JpcHRVSUxpc3RWaWV3TW9kdWxlLFxuXHRcdE5hdGl2ZVNjcmlwdFVJQ2FsZW5kYXJNb2R1bGUsXG5cdFx0TmF0aXZlU2NyaXB0VUlDaGFydE1vZHVsZSxcblx0XHROYXRpdmVTY3JpcHRVSURhdGFGb3JtTW9kdWxlLFxuXHRcdE5hdGl2ZVNjcmlwdFVJQXV0b0NvbXBsZXRlVGV4dFZpZXdNb2R1bGUsXG5cdFx0TmF0aXZlU2NyaXB0VUlHYXVnZU1vZHVsZSxcblx0XHROYXRpdmVTY3JpcHRDb21tb25Nb2R1bGUsXG5cdFx0RGV0YWlsc1JvdXRpbmdNb2R1bGUsXG5cdFx0TmF0aXZlU2NyaXB0Rm9ybXNNb2R1bGUsXG5cdFx0QWN0aW9uQnV0dG9uTW9kdWxlXG5cdF0sXG5cdGRlY2xhcmF0aW9uczogW1xuXHRcdERldGFpbHNDb21wb25lbnRcblx0XSxcblx0c2NoZW1hczogW1xuXHRcdE5PX0VSUk9SU19TQ0hFTUFcblx0XSxcblx0cHJvdmlkZXJzOiBbQW5pbWF0aW9uc1NlcnZpY2UsIExhbmRtYXJrc1NlcnZpY2VdXG59KVxuZXhwb3J0IGNsYXNzIERldGFpbHNNb2R1bGUgeyB9Il19