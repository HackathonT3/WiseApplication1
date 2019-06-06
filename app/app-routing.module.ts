import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";

import { NativeScriptRouterModule } from "nativescript-angular/router";

const routes: Routes = [
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

@NgModule({
    imports: [
        NativeScriptRouterModule.forRoot(routes)
    ],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
