"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var dialogs_1 = require("tns-core-modules/ui/dialogs");
var user_model_1 = require("../shared/user.model");
var user_service_1 = require("../shared/user.service");
var router_1 = require("nativescript-angular/router");
var dialogs_2 = require("nativescript-angular/directives/dialogs");
var dob_modal_1 = require("./modal/dob/dob.modal");
var StudentRegisterComponent = /** @class */ (function () {
    function StudentRegisterComponent(userService, nav, vcRef, modal) {
        this.userService = userService;
        this.nav = nav;
        this.vcRef = vcRef;
        this.modal = modal;
        this.processing = false;
        this.dob = new Date();
        this.gender = "Female";
        this.memberType = "Student";
        this.gradeLevel = "9th Grade";
        this.course = "Economics";
        this.user = new user_model_1.User();
    }
    StudentRegisterComponent.prototype.register = function () {
        var _this = this;
        if (!this.user.email || !this.user.password || !this.user.confirmPassword ||
            !this.user.userName || !this.user.firstName || !this.user.lastName ||
            !this.user.dob || !this.user.gender || !this.user.memberType || !this.user.gradeLevel || !this.user.course) {
            this.alert("Please provide the required info.");
            return;
        }
        this.processing = true;
        if (this.user.password != this.user.confirmPassword) {
            this.alert("Your passwords do not match.");
            this.processing = false;
            return;
        }
        this.userService.register(this.user)
            .subscribe(function (result) {
            _this.processing = false;
            _this.alert("Your account was successfully created.");
        });
    };
    StudentRegisterComponent.prototype.alert = function (message) {
        return dialogs_1.alert({
            title: "W!se Register",
            okButtonText: "OK",
            message: message
        });
    };
    StudentRegisterComponent.prototype.focusPassword = function () {
        this.password.nativeElement.focus();
    };
    StudentRegisterComponent.prototype.focusConfirmPassword = function () {
        this.confirmPassword.nativeElement.focus();
    };
    StudentRegisterComponent.prototype.onOpenSelectDate = function () {
        var _this = this;
        var options = {
            context: {},
            fullscreen: true,
            viewContainerRef: this.vcRef
        };
        this.modal.showModal(dob_modal_1.DOBModalComponent, options).then(function (selectedDate) {
            _this.dob = selectedDate;
        });
    };
    StudentRegisterComponent.prototype.onOpenSelectGender = function () {
        var _this = this;
        var options = {
            title: "Gender",
            message: "Choose your gender",
            cancelButtonText: "Cancel",
            actions: ["Male", "Female"]
        };
        dialogs_1.action(options).then(function (result) {
            _this.gender = (result == 'Cancel') ? _this.gender : result;
        });
    };
    StudentRegisterComponent.prototype.onOpenSelectMemberType = function () {
        var _this = this;
        var options = {
            title: "Member Type",
            message: "Choose your member type",
            cancelButtonText: "Cancel",
            actions: ["Student", "Teacher"]
        };
        dialogs_1.action(options).then(function (result) {
            _this.memberType = (result == 'Cancel') ? _this.memberType : result;
        });
    };
    StudentRegisterComponent.prototype.onOpenSelectGradeLevel = function () {
        var _this = this;
        var options = {
            title: "Grade Level",
            message: "Choose your grade level",
            cancelButtonText: "Cancel",
            actions: ["9th Grade", "10th Grade", "11th Grade", "12th Grade", "Community College", "College"]
        };
        dialogs_1.action(options).then(function (result) {
            _this.gradeLevel = (result == 'Cancel') ? _this.gradeLevel : result;
        });
    };
    StudentRegisterComponent.prototype.onOpenSelectCourse = function () {
        var _this = this;
        var options = {
            title: "Course",
            message: "Choose your course",
            cancelButtonText: "Cancel",
            actions: ["Economics", "Personal Finance", "Business Class", "Consumer Science", "Mathmatics", "Financial Planning", "Academy of Finance", "Entrepreneurship", "Principles of Business", "Marketing", "Other"]
        };
        dialogs_1.action(options).then(function (result) {
            _this.course = (result == 'Cancel') ? _this.course : result;
        });
    };
    StudentRegisterComponent.prototype.login = function () {
        console.log('login');
        this.nav.navigate(["/login"]);
    };
    __decorate([
        core_1.ViewChild("password"),
        __metadata("design:type", core_1.ElementRef)
    ], StudentRegisterComponent.prototype, "password", void 0);
    __decorate([
        core_1.ViewChild("confirmPassword"),
        __metadata("design:type", core_1.ElementRef)
    ], StudentRegisterComponent.prototype, "confirmPassword", void 0);
    StudentRegisterComponent = __decorate([
        core_1.Component({
            selector: 'student-register',
            templateUrl: './student-register.component.html',
            styleUrls: ['./student-register.component.css'],
            moduleId: module.id,
        }),
        __metadata("design:paramtypes", [user_service_1.UserService,
            router_1.RouterExtensions,
            core_1.ViewContainerRef,
            dialogs_2.ModalDialogService])
    ], StudentRegisterComponent);
    return StudentRegisterComponent;
}());
exports.StudentRegisterComponent = StudentRegisterComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3R1ZGVudC1yZWdpc3Rlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJzdHVkZW50LXJlZ2lzdGVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFrRjtBQUVsRix1REFBMkQ7QUFDM0QsbURBQTRDO0FBQzVDLHVEQUFxRDtBQUNyRCxzREFBK0Q7QUFDL0QsbUVBQTZFO0FBRTdFLG1EQUEwRDtBQVExRDtJQVdFLGtDQUFvQixXQUF3QixFQUN4QixHQUFxQixFQUNyQixLQUF1QixFQUN2QixLQUF5QjtRQUh6QixnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUN4QixRQUFHLEdBQUgsR0FBRyxDQUFrQjtRQUNyQixVQUFLLEdBQUwsS0FBSyxDQUFrQjtRQUN2QixVQUFLLEdBQUwsS0FBSyxDQUFvQjtRQVo3QyxlQUFVLEdBQUcsS0FBSyxDQUFDO1FBR25CLFFBQUcsR0FBRyxJQUFJLElBQUksRUFBRSxDQUFDO1FBQ2pCLFdBQU0sR0FBRyxRQUFRLENBQUM7UUFDbEIsZUFBVSxHQUFHLFNBQVMsQ0FBQztRQUN2QixlQUFVLEdBQUcsV0FBVyxDQUFDO1FBQ3pCLFdBQU0sR0FBRyxXQUFXLENBQUM7UUFNbkIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLGlCQUFJLEVBQUUsQ0FBQztJQUN6QixDQUFDO0lBRUQsMkNBQVEsR0FBUjtRQUFBLGlCQXFCQztRQXBCRyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsZUFBZTtZQUNyRSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVE7WUFDbEUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcs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O1FBQzNELENBQUMsQ0FBQyxDQUFDO0lBQ0gsQ0FBQztJQUVELHdDQUFLLEdBQUw7UUFDRSxPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ3JCLElBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztJQUNoQyxDQUFDO0lBekhzQjtRQUF0QixnQkFBUyxDQUFDLFVBQVUsQ0FBQztrQ0FBVyxpQkFBVTs4REFBQztJQUNkO1FBQTdCLGdCQUFTLENBQUMsaUJBQWlCLENBQUM7a0NBQWtCLGlCQUFVO3FFQUFDO0lBSi9DLHdCQUF3QjtRQU5wQyxnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLGtCQUFrQjtZQUM1QixXQUFXLEVBQUUsbUNBQW1DO1lBQ2hELFNBQVMsRUFBRSxDQUFDLGtDQUFrQyxDQUFDO1lBQy9DLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtTQUNwQixDQUFDO3lDQVlpQywwQkFBVztZQUNuQix5QkFBZ0I7WUFDZCx1QkFBZ0I7WUFDaEIsNEJBQWtCO09BZGxDLHdCQUF3QixDQThIcEM7SUFBRCwrQkFBQztDQUFBLEFBOUhELElBOEhDO0FBOUhZLDREQUF3QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRWxlbWVudFJlZiwgVmlld0NoaWxkLCBWaWV3Q29udGFpbmVyUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSdcblxuaW1wb3J0IHsgYWxlcnQsYWN0aW9uIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvZGlhbG9nc1wiO1xuaW1wb3J0IHsgVXNlciB9IGZyb20gJy4uL3NoYXJlZC91c2VyLm1vZGVsJztcbmltcG9ydCB7IFVzZXJTZXJ2aWNlIH0gZnJvbSAnLi4vc2hhcmVkL3VzZXIuc2VydmljZSc7XG5pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHsgTW9kYWxEaWFsb2dTZXJ2aWNlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2RpcmVjdGl2ZXMvZGlhbG9nc1wiO1xuXG5pbXBvcnQgeyBET0JNb2RhbENvbXBvbmVudCB9IGZyb20gXCIuL21vZGFsL2RvYi9kb2IubW9kYWxcIjtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc3R1ZGVudC1yZWdpc3RlcicsXG4gIHRlbXBsYXRlVXJsOiAnLi9zdHVkZW50LXJlZ2lzdGVyLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vc3R1ZGVudC1yZWdpc3Rlci5jb21wb25lbnQuY3NzJ10sXG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG59KVxuZXhwb3J0IGNsYXNzIFN0dWRlbnRSZWdpc3RlckNvbXBvbmVudCB7XG4gIHVzZXI6IFVzZXI7XG4gIHByb2Nlc3NpbmcgPSBmYWxzZTtcbiAgQFZpZXdDaGlsZChcInBhc3N3b3JkXCIpIHBhc3N3b3JkOiBFbGVtZW50UmVmO1xuICBAVmlld0NoaWxkKFwiY29uZmlybVBhc3N3b3JkXCIpIGNvbmZpcm1QYXNzd29yZDogRWxlbWVudFJlZjtcbiAgZG9iID0gbmV3IERhdGUoKTtcbiAgZ2VuZGVyID0gXCJGZW1hbGVcIjtcbiAgbWVtYmVyVHlwZSA9IFwiU3R1ZGVudFwiO1xuICBncmFkZUxldmVsID0gXCI5dGggR3JhZGVcIjtcbiAgY291cnNlID0gXCJFY29ub21pY3NcIjtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHVzZXJTZXJ2aWNlOiBVc2VyU2VydmljZSwgXG4gICAgICAgICAgICAgIHByaXZhdGUgbmF2OiBSb3V0ZXJFeHRlbnNpb25zLFxuICAgICAgICAgICAgICBwcml2YXRlIHZjUmVmOiBWaWV3Q29udGFpbmVyUmVmLFxuICAgICAgICAgICAgICBwcml2YXRlIG1vZGFsOiBNb2RhbERpYWxvZ1NlcnZpY2UpIHsgXG4gICAgdGhpcy51c2VyID0gbmV3IFVzZXIoKTtcbiAgfVxuXG4gIHJlZ2lzdGVyKCkge1xuICAgICAgaWYgKCF0aGlzLnVzZXIuZW1haWwgfHwgIXRoaXMudXNlci5wYXNzd29yZCB8fCAhdGhpcy51c2VyLmNvbmZpcm1QYXNzd29yZCB8fFxuICAgICAgICAgICF0aGlzLnVzZXIudXNlck5hbWUgfHwgIXRoaXMudXNlci5maXJzdE5hbWUgfHwgIXRoaXMudXNlci5sYXN0TmFtZSB8fFxuICAgICAgICAgICF0aGlzLnVzZXIuZG9iIHx8ICF0aGlzLnVzZXIuZ2VuZGVyIHx8ICF0aGlzLnVzZXIubWVtYmVyVHlwZSB8fCAhdGhpcy51c2VyLmdyYWRlTGV2ZWwgfHwgIXRoaXMudXNlci5jb3Vyc2VcbiAgICAgICAgKSB7XG4gICAgICAgIHRoaXMuYWxlcnQoXCJQbGVhc2UgcHJvdmlkZSB0aGUgcmVxdWlyZWQgaW5mby5cIik7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLnByb2Nlc3NpbmcgPSB0cnVlO1xuXG4gICAgaWYgKHRoaXMudXNlci5wYXNzd29yZCAhPSB0aGlzLnVzZXIuY29uZmlybVBhc3N3b3JkKSB7XG4gICAgICAgIHRoaXMuYWxlcnQoXCJZb3VyIHBhc3N3b3JkcyBkbyBub3QgbWF0Y2guXCIpO1xuICAgICAgICB0aGlzLnByb2Nlc3NpbmcgPSBmYWxzZTtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLnVzZXJTZXJ2aWNlLnJlZ2lzdGVyKHRoaXMudXNlcilcbiAgICAgICAgLnN1YnNjcmliZSgocmVzdWx0KSA9PiB7XG4gICAgICAgICAgICB0aGlzLnByb2Nlc3NpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMuYWxlcnQoXCJZb3VyIGFjY291bnQgd2FzIHN1Y2Nlc3NmdWxseSBjcmVhdGVkLlwiKTtcbiAgICAgICAgfSk7XG4gIH1cblxuICBhbGVydChtZXNzYWdlOiBzdHJpbmcpIHtcbiAgICByZXR1cm4gYWxlcnQoe1xuICAgICAgICB0aXRsZTogXCJXIXNlIFJlZ2lzdGVyXCIsXG4gICAgICAgIG9rQnV0dG9uVGV4dDogXCJPS1wiLFxuICAgICAgICBtZXNzYWdlOiBtZXNzYWdlXG4gICAgfSk7XG4gIH1cblxuICBmb2N1c1Bhc3N3b3JkKCkge1xuICAgIHRoaXMucGFzc3dvcmQubmF0aXZlRWxlbWVudC5mb2N1cygpO1xuICB9XG5cbiAgZm9jdXNDb25maXJtUGFzc3dvcmQoKSB7XG4gICAgdGhpcy5jb25maXJtUGFzc3dvcmQubmF0aXZlRWxlbWVudC5mb2N1cygpO1xuICB9XG5cbiAgb25PcGVuU2VsZWN0RGF0ZSgpIHtcbiAgICBsZXQgb3B0aW9ucyA9IHtcbiAgICAgIGNvbnRleHQ6IHt9LFxuICAgICAgZnVsbHNjcmVlbjogdHJ1ZSxcbiAgICAgIHZpZXdDb250YWluZXJSZWY6IHRoaXMudmNSZWZcbiAgICB9O1xuICAgIHRoaXMubW9kYWwuc2hvd01vZGFsKERPQk1vZGFsQ29tcG9uZW50LCBvcHRpb25zKS50aGVuKHNlbGVjdGVkRGF0ZSA9PiB7XG4gICAgICAgIHRoaXMuZG9iID0gc2VsZWN0ZWREYXRlO1xuICAgICAgfSk7XG5cbiAgfVxuXG4gIG9uT3BlblNlbGVjdEdlbmRlcigpOiB2b2lkIHtcblx0XHRsZXQgb3B0aW9ucyA9IHtcblx0XHRcdHRpdGxlOiBcIkdlbmRlclwiLFxuXHRcdFx0bWVzc2FnZTogXCJDaG9vc2UgeW91ciBnZW5kZXJcIixcblx0XHRcdGNhbmNlbEJ1dHRvblRleHQ6IFwiQ2FuY2VsXCIsXG5cdFx0XHRhY3Rpb25zOiBbXCJNYWxlXCIsIFwiRmVtYWxlXCJdXG5cdFx0fTtcblxuXHRcdGFjdGlvbihvcHRpb25zKS50aGVuKChyZXN1bHQpID0+IHtcblx0XHRcdHRoaXMuZ2VuZGVyID0gKHJlc3VsdCA9PSAnQ2FuY2VsJykgPyB0aGlzLmdlbmRlciA6IHJlc3VsdDtcblx0XHR9KTtcbiAgfVxuICBcbiAgb25PcGVuU2VsZWN0TWVtYmVyVHlwZSgpOiB2b2lkIHtcblx0XHRsZXQgb3B0aW9ucyA9IHtcblx0XHRcdHRpdGxlOiBcIk1lbWJlciBUeXBlXCIsXG5cdFx0XHRtZXNzYWdlOiBcIkNob29zZSB5b3VyIG1lbWJlciB0eXBlXCIsXG5cdFx0XHRjYW5jZWxCdXR0b25UZXh0OiBcIkNhbmNlbFwiLFxuXHRcdFx0YWN0aW9uczogW1wiU3R1ZGVudFwiLCBcIlRlYWNoZXJcIl1cblx0XHR9O1xuXG5cdFx0YWN0aW9uKG9wdGlvbnMpLnRoZW4oKHJlc3VsdCkgPT4ge1xuXHRcdFx0dGhpcy5tZW1iZXJUeXBlID0gKHJlc3VsdCA9PSAnQ2FuY2VsJykgPyB0aGlzLm1lbWJlclR5cGUgOiByZXN1bHQ7XG5cdFx0fSk7XG4gIH1cblxuICBvbk9wZW5TZWxlY3RHcmFkZUxldmVsKCk6IHZvaWQge1xuXHRcdGxldCBvcHRpb25zID0ge1xuXHRcdFx0dGl0bGU6IFwiR3JhZGUgTGV2ZWxcIixcblx0XHRcdG1lc3NhZ2U6IFwiQ2hvb3NlIHlvdXIgZ3JhZGUgbGV2ZWxcIixcblx0XHRcdGNhbmNlbEJ1dHRvblRleHQ6IFwiQ2FuY2VsXCIsXG5cdFx0XHRhY3Rpb25zOiBbXCI5dGggR3JhZGVcIiwgXCIxMHRoIEdyYWRlXCIsIFwiMTF0aCBHcmFkZVwiLCBcIjEydGggR3JhZGVcIiwgXCJDb21tdW5pdHkgQ29sbGVnZVwiLCBcIkNvbGxlZ2VcIl1cblx0XHR9O1xuXG5cdFx0YWN0aW9uKG9wdGlvbnMpLnRoZW4oKHJlc3VsdCkgPT4ge1xuXHRcdFx0dGhpcy5ncmFkZUxldmVsID0gKHJlc3VsdCA9PSAnQ2FuY2VsJykgPyB0aGlzLmdyYWRlTGV2ZWwgOiByZXN1bHQ7XG5cdFx0fSk7XG4gIH1cbiAgXG4gIG9uT3BlblNlbGVjdENvdXJzZSgpOiB2b2lkIHtcblx0XHRsZXQgb3B0aW9ucyA9IHtcblx0XHRcdHRpdGxlOiBcIkNvdXJzZVwiLFxuXHRcdFx0bWVzc2FnZTogXCJDaG9vc2UgeW91ciBjb3Vyc2VcIixcblx0XHRcdGNhbmNlbEJ1dHRvblRleHQ6IFwiQ2FuY2VsXCIsXG5cdFx0XHRhY3Rpb25zOiBbXCJFY29ub21pY3NcIiwgXCJQZXJzb25hbCBGaW5hbmNlXCIsIFwiQnVzaW5lc3MgQ2xhc3NcIiwgXCJDb25zdW1lciBTY2llbmNlXCIsIFwiTWF0aG1hdGljc1wiLCBcIkZpbmFuY2lhbCBQbGFubmluZ1wiLCBcIkFjYWRlbXkgb2YgRmluYW5jZVwiLCBcIkVudHJlcHJlbmV1cnNoaXBcIiwgXCJQcmluY2lwbGVzIG9mIEJ1c2luZXNzXCIsIFwiTWFya2V0aW5nXCIsIFwiT3RoZXJcIl1cblx0XHR9O1xuXG5cdFx0YWN0aW9uKG9wdGlvbnMpLnRoZW4oKHJlc3VsdCkgPT4ge1xuXHRcdFx0dGhpcy5jb3Vyc2UgPSAocmVzdWx0ID09ICdDYW5jZWwnKSA/IHRoaXMuY291cnNlIDogcmVzdWx0O1xuXHRcdH0pO1xuICB9XG4gIFxuICBsb2dpbigpIHtcbiAgICBjb25zb2xlLmxvZygnbG9naW4nKTtcbiAgICB0aGlzLm5hdi5uYXZpZ2F0ZShbXCIvbG9naW5cIl0pO1xuICB9XG5cbn1cbiJdfQ==