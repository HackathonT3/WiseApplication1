"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("nativescript-angular/common");
var welcome_routing_module_1 = require("./welcome-routing.module");
var welcome_component_1 = require("./welcome.component");
var welcome_slides_service_1 = require("./welcome-slides.service");
var WelcomeModule = /** @class */ (function () {
    function WelcomeModule() {
    }
    WelcomeModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.NativeScriptCommonModule,
                welcome_routing_module_1.WelcomeRoutingModule,
            ],
            providers: [
                welcome_slides_service_1.WelcomeSlidesService
            ],
            declarations: [
                welcome_component_1.WelcomeComponent
            ],
            schemas: [
                core_1.NO_ERRORS_SCHEMA
            ]
        })
    ], WelcomeModule);
    return WelcomeModule;
}());
exports.WelcomeModule = WelcomeModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2VsY29tZS5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ3ZWxjb21lLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEyRDtBQUMzRCxzREFBdUU7QUFFdkUsbUVBQWdFO0FBRWhFLHlEQUF1RDtBQUV2RCxtRUFBZ0U7QUFpQmhFO0lBQUE7SUFBNkIsQ0FBQztJQUFqQixhQUFhO1FBZnpCLGVBQVEsQ0FBQztZQUNOLE9BQU8sRUFBRTtnQkFDTCxpQ0FBd0I7Z0JBQ3hCLDZDQUFvQjthQUN2QjtZQUNELFNBQVMsRUFBRTtnQkFDUCw2Q0FBb0I7YUFDdkI7WUFDRCxZQUFZLEVBQUU7Z0JBQ1Ysb0NBQWdCO2FBQ25CO1lBQ0QsT0FBTyxFQUFFO2dCQUNMLHVCQUFnQjthQUNuQjtTQUNKLENBQUM7T0FDVyxhQUFhLENBQUk7SUFBRCxvQkFBQztDQUFBLEFBQTlCLElBQThCO0FBQWpCLHNDQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIE5PX0VSUk9SU19TQ0hFTUEgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Q29tbW9uTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2NvbW1vblwiO1xuXG5pbXBvcnQgeyBXZWxjb21lUm91dGluZ01vZHVsZSB9IGZyb20gXCIuL3dlbGNvbWUtcm91dGluZy5tb2R1bGVcIjtcblxuaW1wb3J0IHsgV2VsY29tZUNvbXBvbmVudCB9IGZyb20gXCIuL3dlbGNvbWUuY29tcG9uZW50XCI7XG5cbmltcG9ydCB7IFdlbGNvbWVTbGlkZXNTZXJ2aWNlIH0gZnJvbSBcIi4vd2VsY29tZS1zbGlkZXMuc2VydmljZVwiO1xuXG5ATmdNb2R1bGUoe1xuICAgIGltcG9ydHM6IFtcbiAgICAgICAgTmF0aXZlU2NyaXB0Q29tbW9uTW9kdWxlLFxuICAgICAgICBXZWxjb21lUm91dGluZ01vZHVsZSxcbiAgICBdLFxuICAgIHByb3ZpZGVyczogW1xuICAgICAgICBXZWxjb21lU2xpZGVzU2VydmljZVxuICAgIF0sXG4gICAgZGVjbGFyYXRpb25zOiBbXG4gICAgICAgIFdlbGNvbWVDb21wb25lbnRcbiAgICBdLFxuICAgIHNjaGVtYXM6IFtcbiAgICAgICAgTk9fRVJST1JTX1NDSEVNQVxuICAgIF1cbn0pXG5leHBvcnQgY2xhc3MgV2VsY29tZU1vZHVsZSB7IH1cbiJdfQ==