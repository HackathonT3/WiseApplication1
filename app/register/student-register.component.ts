import { Component, ElementRef, ViewChild, ViewContainerRef } from '@angular/core'

import { alert,action } from "tns-core-modules/ui/dialogs";
import { User } from './shared/user.model';
import { UserService } from './shared/user.service';
import { RouterExtensions } from "nativescript-angular/router";
import { ModalDialogService } from "nativescript-angular/directives/dialogs";

import { DOBModalComponent } from "./modal/dob/dob.modal";

@Component({
  selector: 'student-register',
  templateUrl: './student-register.component.html',
  styleUrls: ['./student-register.component.css'],
  moduleId: module.id,
})
export class StudentRegisterComponent {
  user: User;
  processing = false;
  @ViewChild("password") password: ElementRef;
  @ViewChild("confirmPassword") confirmPassword: ElementRef;
  dob = new Date();
  gender = "Female";
  memberType = "Student";
  gradeLevel = "9th Grade";
  course = "Economics";

  constructor(private userService: UserService, 
              private nav: RouterExtensions,
              private vcRef: ViewContainerRef,
              private modal: ModalDialogService) { 
    this.user = new User();
    this.user.setDob("null");
    this.user.setGender(this.gender);
    this.user.setMemberType(this.memberType);
    this.user.setGradeLevel(this.gradeLevel);
    this.user.setCourse(this.course);
    this.user.memberId = 12;
  }

  register() {
      if (!this.user.email || !this.user.password || !this.user.confirmPassword ||
          !this.user.userName || !this.user.firstName || !this.user.lastName || !this.user.memberType
        ) {
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
        .subscribe((result) => {
            this.processing = false;
            this.alertSuccess("Your account was successfully created.");
        });
  }

  alert(message: string) {
    return alert({
        title: "W!se Register",
        okButtonText: "OK",
        message: message
    });
  }

  alertSuccess(message: string) {
    return alert({
        title: "W!se Register",
        okButtonText: "OK",
        message: message
    }).then(function () {
      this.nav.navigate(["/dashboard"]);
    });

  }

  focusPassword() {
    this.password.nativeElement.focus();
  }

  focusConfirmPassword() {
    this.confirmPassword.nativeElement.focus();
  }

  onOpenSelectDate() {
    let options = {
      context: {},
      fullscreen: true,
      viewContainerRef: this.vcRef
    };
    this.modal.showModal(DOBModalComponent, options).then(selectedDate => {
        console.log(selectedDate);
      });

  }

  onOpenSelectGender(): void {
		let options = {
			title: "Gender",
			message: "Choose your gender",
			cancelButtonText: "Cancel",
			actions: ["Male", "Female"]
		};

		action(options).then((result) => {
			this.user.setGender((result == 'Cancel') ? this.gender : result);
		});
  }
  
  onOpenSelectMemberType(): void {
		let options = {
			title: "Member Type",
			message: "Choose your member type",
			cancelButtonText: "Cancel",
			actions: ["Student", "Teacher"]
		};

		action(options).then((result) => {
			this.user.setMemberType((result == 'Cancel') ? this.memberType : result);
		});
  }

  onOpenSelectGradeLevel(): void {
		let options = {
			title: "Grade Level",
			message: "Choose your grade level",
			cancelButtonText: "Cancel",
			actions: ["9th Grade", "10th Grade", "11th Grade", "12th Grade", "Community College", "College"]
		};

		action(options).then((result) => {
			this.user.setGradeLevel((result == 'Cancel') ? this.gradeLevel : result);
		});
  }
  
  onOpenSelectCourse(): void {
		let options = {
			title: "Course",
			message: "Choose your course",
			cancelButtonText: "Cancel",
			actions: ["Economics", "Personal Finance", "Business Class", "Consumer Science", "Mathmatics", "Financial Planning", "Academy of Finance", "Entrepreneurship", "Principles of Business", "Marketing", "Other"]
		};

		action(options).then((result) => {
			this.user.setCourse((result == 'Cancel') ? this.course : result);
		});
  }
  
  login() {
    console.log('login');
    this.nav.navigate(["/login"]);
  }

}
