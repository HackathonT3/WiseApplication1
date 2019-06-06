"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("nativescript-angular/common");
var login_component_1 = require("./login.component");
var login_routing_module_1 = require("./login-routing.module");
var school_search_component_1 = require("./school-search/school-search.component");
var nativescript_angular_1 = require("nativescript-angular");
var LoginModule = /** @class */ (function () {
    function LoginModule() {
    }
    LoginModule = __decorate([
        core_1.NgModule({
            declarations: [login_component_1.LoginComponent, school_search_component_1.SchoolSearchComponent],
            imports: [
                common_1.NativeScriptCommonModule,
                login_routing_module_1.LoginRoutingModule,
                nativescript_angular_1.NativeScriptFormsModule
            ],
            schemas: [core_1.NO_ERRORS_SCHEMA],
            entryComponents: [school_search_component_1.SchoolSearchComponent]
        })
    ], LoginModule);
    return LoginModule;
}());
exports.LoginModule = LoginModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4ubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibG9naW4ubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJEO0FBQzNELHNEQUF1RTtBQUN2RSxxREFBbUQ7QUFDbkQsK0RBQTREO0FBQzVELG1GQUFnRjtBQUNoRiw2REFBK0Q7QUFZL0Q7SUFBQTtJQUEyQixDQUFDO0lBQWYsV0FBVztRQVZ2QixlQUFRLENBQUM7WUFDTixZQUFZLEVBQUUsQ0FBQyxnQ0FBYyxFQUFFLCtDQUFxQixDQUFDO1lBQ3JELE9BQU8sRUFBRTtnQkFDTCxpQ0FBd0I7Z0JBQ3hCLHlDQUFrQjtnQkFDbEIsOENBQXVCO2FBQzFCO1lBQ0QsT0FBTyxFQUFFLENBQUMsdUJBQWdCLENBQUM7WUFDM0IsZUFBZSxFQUFFLENBQUMsK0NBQXFCLENBQUM7U0FDM0MsQ0FBQztPQUNXLFdBQVcsQ0FBSTtJQUFELGtCQUFDO0NBQUEsQUFBNUIsSUFBNEI7QUFBZixrQ0FBVyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBOT19FUlJPUlNfU0NIRU1BIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRDb21tb25Nb2R1bGUgfSBmcm9tICduYXRpdmVzY3JpcHQtYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTG9naW5Db21wb25lbnQgfSBmcm9tICcuL2xvZ2luLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBMb2dpblJvdXRpbmdNb2R1bGUgfSBmcm9tICcuL2xvZ2luLXJvdXRpbmcubW9kdWxlJztcbmltcG9ydCB7IFNjaG9vbFNlYXJjaENvbXBvbmVudCB9IGZyb20gJy4vc2Nob29sLXNlYXJjaC9zY2hvb2wtc2VhcmNoLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRGb3Jtc01vZHVsZSB9IGZyb20gJ25hdGl2ZXNjcmlwdC1hbmd1bGFyJztcblxuQE5nTW9kdWxlKHtcbiAgICBkZWNsYXJhdGlvbnM6IFtMb2dpbkNvbXBvbmVudCwgU2Nob29sU2VhcmNoQ29tcG9uZW50XSxcbiAgICBpbXBvcnRzOiBbXG4gICAgICAgIE5hdGl2ZVNjcmlwdENvbW1vbk1vZHVsZSxcbiAgICAgICAgTG9naW5Sb3V0aW5nTW9kdWxlLFxuICAgICAgICBOYXRpdmVTY3JpcHRGb3Jtc01vZHVsZVxuICAgIF0sXG4gICAgc2NoZW1hczogW05PX0VSUk9SU19TQ0hFTUFdLFxuICAgIGVudHJ5Q29tcG9uZW50czogW1NjaG9vbFNlYXJjaENvbXBvbmVudF1cbn0pXG5leHBvcnQgY2xhc3MgTG9naW5Nb2R1bGUgeyB9XG4iXX0=