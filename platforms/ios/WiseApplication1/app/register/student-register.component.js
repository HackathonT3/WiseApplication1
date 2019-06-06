"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var dialogs_1 = require("tns-core-modules/ui/dialogs");
var user_model_1 = require("./shared/user.model");
var user_service_1 = require("./shared/user.service");
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3R1ZGVudC1yZWdpc3Rlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJzdHVkZW50LXJlZ2lzdGVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFrRjtBQUVsRix1REFBMkQ7QUFDM0Qsa0RBQTJDO0FBQzNDLHNEQUFvRDtBQUNwRCxzREFBK0Q7QUFDL0QsbUVBQTZFO0FBRTdFLG1EQUEwRDtBQVExRDtJQVdFLGtDQUFvQixXQUF3QixFQUN4QixHQUFxQixFQUNyQixLQUF1QixFQUN2QixLQUF5QjtRQUh6QixnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUN4QixRQUFHLEdBQUgsR0FBRyxDQUFrQjtRQUNyQixVQUFLLEdBQUwsS0FBSyxDQUFrQjtRQUN2QixVQUFLLEdBQUwsS0FBSyxDQUFvQjtRQVo3QyxlQUFVLEdBQUcsS0FBSyxDQUFDO1FBR25CLFFBQUcsR0FBRyxJQUFJLElBQUksRUFBRSxDQUFDO1FBQ2pCLFdBQU0sR0FBRyxRQUFRLENBQUM7UUFDbEIsZUFBVSxHQUFHLFNBQVMsQ0FBQztRQUN2QixlQUFVLEdBQUcsV0FBVyxDQUFDO1FBQ3pCLFdBQU0sR0FBRyxXQUFXLENBQUM7UUFNbkIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLGlCQUFJLEVBQUUsQ0FBQztJQUN6QixDQUFDO0lBRUQsMkNBQVEsR0FBUjtRQUFBLGlCQXFCQztRQXBCRyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsZUFBZTtZQUNyRSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVE7WUFDbEUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcs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O1FBQzNELENBQUMsQ0FBQyxDQUFDO0lBQ0gsQ0FBQztJQUVELHdDQUFLLEdBQUw7UUFDRSxPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ3JCLElBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztJQUNoQyxDQUFDO0lBekhzQjtRQUF0QixnQkFBUyxDQUFDLFVBQVUsQ0FBQztrQ0FBVyxpQkFBVTs4REFBQztJQUNkO1FBQTdCLGdCQUFTLENBQUMsaUJBQWlCLENBQUM7a0NBQWtCLGlCQUFVO3FFQUFDO0lBSi9DLHdCQUF3QjtRQU5wQyxnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLGtCQUFrQjtZQUM1QixXQUFXLEVBQUUsbUNBQW1DO1lBQ2hELFNBQVMsRUFBRSxDQUFDLGtDQUFrQyxDQUFDO1lBQy9DLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtTQUNwQixDQUFDO3lDQVlpQywwQkFBVztZQUNuQix5QkFBZ0I7WUFDZCx1QkFBZ0I7WUFDaEIsNEJBQWtCO09BZGxDLHdCQUF3QixDQThIcEM7SUFBRCwrQkFBQztDQUFBLEFBOUhELElBOEhDO0FBOUhZLDREQUF3QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRWxlbWVudFJlZiwgVmlld0NoaWxkLCBWaWV3Q29udGFpbmVyUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSdcblxuaW1wb3J0IHsgYWxlcnQsYWN0aW9uIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvZGlhbG9nc1wiO1xuaW1wb3J0IHsgVXNlciB9IGZyb20gJy4vc2hhcmVkL3VzZXIubW9kZWwnO1xuaW1wb3J0IHsgVXNlclNlcnZpY2UgfSBmcm9tICcuL3NoYXJlZC91c2VyLnNlcnZpY2UnO1xuaW1wb3J0IHsgUm91dGVyRXh0ZW5zaW9ucyB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7IE1vZGFsRGlhbG9nU2VydmljZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9kaXJlY3RpdmVzL2RpYWxvZ3NcIjtcblxuaW1wb3J0IHsgRE9CTW9kYWxDb21wb25lbnQgfSBmcm9tIFwiLi9tb2RhbC9kb2IvZG9iLm1vZGFsXCI7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3N0dWRlbnQtcmVnaXN0ZXInLFxuICB0ZW1wbGF0ZVVybDogJy4vc3R1ZGVudC1yZWdpc3Rlci5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3N0dWRlbnQtcmVnaXN0ZXIuY29tcG9uZW50LmNzcyddLFxuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxufSlcbmV4cG9ydCBjbGFzcyBTdHVkZW50UmVnaXN0ZXJDb21wb25lbnQge1xuICB1c2VyOiBVc2VyO1xuICBwcm9jZXNzaW5nID0gZmFsc2U7XG4gIEBWaWV3Q2hpbGQoXCJwYXNzd29yZFwiKSBwYXNzd29yZDogRWxlbWVudFJlZjtcbiAgQFZpZXdDaGlsZChcImNvbmZpcm1QYXNzd29yZFwiKSBjb25maXJtUGFzc3dvcmQ6IEVsZW1lbnRSZWY7XG4gIGRvYiA9IG5ldyBEYXRlKCk7XG4gIGdlbmRlciA9IFwiRmVtYWxlXCI7XG4gIG1lbWJlclR5cGUgPSBcIlN0dWRlbnRcIjtcbiAgZ3JhZGVMZXZlbCA9IFwiOXRoIEdyYWRlXCI7XG4gIGNvdXJzZSA9IFwiRWNvbm9taWNzXCI7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSB1c2VyU2VydmljZTogVXNlclNlcnZpY2UsIFxuICAgICAgICAgICAgICBwcml2YXRlIG5hdjogUm91dGVyRXh0ZW5zaW9ucyxcbiAgICAgICAgICAgICAgcHJpdmF0ZSB2Y1JlZjogVmlld0NvbnRhaW5lclJlZixcbiAgICAgICAgICAgICAgcHJpdmF0ZSBtb2RhbDogTW9kYWxEaWFsb2dTZXJ2aWNlKSB7IFxuICAgIHRoaXMudXNlciA9IG5ldyBVc2VyKCk7XG4gIH1cblxuICByZWdpc3RlcigpIHtcbiAgICAgIGlmICghdGhpcy51c2VyLmVtYWlsIHx8ICF0aGlzLnVzZXIucGFzc3dvcmQgfHwgIXRoaXMudXNlci5jb25maXJtUGFzc3dvcmQgfHxcbiAgICAgICAgICAhdGhpcy51c2VyLnVzZXJOYW1lIHx8ICF0aGlzLnVzZXIuZmlyc3ROYW1lIHx8ICF0aGlzLnVzZXIubGFzdE5hbWUgfHxcbiAgICAgICAgICAhdGhpcy51c2VyLmRvYiB8fCAhdGhpcy51c2VyLmdlbmRlciB8fCAhdGhpcy51c2VyLm1lbWJlclR5cGUgfHwgIXRoaXMudXNlci5ncmFkZUxldmVsIHx8ICF0aGlzLnVzZXIuY291cnNlXG4gICAgICAgICkge1xuICAgICAgICB0aGlzLmFsZXJ0KFwiUGxlYXNlIHByb3ZpZGUgdGhlIHJlcXVpcmVkIGluZm8uXCIpO1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5wcm9jZXNzaW5nID0gdHJ1ZTtcblxuICAgIGlmICh0aGlzLnVzZXIucGFzc3dvcmQgIT0gdGhpcy51c2VyLmNvbmZpcm1QYXNzd29yZCkge1xuICAgICAgICB0aGlzLmFsZXJ0KFwiWW91ciBwYXNzd29yZHMgZG8gbm90IG1hdGNoLlwiKTtcbiAgICAgICAgdGhpcy5wcm9jZXNzaW5nID0gZmFsc2U7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy51c2VyU2VydmljZS5yZWdpc3Rlcih0aGlzLnVzZXIpXG4gICAgICAgIC5zdWJzY3JpYmUoKHJlc3VsdCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5wcm9jZXNzaW5nID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLmFsZXJ0KFwiWW91ciBhY2NvdW50IHdhcyBzdWNjZXNzZnVsbHkgY3JlYXRlZC5cIik7XG4gICAgICAgIH0pO1xuICB9XG5cbiAgYWxlcnQobWVzc2FnZTogc3RyaW5nKSB7XG4gICAgcmV0dXJuIGFsZXJ0KHtcbiAgICAgICAgdGl0bGU6IFwiVyFzZSBSZWdpc3RlclwiLFxuICAgICAgICBva0J1dHRvblRleHQ6IFwiT0tcIixcbiAgICAgICAgbWVzc2FnZTogbWVzc2FnZVxuICAgIH0pO1xuICB9XG5cbiAgZm9jdXNQYXNzd29yZCgpIHtcbiAgICB0aGlzLnBhc3N3b3JkLm5hdGl2ZUVsZW1lbnQuZm9jdXMoKTtcbiAgfVxuXG4gIGZvY3VzQ29uZmlybVBhc3N3b3JkKCkge1xuICAgIHRoaXMuY29uZmlybVBhc3N3b3JkLm5hdGl2ZUVsZW1lbnQuZm9jdXMoKTtcbiAgfVxuXG4gIG9uT3BlblNlbGVjdERhdGUoKSB7XG4gICAgbGV0IG9wdGlvbnMgPSB7XG4gICAgICBjb250ZXh0OiB7fSxcbiAgICAgIGZ1bGxzY3JlZW46IHRydWUsXG4gICAgICB2aWV3Q29udGFpbmVyUmVmOiB0aGlzLnZjUmVmXG4gICAgfTtcbiAgICB0aGlzLm1vZGFsLnNob3dNb2RhbChET0JNb2RhbENvbXBvbmVudCwgb3B0aW9ucykudGhlbihzZWxlY3RlZERhdGUgPT4ge1xuICAgICAgICB0aGlzLmRvYiA9IHNlbGVjdGVkRGF0ZTtcbiAgICAgIH0pO1xuXG4gIH1cblxuICBvbk9wZW5TZWxlY3RHZW5kZXIoKTogdm9pZCB7XG5cdFx0bGV0IG9wdGlvbnMgPSB7XG5cdFx0XHR0aXRsZTogXCJHZW5kZXJcIixcblx0XHRcdG1lc3NhZ2U6IFwiQ2hvb3NlIHlvdXIgZ2VuZGVyXCIsXG5cdFx0XHRjYW5jZWxCdXR0b25UZXh0OiBcIkNhbmNlbFwiLFxuXHRcdFx0YWN0aW9uczogW1wiTWFsZVwiLCBcIkZlbWFsZVwiXVxuXHRcdH07XG5cblx0XHRhY3Rpb24ob3B0aW9ucykudGhlbigocmVzdWx0KSA9PiB7XG5cdFx0XHR0aGlzLmdlbmRlciA9IChyZXN1bHQgPT0gJ0NhbmNlbCcpID8gdGhpcy5nZW5kZXIgOiByZXN1bHQ7XG5cdFx0fSk7XG4gIH1cbiAgXG4gIG9uT3BlblNlbGVjdE1lbWJlclR5cGUoKTogdm9pZCB7XG5cdFx0bGV0IG9wdGlvbnMgPSB7XG5cdFx0XHR0aXRsZTogXCJNZW1iZXIgVHlwZVwiLFxuXHRcdFx0bWVzc2FnZTogXCJDaG9vc2UgeW91ciBtZW1iZXIgdHlwZVwiLFxuXHRcdFx0Y2FuY2VsQnV0dG9uVGV4dDogXCJDYW5jZWxcIixcblx0XHRcdGFjdGlvbnM6IFtcIlN0dWRlbnRcIiwgXCJUZWFjaGVyXCJdXG5cdFx0fTtcblxuXHRcdGFjdGlvbihvcHRpb25zKS50aGVuKChyZXN1bHQpID0+IHtcblx0XHRcdHRoaXMubWVtYmVyVHlwZSA9IChyZXN1bHQgPT0gJ0NhbmNlbCcpID8gdGhpcy5tZW1iZXJUeXBlIDogcmVzdWx0O1xuXHRcdH0pO1xuICB9XG5cbiAgb25PcGVuU2VsZWN0R3JhZGVMZXZlbCgpOiB2b2lkIHtcblx0XHRsZXQgb3B0aW9ucyA9IHtcblx0XHRcdHRpdGxlOiBcIkdyYWRlIExldmVsXCIsXG5cdFx0XHRtZXNzYWdlOiBcIkNob29zZSB5b3VyIGdyYWRlIGxldmVsXCIsXG5cdFx0XHRjYW5jZWxCdXR0b25UZXh0OiBcIkNhbmNlbFwiLFxuXHRcdFx0YWN0aW9uczogW1wiOXRoIEdyYWRlXCIsIFwiMTB0aCBHcmFkZVwiLCBcIjExdGggR3JhZGVcIiwgXCIxMnRoIEdyYWRlXCIsIFwiQ29tbXVuaXR5IENvbGxlZ2VcIiwgXCJDb2xsZWdlXCJdXG5cdFx0fTtcblxuXHRcdGFjdGlvbihvcHRpb25zKS50aGVuKChyZXN1bHQpID0+IHtcblx0XHRcdHRoaXMuZ3JhZGVMZXZlbCA9IChyZXN1bHQgPT0gJ0NhbmNlbCcpID8gdGhpcy5ncmFkZUxldmVsIDogcmVzdWx0O1xuXHRcdH0pO1xuICB9XG4gIFxuICBvbk9wZW5TZWxlY3RDb3Vyc2UoKTogdm9pZCB7XG5cdFx0bGV0IG9wdGlvbnMgPSB7XG5cdFx0XHR0aXRsZTogXCJDb3Vyc2VcIixcblx0XHRcdG1lc3NhZ2U6IFwiQ2hvb3NlIHlvdXIgY291cnNlXCIsXG5cdFx0XHRjYW5jZWxCdXR0b25UZXh0OiBcIkNhbmNlbFwiLFxuXHRcdFx0YWN0aW9uczogW1wiRWNvbm9taWNzXCIsIFwiUGVyc29uYWwgRmluYW5jZVwiLCBcIkJ1c2luZXNzIENsYXNzXCIsIFwiQ29uc3VtZXIgU2NpZW5jZVwiLCBcIk1hdGhtYXRpY3NcIiwgXCJGaW5hbmNpYWwgUGxhbm5pbmdcIiwgXCJBY2FkZW15IG9mIEZpbmFuY2VcIiwgXCJFbnRyZXByZW5ldXJzaGlwXCIsIFwiUHJpbmNpcGxlcyBvZiBCdXNpbmVzc1wiLCBcIk1hcmtldGluZ1wiLCBcIk90aGVyXCJdXG5cdFx0fTtcblxuXHRcdGFjdGlvbihvcHRpb25zKS50aGVuKChyZXN1bHQpID0+IHtcblx0XHRcdHRoaXMuY291cnNlID0gKHJlc3VsdCA9PSAnQ2FuY2VsJykgPyB0aGlzLmNvdXJzZSA6IHJlc3VsdDtcblx0XHR9KTtcbiAgfVxuICBcbiAgbG9naW4oKSB7XG4gICAgY29uc29sZS5sb2coJ2xvZ2luJyk7XG4gICAgdGhpcy5uYXYubmF2aWdhdGUoW1wiL2xvZ2luXCJdKTtcbiAgfVxuXG59XG4iXX0=