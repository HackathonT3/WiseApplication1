"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var certification_test_routing_module_1 = require("./certification-test-routing.module");
var common_1 = require("nativescript-angular/common");
var certification_test_component_1 = require("./certification-test.component");
var CertificationTestModule = /** @class */ (function () {
    function CertificationTestModule() {
    }
    CertificationTestModule = __decorate([
        core_1.NgModule({
            declarations: [certification_test_component_1.CertificationTestComponent],
            imports: [
                certification_test_routing_module_1.CertificationTestRoutingModule,
                common_1.NativeScriptCommonModule
            ],
            schemas: [core_1.NO_ERRORS_SCHEMA]
        })
    ], CertificationTestModule);
    return CertificationTestModule;
}());
exports.CertificationTestModule = CertificationTestModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2VydGlmaWNhdGlvbi10ZXN0Lm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImNlcnRpZmljYXRpb24tdGVzdC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkQ7QUFFM0QseUZBQXFGO0FBQ3JGLHNEQUF1RTtBQUN2RSwrRUFBNEU7QUFVNUU7SUFBQTtJQUF1QyxDQUFDO0lBQTNCLHVCQUF1QjtRQVJuQyxlQUFRLENBQUM7WUFDUixZQUFZLEVBQUUsQ0FBQyx5REFBMEIsQ0FBQztZQUMxQyxPQUFPLEVBQUU7Z0JBQ1Asa0VBQThCO2dCQUM5QixpQ0FBd0I7YUFDekI7WUFDRCxPQUFPLEVBQUUsQ0FBQyx1QkFBZ0IsQ0FBQztTQUM1QixDQUFDO09BQ1csdUJBQXVCLENBQUk7SUFBRCw4QkFBQztDQUFBLEFBQXhDLElBQXdDO0FBQTNCLDBEQUF1QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBOT19FUlJPUlNfU0NIRU1BIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IENlcnRpZmljYXRpb25UZXN0Um91dGluZ01vZHVsZSB9IGZyb20gJy4vY2VydGlmaWNhdGlvbi10ZXN0LXJvdXRpbmcubW9kdWxlJztcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdENvbW1vbk1vZHVsZSB9IGZyb20gJ25hdGl2ZXNjcmlwdC1hbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBDZXJ0aWZpY2F0aW9uVGVzdENvbXBvbmVudCB9IGZyb20gJy4vY2VydGlmaWNhdGlvbi10ZXN0LmNvbXBvbmVudCc7XG5cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW0NlcnRpZmljYXRpb25UZXN0Q29tcG9uZW50XSxcbiAgaW1wb3J0czogW1xuICAgIENlcnRpZmljYXRpb25UZXN0Um91dGluZ01vZHVsZSxcbiAgICBOYXRpdmVTY3JpcHRDb21tb25Nb2R1bGVcbiAgXSxcbiAgc2NoZW1hczogW05PX0VSUk9SU19TQ0hFTUFdXG59KVxuZXhwb3J0IGNsYXNzIENlcnRpZmljYXRpb25UZXN0TW9kdWxlIHsgfVxuIl19