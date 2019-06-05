import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable, of } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class LoginService {
    private serverUrl = "https://httpbin.org/get";
    constructor(private http: HttpClient) { }

    login(){
        return this.http.get(this.serverUrl);
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
