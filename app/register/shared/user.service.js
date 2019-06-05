"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
var UserService = /** @class */ (function () {
    function UserService(http) {
        this.http = http;
        this.serverUrl = "https://localhost:8080/wise-literacy";
    }
    UserService.prototype.createRequestOptions = function () {
        var headers = new http_1.HttpHeaders({
            "Content-Type": "application/json"
        });
        return headers;
    };
    UserService.prototype.register = function (user) {
        this.serverUrl = this.serverUrl + '/members/create';
        var options = this.createRequestOptions();
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
    };
    UserService.prototype.submit = function () {
        var options = this.createRequestOptions();
        return this.http.get(this.serverUrl + '/get', { headers: options });
    };
    UserService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], UserService);
    return UserService;
}());
exports.UserService = UserService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidXNlci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJDO0FBRTNDLDZDQUErRDtBQUcvRDtJQVVJLHFCQUFvQixJQUFnQjtRQUFoQixTQUFJLEdBQUosSUFBSSxDQUFZO1FBVDVCLGNBQVMsR0FBRyxzQ0FBc0MsQ0FBQztJQVNuQixDQUFDO0lBUGpDLDBDQUFvQixHQUE1QjtRQUNJLElBQUksT0FBTyxHQUFHLElBQUksa0JBQVcsQ0FBQztZQUMxQixjQUFjLEVBQUUsa0JBQWtCO1NBQ3JDLENBQUMsQ0FBQztRQUNILE9BQU8sT0FBTyxDQUFDO0lBQ25CLENBQUM7SUFJRCw4QkFBUSxHQUFSLFVBQVMsSUFBVTtRQUNmLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFNBQVMsR0FBRyxpQkFBaUIsQ0FBQztRQUNwRCxJQUFJLE9BQU8sR0FBRyxJQUFJLENBQUMsb0JBQW9CLEVBQUUsQ0FBQztRQUMxQyxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUU7WUFDbEMsU0FBUyxFQUFFLElBQUksQ0FBQyxTQUFTO1lBQ3pCLEdBQUcsRUFBRSxJQUFJLENBQUMsR0FBRztZQUNiLFNBQVMsRUFBRSxJQUFJLENBQUMsU0FBUztZQUN6QixNQUFNLEVBQUUsSUFBSSxDQUFDLE1BQU07WUFDbkIsUUFBUSxFQUFFLElBQUksQ0FBQyxRQUFRO1lBQ3ZCLFVBQVUsRUFBRSxJQUFJLENBQUMsVUFBVTtZQUMzQixVQUFVLEVBQUUsSUFBSSxDQUFDLFVBQVU7WUFDM0IsUUFBUSxFQUFFLElBQUksQ0FBQyxRQUFRO1lBQ3ZCLFFBQVEsRUFBRSxJQUFJLENBQUMsUUFBUTtTQUMxQixFQUFFLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxDQUFDLENBQUM7SUFDN0IsQ0FBQztJQUVELDRCQUFNLEdBQU47UUFDSSxJQUFJLE9BQU8sR0FBRyxJQUFJLENBQUMsb0JBQW9CLEVBQUUsQ0FBQztRQUMxQyxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxTQUFTLEdBQUcsTUFBTSxFQUFFLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxDQUFDLENBQUM7SUFDeEUsQ0FBQztJQS9CUSxXQUFXO1FBRHZCLGlCQUFVLEVBQUU7eUNBV2lCLGlCQUFVO09BVjNCLFdBQVcsQ0FnQ3ZCO0lBQUQsa0JBQUM7Q0FBQSxBQWhDRCxJQWdDQztBQWhDWSxrQ0FBVyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgVXNlciB9IGZyb20gXCIuL3VzZXIubW9kZWxcIjtcbmltcG9ydCB7IEh0dHBDbGllbnQsIEh0dHBIZWFkZXJzIH0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vbi9odHRwXCI7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBVc2VyU2VydmljZSB7XG4gICAgcHJpdmF0ZSBzZXJ2ZXJVcmwgPSBcImh0dHBzOi8vbG9jYWxob3N0OjgwODAvd2lzZS1saXRlcmFjeVwiO1xuXG4gICAgcHJpdmF0ZSBjcmVhdGVSZXF1ZXN0T3B0aW9ucygpIHtcbiAgICAgICAgbGV0IGhlYWRlcnMgPSBuZXcgSHR0cEhlYWRlcnMoe1xuICAgICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCJcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBoZWFkZXJzO1xuICAgIH1cblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cENsaWVudCkgeyB9XG5cbiAgICByZWdpc3Rlcih1c2VyOiBVc2VyKSB7XG4gICAgICAgIHRoaXMuc2VydmVyVXJsID0gdGhpcy5zZXJ2ZXJVcmwgKyAnL21lbWJlcnMvY3JlYXRlJztcbiAgICAgICAgbGV0IG9wdGlvbnMgPSB0aGlzLmNyZWF0ZVJlcXVlc3RPcHRpb25zKCk7XG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAucG9zdCh0aGlzLnNlcnZlclVybCwgeyBcbiAgICAgICAgICAgIGNsYXNzQ29kZTogdXNlci5jbGFzc0NvZGUsXG4gICAgICAgICAgICBkb2I6IHVzZXIuZG9iLFxuICAgICAgICAgICAgZmlyc3ROYW1lOiB1c2VyLmZpcnN0TmFtZSxcbiAgICAgICAgICAgIGdlbmRlcjogdXNlci5nZW5kZXIsXG4gICAgICAgICAgICBsYXN0TmFtZTogdXNlci5sYXN0TmFtZSxcbiAgICAgICAgICAgIG1lbWJlclR5cGU6IHVzZXIubWVtYmVyVHlwZSxcbiAgICAgICAgICAgIG1pZGRsZU5hbWU6IHVzZXIubWlkZGxlTmFtZSxcbiAgICAgICAgICAgIHVzZXJOYW1lOiB1c2VyLnVzZXJOYW1lLFxuICAgICAgICAgICAgcGFzc3dvcmQ6IHVzZXIucGFzc3dvcmQgXG4gICAgICAgIH0sIHsgaGVhZGVyczogb3B0aW9ucyB9KTtcbiAgICB9XG5cbiAgICBzdWJtaXQoKSB7XG4gICAgICAgIGxldCBvcHRpb25zID0gdGhpcy5jcmVhdGVSZXF1ZXN0T3B0aW9ucygpO1xuICAgICAgICByZXR1cm4gdGhpcy5odHRwLmdldCh0aGlzLnNlcnZlclVybCArICcvZ2V0JywgeyBoZWFkZXJzOiBvcHRpb25zIH0pO1xuICAgIH1cbn1cbiJdfQ==