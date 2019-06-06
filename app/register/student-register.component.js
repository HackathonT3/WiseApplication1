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
        this.user.setDob("null");
        this.user.setGender(this.gender);
        this.user.setMemberType(this.memberType);
        this.user.setGradeLevel(this.gradeLevel);
        this.user.setCourse(this.course);
        this.user.memberId = 12;
    }
    StudentRegisterComponent.prototype.register = function () {
        var _this = this;
        if (!this.user.email || !this.user.password || !this.user.confirmPassword ||
            !this.user.userName || !this.user.firstName || !this.user.lastName || !this.user.memberType) {
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
            _this.alertSuccess("Your account was successfully created.");
        });
    };
    StudentRegisterComponent.prototype.alert = function (message) {
        return dialogs_1.alert({
            title: "W!se Register",
            okButtonText: "OK",
            message: message
        });
    };
    StudentRegisterComponent.prototype.alertSuccess = function (message) {
        return dialogs_1.alert({
            title: "W!se Register",
            okButtonText: "OK",
            message: message
        }).then(function () {
            this.nav.navigate(["/dashboard"]);
        });
    };
    StudentRegisterComponent.prototype.focusPassword = function () {
        this.password.nativeElement.focus();
    };
    StudentRegisterComponent.prototype.focusConfirmPassword = function () {
        this.confirmPassword.nativeElement.focus();
    };
    StudentRegisterComponent.prototype.onOpenSelectDate = function () {
        var options = {
            context: {},
            fullscreen: true,
            viewContainerRef: this.vcRef
        };
        this.modal.showModal(dob_modal_1.DOBModalComponent, options).then(function (selectedDate) {
            console.log(selectedDate);
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
            _this.user.setGender((result == 'Cancel') ? _this.gender : result);
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
            _this.user.setMemberType((result == 'Cancel') ? _this.memberType : result);
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
            _this.user.setGradeLevel((result == 'Cancel') ? _this.gradeLevel : result);
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
            _this.user.setCourse((result == 'Cancel') ? _this.course : result);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3R1ZGVudC1yZWdpc3Rlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJzdHVkZW50LXJlZ2lzdGVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFrRjtBQUVsRix1REFBMkQ7QUFDM0Qsa0RBQTJDO0FBQzNDLHNEQUFvRDtBQUNwRCxzREFBK0Q7QUFDL0QsbUVBQTZFO0FBRTdFLG1EQUEwRDtBQVExRDtJQVdFLGtDQUFvQixXQUF3QixFQUN4QixHQUFxQixFQUNyQixLQUF1QixFQUN2QixLQUF5QjtRQUh6QixnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUN4QixRQUFHLEdBQUgsR0FBRyxDQUFrQjtRQUNyQixVQUFLLEdBQUwsS0FBSyxDQUFrQjtRQUN2QixVQUFLLEdBQUwsS0FBSyxDQUFvQjtRQVo3QyxlQUFVLEdBQUcsS0FBSyxDQUFDO1FBR25CLFFBQUcsR0FBRyxJQUFJLElBQUksRUFBRSxDQUFDO1FBQ2pCLFdBQU0sR0FBRyxRQUFRLENBQUM7UUFDbEIsZUFBVSxHQUFHLFNBQVMsQ0FBQztRQUN2QixlQUFVLEdBQUcsV0FBVyxDQUFDO1FBQ3pCLFdBQU0sR0FBRyxXQUFXLENBQUM7UUFNbkIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLGlCQUFJLEVBQUUsQ0FBQztRQUN2QixJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUN6QixJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDakMsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ3pDLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUN6QyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENB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QywwQkFBVztZQUNuQix5QkFBZ0I7WUFDZCx1QkFBZ0I7WUFDaEIsNEJBQWtCO09BZGxDLHdCQUF3QixDQThJcEM7SUFBRCwrQkFBQztDQUFBLEFBOUlELElBOElDO0FBOUlZLDREQUF3QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRWxlbWVudFJlZiwgVmlld0NoaWxkLCBWaWV3Q29udGFpbmVyUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSdcblxuaW1wb3J0IHsgYWxlcnQsYWN0aW9uIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvZGlhbG9nc1wiO1xuaW1wb3J0IHsgVXNlciB9IGZyb20gJy4vc2hhcmVkL3VzZXIubW9kZWwnO1xuaW1wb3J0IHsgVXNlclNlcnZpY2UgfSBmcm9tICcuL3NoYXJlZC91c2VyLnNlcnZpY2UnO1xuaW1wb3J0IHsgUm91dGVyRXh0ZW5zaW9ucyB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7IE1vZGFsRGlhbG9nU2VydmljZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9kaXJlY3RpdmVzL2RpYWxvZ3NcIjtcblxuaW1wb3J0IHsgRE9CTW9kYWxDb21wb25lbnQgfSBmcm9tIFwiLi9tb2RhbC9kb2IvZG9iLm1vZGFsXCI7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3N0dWRlbnQtcmVnaXN0ZXInLFxuICB0ZW1wbGF0ZVVybDogJy4vc3R1ZGVudC1yZWdpc3Rlci5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3N0dWRlbnQtcmVnaXN0ZXIuY29tcG9uZW50LmNzcyddLFxuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxufSlcbmV4cG9ydCBjbGFzcyBTdHVkZW50UmVnaXN0ZXJDb21wb25lbnQge1xuICB1c2VyOiBVc2VyO1xuICBwcm9jZXNzaW5nID0gZmFsc2U7XG4gIEBWaWV3Q2hpbGQoXCJwYXNzd29yZFwiKSBwYXNzd29yZDogRWxlbWVudFJlZjtcbiAgQFZpZXdDaGlsZChcImNvbmZpcm1QYXNzd29yZFwiKSBjb25maXJtUGFzc3dvcmQ6IEVsZW1lbnRSZWY7XG4gIGRvYiA9IG5ldyBEYXRlKCk7XG4gIGdlbmRlciA9IFwiRmVtYWxlXCI7XG4gIG1lbWJlclR5cGUgPSBcIlN0dWRlbnRcIjtcbiAgZ3JhZGVMZXZlbCA9IFwiOXRoIEdyYWRlXCI7XG4gIGNvdXJzZSA9IFwiRWNvbm9taWNzXCI7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSB1c2VyU2VydmljZTogVXNlclNlcnZpY2UsIFxuICAgICAgICAgICAgICBwcml2YXRlIG5hdjogUm91dGVyRXh0ZW5zaW9ucyxcbiAgICAgICAgICAgICAgcHJpdmF0ZSB2Y1JlZjogVmlld0NvbnRhaW5lclJlZixcbiAgICAgICAgICAgICAgcHJpdmF0ZSBtb2RhbDogTW9kYWxEaWFsb2dTZXJ2aWNlKSB7IFxuICAgIHRoaXMudXNlciA9IG5ldyBVc2VyKCk7XG4gICAgdGhpcy51c2VyLnNldERvYihcIm51bGxcIik7XG4gICAgdGhpcy51c2VyLnNldEdlbmRlcih0aGlzLmdlbmRlcik7XG4gICAgdGhpcy51c2VyLnNldE1lbWJlclR5cGUodGhpcy5tZW1iZXJUeXBlKTtcbiAgICB0aGlzLnVzZXIuc2V0R3JhZGVMZXZlbCh0aGlzLmdyYWRlTGV2ZWwpO1xuICAgIHRoaXMudXNlci5zZXRDb3Vyc2UodGhpcy5jb3Vyc2UpO1xuICAgIHRoaXMudXNlci5tZW1iZXJJZCA9IDEyO1xuICB9XG5cbiAgcmVnaXN0ZXIoKSB7XG4gICAgICBpZiAoIXRoaXMudXNlci5lbWFpbCB8fCAhdGhpcy51c2VyLnBhc3N3b3JkIHx8ICF0aGlzLnVzZXIuY29uZmlybVBhc3N3b3JkIHx8XG4gICAgICAgICAgIXRoaXMudXNlci51c2VyTmFtZSB8fCAhdGhpcy51c2VyLmZpcnN0TmFtZSB8fCAhdGhpcy51c2VyLmxhc3ROYW1lIHx8ICF0aGlzLnVzZXIubWVtYmVyVHlwZVxuICAgICAgICApIHtcbiAgICAgICAgdGhpcy5hbGVydChcIlBsZWFzZSBwcm92aWRlIHRoZSByZXF1aXJlZCBpbmZvLlwiKTtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMucHJvY2Vzc2luZyA9IHRydWU7XG5cbiAgICBpZiAodGhpcy51c2VyLnBhc3N3b3JkICE9IHRoaXMudXNlci5jb25maXJtUGFzc3dvcmQpIHtcbiAgICAgICAgdGhpcy5hbGVydChcIllvdXIgcGFzc3dvcmRzIGRvIG5vdCBtYXRjaC5cIik7XG4gICAgICAgIHRoaXMucHJvY2Vzc2luZyA9IGZhbHNlO1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMudXNlclNlcnZpY2UucmVnaXN0ZXIodGhpcy51c2VyKVxuICAgICAgICAuc3Vic2NyaWJlKChyZXN1bHQpID0+IHtcbiAgICAgICAgICAgIHRoaXMucHJvY2Vzc2luZyA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5hbGVydFN1Y2Nlc3MoXCJZb3VyIGFjY291bnQgd2FzIHN1Y2Nlc3NmdWxseSBjcmVhdGVkLlwiKTtcbiAgICAgICAgfSk7XG4gIH1cblxuICBhbGVydChtZXNzYWdlOiBzdHJpbmcpIHtcbiAgICByZXR1cm4gYWxlcnQoe1xuICAgICAgICB0aXRsZTogXCJXIXNlIFJlZ2lzdGVyXCIsXG4gICAgICAgIG9rQnV0dG9uVGV4dDogXCJPS1wiLFxuICAgICAgICBtZXNzYWdlOiBtZXNzYWdlXG4gICAgfSk7XG4gIH1cblxuICBhbGVydFN1Y2Nlc3MobWVzc2FnZTogc3RyaW5nKSB7XG4gICAgcmV0dXJuIGFsZXJ0KHtcbiAgICAgICAgdGl0bGU6IFwiVyFzZSBSZWdpc3RlclwiLFxuICAgICAgICBva0J1dHRvblRleHQ6IFwiT0tcIixcbiAgICAgICAgbWVzc2FnZTogbWVzc2FnZVxuICAgIH0pLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgdGhpcy5uYXYubmF2aWdhdGUoW1wiL2Rhc2hib2FyZFwiXSk7XG4gICAgfSk7XG5cbiAgfVxuXG4gIGZvY3VzUGFzc3dvcmQoKSB7XG4gICAgdGhpcy5wYXNzd29yZC5uYXRpdmVFbGVtZW50LmZvY3VzKCk7XG4gIH1cblxuICBmb2N1c0NvbmZpcm1QYXNzd29yZCgpIHtcbiAgICB0aGlzLmNvbmZpcm1QYXNzd29yZC5uYXRpdmVFbGVtZW50LmZvY3VzKCk7XG4gIH1cblxuICBvbk9wZW5TZWxlY3REYXRlKCkge1xuICAgIGxldCBvcHRpb25zID0ge1xuICAgICAgY29udGV4dDoge30sXG4gICAgICBmdWxsc2NyZWVuOiB0cnVlLFxuICAgICAgdmlld0NvbnRhaW5lclJlZjogdGhpcy52Y1JlZlxuICAgIH07XG4gICAgdGhpcy5tb2RhbC5zaG93TW9kYWwoRE9CTW9kYWxDb21wb25lbnQsIG9wdGlvbnMpLnRoZW4oc2VsZWN0ZWREYXRlID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coc2VsZWN0ZWREYXRlKTtcbiAgICAgIH0pO1xuXG4gIH1cblxuICBvbk9wZW5TZWxlY3RHZW5kZXIoKTogdm9pZCB7XG5cdFx0bGV0IG9wdGlvbnMgPSB7XG5cdFx0XHR0aXRsZTogXCJHZW5kZXJcIixcblx0XHRcdG1lc3NhZ2U6IFwiQ2hvb3NlIHlvdXIgZ2VuZGVyXCIsXG5cdFx0XHRjYW5jZWxCdXR0b25UZXh0OiBcIkNhbmNlbFwiLFxuXHRcdFx0YWN0aW9uczogW1wiTWFsZVwiLCBcIkZlbWFsZVwiXVxuXHRcdH07XG5cblx0XHRhY3Rpb24ob3B0aW9ucykudGhlbigocmVzdWx0KSA9PiB7XG5cdFx0XHR0aGlzLnVzZXIuc2V0R2VuZGVyKChyZXN1bHQgPT0gJ0NhbmNlbCcpID8gdGhpcy5nZW5kZXIgOiByZXN1bHQpO1xuXHRcdH0pO1xuICB9XG4gIFxuICBvbk9wZW5TZWxlY3RNZW1iZXJUeXBlKCk6IHZvaWQge1xuXHRcdGxldCBvcHRpb25zID0ge1xuXHRcdFx0dGl0bGU6IFwiTWVtYmVyIFR5cGVcIixcblx0XHRcdG1lc3NhZ2U6IFwiQ2hvb3NlIHlvdXIgbWVtYmVyIHR5cGVcIixcblx0XHRcdGNhbmNlbEJ1dHRvblRleHQ6IFwiQ2FuY2VsXCIsXG5cdFx0XHRhY3Rpb25zOiBbXCJTdHVkZW50XCIsIFwiVGVhY2hlclwiXVxuXHRcdH07XG5cblx0XHRhY3Rpb24ob3B0aW9ucykudGhlbigocmVzdWx0KSA9PiB7XG5cdFx0XHR0aGlzLnVzZXIuc2V0TWVtYmVyVHlwZSgocmVzdWx0ID09ICdDYW5jZWwnKSA/IHRoaXMubWVtYmVyVHlwZSA6IHJlc3VsdCk7XG5cdFx0fSk7XG4gIH1cblxuICBvbk9wZW5TZWxlY3RHcmFkZUxldmVsKCk6IHZvaWQge1xuXHRcdGxldCBvcHRpb25zID0ge1xuXHRcdFx0dGl0bGU6IFwiR3JhZGUgTGV2ZWxcIixcblx0XHRcdG1lc3NhZ2U6IFwiQ2hvb3NlIHlvdXIgZ3JhZGUgbGV2ZWxcIixcblx0XHRcdGNhbmNlbEJ1dHRvblRleHQ6IFwiQ2FuY2VsXCIsXG5cdFx0XHRhY3Rpb25zOiBbXCI5dGggR3JhZGVcIiwgXCIxMHRoIEdyYWRlXCIsIFwiMTF0aCBHcmFkZVwiLCBcIjEydGggR3JhZGVcIiwgXCJDb21tdW5pdHkgQ29sbGVnZVwiLCBcIkNvbGxlZ2VcIl1cblx0XHR9O1xuXG5cdFx0YWN0aW9uKG9wdGlvbnMpLnRoZW4oKHJlc3VsdCkgPT4ge1xuXHRcdFx0dGhpcy51c2VyLnNldEdyYWRlTGV2ZWwoKHJlc3VsdCA9PSAnQ2FuY2VsJykgPyB0aGlzLmdyYWRlTGV2ZWwgOiByZXN1bHQpO1xuXHRcdH0pO1xuICB9XG4gIFxuICBvbk9wZW5TZWxlY3RDb3Vyc2UoKTogdm9pZCB7XG5cdFx0bGV0IG9wdGlvbnMgPSB7XG5cdFx0XHR0aXRsZTogXCJDb3Vyc2VcIixcblx0XHRcdG1lc3NhZ2U6IFwiQ2hvb3NlIHlvdXIgY291cnNlXCIsXG5cdFx0XHRjYW5jZWxCdXR0b25UZXh0OiBcIkNhbmNlbFwiLFxuXHRcdFx0YWN0aW9uczogW1wiRWNvbm9taWNzXCIsIFwiUGVyc29uYWwgRmluYW5jZVwiLCBcIkJ1c2luZXNzIENsYXNzXCIsIFwiQ29uc3VtZXIgU2NpZW5jZVwiLCBcIk1hdGhtYXRpY3NcIiwgXCJGaW5hbmNpYWwgUGxhbm5pbmdcIiwgXCJBY2FkZW15IG9mIEZpbmFuY2VcIiwgXCJFbnRyZXByZW5ldXJzaGlwXCIsIFwiUHJpbmNpcGxlcyBvZiBCdXNpbmVzc1wiLCBcIk1hcmtldGluZ1wiLCBcIk90aGVyXCJdXG5cdFx0fTtcblxuXHRcdGFjdGlvbihvcHRpb25zKS50aGVuKChyZXN1bHQpID0+IHtcblx0XHRcdHRoaXMudXNlci5zZXRDb3Vyc2UoKHJlc3VsdCA9PSAnQ2FuY2VsJykgPyB0aGlzLmNvdXJzZSA6IHJlc3VsdCk7XG5cdFx0fSk7XG4gIH1cbiAgXG4gIGxvZ2luKCkge1xuICAgIGNvbnNvbGUubG9nKCdsb2dpbicpO1xuICAgIHRoaXMubmF2Lm5hdmlnYXRlKFtcIi9sb2dpblwiXSk7XG4gIH1cblxufVxuIl19