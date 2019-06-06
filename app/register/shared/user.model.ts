import { DatePicker } from "tns-core-modules/ui/date-picker";

export class User {
    dob: string;
    firstName: string;
    gender: string;
    lastName: string;
    memberType: string;
    middleName: string;
    userName: string;
    email: string;
    password: string;
    confirmPassword: string;
    gradeLevel: string;
    course: string;
    memberId: number;

    setDob(dob: string) { this.dob = dob;}
    setGender(gender: string) { this.gender = gender; }
    setGradeLevel(gradeLevel: string) { this.gradeLevel = gradeLevel; }
    setCourse(course: string) { this.course = course; } 
    setMemberType(memberType: string) { this.memberType = memberType; }
}