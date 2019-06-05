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
    function StudentRegisterComponent(userService, routerExtensions, vcRef, modal) {
        this.userService = userService;
        this.routerExtensions = routerExtensions;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3R1ZGVudC1yZWdpc3Rlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJzdHVkZW50LXJlZ2lzdGVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFrRjtBQUVsRix1REFBMkQ7QUFDM0QsbURBQTRDO0FBQzVDLHVEQUFxRDtBQUNyRCxzREFBK0Q7QUFDL0QsbUVBQTZFO0FBRTdFLG1EQUEwRDtBQVExRDtJQVdFLGtDQUFvQixXQUF3QixFQUN4QixnQkFBa0MsRUFDbEMsS0FBdUIsRUFDdkIsS0FBeUI7UUFIekIsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFDeEIscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQUNsQyxVQUFLLEdBQUwsS0FBSyxDQUFrQjtRQUN2QixVQUFLLEdBQUwsS0FBSyxDQUFvQjtRQVo3QyxlQUFVLEdBQUcsS0FBSyxDQUFDO1FBR25CLFFBQUcsR0FBRyxJQUFJLElBQUksRUFBRSxDQUFDO1FBQ2pCLFdBQU0sR0FBRyxRQUFRLENBQUM7UUFDbEIsZUFBVSxHQUFHLFNBQVMsQ0FBQztRQUN2QixlQUFVLEdBQUcsV0FBVyxDQUFDO1FBQ3pCLFdBQU0sR0FBRyxXQUFXLENBQUM7UUFNbkIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLGlCQUFJLEVBQUUsQ0FBQztJQUN6QixDQUFDO0lBRUQsMkNBQVEsR0FBUjtRQUFBLGlCQXFCQztRQXBCRyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsZUFBZTtZQUNyRSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVE7WUFDbEUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFD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TSxDQUFDO1FBQzNELENBQUMsQ0FBQyxDQUFDO0lBQ0osQ0FBQztJQXBIdUI7UUFBdEIsZ0JBQVMsQ0FBQyxVQUFVLENBQUM7a0NBQVcsaUJBQVU7OERBQUM7SUFDZDtRQUE3QixnQkFBUyxDQUFDLGlCQUFpQixDQUFDO2tDQUFrQixpQkFBVTtxRUFBQztJQUovQyx3QkFBd0I7UUFOcEMsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxrQkFBa0I7WUFDNUIsV0FBVyxFQUFFLG1DQUFtQztZQUNoRCxTQUFTLEVBQUUsQ0FBQyxrQ0FBa0MsQ0FBQztZQUMvQyxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7U0FDcEIsQ0FBQzt5Q0FZaUMsMEJBQVc7WUFDTix5QkFBZ0I7WUFDM0IsdUJBQWdCO1lBQ2hCLDRCQUFrQjtPQWRsQyx3QkFBd0IsQ0F5SHBDO0lBQUQsK0JBQUM7Q0FBQSxBQXpIRCxJQXlIQztBQXpIWSw0REFBd0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEVsZW1lbnRSZWYsIFZpZXdDaGlsZCwgVmlld0NvbnRhaW5lclJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnXG5cbmltcG9ydCB7IGFsZXJ0LGFjdGlvbiB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2RpYWxvZ3NcIjtcbmltcG9ydCB7IFVzZXIgfSBmcm9tICcuLi9zaGFyZWQvdXNlci5tb2RlbCc7XG5pbXBvcnQgeyBVc2VyU2VydmljZSB9IGZyb20gJy4uL3NoYXJlZC91c2VyLnNlcnZpY2UnO1xuaW1wb3J0IHsgUm91dGVyRXh0ZW5zaW9ucyB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7IE1vZGFsRGlhbG9nU2VydmljZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9kaXJlY3RpdmVzL2RpYWxvZ3NcIjtcblxuaW1wb3J0IHsgRE9CTW9kYWxDb21wb25lbnQgfSBmcm9tIFwiLi9tb2RhbC9kb2IvZG9iLm1vZGFsXCI7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3N0dWRlbnQtcmVnaXN0ZXInLFxuICB0ZW1wbGF0ZVVybDogJy4vc3R1ZGVudC1yZWdpc3Rlci5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3N0dWRlbnQtcmVnaXN0ZXIuY29tcG9uZW50LmNzcyddLFxuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxufSlcbmV4cG9ydCBjbGFzcyBTdHVkZW50UmVnaXN0ZXJDb21wb25lbnQge1xuICB1c2VyOiBVc2VyO1xuICBwcm9jZXNzaW5nID0gZmFsc2U7XG4gIEBWaWV3Q2hpbGQoXCJwYXNzd29yZFwiKSBwYXNzd29yZDogRWxlbWVudFJlZjtcbiAgQFZpZXdDaGlsZChcImNvbmZpcm1QYXNzd29yZFwiKSBjb25maXJtUGFzc3dvcmQ6IEVsZW1lbnRSZWY7XG4gIGRvYiA9IG5ldyBEYXRlKCk7XG4gIGdlbmRlciA9IFwiRmVtYWxlXCI7XG4gIG1lbWJlclR5cGUgPSBcIlN0dWRlbnRcIjtcbiAgZ3JhZGVMZXZlbCA9IFwiOXRoIEdyYWRlXCI7XG4gIGNvdXJzZSA9IFwiRWNvbm9taWNzXCI7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSB1c2VyU2VydmljZTogVXNlclNlcnZpY2UsIFxuICAgICAgICAgICAgICBwcml2YXRlIHJvdXRlckV4dGVuc2lvbnM6IFJvdXRlckV4dGVuc2lvbnMsXG4gICAgICAgICAgICAgIHByaXZhdGUgdmNSZWY6IFZpZXdDb250YWluZXJSZWYsXG4gICAgICAgICAgICAgIHByaXZhdGUgbW9kYWw6IE1vZGFsRGlhbG9nU2VydmljZSkgeyBcbiAgICB0aGlzLnVzZXIgPSBuZXcgVXNlcigpO1xuICB9XG5cbiAgcmVnaXN0ZXIoKSB7XG4gICAgICBpZiAoIXRoaXMudXNlci5lbWFpbCB8fCAhdGhpcy51c2VyLnBhc3N3b3JkIHx8ICF0aGlzLnVzZXIuY29uZmlybVBhc3N3b3JkIHx8XG4gICAgICAgICAgIXRoaXMudXNlci51c2VyTmFtZSB8fCAhdGhpcy51c2VyLmZpcnN0TmFtZSB8fCAhdGhpcy51c2VyLmxhc3ROYW1lIHx8XG4gICAgICAgICAgIXRoaXMudXNlci5kb2IgfHwgIXRoaXMudXNlci5nZW5kZXIgfHwgIXRoaXMudXNlci5tZW1iZXJUeXBlIHx8ICF0aGlzLnVzZXIuZ3JhZGVMZXZlbCB8fCAhdGhpcy51c2VyLmNvdXJzZVxuICAgICAgICApIHtcbiAgICAgICAgdGhpcy5hbGVydChcIlBsZWFzZSBwcm92aWRlIHRoZSByZXF1aXJlZCBpbmZvLlwiKTtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMucHJvY2Vzc2luZyA9IHRydWU7XG5cbiAgICBpZiAodGhpcy51c2VyLnBhc3N3b3JkICE9IHRoaXMudXNlci5jb25maXJtUGFzc3dvcmQpIHtcbiAgICAgICAgdGhpcy5hbGVydChcIllvdXIgcGFzc3dvcmRzIGRvIG5vdCBtYXRjaC5cIik7XG4gICAgICAgIHRoaXMucHJvY2Vzc2luZyA9IGZhbHNlO1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMudXNlclNlcnZpY2UucmVnaXN0ZXIodGhpcy51c2VyKVxuICAgICAgICAuc3Vic2NyaWJlKChyZXN1bHQpID0+IHtcbiAgICAgICAgICAgIHRoaXMucHJvY2Vzc2luZyA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5hbGVydChcIllvdXIgYWNjb3VudCB3YXMgc3VjY2Vzc2Z1bGx5IGNyZWF0ZWQuXCIpO1xuICAgICAgICB9KTtcbiAgfVxuXG4gIGFsZXJ0KG1lc3NhZ2U6IHN0cmluZykge1xuICAgIHJldHVybiBhbGVydCh7XG4gICAgICAgIHRpdGxlOiBcIlchc2UgUmVnaXN0ZXJcIixcbiAgICAgICAgb2tCdXR0b25UZXh0OiBcIk9LXCIsXG4gICAgICAgIG1lc3NhZ2U6IG1lc3NhZ2VcbiAgICB9KTtcbiAgfVxuXG4gIGZvY3VzUGFzc3dvcmQoKSB7XG4gICAgdGhpcy5wYXNzd29yZC5uYXRpdmVFbGVtZW50LmZvY3VzKCk7XG4gIH1cblxuICBmb2N1c0NvbmZpcm1QYXNzd29yZCgpIHtcbiAgICB0aGlzLmNvbmZpcm1QYXNzd29yZC5uYXRpdmVFbGVtZW50LmZvY3VzKCk7XG4gIH1cblxuICBvbk9wZW5TZWxlY3REYXRlKCkge1xuICAgIGxldCBvcHRpb25zID0ge1xuICAgICAgY29udGV4dDoge30sXG4gICAgICBmdWxsc2NyZWVuOiB0cnVlLFxuICAgICAgdmlld0NvbnRhaW5lclJlZjogdGhpcy52Y1JlZlxuICAgIH07XG4gICAgdGhpcy5tb2RhbC5zaG93TW9kYWwoRE9CTW9kYWxDb21wb25lbnQsIG9wdGlvbnMpLnRoZW4oc2VsZWN0ZWREYXRlID0+IHtcbiAgICAgICAgdGhpcy5kb2IgPSBzZWxlY3RlZERhdGU7XG4gICAgICB9KTtcblxuICB9XG5cbiAgb25PcGVuU2VsZWN0R2VuZGVyKCk6IHZvaWQge1xuXHRcdGxldCBvcHRpb25zID0ge1xuXHRcdFx0dGl0bGU6IFwiR2VuZGVyXCIsXG5cdFx0XHRtZXNzYWdlOiBcIkNob29zZSB5b3VyIGdlbmRlclwiLFxuXHRcdFx0Y2FuY2VsQnV0dG9uVGV4dDogXCJDYW5jZWxcIixcblx0XHRcdGFjdGlvbnM6IFtcIk1hbGVcIiwgXCJGZW1hbGVcIl1cblx0XHR9O1xuXG5cdFx0YWN0aW9uKG9wdGlvbnMpLnRoZW4oKHJlc3VsdCkgPT4ge1xuXHRcdFx0dGhpcy5nZW5kZXIgPSAocmVzdWx0ID09ICdDYW5jZWwnKSA/IHRoaXMuZ2VuZGVyIDogcmVzdWx0O1xuXHRcdH0pO1xuICB9XG4gIFxuICBvbk9wZW5TZWxlY3RNZW1iZXJUeXBlKCk6IHZvaWQge1xuXHRcdGxldCBvcHRpb25zID0ge1xuXHRcdFx0dGl0bGU6IFwiTWVtYmVyIFR5cGVcIixcblx0XHRcdG1lc3NhZ2U6IFwiQ2hvb3NlIHlvdXIgbWVtYmVyIHR5cGVcIixcblx0XHRcdGNhbmNlbEJ1dHRvblRleHQ6IFwiQ2FuY2VsXCIsXG5cdFx0XHRhY3Rpb25zOiBbXCJTdHVkZW50XCIsIFwiVGVhY2hlclwiXVxuXHRcdH07XG5cblx0XHRhY3Rpb24ob3B0aW9ucykudGhlbigocmVzdWx0KSA9PiB7XG5cdFx0XHR0aGlzLm1lbWJlclR5cGUgPSAocmVzdWx0ID09ICdDYW5jZWwnKSA/IHRoaXMubWVtYmVyVHlwZSA6IHJlc3VsdDtcblx0XHR9KTtcbiAgfVxuXG4gIG9uT3BlblNlbGVjdEdyYWRlTGV2ZWwoKTogdm9pZCB7XG5cdFx0bGV0IG9wdGlvbnMgPSB7XG5cdFx0XHR0aXRsZTogXCJHcmFkZSBMZXZlbFwiLFxuXHRcdFx0bWVzc2FnZTogXCJDaG9vc2UgeW91ciBncmFkZSBsZXZlbFwiLFxuXHRcdFx0Y2FuY2VsQnV0dG9uVGV4dDogXCJDYW5jZWxcIixcblx0XHRcdGFjdGlvbnM6IFtcIjl0aCBHcmFkZVwiLCBcIjEwdGggR3JhZGVcIiwgXCIxMXRoIEdyYWRlXCIsIFwiMTJ0aCBHcmFkZVwiLCBcIkNvbW11bml0eSBDb2xsZWdlXCIsIFwiQ29sbGVnZVwiXVxuXHRcdH07XG5cblx0XHRhY3Rpb24ob3B0aW9ucykudGhlbigocmVzdWx0KSA9PiB7XG5cdFx0XHR0aGlzLmdyYWRlTGV2ZWwgPSAocmVzdWx0ID09ICdDYW5jZWwnKSA/IHRoaXMuZ3JhZGVMZXZlbCA6IHJlc3VsdDtcblx0XHR9KTtcbiAgfVxuICBcbiAgb25PcGVuU2VsZWN0Q291cnNlKCk6IHZvaWQge1xuXHRcdGxldCBvcHRpb25zID0ge1xuXHRcdFx0dGl0bGU6IFwiQ291cnNlXCIsXG5cdFx0XHRtZXNzYWdlOiBcIkNob29zZSB5b3VyIGNvdXJzZVwiLFxuXHRcdFx0Y2FuY2VsQnV0dG9uVGV4dDogXCJDYW5jZWxcIixcblx0XHRcdGFjdGlvbnM6IFtcIkVjb25vbWljc1wiLCBcIlBlcnNvbmFsIEZpbmFuY2VcIiwgXCJCdXNpbmVzcyBDbGFzc1wiLCBcIkNvbnN1bWVyIFNjaWVuY2VcIiwgXCJNYXRobWF0aWNzXCIsIFwiRmluYW5jaWFsIFBsYW5uaW5nXCIsIFwiQWNhZGVteSBvZiBGaW5hbmNlXCIsIFwiRW50cmVwcmVuZXVyc2hpcFwiLCBcIlByaW5jaXBsZXMgb2YgQnVzaW5lc3NcIiwgXCJNYXJrZXRpbmdcIiwgXCJPdGhlclwiXVxuXHRcdH07XG5cblx0XHRhY3Rpb24ob3B0aW9ucykudGhlbigocmVzdWx0KSA9PiB7XG5cdFx0XHR0aGlzLmNvdXJzZSA9IChyZXN1bHQgPT0gJ0NhbmNlbCcpID8gdGhpcy5jb3Vyc2UgOiByZXN1bHQ7XG5cdFx0fSk7XG5cdH1cblxufVxuIl19