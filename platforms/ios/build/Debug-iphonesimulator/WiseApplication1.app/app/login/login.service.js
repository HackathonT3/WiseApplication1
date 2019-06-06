"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
var rxjs_1 = require("rxjs");
var LoginService = /** @class */ (function () {
    function LoginService(http) {
        this.http = http;
        this.serverUrl = "https://httpbin.org/get";
    }
    LoginService.prototype.login = function () {
        return this.http.get(this.serverUrl);
    };
    LoginService.prototype.getSchools = function () {
        return rxjs_1.of(['A High School', 'B High School']);
    };
    LoginService.prototype.createRequestHeader = function () {
        // set headers here e.g.
        var headers = new http_1.HttpHeaders({
            "Content-Type": "application/json",
        });
        return headers;
    };
    LoginService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], LoginService);
    return LoginService;
}());
exports.LoginService = LoginService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImxvZ2luLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkM7QUFDM0MsNkNBQStEO0FBQy9ELDZCQUFzQztBQUt0QztJQUVJLHNCQUFvQixJQUFnQjtRQUFoQixTQUFJLEdBQUosSUFBSSxDQUFZO1FBRDVCLGNBQVMsR0FBRyx5QkFBeUIsQ0FBQztJQUNOLENBQUM7SUFFekMsNEJBQUssR0FBTDtRQUNJLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQ3pDLENBQUM7SUFFRCxpQ0FBVSxHQUFWO1FBQ0ksT0FBTyxTQUFFLENBQUMsQ0FBQyxlQUFlLEVBQUUsZUFBZSxDQUFDLENBQUMsQ0FBQTtJQUNqRCxDQUFDO0lBRU8sMENBQW1CLEdBQTNCO1FBQ0ksd0JBQXdCO1FBQ3hCLElBQUksT0FBTyxHQUFHLElBQUksa0JBQVcsQ0FBQztZQUMxQixjQUFjLEVBQUUsa0JBQWtCO1NBQ3BDLENBQUMsQ0FBQztRQUVKLE9BQU8sT0FBTyxDQUFDO0lBQ25CLENBQUM7SUFuQlEsWUFBWTtRQUh4QixpQkFBVSxDQUFDO1lBQ1IsVUFBVSxFQUFFLE1BQU07U0FDckIsQ0FBQzt5Q0FHNEIsaUJBQVU7T0FGM0IsWUFBWSxDQW9CeEI7SUFBRCxtQkFBQztDQUFBLEFBcEJELElBb0JDO0FBcEJZLG9DQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSHR0cENsaWVudCwgSHR0cEhlYWRlcnMgfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uL2h0dHBcIjtcbmltcG9ydCB7IE9ic2VydmFibGUsIG9mIH0gZnJvbSAncnhqcyc7XG5cbkBJbmplY3RhYmxlKHtcbiAgICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgTG9naW5TZXJ2aWNlIHtcbiAgICBwcml2YXRlIHNlcnZlclVybCA9IFwiaHR0cHM6Ly9odHRwYmluLm9yZy9nZXRcIjtcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQpIHsgfVxuXG4gICAgbG9naW4oKXtcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQodGhpcy5zZXJ2ZXJVcmwpO1xuICAgIH1cblxuICAgIGdldFNjaG9vbHMoKTogT2JzZXJ2YWJsZTxzdHJpbmdbXT4ge1xuICAgICAgICByZXR1cm4gb2YoWydBIEhpZ2ggU2Nob29sJywgJ0IgSGlnaCBTY2hvb2wnXSlcbiAgICB9XG5cbiAgICBwcml2YXRlIGNyZWF0ZVJlcXVlc3RIZWFkZXIoKSB7XG4gICAgICAgIC8vIHNldCBoZWFkZXJzIGhlcmUgZS5nLlxuICAgICAgICBsZXQgaGVhZGVycyA9IG5ldyBIdHRwSGVhZGVycyh7XG4gICAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiBoZWFkZXJzO1xuICAgIH1cbn1cbiJdfQ==