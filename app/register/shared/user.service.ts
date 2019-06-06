import { Injectable } from "@angular/core";
import { User } from "./user.model";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { URLSearchParams } from '@angular/http';

@Injectable()
export class UserService {
    private serverUrl = "http://wiset3.azurewebsites.net/finlite";

    private createRequestOptions() {
        let headers = new HttpHeaders({
            "Content-Type": "application/json"
        });
        return headers;
    }

    constructor(private http: HttpClient) { }

    register(user: User) {
        let body = new URLSearchParams();
        body.append('firstName', user.firstName);
        body.append('lastName', user.lastName);
        body.append('memberType', user.memberType);
        body.append('password', user.password);
        body.append('userName', user.userName);
        body.append('username', user.userName);
        console.log(body);
        this.serverUrl = this.serverUrl + '/members/create';
        let options = this.createRequestOptions();
        return this.http.post(this.serverUrl, 
            body.toString(), 
            { headers: options });
    }

    submit() {
        let options = this.createRequestOptions();
        return this.http.get(this.serverUrl + '/get', { headers: options });
    }
}
