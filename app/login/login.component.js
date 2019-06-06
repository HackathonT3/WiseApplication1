"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var nativescript_angular_1 = require("nativescript-angular");
var router_1 = require("nativescript-angular/router");
var page_1 = require("tns-core-modules/ui/page/page");
var login_service_1 = require("./login.service");
var school_search_component_1 = require("./school-search/school-search.component");
var appSettings = require("tns-core-modules/application-settings");
var forgot_password_prompt_1 = require("./forgot-password/forgot-password.prompt");
var user_model_1 = require("../register/shared/user.model");
var LoginComponent = /** @class */ (function () {
    function LoginComponent(page, nav, loginService, _vcRef, _modalService) {
        this.nav = nav;
        this.loginService = loginService;
        this._vcRef = _vcRef;
        this._modalService = _modalService;
        this.processing = false;
        this.forgotPasswordPrompt = new forgot_password_prompt_1.ForgotPasswordPrompt();
        page.actionBarHidden = true;
        this.user = new user_model_1.User();
        this.user.userName = "Bala2k04";
        this.user.password = "pass";
    }
    LoginComponent.prototype.register = function () {
        this.nav.navigate(["/student-register"]);
    };
    LoginComponent.prototype.submit = function () {
        if (!this.user.userName || !this.user.password) {
            this.alert("Please provide both a username and password.");
            return;
        }
        this.processing = true;
        this.login();
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.loginService.login(this.user).subscribe(function (res) {
            _this.processing = false;
            appSettings.setString("user", _this.user.userName);
            _this.nav.navigate(["/dashboard"]);
        }, function (err) {
            _this.alert("Username or password is incorrect");
            _this.processing = false;
        });
    };
    LoginComponent.prototype.forgotPassword = function () {
        this.forgotPasswordPrompt.forgotPassword();
    };
    LoginComponent.prototype.focusPassword = function () {
        this.password.nativeElement.focus();
    };
    LoginComponent.prototype.alert = function (message) {
        return alert({
            title: "W!SE Login",
            okButtonText: "OK",
            message: message
        });
    };
    LoginComponent.prototype.searchSchools = function () {
        var options = {
            viewContainerRef: this._vcRef,
            // context: { isFrom },
            fullscreen: true
        };
        this._modalService.showModal(school_search_component_1.SchoolSearchComponent, options)
            .then(function (result) {
            // this.user.school = result.school.name;
        });
    };
    __decorate([
        core_1.ViewChild("password"),
        __metadata("design:type", core_1.ElementRef)
    ], LoginComponent.prototype, "password", void 0);
    LoginComponent = __decorate([
        core_1.Component({
            selector: 'ns-login',
            templateUrl: './login.component.html',
            styleUrls: ['./login.component.css'],
            moduleId: module.id,
        }),
        __metadata("design:paramtypes", [page_1.Page, router_1.RouterExtensions, login_service_1.LoginService,
            core_1.ViewContainerRef,
            nativescript_angular_1.ModalDialogService])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibG9naW4uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQW1GO0FBQ25GLDZEQUE4RTtBQUM5RSxzREFBK0Q7QUFHL0Qsc0RBQXFEO0FBQ3JELGlEQUErQztBQUMvQyxtRkFBZ0Y7QUFDaEYsbUVBQXFFO0FBQ3JFLG1GQUFnRjtBQUNoRiw0REFBcUQ7QUFRckQ7SUFRSSx3QkFBWSxJQUFVLEVBQVUsR0FBcUIsRUFBVSxZQUEwQixFQUM3RSxNQUF3QixFQUN4QixhQUFpQztRQUZiLFFBQUcsR0FBSCxHQUFHLENBQWtCO1FBQVUsaUJBQVksR0FBWixZQUFZLENBQWM7UUFDN0UsV0FBTSxHQUFOLE1BQU0sQ0FBa0I7UUFDeEIsa0JBQWEsR0FBYixhQUFhLENBQW9CO1FBUDdDLGVBQVUsR0FBRyxLQUFLLENBQUM7UUFDbkIseUJBQW9CLEdBQUcsSUFBSSw2Q0FBb0IsRUFBRSxDQUFDO1FBUTlDLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDO1FBQzVCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxpQkFBSSxFQUFFLENBQUM7UUFDdkIsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEdBQUcsVUFBVSxDQUFBO1FBQy9CLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxHQUFHLE1BQU0sQ0FBQTtJQUMvQixDQUFDO0lBRUQsaUNBQVEsR0FBUjtRQUNJLElBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxDQUFDO0lBQzdDLENBQUM7SUFFRCwrQkFBTSxHQUFOO1FBQ0ksSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDNUMsSUFBSSxDQUFDLEtBQUssQ0FBQyw4Q0FBOEMsQ0FBQyxDQUFDO1lBQzNELE9BQU87U0FDVjtRQUVELElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUNqQixDQUFDO0lBRUQsOEJBQUssR0FBTDtRQUFBLGlCQVVDO1FBVEcsSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLFNBQVMsQ0FBQyxVQUFBLEdBQUc7WUFDNUMsS0FBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7WUFDeEIsV0FBVyxDQUFDLFNBQVMsQ0FBQyxNQUFNLEVBQUUsS0FBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUVsRCxLQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUM7UUFDdEMsQ0FBQyxFQUFFLFVBQUEsR0FBRztZQUNGLEtBQUksQ0FBQyxLQUFLLENBQUMsbUNBQW1DLENBQUMsQ0FBQztZQUNoRCxLQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQztRQUM1QixDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFRCx1Q0FBYyxHQUFkO1FBQ0ksSUFBSSxDQUFDLG9CQUFvQixDQUFDLGNBQWMsRUFBRSxDQUFDO0lBQy9DLENBQUM7SUFFRCxzQ0FBYSxHQUFiO1FBQ0ksSUFBSSxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDeEMsQ0FBQztJQUdELDhCQUFLLEdBQUwsVUFBTSxPQUFlO1FBQ2pCLE9BQU8sS0FBSyxDQUFDO1lBQ1QsS0FBSyxFQUFFLFlBQVk7WUFDbkIsWUFBWSxFQUFFLElBQUk7WUFDbEIsT0FBTyxFQUFFLE9BQU87U0FDbkIsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVELHNDQUFhLEdBQWI7UUFDSSxJQUFNLE9BQU8sR0FBdUI7WUFDaEMsZ0JBQWdCLEVBQUUsSUFBSSxDQUFDLE1BQU07WUFDN0IsdUJBQXVCO1lBQ3ZCLFVBQVUsRUFBRSxJQUFJO1NBQ25CLENBQUM7UUFFRixJQUFJLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQywrQ0FBcUIsRUFBRSxPQUFPLENBQUM7YUFDdkQsSUFBSSxDQUFDLFVBQUMsTUFBVztZQUNkLHlDQUF5QztRQUM3QyxDQUFDLENBQUMsQ0FBQztJQUNYLENBQUM7SUFsRXNCO1FBQXRCLGdCQUFTLENBQUMsVUFBVSxDQUFDO2tDQUFXLGlCQUFVO29EQUFDO0lBTm5DLGNBQWM7UUFOMUIsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxVQUFVO1lBQ3BCLFdBQVcsRUFBRSx3QkFBd0I7WUFDckMsU0FBUyxFQUFFLENBQUMsdUJBQXVCLENBQUM7WUFDcEMsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1NBQ3RCLENBQUM7eUNBU29CLFdBQUksRUFBZSx5QkFBZ0IsRUFBd0IsNEJBQVk7WUFDckUsdUJBQWdCO1lBQ1QseUNBQWtCO09BVnBDLGNBQWMsQ0F5RTFCO0lBQUQscUJBQUM7Q0FBQSxBQXpFRCxJQXlFQztBQXpFWSx3Q0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRWxlbWVudFJlZiwgVmlld0NoaWxkLCBWaWV3Q29udGFpbmVyUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBNb2RhbERpYWxvZ09wdGlvbnMsIE1vZGFsRGlhbG9nU2VydmljZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhclwiO1xuaW1wb3J0IHsgUm91dGVyRXh0ZW5zaW9ucyB9IGZyb20gJ25hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBUb2tlbk1vZGVsIH0gZnJvbSAnbmF0aXZlc2NyaXB0LXVpLWF1dG9jb21wbGV0ZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlQXJyYXkgfSBmcm9tICd0bnMtY29yZS1tb2R1bGVzL2RhdGEvb2JzZXJ2YWJsZS1hcnJheS9vYnNlcnZhYmxlLWFycmF5JztcbmltcG9ydCB7IFBhZ2UgfSBmcm9tICd0bnMtY29yZS1tb2R1bGVzL3VpL3BhZ2UvcGFnZSc7XG5pbXBvcnQgeyBMb2dpblNlcnZpY2UgfSBmcm9tICcuL2xvZ2luLnNlcnZpY2UnO1xuaW1wb3J0IHsgU2Nob29sU2VhcmNoQ29tcG9uZW50IH0gZnJvbSAnLi9zY2hvb2wtc2VhcmNoL3NjaG9vbC1zZWFyY2guY29tcG9uZW50JztcbmltcG9ydCAqIGFzIGFwcFNldHRpbmdzIGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL2FwcGxpY2F0aW9uLXNldHRpbmdzXCI7XG5pbXBvcnQgeyBGb3Jnb3RQYXNzd29yZFByb21wdCB9IGZyb20gJy4vZm9yZ290LXBhc3N3b3JkL2ZvcmdvdC1wYXNzd29yZC5wcm9tcHQnO1xuaW1wb3J0IHsgVXNlciB9IGZyb20gJy4uL3JlZ2lzdGVyL3NoYXJlZC91c2VyLm1vZGVsJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICducy1sb2dpbicsXG4gICAgdGVtcGxhdGVVcmw6ICcuL2xvZ2luLmNvbXBvbmVudC5odG1sJyxcbiAgICBzdHlsZVVybHM6IFsnLi9sb2dpbi5jb21wb25lbnQuY3NzJ10sXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbn0pXG5leHBvcnQgY2xhc3MgTG9naW5Db21wb25lbnQge1xuXG4gICAgdXNlcjogVXNlcjtcbiAgICBwcm9jZXNzaW5nID0gZmFsc2U7XG4gICAgZm9yZ290UGFzc3dvcmRQcm9tcHQgPSBuZXcgRm9yZ290UGFzc3dvcmRQcm9tcHQoKTtcbiAgICBcbiAgICBAVmlld0NoaWxkKFwicGFzc3dvcmRcIikgcGFzc3dvcmQ6IEVsZW1lbnRSZWY7XG5cbiAgICBjb25zdHJ1Y3RvcihwYWdlOiBQYWdlLCBwcml2YXRlIG5hdjogUm91dGVyRXh0ZW5zaW9ucywgcHJpdmF0ZSBsb2dpblNlcnZpY2U6IExvZ2luU2VydmljZSxcbiAgICAgICAgcHJpdmF0ZSBfdmNSZWY6IFZpZXdDb250YWluZXJSZWYsXG4gICAgICAgIHByaXZhdGUgX21vZGFsU2VydmljZTogTW9kYWxEaWFsb2dTZXJ2aWNlKSB7XG5cbiAgICAgICAgcGFnZS5hY3Rpb25CYXJIaWRkZW4gPSB0cnVlO1xuICAgICAgICB0aGlzLnVzZXIgPSBuZXcgVXNlcigpO1xuICAgICAgICB0aGlzLnVzZXIudXNlck5hbWUgPSBcIkJhbGEyazA0XCJcbiAgICAgICAgdGhpcy51c2VyLnBhc3N3b3JkID0gXCJwYXNzXCJcbiAgICB9XG5cbiAgICByZWdpc3RlcigpIHtcbiAgICAgICAgdGhpcy5uYXYubmF2aWdhdGUoW1wiL3N0dWRlbnQtcmVnaXN0ZXJcIl0pO1xuICAgIH1cblxuICAgIHN1Ym1pdCgpIHtcbiAgICAgICAgaWYgKCF0aGlzLnVzZXIudXNlck5hbWUgfHwgIXRoaXMudXNlci5wYXNzd29yZCkge1xuICAgICAgICAgICAgdGhpcy5hbGVydChcIlBsZWFzZSBwcm92aWRlIGJvdGggYSB1c2VybmFtZSBhbmQgcGFzc3dvcmQuXCIpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5wcm9jZXNzaW5nID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5sb2dpbigpO1xuICAgIH1cblxuICAgIGxvZ2luKCkge1xuICAgICAgICB0aGlzLmxvZ2luU2VydmljZS5sb2dpbih0aGlzLnVzZXIpLnN1YnNjcmliZShyZXMgPT4ge1xuICAgICAgICAgICAgdGhpcy5wcm9jZXNzaW5nID0gZmFsc2U7XG4gICAgICAgICAgICBhcHBTZXR0aW5ncy5zZXRTdHJpbmcoXCJ1c2VyXCIsIHRoaXMudXNlci51c2VyTmFtZSk7XG5cbiAgICAgICAgICAgIHRoaXMubmF2Lm5hdmlnYXRlKFtcIi9kYXNoYm9hcmRcIl0pO1xuICAgICAgICB9LCBlcnIgPT4ge1x0XG4gICAgICAgICAgICB0aGlzLmFsZXJ0KFwiVXNlcm5hbWUgb3IgcGFzc3dvcmQgaXMgaW5jb3JyZWN0XCIpO1x0XG4gICAgICAgICAgICB0aGlzLnByb2Nlc3NpbmcgPSBmYWxzZTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZm9yZ290UGFzc3dvcmQoKSB7XG4gICAgICAgIHRoaXMuZm9yZ290UGFzc3dvcmRQcm9tcHQuZm9yZ290UGFzc3dvcmQoKTtcbiAgICB9XG5cbiAgICBmb2N1c1Bhc3N3b3JkKCkge1xuICAgICAgICB0aGlzLnBhc3N3b3JkLm5hdGl2ZUVsZW1lbnQuZm9jdXMoKTtcbiAgICB9XG5cblxuICAgIGFsZXJ0KG1lc3NhZ2U6IHN0cmluZykge1xuICAgICAgICByZXR1cm4gYWxlcnQoe1xuICAgICAgICAgICAgdGl0bGU6IFwiVyFTRSBMb2dpblwiLFxuICAgICAgICAgICAgb2tCdXR0b25UZXh0OiBcIk9LXCIsXG4gICAgICAgICAgICBtZXNzYWdlOiBtZXNzYWdlXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHNlYXJjaFNjaG9vbHMoKSB7XG4gICAgICAgIGNvbnN0IG9wdGlvbnM6IE1vZGFsRGlhbG9nT3B0aW9ucyA9IHtcbiAgICAgICAgICAgIHZpZXdDb250YWluZXJSZWY6IHRoaXMuX3ZjUmVmLFxuICAgICAgICAgICAgLy8gY29udGV4dDogeyBpc0Zyb20gfSxcbiAgICAgICAgICAgIGZ1bGxzY3JlZW46IHRydWVcbiAgICAgICAgfTtcblxuICAgICAgICB0aGlzLl9tb2RhbFNlcnZpY2Uuc2hvd01vZGFsKFNjaG9vbFNlYXJjaENvbXBvbmVudCwgb3B0aW9ucylcbiAgICAgICAgICAgIC50aGVuKChyZXN1bHQ6IGFueSkgPT4ge1xuICAgICAgICAgICAgICAgIC8vIHRoaXMudXNlci5zY2hvb2wgPSByZXN1bHQuc2Nob29sLm5hbWU7XG4gICAgICAgICAgICB9KTtcbiAgICB9XG59XG4iXX0=