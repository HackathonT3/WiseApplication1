import { Component, ElementRef, ViewChild, ViewContainerRef } from '@angular/core';
import { ModalDialogOptions, ModalDialogService } from "nativescript-angular";
import { RouterExtensions } from 'nativescript-angular/router';
import { TokenModel } from 'nativescript-ui-autocomplete';
import { ObservableArray } from 'tns-core-modules/data/observable-array/observable-array';
import { Page } from 'tns-core-modules/ui/page/page';
import { LoginService } from './login.service';
import { SchoolSearchComponent } from './school-search/school-search.component';
import * as appSettings from "tns-core-modules/application-settings";
import { ForgotPasswordPrompt } from './forgot-password/forgot-password.prompt';
import { User } from '../register/shared/user.model';

@Component({
    selector: 'ns-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css'],
    moduleId: module.id,
})
export class LoginComponent {

    user: User;
    processing = false;
    forgotPasswordPrompt = new ForgotPasswordPrompt();
    @ViewChild("password") password: ElementRef;

    constructor(page: Page, private nav: RouterExtensions, private loginService: LoginService,
        private _vcRef: ViewContainerRef,
        private _modalService: ModalDialogService) {

        page.actionBarHidden = true;
        this.user = new User();
        this.user.userName = appSettings.getString("user");
    }
    register() {
        this.nav.navigate(["/student-register"]);
    }

    submit() {
        if (!this.user.userName || !this.user.password) {
            this.alert("Please provide both a username and password.");
            return;
        }

        this.processing = true;
        this.login();
    }

    login() {
        this.loginService.login(this.user).subscribe(res => {
            this.processing = false;
            appSettings.setString("user", this.user.userName);
            this.nav.navigate(["/dashboard"]);
        }, err => {
            this.alert("Username or password is incorrect");
            this.processing = false;
        });
    }

    forgotPassword() {
        this.forgotPasswordPrompt.forgotPassword();
    }

    focusPassword() {
        this.password.nativeElement.focus();
    }


    alert(message: string) {
        return alert({
            title: "W!SE Login",
            okButtonText: "OK",
            message: message
        });
    }

    searchSchools() {
        const options: ModalDialogOptions = {
            viewContainerRef: this._vcRef,
            // context: { isFrom },
            fullscreen: true
        };

        this._modalService.showModal(SchoolSearchComponent, options)
            .then((result: any) => {
                // this.user.school = result.school.name;
            });
    }
}
