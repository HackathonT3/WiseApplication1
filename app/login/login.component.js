"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var nativescript_angular_1 = require("nativescript-angular");
var router_1 = require("nativescript-angular/router");
var page_1 = require("tns-core-modules/ui/page/page");
var login_service_1 = require("./login.service");
var school_search_component_1 = require("./school-search/school-search.component");
var appSettings = require("tns-core-modules/application-settings");
var LoginComponent = /** @class */ (function () {
    function LoginComponent(page, nav, loginService, _vcRef, _modalService) {
        this.nav = nav;
        this.loginService = loginService;
        this._vcRef = _vcRef;
        this._modalService = _modalService;
        this.processing = false;
        page.actionBarHidden = true;
        this.user = {};
        this.user.email = "user@nativescript.org";
        this.user.password = "password";
    }
    LoginComponent.prototype.register = function () {
        this.nav.navigate(["/student-register"]);
    };
    LoginComponent.prototype.submit = function () {
        if (!this.user.email || !this.user.password) {
            this.alert("Please provide both an email address and password.");
            return;
        }
        this.processing = true;
        this.login();
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.loginService.login().subscribe(function (res) {
            _this.processing = false;
            appSettings.setString("user", _this.user.email);
            _this.alert('logged in as ' + appSettings.getString("user"));
        });
    };
    LoginComponent.prototype.forgotPassword = function () {
        this.nav.navigate(["/home"]);
    };
    LoginComponent.prototype.focusPassword = function () {
        this.password.nativeElement.focus();
    };
    LoginComponent.prototype.alert = function (message) {
        return alert({
            title: "APP NAME",
            okButtonText: "OK",
            message: message
        });
    };
    LoginComponent.prototype.searchSchools = function () {
        var _this = this;
        var options = {
            viewContainerRef: this._vcRef,
            // context: { isFrom },
            fullscreen: true
        };
        this._modalService.showModal(school_search_component_1.SchoolSearchComponent, options)
            .then(function (result) {
            _this.user.school = result.school.name;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibG9naW4uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQW1GO0FBQ25GLDZEQUE4RTtBQUM5RSxzREFBK0Q7QUFHL0Qsc0RBQXFEO0FBQ3JELGlEQUErQztBQUMvQyxtRkFBZ0Y7QUFDaEYsbUVBQXFFO0FBT3JFO0lBTUksd0JBQVksSUFBVSxFQUFVLEdBQXFCLEVBQVUsWUFBMEIsRUFDN0UsTUFBd0IsRUFDeEIsYUFBaUM7UUFGYixRQUFHLEdBQUgsR0FBRyxDQUFrQjtRQUFVLGlCQUFZLEdBQVosWUFBWSxDQUFjO1FBQzdFLFdBQU0sR0FBTixNQUFNLENBQWtCO1FBQ3hCLGtCQUFhLEdBQWIsYUFBYSxDQUFvQjtRQUw3QyxlQUFVLEdBQUcsS0FBSyxDQUFDO1FBT2YsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUM7UUFDNUIsSUFBSSxDQUFDLElBQUksR0FBRyxFQUFFLENBQUM7UUFDZixJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyx1QkFBdUIsQ0FBQztRQUMxQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsR0FBRyxVQUFVLENBQUM7SUFDcEMsQ0FBQztJQUVELGlDQUFRLEdBQVI7UUFDSSxJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDLG1CQUFtQixDQUFDLENBQUMsQ0FBQztJQUM3QyxDQUFDO0lBRUQsK0JBQU0sR0FBTjtRQUNJLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ3pDLElBQUksQ0FBQyxLQUFLLENBQUMsb0RBQW9ELENBQUMsQ0FBQztZQUNqRSxPQUFPO1NBQ1Y7UUFFRCxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQztRQUN2QixJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDakIsQ0FBQztJQUVELDhCQUFLLEdBQUw7UUFBQSxpQkFNQztRQUxHLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxFQUFFLENBQUMsU0FBUyxDQUFDLFVBQUEsR0FBRztZQUNuQyxLQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQztZQUN4QixXQUFXLENBQUMsU0FBUyxDQUFDLE1BQU0sRUFBRSxLQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQy9DLEtBQUksQ0FBQyxLQUFLLENBQUMsZUFBZSxHQUFHLFdBQVcsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQTtRQUMvRCxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFRCx1Q0FBYyxHQUFkO1FBQ0ksSUFBSSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO0lBQ2pDLENBQUM7SUFFRCxzQ0FBYSxHQUFiO1FBQ0ksSUFBSSxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDeEMsQ0FBQztJQUdELDhCQUFLLEdBQUwsVUFBTSxPQUFlO1FBQ2pCLE9BQU8sS0FBSyxDQUFDO1lBQ1QsS0FBSyxFQUFFLFVBQVU7WUFDakIsWUFBWSxFQUFFLElBQUk7WUFDbEIsT0FBTyxFQUFFLE9BQU87U0FDbkIsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVELHNDQUFhLEdBQWI7UUFBQSxpQkFXQztRQVZHLElBQU0sT0FBTyxHQUF1QjtZQUNoQyxnQkFBZ0IsRUFBRSxJQUFJLENBQUMsTUFBTTtZQUM3Qix1QkFBdUI7WUFDdkIsVUFBVSxFQUFFLElBQUk7U0FDbkIsQ0FBQztRQUVGLElBQUksQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDLCtDQUFxQixFQUFFLE9BQU8sQ0FBQzthQUN2RCxJQUFJLENBQUMsVUFBQyxNQUFXO1lBQ2QsS0FBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUM7UUFDMUMsQ0FBQyxDQUFDLENBQUM7SUFDWCxDQUFDO0lBOURzQjtRQUF0QixnQkFBUyxDQUFDLFVBQVUsQ0FBQztrQ0FBVyxpQkFBVTtvREFBQztJQUpuQyxjQUFjO1FBTjFCLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsVUFBVTtZQUNwQixXQUFXLEVBQUUsd0JBQXdCO1lBQ3JDLFNBQVMsRUFBRSxDQUFDLHVCQUF1QixDQUFDO1lBQ3BDLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtTQUN0QixDQUFDO3lDQU9vQixXQUFJLEVBQWUseUJBQWdCLEVBQXdCLDRCQUFZO1lBQ3JFLHVCQUFnQjtZQUNULHlDQUFrQjtPQVJwQyxjQUFjLENBbUUxQjtJQUFELHFCQUFDO0NBQUEsQUFuRUQsSUFtRUM7QUFuRVksd0NBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEVsZW1lbnRSZWYsIFZpZXdDaGlsZCwgVmlld0NvbnRhaW5lclJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTW9kYWxEaWFsb2dPcHRpb25zLCBNb2RhbERpYWxvZ1NlcnZpY2UgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXJcIjtcbmltcG9ydCB7IFJvdXRlckV4dGVuc2lvbnMgfSBmcm9tICduYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgVG9rZW5Nb2RlbCB9IGZyb20gJ25hdGl2ZXNjcmlwdC11aS1hdXRvY29tcGxldGUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZUFycmF5IH0gZnJvbSAndG5zLWNvcmUtbW9kdWxlcy9kYXRhL29ic2VydmFibGUtYXJyYXkvb2JzZXJ2YWJsZS1hcnJheSc7XG5pbXBvcnQgeyBQYWdlIH0gZnJvbSAndG5zLWNvcmUtbW9kdWxlcy91aS9wYWdlL3BhZ2UnO1xuaW1wb3J0IHsgTG9naW5TZXJ2aWNlIH0gZnJvbSAnLi9sb2dpbi5zZXJ2aWNlJztcbmltcG9ydCB7IFNjaG9vbFNlYXJjaENvbXBvbmVudCB9IGZyb20gJy4vc2Nob29sLXNlYXJjaC9zY2hvb2wtc2VhcmNoLmNvbXBvbmVudCc7XG5pbXBvcnQgKiBhcyBhcHBTZXR0aW5ncyBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy9hcHBsaWNhdGlvbi1zZXR0aW5nc1wiO1xuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICducy1sb2dpbicsXG4gICAgdGVtcGxhdGVVcmw6ICcuL2xvZ2luLmNvbXBvbmVudC5odG1sJyxcbiAgICBzdHlsZVVybHM6IFsnLi9sb2dpbi5jb21wb25lbnQuY3NzJ10sXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbn0pXG5leHBvcnQgY2xhc3MgTG9naW5Db21wb25lbnQge1xuXG4gICAgdXNlcjogYW55O1xuICAgIHByb2Nlc3NpbmcgPSBmYWxzZTtcbiAgICBAVmlld0NoaWxkKFwicGFzc3dvcmRcIikgcGFzc3dvcmQ6IEVsZW1lbnRSZWY7XG5cbiAgICBjb25zdHJ1Y3RvcihwYWdlOiBQYWdlLCBwcml2YXRlIG5hdjogUm91dGVyRXh0ZW5zaW9ucywgcHJpdmF0ZSBsb2dpblNlcnZpY2U6IExvZ2luU2VydmljZSxcbiAgICAgICAgcHJpdmF0ZSBfdmNSZWY6IFZpZXdDb250YWluZXJSZWYsXG4gICAgICAgIHByaXZhdGUgX21vZGFsU2VydmljZTogTW9kYWxEaWFsb2dTZXJ2aWNlKSB7XG5cbiAgICAgICAgcGFnZS5hY3Rpb25CYXJIaWRkZW4gPSB0cnVlO1xuICAgICAgICB0aGlzLnVzZXIgPSB7fTtcbiAgICAgICAgdGhpcy51c2VyLmVtYWlsID0gXCJ1c2VyQG5hdGl2ZXNjcmlwdC5vcmdcIjtcbiAgICAgICAgdGhpcy51c2VyLnBhc3N3b3JkID0gXCJwYXNzd29yZFwiO1xuICAgIH1cbjZcbiAgICByZWdpc3RlcigpIHtcbiAgICAgICAgdGhpcy5uYXYubmF2aWdhdGUoW1wiL3N0dWRlbnQtcmVnaXN0ZXJcIl0pO1xuICAgIH1cblxuICAgIHN1Ym1pdCgpIHtcbiAgICAgICAgaWYgKCF0aGlzLnVzZXIuZW1haWwgfHwgIXRoaXMudXNlci5wYXNzd29yZCkge1xuICAgICAgICAgICAgdGhpcy5hbGVydChcIlBsZWFzZSBwcm92aWRlIGJvdGggYW4gZW1haWwgYWRkcmVzcyBhbmQgcGFzc3dvcmQuXCIpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5wcm9jZXNzaW5nID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5sb2dpbigpO1xuICAgIH1cblxuICAgIGxvZ2luKCkge1xuICAgICAgICB0aGlzLmxvZ2luU2VydmljZS5sb2dpbigpLnN1YnNjcmliZShyZXMgPT4ge1xuICAgICAgICAgICAgdGhpcy5wcm9jZXNzaW5nID0gZmFsc2U7XG4gICAgICAgICAgICBhcHBTZXR0aW5ncy5zZXRTdHJpbmcoXCJ1c2VyXCIsIHRoaXMudXNlci5lbWFpbCk7XG4gICAgICAgICAgICB0aGlzLmFsZXJ0KCdsb2dnZWQgaW4gYXMgJyArIGFwcFNldHRpbmdzLmdldFN0cmluZyhcInVzZXJcIikpXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGZvcmdvdFBhc3N3b3JkKCkge1xuICAgICAgICB0aGlzLm5hdi5uYXZpZ2F0ZShbXCIvaG9tZVwiXSk7XG4gICAgfVxuXG4gICAgZm9jdXNQYXNzd29yZCgpIHtcbiAgICAgICAgdGhpcy5wYXNzd29yZC5uYXRpdmVFbGVtZW50LmZvY3VzKCk7XG4gICAgfVxuXG5cbiAgICBhbGVydChtZXNzYWdlOiBzdHJpbmcpIHtcbiAgICAgICAgcmV0dXJuIGFsZXJ0KHtcbiAgICAgICAgICAgIHRpdGxlOiBcIkFQUCBOQU1FXCIsXG4gICAgICAgICAgICBva0J1dHRvblRleHQ6IFwiT0tcIixcbiAgICAgICAgICAgIG1lc3NhZ2U6IG1lc3NhZ2VcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgc2VhcmNoU2Nob29scygpIHtcbiAgICAgICAgY29uc3Qgb3B0aW9uczogTW9kYWxEaWFsb2dPcHRpb25zID0ge1xuICAgICAgICAgICAgdmlld0NvbnRhaW5lclJlZjogdGhpcy5fdmNSZWYsXG4gICAgICAgICAgICAvLyBjb250ZXh0OiB7IGlzRnJvbSB9LFxuICAgICAgICAgICAgZnVsbHNjcmVlbjogdHJ1ZVxuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMuX21vZGFsU2VydmljZS5zaG93TW9kYWwoU2Nob29sU2VhcmNoQ29tcG9uZW50LCBvcHRpb25zKVxuICAgICAgICAgICAgLnRoZW4oKHJlc3VsdDogYW55KSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy51c2VyLnNjaG9vbCA9IHJlc3VsdC5zY2hvb2wubmFtZTtcbiAgICAgICAgICAgIH0pO1xuICAgIH1cbn1cbiJdfQ==