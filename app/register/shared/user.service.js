"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
var http_2 = require("@angular/http");
var UserService = /** @class */ (function () {
    function UserService(http) {
        this.http = http;
        this.serverUrl = "http://wiset3.azurewebsites.net/finlite";
    }
    UserService.prototype.createRequestOptions = function () {
        var headers = new http_1.HttpHeaders({
            "Content-Type": "application/json"
        });
        return headers;
    };
    UserService.prototype.register = function (user) {
        var body = new http_2.URLSearchParams();
        body.append('firstName', user.firstName);
        body.append('lastName', user.lastName);
        body.append('memberType', user.memberType);
        body.append('password', user.password);
        body.append('userName', user.userName);
        body.append('username', user.userName);
        console.log(body);
        this.serverUrl = this.serverUrl + '/members/create?';
        var options = this.createRequestOptions();
        return this.http.post(this.serverUrl + body.toString(), null, { headers: options });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidXNlci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJDO0FBRTNDLDZDQUErRDtBQUMvRCxzQ0FBZ0Q7QUFHaEQ7SUFVSSxxQkFBb0IsSUFBZ0I7UUFBaEIsU0FBSSxHQUFKLElBQUksQ0FBWTtRQVQ1QixjQUFTLEdBQUcseUNBQXlDLENBQUM7SUFTdEIsQ0FBQztJQVBqQywwQ0FBb0IsR0FBNUI7UUFDSSxJQUFJLE9BQU8sR0FBRyxJQUFJLGtCQUFXLENBQUM7WUFDMUIsY0FBYyxFQUFFLGtCQUFrQjtTQUNyQyxDQUFDLENBQUM7UUFDSCxPQUFPLE9BQU8sQ0FBQztJQUNuQixDQUFDO0lBSUQsOEJBQVEsR0FBUixVQUFTLElBQVU7UUFDZixJQUFJLElBQUksR0FBRyxJQUFJLHNCQUFlLEVBQUUsQ0FBQztRQUNqQyxJQUFJLENBQUMsTUFBTSxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDekMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ3ZDLElBQUksQ0FBQyxNQUFNLENBQUMsWUFBWSxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUMzQyxJQUFJLENBQUMsTUFBTSxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDdkMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ3ZDLElBQUksQ0FBQyxNQUFNLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUN2QyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2xCLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFNBQVMsR0FBRyxrQkFBa0IsQ0FBQztRQUNyRCxJQUFJLE9BQU8sR0FBRyxJQUFJLENBQUMsb0JBQW9CLEVBQUUsQ0FBQztRQUMxQyxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFFBQVEsRUFBRSxFQUNsRCxJQUFJLEVBQ0osRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLENBQUMsQ0FBQztJQUM5QixDQUFDO0lBRUQsNEJBQU0sR0FBTjtRQUNJLElBQUksT0FBTyxHQUFHLElBQUksQ0FBQyxvQkFBb0IsRUFBRSxDQUFDO1FBQzFDLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsR0FBRyxNQUFNLEVBQUUsRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLENBQUMsQ0FBQztJQUN4RSxDQUFDO0lBL0JRLFdBQVc7UUFEdkIsaUJBQVUsRUFBRTt5Q0FXaUIsaUJBQVU7T0FWM0IsV0FBVyxDQWdDdkI7SUFBRCxrQkFBQztDQUFBLEFBaENELElBZ0NDO0FBaENZLGtDQUFXIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBVc2VyIH0gZnJvbSBcIi4vdXNlci5tb2RlbFwiO1xuaW1wb3J0IHsgSHR0cENsaWVudCwgSHR0cEhlYWRlcnMgfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uL2h0dHBcIjtcbmltcG9ydCB7IFVSTFNlYXJjaFBhcmFtcyB9IGZyb20gJ0Bhbmd1bGFyL2h0dHAnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgVXNlclNlcnZpY2Uge1xuICAgIHByaXZhdGUgc2VydmVyVXJsID0gXCJodHRwOi8vd2lzZXQzLmF6dXJld2Vic2l0ZXMubmV0L2ZpbmxpdGVcIjtcblxuICAgIHByaXZhdGUgY3JlYXRlUmVxdWVzdE9wdGlvbnMoKSB7XG4gICAgICAgIGxldCBoZWFkZXJzID0gbmV3IEh0dHBIZWFkZXJzKHtcbiAgICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiXG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gaGVhZGVycztcbiAgICB9XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQpIHsgfVxuXG4gICAgcmVnaXN0ZXIodXNlcjogVXNlcikge1xuICAgICAgICBsZXQgYm9keSA9IG5ldyBVUkxTZWFyY2hQYXJhbXMoKTtcbiAgICAgICAgYm9keS5hcHBlbmQoJ2ZpcnN0TmFtZScsIHVzZXIuZmlyc3ROYW1lKTtcbiAgICAgICAgYm9keS5hcHBlbmQoJ2xhc3ROYW1lJywgdXNlci5sYXN0TmFtZSk7XG4gICAgICAgIGJvZHkuYXBwZW5kKCdtZW1iZXJUeXBlJywgdXNlci5tZW1iZXJUeXBlKTtcbiAgICAgICAgYm9keS5hcHBlbmQoJ3Bhc3N3b3JkJywgdXNlci5wYXNzd29yZCk7XG4gICAgICAgIGJvZHkuYXBwZW5kKCd1c2VyTmFtZScsIHVzZXIudXNlck5hbWUpO1xuICAgICAgICBib2R5LmFwcGVuZCgndXNlcm5hbWUnLCB1c2VyLnVzZXJOYW1lKTtcbiAgICAgICAgY29uc29sZS5sb2coYm9keSk7XG4gICAgICAgIHRoaXMuc2VydmVyVXJsID0gdGhpcy5zZXJ2ZXJVcmwgKyAnL21lbWJlcnMvY3JlYXRlPyc7XG4gICAgICAgIGxldCBvcHRpb25zID0gdGhpcy5jcmVhdGVSZXF1ZXN0T3B0aW9ucygpO1xuICAgICAgICByZXR1cm4gdGhpcy5odHRwLnBvc3QodGhpcy5zZXJ2ZXJVcmwgKyBib2R5LnRvU3RyaW5nKCksIFxuICAgICAgICAgICAgbnVsbCwgXG4gICAgICAgICAgICB7IGhlYWRlcnM6IG9wdGlvbnMgfSk7XG4gICAgfVxuXG4gICAgc3VibWl0KCkge1xuICAgICAgICBsZXQgb3B0aW9ucyA9IHRoaXMuY3JlYXRlUmVxdWVzdE9wdGlvbnMoKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQodGhpcy5zZXJ2ZXJVcmwgKyAnL2dldCcsIHsgaGVhZGVyczogb3B0aW9ucyB9KTtcbiAgICB9XG59XG4iXX0=