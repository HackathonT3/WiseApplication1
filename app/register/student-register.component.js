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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3R1ZGVudC1yZWdpc3Rlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJzdHVkZW50LXJlZ2lzdGVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFrRjtBQUVsRix1REFBMkQ7QUFDM0Qsa0RBQTJDO0FBQzNDLHNEQUFvRDtBQUNwRCxzREFBK0Q7QUFDL0QsbUVBQTZFO0FBRTdFLG1EQUEwRDtBQVExRDtJQVdFLGtDQUFvQixXQUF3QixFQUN4QixHQUFxQixFQUNyQixLQUF1QixFQUN2QixLQUF5QjtRQUh6QixnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUN4QixRQUFHLEdBQUgsR0FBRyxDQUFrQjtRQUNyQixVQUFLLEdBQUwsS0FBSyxDQUFrQjtRQUN2QixVQUFLLEdBQUwsS0FBSyxDQUFvQjtRQVo3QyxlQUFVLEdBQUcsS0FBSyxDQUFDO1FBR25CLFFBQUcsR0FBRyxJQUFJLElBQUksRUFBRSxDQUFDO1FBQ2pCLFdBQU0sR0FBRyxRQUFRLENBQUM7UUFDbEIsZUFBVSxHQUFHLFNBQVMsQ0FBQztRQUN2QixlQUFVLEdBQUcsV0FBVyxDQUFDO1FBQ3pCLFdBQU0sR0FBRyxXQUFXLENBQUM7UUFNbkIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLGlCQUFJLEVBQUUsQ0FBQztRQUN2QixJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUN6QixJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDakMsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ3pDLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUN6QyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDakMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDO0lBQzFCLENBQUM7SUFFRCwyQ0FBUSxHQUFSO1FBQUEsaUJBb0JDO1FBbkJHLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxlQUFlO1lBQ3JFLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQzNGO1lBQ0YsSUFBSSxDQUFDLEtBQUssQ0FBQyxtQ0FBbUMsQ0FBQyxDQUFDO1lBQ2hELE9BQU87U0FDVjtRQUVELElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDO1FBRXZCLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxlQUFlLEVBQUU7WUFDakQsSUFBSSxDQUFDLEtBQUssQ0FBQyw4QkFBOEIsQ0FBQyxDQUFDO1lBQzNDLElBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDO1lBQ3hCLE9BQU87U0FDVjtRQUNELElBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7YUFDL0IsU0FBUyxDQUFDLFVBQUMsTUFBTTtZQUNkLEtBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDO1lBQ3hCLEtBQUksQ0FBQyxLQUFLLENBQUMsd0NBQXdDLENBQUMsQ0FBQztRQUN6RCxDQUFDLENBQUMsQ0FBQztJQUNULENBQUM7SUFFRCx3Q0FBSyxHQUFMLFVBQU0sT0FBZTtRQUNuQixPQUFPLGVBQUssQ0FBQztZQUNULEtBQUssRUFBRSxlQUFlO1lBQ3RCLFlBQVksRUFBRSxJQUFJO1lBQ2xCLE9BQU8sRUFBRSxPQUFPO1NBQ25CLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCxnREFBYSxHQUFiO1FBQ0UsSUFBSSxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDdEMsQ0FBQztJQUVELHVEQUFvQixHQUFwQjtRQUNFLElBQUksQ0FBQyxlQUFlLENBQUMsYUFBYSxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQzdDLENBQUM7SUFFRCxtREFBZ0IsR0FBaEI7UUFDRSxJQUFJLE9BQU8sR0FBRztZQUNaLE9BQU8sRUFBRSxFQUFFO1lBQ1gsVUFBVSxFQUFFLElBQUk7WUFDaEIsZ0JBQWdCLEVBQUUsSUFBSSxDQUFDLEtBQUs7U0FDN0IsQ0FBQztRQUNGLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLDZCQUFpQixFQUFFLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFBLFlBQVk7WUFDOUQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUM1QixDQUFDLENBQUMsQ0FBQztJQUVQLENBQUM7SUFFRCxxREFBa0IsR0FBbEI7UUFBQSxpQkFXQztRQVZELElBQUksT0FBTyxHQUFHO1lBQ2IsS0FBSyxFQUFFLFFBQVE7WUFDZixPQUFPLEVBQUUsb0JBQW9CO1lBQzdCLGdCQUFnQixFQUFFLFFBQVE7WUFDMUIsT0FBTyxFQUFFLENBQUMsTUFBTSxFQUFFLFFBQVEsQ0FBQztTQUMzQixDQUFDO1FBRUYsZ0JBQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQyxNQUFNO1lBQzNCLEtBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsTUFBTSxJQUFJLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNsRSxDQUFDLENBQUMsQ0FBQztJQUNILENBQUM7SUFFRCx5REFBc0IsR0FBdEI7UUFBQSxpQkFXQztRQVZELElBQUksT0FBTyxHQUFHO1lBQ2IsS0FBSyxFQUFFLGFBQWE7WUFDcEIsT0FBTyxFQUFFLHlCQUF5QjtZQUNsQyxnQkFBZ0IsRUFBRSxRQUFRO1lBQzFCLE9BQU8sRUFBRSxDQUFDLFNBQVMsRUFBRSxTQUFTLENBQUM7U0FDL0IsQ0FBQztRQUVGLGdCQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUMsTUFBTTtZQUMzQixLQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLE1BQU0sSUFBSSxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDMUUsQ0FBQyxDQUFDLENBQUM7SUFDSCxDQUFDO0lBRUQseURBQXNCLEdBQXRCO1FBQUEsaUJBV0M7UUFWRCxJQUFJLE9BQU8sR0FBRztZQUNiLEtBQUssRUFBRSxhQUFhO1lBQ3BCLE9BQU8sRUFBRSx5QkFBeUI7WUFDbEMsZ0JBQWdCLEVBQUUsUUFBUTtZQUMxQixPQUFPLEVBQUUsQ0FBQyxXQUFXLEVBQUUsWUFBWSxFQUFFLFlBQVksRUFBRSxZQUFZLEVBQUUsbUJBQW1CLEVBQUUsU0FBUyxDQUFDO1NBQ2hHLENBQUM7UUFFRixnQkFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFDLE1BQU07WUFDM0IsS0FBSSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxNQUFNLElBQUksUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQzFFLENBQUMsQ0FBQyxDQUFDO0lBQ0gsQ0FBQztJQUVELHFEQUFrQixHQUFsQjtRQUFBLGlCQVdDO1FBVkQsSUFBSSxPQUFPLEdBQUc7WUFDYixLQUFLLEVBQUUsUUFBUTtZQUNmLE9BQU8sRUFBRSxvQkFBb0I7WUFDN0IsZ0JBQWdCLEVBQUUsUUFBUTtZQUMxQixPQUFPLEVBQUUsQ0FBQyxXQUFXLEVBQUUsa0JBQWtCLEVBQUUsZ0JBQWdCLEVBQUUsa0JBQWtCLEVBQUUsWUFBWSxFQUFFLG9CQUFvQixFQUFFLG9CQUFvQixFQUFFLGtCQUFrQixFQUFFLHdCQUF3QixFQUFFLFdBQVcsRUFBRSxPQUFPLENBQUM7U0FDOU0sQ0FBQztRQUVGLGdCQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUMsTUFBTTtZQUMzQixLQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLE1BQU0sSUFBSSxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDbEUsQ0FBQyxDQUFDLENBQUM7SUFDSCxDQUFDO0lBRUQsd0NBQUssR0FBTDtRQUNFLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDckIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO0lBQ2hDLENBQUM7SUE5SHNCO1FBQXRCLGdCQUFTLENBQUMsVUFBVSxDQUFDO2tDQUFXLGlCQUFVOzhEQUFDO0lBQ2Q7UUFBN0IsZ0JBQVMsQ0FBQyxpQkFBaUIsQ0FBQztrQ0FBa0IsaUJBQVU7cUVBQUM7SUFKL0Msd0JBQXdCO1FBTnBDLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsa0JBQWtCO1lBQzVCLFdBQVcsRUFBRSxtQ0FBbUM7WUFDaEQsU0FBUyxFQUFFLENBQUMsa0NBQWtDLENBQUM7WUFDL0MsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1NBQ3BCLENBQUM7eUNBWWlDLDBCQUFXO1lBQ25CLHlCQUFnQjtZQUNkLHVCQUFnQjtZQUNoQiw0QkFBa0I7T0FkbEMsd0JBQXdCLENBbUlwQztJQUFELCtCQUFDO0NBQUEsQUFuSUQsSUFtSUM7QUFuSVksNERBQXdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBWaWV3Q2hpbGQsIFZpZXdDb250YWluZXJSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJ1xuXG5pbXBvcnQgeyBhbGVydCxhY3Rpb24gfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9kaWFsb2dzXCI7XG5pbXBvcnQgeyBVc2VyIH0gZnJvbSAnLi9zaGFyZWQvdXNlci5tb2RlbCc7XG5pbXBvcnQgeyBVc2VyU2VydmljZSB9IGZyb20gJy4vc2hhcmVkL3VzZXIuc2VydmljZSc7XG5pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHsgTW9kYWxEaWFsb2dTZXJ2aWNlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2RpcmVjdGl2ZXMvZGlhbG9nc1wiO1xuXG5pbXBvcnQgeyBET0JNb2RhbENvbXBvbmVudCB9IGZyb20gXCIuL21vZGFsL2RvYi9kb2IubW9kYWxcIjtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc3R1ZGVudC1yZWdpc3RlcicsXG4gIHRlbXBsYXRlVXJsOiAnLi9zdHVkZW50LXJlZ2lzdGVyLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vc3R1ZGVudC1yZWdpc3Rlci5jb21wb25lbnQuY3NzJ10sXG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG59KVxuZXhwb3J0IGNsYXNzIFN0dWRlbnRSZWdpc3RlckNvbXBvbmVudCB7XG4gIHVzZXI6IFVzZXI7XG4gIHByb2Nlc3NpbmcgPSBmYWxzZTtcbiAgQFZpZXdDaGlsZChcInBhc3N3b3JkXCIpIHBhc3N3b3JkOiBFbGVtZW50UmVmO1xuICBAVmlld0NoaWxkKFwiY29uZmlybVBhc3N3b3JkXCIpIGNvbmZpcm1QYXNzd29yZDogRWxlbWVudFJlZjtcbiAgZG9iID0gbmV3IERhdGUoKTtcbiAgZ2VuZGVyID0gXCJGZW1hbGVcIjtcbiAgbWVtYmVyVHlwZSA9IFwiU3R1ZGVudFwiO1xuICBncmFkZUxldmVsID0gXCI5dGggR3JhZGVcIjtcbiAgY291cnNlID0gXCJFY29ub21pY3NcIjtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHVzZXJTZXJ2aWNlOiBVc2VyU2VydmljZSwgXG4gICAgICAgICAgICAgIHByaXZhdGUgbmF2OiBSb3V0ZXJFeHRlbnNpb25zLFxuICAgICAgICAgICAgICBwcml2YXRlIHZjUmVmOiBWaWV3Q29udGFpbmVyUmVmLFxuICAgICAgICAgICAgICBwcml2YXRlIG1vZGFsOiBNb2RhbERpYWxvZ1NlcnZpY2UpIHsgXG4gICAgdGhpcy51c2VyID0gbmV3IFVzZXIoKTtcbiAgICB0aGlzLnVzZXIuc2V0RG9iKFwibnVsbFwiKTtcbiAgICB0aGlzLnVzZXIuc2V0R2VuZGVyKHRoaXMuZ2VuZGVyKTtcbiAgICB0aGlzLnVzZXIuc2V0TWVtYmVyVHlwZSh0aGlzLm1lbWJlclR5cGUpO1xuICAgIHRoaXMudXNlci5zZXRHcmFkZUxldmVsKHRoaXMuZ3JhZGVMZXZlbCk7XG4gICAgdGhpcy51c2VyLnNldENvdXJzZSh0aGlzLmNvdXJzZSk7XG4gICAgdGhpcy51c2VyLm1lbWJlcklkID0gMTI7XG4gIH1cblxuICByZWdpc3RlcigpIHtcbiAgICAgIGlmICghdGhpcy51c2VyLmVtYWlsIHx8ICF0aGlzLnVzZXIucGFzc3dvcmQgfHwgIXRoaXMudXNlci5jb25maXJtUGFzc3dvcmQgfHxcbiAgICAgICAgICAhdGhpcy51c2VyLnVzZXJOYW1lIHx8ICF0aGlzLnVzZXIuZmlyc3ROYW1lIHx8ICF0aGlzLnVzZXIubGFzdE5hbWUgfHwgIXRoaXMudXNlci5tZW1iZXJUeXBlXG4gICAgICAgICkge1xuICAgICAgICB0aGlzLmFsZXJ0KFwiUGxlYXNlIHByb3ZpZGUgdGhlIHJlcXVpcmVkIGluZm8uXCIpO1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5wcm9jZXNzaW5nID0gdHJ1ZTtcblxuICAgIGlmICh0aGlzLnVzZXIucGFzc3dvcmQgIT0gdGhpcy51c2VyLmNvbmZpcm1QYXNzd29yZCkge1xuICAgICAgICB0aGlzLmFsZXJ0KFwiWW91ciBwYXNzd29yZHMgZG8gbm90IG1hdGNoLlwiKTtcbiAgICAgICAgdGhpcy5wcm9jZXNzaW5nID0gZmFsc2U7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy51c2VyU2VydmljZS5yZWdpc3Rlcih0aGlzLnVzZXIpXG4gICAgICAgIC5zdWJzY3JpYmUoKHJlc3VsdCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5wcm9jZXNzaW5nID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLmFsZXJ0KFwiWW91ciBhY2NvdW50IHdhcyBzdWNjZXNzZnVsbHkgY3JlYXRlZC5cIik7XG4gICAgICAgIH0pO1xuICB9XG5cbiAgYWxlcnQobWVzc2FnZTogc3RyaW5nKSB7XG4gICAgcmV0dXJuIGFsZXJ0KHtcbiAgICAgICAgdGl0bGU6IFwiVyFzZSBSZWdpc3RlclwiLFxuICAgICAgICBva0J1dHRvblRleHQ6IFwiT0tcIixcbiAgICAgICAgbWVzc2FnZTogbWVzc2FnZVxuICAgIH0pO1xuICB9XG5cbiAgZm9jdXNQYXNzd29yZCgpIHtcbiAgICB0aGlzLnBhc3N3b3JkLm5hdGl2ZUVsZW1lbnQuZm9jdXMoKTtcbiAgfVxuXG4gIGZvY3VzQ29uZmlybVBhc3N3b3JkKCkge1xuICAgIHRoaXMuY29uZmlybVBhc3N3b3JkLm5hdGl2ZUVsZW1lbnQuZm9jdXMoKTtcbiAgfVxuXG4gIG9uT3BlblNlbGVjdERhdGUoKSB7XG4gICAgbGV0IG9wdGlvbnMgPSB7XG4gICAgICBjb250ZXh0OiB7fSxcbiAgICAgIGZ1bGxzY3JlZW46IHRydWUsXG4gICAgICB2aWV3Q29udGFpbmVyUmVmOiB0aGlzLnZjUmVmXG4gICAgfTtcbiAgICB0aGlzLm1vZGFsLnNob3dNb2RhbChET0JNb2RhbENvbXBvbmVudCwgb3B0aW9ucykudGhlbihzZWxlY3RlZERhdGUgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhzZWxlY3RlZERhdGUpO1xuICAgICAgfSk7XG5cbiAgfVxuXG4gIG9uT3BlblNlbGVjdEdlbmRlcigpOiB2b2lkIHtcblx0XHRsZXQgb3B0aW9ucyA9IHtcblx0XHRcdHRpdGxlOiBcIkdlbmRlclwiLFxuXHRcdFx0bWVzc2FnZTogXCJDaG9vc2UgeW91ciBnZW5kZXJcIixcblx0XHRcdGNhbmNlbEJ1dHRvblRleHQ6IFwiQ2FuY2VsXCIsXG5cdFx0XHRhY3Rpb25zOiBbXCJNYWxlXCIsIFwiRmVtYWxlXCJdXG5cdFx0fTtcblxuXHRcdGFjdGlvbihvcHRpb25zKS50aGVuKChyZXN1bHQpID0+IHtcblx0XHRcdHRoaXMudXNlci5zZXRHZW5kZXIoKHJlc3VsdCA9PSAnQ2FuY2VsJykgPyB0aGlzLmdlbmRlciA6IHJlc3VsdCk7XG5cdFx0fSk7XG4gIH1cbiAgXG4gIG9uT3BlblNlbGVjdE1lbWJlclR5cGUoKTogdm9pZCB7XG5cdFx0bGV0IG9wdGlvbnMgPSB7XG5cdFx0XHR0aXRsZTogXCJNZW1iZXIgVHlwZVwiLFxuXHRcdFx0bWVzc2FnZTogXCJDaG9vc2UgeW91ciBtZW1iZXIgdHlwZVwiLFxuXHRcdFx0Y2FuY2VsQnV0dG9uVGV4dDogXCJDYW5jZWxcIixcblx0XHRcdGFjdGlvbnM6IFtcIlN0dWRlbnRcIiwgXCJUZWFjaGVyXCJdXG5cdFx0fTtcblxuXHRcdGFjdGlvbihvcHRpb25zKS50aGVuKChyZXN1bHQpID0+IHtcblx0XHRcdHRoaXMudXNlci5zZXRNZW1iZXJUeXBlKChyZXN1bHQgPT0gJ0NhbmNlbCcpID8gdGhpcy5tZW1iZXJUeXBlIDogcmVzdWx0KTtcblx0XHR9KTtcbiAgfVxuXG4gIG9uT3BlblNlbGVjdEdyYWRlTGV2ZWwoKTogdm9pZCB7XG5cdFx0bGV0IG9wdGlvbnMgPSB7XG5cdFx0XHR0aXRsZTogXCJHcmFkZSBMZXZlbFwiLFxuXHRcdFx0bWVzc2FnZTogXCJDaG9vc2UgeW91ciBncmFkZSBsZXZlbFwiLFxuXHRcdFx0Y2FuY2VsQnV0dG9uVGV4dDogXCJDYW5jZWxcIixcblx0XHRcdGFjdGlvbnM6IFtcIjl0aCBHcmFkZVwiLCBcIjEwdGggR3JhZGVcIiwgXCIxMXRoIEdyYWRlXCIsIFwiMTJ0aCBHcmFkZVwiLCBcIkNvbW11bml0eSBDb2xsZWdlXCIsIFwiQ29sbGVnZVwiXVxuXHRcdH07XG5cblx0XHRhY3Rpb24ob3B0aW9ucykudGhlbigocmVzdWx0KSA9PiB7XG5cdFx0XHR0aGlzLnVzZXIuc2V0R3JhZGVMZXZlbCgocmVzdWx0ID09ICdDYW5jZWwnKSA/IHRoaXMuZ3JhZGVMZXZlbCA6IHJlc3VsdCk7XG5cdFx0fSk7XG4gIH1cbiAgXG4gIG9uT3BlblNlbGVjdENvdXJzZSgpOiB2b2lkIHtcblx0XHRsZXQgb3B0aW9ucyA9IHtcblx0XHRcdHRpdGxlOiBcIkNvdXJzZVwiLFxuXHRcdFx0bWVzc2FnZTogXCJDaG9vc2UgeW91ciBjb3Vyc2VcIixcblx0XHRcdGNhbmNlbEJ1dHRvblRleHQ6IFwiQ2FuY2VsXCIsXG5cdFx0XHRhY3Rpb25zOiBbXCJFY29ub21pY3NcIiwgXCJQZXJzb25hbCBGaW5hbmNlXCIsIFwiQnVzaW5lc3MgQ2xhc3NcIiwgXCJDb25zdW1lciBTY2llbmNlXCIsIFwiTWF0aG1hdGljc1wiLCBcIkZpbmFuY2lhbCBQbGFubmluZ1wiLCBcIkFjYWRlbXkgb2YgRmluYW5jZVwiLCBcIkVudHJlcHJlbmV1cnNoaXBcIiwgXCJQcmluY2lwbGVzIG9mIEJ1c2luZXNzXCIsIFwiTWFya2V0aW5nXCIsIFwiT3RoZXJcIl1cblx0XHR9O1xuXG5cdFx0YWN0aW9uKG9wdGlvbnMpLnRoZW4oKHJlc3VsdCkgPT4ge1xuXHRcdFx0dGhpcy51c2VyLnNldENvdXJzZSgocmVzdWx0ID09ICdDYW5jZWwnKSA/IHRoaXMuY291cnNlIDogcmVzdWx0KTtcblx0XHR9KTtcbiAgfVxuICBcbiAgbG9naW4oKSB7XG4gICAgY29uc29sZS5sb2coJ2xvZ2luJyk7XG4gICAgdGhpcy5uYXYubmF2aWdhdGUoW1wiL2xvZ2luXCJdKTtcbiAgfVxuXG59XG4iXX0=