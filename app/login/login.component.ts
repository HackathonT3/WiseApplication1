import { Component, ElementRef, ViewChild, ViewContainerRef } from '@angular/core';
import { ModalDialogOptions, ModalDialogService } from "nativescript-angular";
import { RouterExtensions } from 'nativescript-angular/router';
import { TokenModel } from 'nativescript-ui-autocomplete';
import { ObservableArray } from 'tns-core-modules/data/observable-array/observable-array';
import { Page } from 'tns-core-modules/ui/page/page';
import { LoginService } from './login.service';
import { SchoolSearchComponent } from './school-search/school-search.component';
import * as appSettings from "tns-core-modules/application-settings";
@Component({
    selector: 'ns-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css'],
    moduleId: module.id,
})
export class LoginComponent {

    user: any;
    processing = false;
    @ViewChild("password") password: ElementRef;

    constructor(page: Page, private nav: RouterExtensions, private loginService: LoginService,
        private _vcRef: ViewContainerRef,
        private _modalService: ModalDialogService) {

        page.actionBarHidden = true;
        this.user = {};
        this.user.email = "user@nativescript.org";
        this.user.password = "password";
    }
6
    register() {
        this.nav.navigate(["/student-register"]);
    }

    submit() {
        if (!this.user.email || !this.user.password) {
            this.alert("Please provide both an email address and password.");
            return;
        }

        this.processing = true;
        this.login();
    }

    login() {
        this.loginService.login().subscribe(res => {
            this.processing = false;
            appSettings.setString("user", this.user.email);
            this.alert('logged in as ' + appSettings.getString("user"))
        });
    }

    forgotPassword() {
        this.nav.navigate(["/home"]);
    }

    focusPassword() {
        this.password.nativeElement.focus();
    }


    alert(message: string) {
        return alert({
            title: "APP NAME",
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
                this.user.school = result.school.name;
            });
    }
}
