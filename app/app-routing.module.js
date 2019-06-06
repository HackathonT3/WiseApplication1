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
    { path: "details", loadChildren: "./dashboard/details/details.module#DetailsModule" },
    { path: "certification", loadChildren: "./certification-test/certification-test.module#CertificationTestModule" },
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLXJvdXRpbmcubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXBwLXJvdXRpbmcubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXlDO0FBR3pDLHNEQUF1RTtBQUV2RSxJQUFNLE1BQU0sR0FBVztJQUNuQixFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsVUFBVSxFQUFFLFVBQVUsRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFO0lBQ3ZELEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsd0NBQXdDLEVBQUU7SUFDM0UsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSwrQkFBK0IsRUFBRTtJQUMvRCxFQUFFLElBQUksRUFBRSxrQkFBa0IsRUFBRSxZQUFZLEVBQUUsMERBQTBELEVBQUU7SUFDdEcsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLFlBQVksRUFBRSxrQ0FBa0MsRUFBRTtJQUNuRSxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUUsWUFBWSxFQUFFLDhDQUE4QyxFQUFFO0lBQ25GLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsd0NBQXdDLEVBQUU7SUFDM0UsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSwrQkFBK0IsRUFBRTtJQUMvRCxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUsWUFBWSxFQUFFLGdEQUFnRCxFQUFFO0lBQ3BGLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxZQUFZLEVBQUUsdUNBQXVDLEVBQUU7SUFDeEUsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxrREFBa0QsRUFBRTtJQUNyRixFQUFFLElBQUksRUFBRSxlQUFlLEVBQUUsWUFBWSxFQUFFLHdFQUF3RSxFQUFFO0NBQ3BILENBQUM7QUFRRjtJQUFBO0lBQWdDLENBQUM7SUFBcEIsZ0JBQWdCO1FBTjVCLGVBQVEsQ0FBQztZQUNOLE9BQU8sRUFBRTtnQkFDTCxpQ0FBd0IsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDO2FBQzNDO1lBQ0QsT0FBTyxFQUFFLENBQUMsaUNBQXdCLENBQUM7U0FDdEMsQ0FBQztPQUNXLGdCQUFnQixDQUFJO0lBQUQsdUJBQUM7Q0FBQSxBQUFqQyxJQUFpQztBQUFwQiw0Q0FBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBSb3V0ZXMgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5cbmltcG9ydCB7IE5hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXJcIjtcblxuY29uc3Qgcm91dGVzOiBSb3V0ZXMgPSBbXG4gICAgeyBwYXRoOiBcIlwiLCByZWRpcmVjdFRvOiBcIi93ZWxjb21lXCIsIHBhdGhNYXRjaDogXCJmdWxsXCIgfSxcbiAgICB7IHBhdGg6IFwid2VsY29tZVwiLCBsb2FkQ2hpbGRyZW46IFwiLi93ZWxjb21lL3dlbGNvbWUubW9kdWxlI1dlbGNvbWVNb2R1bGVcIiB9LFxuICAgIHsgcGF0aDogXCJob21lXCIsIGxvYWRDaGlsZHJlbjogXCIuL2hvbWUvaG9tZS5tb2R1bGUjSG9tZU1vZHVsZVwiIH0sXG4gICAgeyBwYXRoOiBcInN0dWRlbnQtcmVnaXN0ZXJcIiwgbG9hZENoaWxkcmVuOiBcIi4vcmVnaXN0ZXIvc3R1ZGVudC1yZWdpc3Rlci5tb2R1bGUjU3R1ZGVudFJlZ2lzdGVyTW9kdWxlXCIgfSxcbiAgICB7IHBhdGg6IFwibG9naW5cIiwgbG9hZENoaWxkcmVuOiBcIi4vbG9naW4vbG9naW4ubW9kdWxlI0xvZ2luTW9kdWxlXCIgfSxcbiAgICB7IHBhdGg6IFwiZGFzaGJvYXJkXCIsIGxvYWRDaGlsZHJlbjogXCIuL2Rhc2hib2FyZC9kYXNoYm9hcmQubW9kdWxlI0Rhc2hib2FyZE1vZHVsZVwiIH0sXG4gICAgeyBwYXRoOiBcImNsYXNzZXNcIiwgbG9hZENoaWxkcmVuOiBcIi4vY2xhc3Nlcy9jbGFzc2VzLm1vZHVsZSNDbGFzc2VzTW9kdWxlXCIgfSxcbiAgICB7IHBhdGg6IFwicXVpelwiLCBsb2FkQ2hpbGRyZW46IFwiLi9xdWl6L3F1aXoubW9kdWxlI1F1aXpNb2R1bGVcIiB9LFxuICAgIHsgcGF0aDogXCJzZWxlY3RvclwiLCBsb2FkQ2hpbGRyZW46IFwiLi9xdWl6L3NlbGVjdG9yL3NlbGVjdG9yLm1vZHVsZSNTZWxlY3Rvck1vZHVsZVwiIH0sXG4gICAgeyBwYXRoOiBcInNjb3JlXCIsIGxvYWRDaGlsZHJlbjogXCIuL3F1aXovc2NvcmUvc2NvcmUubW9kdWxlI1Njb3JlTW9kdWxlXCIgfSxcbiAgICB7IHBhdGg6IFwiZGV0YWlsc1wiLCBsb2FkQ2hpbGRyZW46IFwiLi9kYXNoYm9hcmQvZGV0YWlscy9kZXRhaWxzLm1vZHVsZSNEZXRhaWxzTW9kdWxlXCIgfSxcbiAgICB7IHBhdGg6IFwiY2VydGlmaWNhdGlvblwiLCBsb2FkQ2hpbGRyZW46IFwiLi9jZXJ0aWZpY2F0aW9uLXRlc3QvY2VydGlmaWNhdGlvbi10ZXN0Lm1vZHVsZSNDZXJ0aWZpY2F0aW9uVGVzdE1vZHVsZVwiIH0sXG5dO1xuXG5ATmdNb2R1bGUoe1xuICAgIGltcG9ydHM6IFtcbiAgICAgICAgTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlLmZvclJvb3Qocm91dGVzKVxuICAgIF0sXG4gICAgZXhwb3J0czogW05hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZV1cbn0pXG5leHBvcnQgY2xhc3MgQXBwUm91dGluZ01vZHVsZSB7IH1cbiJdfQ==