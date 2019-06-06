"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var routes = [
    { path: "", redirectTo: "/welcome", pathMatch: "full" },
    { path: "welcome", loadChildren: "./welcome/welcome.module#WelcomeModule" },
    { path: "home", loadChildren: "./home/home.module#HomeModule" },
    { path: "student-register", loadChildren: "./register/student-register.module#StudentRegisterModule" },
    { path: "login", loadChildren: "./login/login.module#LoginModule" },
    { path: "dashboard", loadChildren: "./dashboard/dashboard.module#DashboardModule" },
    { path: "classes", loadChildren: "./classes/classes.module#ClassesModule" },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [
                router_1.NativeScriptRouterModule.forRoot(routes)
            ],
            exports: [router_1.NativeScriptRouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLXJvdXRpbmcubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXBwLXJvdXRpbmcubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXlDO0FBR3pDLHNEQUF1RTtBQUV2RSxJQUFNLE1BQU0sR0FBVztJQUNuQixFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsVUFBVSxFQUFFLFVBQVUsRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFO0lBQ3ZELEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsd0NBQXdDLEVBQUU7SUFDM0UsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSwrQkFBK0IsRUFBRTtJQUMvRCxFQUFFLElBQUksRUFBRSxrQkFBa0IsRUFBRSxZQUFZLEVBQUUsMERBQTBELEVBQUU7SUFDdEcsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLFlBQVksRUFBRSxrQ0FBa0MsRUFBRTtJQUNuRSxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUUsWUFBWSxFQUFFLDhDQUE4QyxFQUFFO0lBQ25GLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsd0NBQXdDLEVBQUU7Q0FDOUUsQ0FBQztBQVFGO0lBQUE7SUFBZ0MsQ0FBQztJQUFwQixnQkFBZ0I7UUFONUIsZUFBUSxDQUFDO1lBQ04sT0FBTyxFQUFFO2dCQUNMLGlDQUF3QixDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUM7YUFDM0M7WUFDRCxPQUFPLEVBQUUsQ0FBQyxpQ0FBd0IsQ0FBQztTQUN0QyxDQUFDO09BQ1csZ0JBQWdCLENBQUk7SUFBRCx1QkFBQztDQUFBLEFBQWpDLElBQWlDO0FBQXBCLDRDQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFJvdXRlcyB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcblxuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xuXG5jb25zdCByb3V0ZXM6IFJvdXRlcyA9IFtcbiAgICB7IHBhdGg6IFwiXCIsIHJlZGlyZWN0VG86IFwiL3dlbGNvbWVcIiwgcGF0aE1hdGNoOiBcImZ1bGxcIiB9LFxuICAgIHsgcGF0aDogXCJ3ZWxjb21lXCIsIGxvYWRDaGlsZHJlbjogXCIuL3dlbGNvbWUvd2VsY29tZS5tb2R1bGUjV2VsY29tZU1vZHVsZVwiIH0sXG4gICAgeyBwYXRoOiBcImhvbWVcIiwgbG9hZENoaWxkcmVuOiBcIi4vaG9tZS9ob21lLm1vZHVsZSNIb21lTW9kdWxlXCIgfSxcbiAgICB7IHBhdGg6IFwic3R1ZGVudC1yZWdpc3RlclwiLCBsb2FkQ2hpbGRyZW46IFwiLi9yZWdpc3Rlci9zdHVkZW50LXJlZ2lzdGVyLm1vZHVsZSNTdHVkZW50UmVnaXN0ZXJNb2R1bGVcIiB9LFxuICAgIHsgcGF0aDogXCJsb2dpblwiLCBsb2FkQ2hpbGRyZW46IFwiLi9sb2dpbi9sb2dpbi5tb2R1bGUjTG9naW5Nb2R1bGVcIiB9LFxuICAgIHsgcGF0aDogXCJkYXNoYm9hcmRcIiwgbG9hZENoaWxkcmVuOiBcIi4vZGFzaGJvYXJkL2Rhc2hib2FyZC5tb2R1bGUjRGFzaGJvYXJkTW9kdWxlXCIgfSxcbiAgICB7IHBhdGg6IFwiY2xhc3Nlc1wiLCBsb2FkQ2hpbGRyZW46IFwiLi9jbGFzc2VzL2NsYXNzZXMubW9kdWxlI0NsYXNzZXNNb2R1bGVcIiB9LFxuXTtcblxuQE5nTW9kdWxlKHtcbiAgICBpbXBvcnRzOiBbXG4gICAgICAgIE5hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZS5mb3JSb290KHJvdXRlcylcbiAgICBdLFxuICAgIGV4cG9ydHM6IFtOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGVdXG59KVxuZXhwb3J0IGNsYXNzIEFwcFJvdXRpbmdNb2R1bGUgeyB9XG4iXX0=