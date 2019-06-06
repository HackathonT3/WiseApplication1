import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable, of } from 'rxjs';
import { User } from '~/register/shared/user.model';

@Injectable({
    providedIn: 'root'
})
export class LoginService {
    private serverUrl = "https://wiset3.azurewebsites.net/finlite/login";
    constructor(private http: HttpClient) { }

    login(user: User) {
        const queryParams = '?userName=' + user.userName + '&password=' + user.password
        return this.http.get(this.serverUrl + queryParams);
    }

    getSchools(): Observable<string[]> {
        return of(['A High School', 'B High School'])
    }

    private createRequestHeader() {
        // set headers here e.g.
        let headers = new HttpHeaders({
            "Content-Type": "application/json",
        });

        return headers;
    }
}
