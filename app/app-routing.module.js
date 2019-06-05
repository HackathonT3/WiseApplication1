"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var routes = [
    { path: "", redirectTo: "/welcome", pathMatch: "full" },
    { path: "welcome", loadChildren: "./welcome/welcome.module#WelcomeModule" },
    { path: "home", loadChildren: "./home/home.module#HomeModule" },
    { path: "login", loadChildren: "./login/login.module#LoginModule" },
    { path: "dashboard", loadChildren: "./dashboard/dashboard.module#DashboardModule" },
    { path: "classes", loadChildren: "./classes/classes.module#ClassesModule" },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.NativeScriptRouterModule.forRoot(routes)],
            exports: [router_1.NativeScriptRouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLXJvdXRpbmcubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXBwLXJvdXRpbmcubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXlDO0FBR3pDLHNEQUF1RTtBQUV2RSxJQUFNLE1BQU0sR0FBVztJQUNuQixFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsVUFBVSxFQUFFLFVBQVUsRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFO0lBQ3ZELEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsd0NBQXdDLEVBQUU7SUFDM0UsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSwrQkFBK0IsRUFBRTtJQUMvRCxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsWUFBWSxFQUFFLGtDQUFrQyxFQUFFO0lBQ25FLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRSxZQUFZLEVBQUUsOENBQThDLEVBQUU7SUFDbkYsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSx3Q0FBd0MsRUFBRTtDQUM5RSxDQUFDO0FBTUY7SUFBQTtJQUFnQyxDQUFDO0lBQXBCLGdCQUFnQjtRQUo1QixlQUFRLENBQUM7WUFDTixPQUFPLEVBQUUsQ0FBQyxpQ0FBd0IsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDbkQsT0FBTyxFQUFFLENBQUMsaUNBQXdCLENBQUM7U0FDdEMsQ0FBQztPQUNXLGdCQUFnQixDQUFJO0lBQUQsdUJBQUM7Q0FBQSxBQUFqQyxJQUFpQztBQUFwQiw0Q0FBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBSb3V0ZXMgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5cbmltcG9ydCB7IE5hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXJcIjtcblxuY29uc3Qgcm91dGVzOiBSb3V0ZXMgPSBbXG4gICAgeyBwYXRoOiBcIlwiLCByZWRpcmVjdFRvOiBcIi93ZWxjb21lXCIsIHBhdGhNYXRjaDogXCJmdWxsXCIgfSxcbiAgICB7IHBhdGg6IFwid2VsY29tZVwiLCBsb2FkQ2hpbGRyZW46IFwiLi93ZWxjb21lL3dlbGNvbWUubW9kdWxlI1dlbGNvbWVNb2R1bGVcIiB9LFxuICAgIHsgcGF0aDogXCJob21lXCIsIGxvYWRDaGlsZHJlbjogXCIuL2hvbWUvaG9tZS5tb2R1bGUjSG9tZU1vZHVsZVwiIH0sXG4gICAgeyBwYXRoOiBcImxvZ2luXCIsIGxvYWRDaGlsZHJlbjogXCIuL2xvZ2luL2xvZ2luLm1vZHVsZSNMb2dpbk1vZHVsZVwiIH0sXG4gICAgeyBwYXRoOiBcImRhc2hib2FyZFwiLCBsb2FkQ2hpbGRyZW46IFwiLi9kYXNoYm9hcmQvZGFzaGJvYXJkLm1vZHVsZSNEYXNoYm9hcmRNb2R1bGVcIiB9LFxuICAgIHsgcGF0aDogXCJjbGFzc2VzXCIsIGxvYWRDaGlsZHJlbjogXCIuL2NsYXNzZXMvY2xhc3Nlcy5tb2R1bGUjQ2xhc3Nlc01vZHVsZVwiIH0sXG5dO1xuXG5ATmdNb2R1bGUoe1xuICAgIGltcG9ydHM6IFtOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUuZm9yUm9vdChyb3V0ZXMpXSxcbiAgICBleHBvcnRzOiBbTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlXVxufSlcbmV4cG9ydCBjbGFzcyBBcHBSb3V0aW5nTW9kdWxlIHsgfVxuIl19