"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var student_register_component_1 = require("./student-register.component");
var routes = [
    { path: "", component: student_register_component_1.StudentRegisterComponent }
];
var StudentRegisterRoutingModule = /** @class */ (function () {
    function StudentRegisterRoutingModule() {
    }
    StudentRegisterRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.NativeScriptRouterModule.forChild(routes)],
            exports: [router_1.NativeScriptRouterModule]
        })
    ], StudentRegisterRoutingModule);
    return StudentRegisterRoutingModule;
}());
exports.StudentRegisterRoutingModule = StudentRegisterRoutingModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3R1ZGVudC1yZWdpc3Rlci1yb3V0aW5nLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInN0dWRlbnQtcmVnaXN0ZXItcm91dGluZy5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBeUM7QUFFekMsc0RBQXVFO0FBQ3ZFLDJFQUF3RTtBQUV4RSxJQUFNLE1BQU0sR0FBVztJQUNyQixFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsU0FBUyxFQUFFLHFEQUF3QixFQUFFO0NBQ2xELENBQUM7QUFNRjtJQUFBO0lBQTRDLENBQUM7SUFBaEMsNEJBQTRCO1FBSnhDLGVBQVEsQ0FBQztZQUNSLE9BQU8sRUFBRSxDQUFDLGlDQUF3QixDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUNwRCxPQUFPLEVBQUUsQ0FBQyxpQ0FBd0IsQ0FBQztTQUNwQyxDQUFDO09BQ1csNEJBQTRCLENBQUk7SUFBRCxtQ0FBQztDQUFBLEFBQTdDLElBQTZDO0FBQWhDLG9FQUE0QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXMgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IFN0dWRlbnRSZWdpc3RlckNvbXBvbmVudCB9IGZyb20gJy4vc3R1ZGVudC1yZWdpc3Rlci5jb21wb25lbnQnO1xuXG5jb25zdCByb3V0ZXM6IFJvdXRlcyA9IFtcbiAgeyBwYXRoOiBcIlwiLCBjb21wb25lbnQ6IFN0dWRlbnRSZWdpc3RlckNvbXBvbmVudCB9XG5dO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlLmZvckNoaWxkKHJvdXRlcyldLFxuICBleHBvcnRzOiBbTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlXVxufSlcbmV4cG9ydCBjbGFzcyBTdHVkZW50UmVnaXN0ZXJSb3V0aW5nTW9kdWxlIHsgfVxuIl19