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
    { path: "quiz", loadChildren: "./quiz/quiz.module#QuizModule" },
    { path: "selector", loadChildren: "./quiz/selector/selector.module#SelectorModule" },
    { path: "score", loadChildren: "./quiz/score/score.module#ScoreModule" },
    { path: "details", loadChildren: "./dashboard/details/details.module#DetailsModule" }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLXJvdXRpbmcubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXBwLXJvdXRpbmcubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXlDO0FBR3pDLHNEQUF1RTtBQUV2RSxJQUFNLE1BQU0sR0FBVztJQUNuQixFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsVUFBVSxFQUFFLFVBQVUsRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFO0lBQ3ZELEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsd0NBQXdDLEVBQUU7SUFDM0UsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSwrQkFBK0IsRUFBRTtJQUMvRCxFQUFFLElBQUksRUFBRSxrQkFBa0IsRUFBRSxZQUFZLEVBQUUsMERBQTBELEVBQUU7SUFDdEcsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLFlBQVksRUFBRSxrQ0FBa0MsRUFBRTtJQUNuRSxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUUsWUFBWSxFQUFFLDhDQUE4QyxFQUFFO0lBQ25GLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsd0NBQXdDLEVBQUU7SUFDM0UsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSwrQkFBK0IsRUFBRTtJQUMvRCxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUsWUFBWSxFQUFFLGdEQUFnRCxFQUFFO0lBQ3BGLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxZQUFZLEVBQUUsdUNBQXVDLEVBQUU7SUFDeEUsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxrREFBa0QsRUFBRTtDQUN4RixDQUFDO0FBUUY7SUFBQTtJQUFnQyxDQUFDO0lBQXBCLGdCQUFnQjtRQU41QixlQUFRLENBQUM7WUFDTixPQUFPLEVBQUU7Z0JBQ0wsaUNBQXdCLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQzthQUMzQztZQUNELE9BQU8sRUFBRSxDQUFDLGlDQUF3QixDQUFDO1NBQ3RDLENBQUM7T0FDVyxnQkFBZ0IsQ0FBSTtJQUFELHVCQUFDO0NBQUEsQUFBakMsSUFBaUM7QUFBcEIsNENBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgUm91dGVzIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuXG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XG5cbmNvbnN0IHJvdXRlczogUm91dGVzID0gW1xuICAgIHsgcGF0aDogXCJcIiwgcmVkaXJlY3RUbzogXCIvd2VsY29tZVwiLCBwYXRoTWF0Y2g6IFwiZnVsbFwiIH0sXG4gICAgeyBwYXRoOiBcIndlbGNvbWVcIiwgbG9hZENoaWxkcmVuOiBcIi4vd2VsY29tZS93ZWxjb21lLm1vZHVsZSNXZWxjb21lTW9kdWxlXCIgfSxcbiAgICB7IHBhdGg6IFwiaG9tZVwiLCBsb2FkQ2hpbGRyZW46IFwiLi9ob21lL2hvbWUubW9kdWxlI0hvbWVNb2R1bGVcIiB9LFxuICAgIHsgcGF0aDogXCJzdHVkZW50LXJlZ2lzdGVyXCIsIGxvYWRDaGlsZHJlbjogXCIuL3JlZ2lzdGVyL3N0dWRlbnQtcmVnaXN0ZXIubW9kdWxlI1N0dWRlbnRSZWdpc3Rlck1vZHVsZVwiIH0sXG4gICAgeyBwYXRoOiBcImxvZ2luXCIsIGxvYWRDaGlsZHJlbjogXCIuL2xvZ2luL2xvZ2luLm1vZHVsZSNMb2dpbk1vZHVsZVwiIH0sXG4gICAgeyBwYXRoOiBcImRhc2hib2FyZFwiLCBsb2FkQ2hpbGRyZW46IFwiLi9kYXNoYm9hcmQvZGFzaGJvYXJkLm1vZHVsZSNEYXNoYm9hcmRNb2R1bGVcIiB9LFxuICAgIHsgcGF0aDogXCJjbGFzc2VzXCIsIGxvYWRDaGlsZHJlbjogXCIuL2NsYXNzZXMvY2xhc3Nlcy5tb2R1bGUjQ2xhc3Nlc01vZHVsZVwiIH0sXG4gICAgeyBwYXRoOiBcInF1aXpcIiwgbG9hZENoaWxkcmVuOiBcIi4vcXVpei9xdWl6Lm1vZHVsZSNRdWl6TW9kdWxlXCIgfSxcbiAgICB7IHBhdGg6IFwic2VsZWN0b3JcIiwgbG9hZENoaWxkcmVuOiBcIi4vcXVpei9zZWxlY3Rvci9zZWxlY3Rvci5tb2R1bGUjU2VsZWN0b3JNb2R1bGVcIiB9LFxuICAgIHsgcGF0aDogXCJzY29yZVwiLCBsb2FkQ2hpbGRyZW46IFwiLi9xdWl6L3Njb3JlL3Njb3JlLm1vZHVsZSNTY29yZU1vZHVsZVwiIH0sXG4gICAgeyBwYXRoOiBcImRldGFpbHNcIiwgbG9hZENoaWxkcmVuOiBcIi4vZGFzaGJvYXJkL2RldGFpbHMvZGV0YWlscy5tb2R1bGUjRGV0YWlsc01vZHVsZVwiIH1cbl07XG5cbkBOZ01vZHVsZSh7XG4gICAgaW1wb3J0czogW1xuICAgICAgICBOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUuZm9yUm9vdChyb3V0ZXMpXG4gICAgXSxcbiAgICBleHBvcnRzOiBbTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlXVxufSlcbmV4cG9ydCBjbGFzcyBBcHBSb3V0aW5nTW9kdWxlIHsgfVxuIl19