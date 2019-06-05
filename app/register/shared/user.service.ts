import { Injectable } from "@angular/core";
import { User } from "./user.model";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable()
export class UserService {
    private serverUrl = "https://localhost:8080/wise-literacy";

    private createRequestOptions() {
        let headers = new HttpHeaders({
            "Content-Type": "application/json"
        });
        return headers;
    }

    constructor(private http: HttpClient) { }

    register(user: User) {
        this.serverUrl = this.serverUrl + '/members/create';
        let options = this.createRequestOptions();
        return this.http.post(this.serverUrl, { 
            classCode: user.classCode,
            dob: user.dob,
            firstName: user.firstName,
            gender: user.gender,
            lastName: user.lastName,
            memberType: user.memberType,
            middleName: user.middleName,
            userName: user.userName,
            password: user.password 
        }, { headers: options });
    }

    submit() {
        let options = this.createRequestOptions();
        return this.http.get(this.serverUrl + '/get', { headers: options });
    }
}
