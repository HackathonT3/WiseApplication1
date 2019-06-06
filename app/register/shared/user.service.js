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
        this.serverUrl = this.serverUrl + '/members/create';
        var options = this.createRequestOptions();
        return this.http.post(this.serverUrl, body.toString(), { headers: options });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidXNlci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJDO0FBRTNDLDZDQUErRDtBQUMvRCxzQ0FBZ0Q7QUFHaEQ7SUFVSSxxQkFBb0IsSUFBZ0I7UUFBaEIsU0FBSSxHQUFKLElBQUksQ0FBWTtRQVQ1QixjQUFTLEdBQUcseUNBQXlDLENBQUM7SUFTdEIsQ0FBQztJQVBqQywwQ0FBb0IsR0FBNUI7UUFDSSxJQUFJLE9BQU8sR0FBRyxJQUFJLGtCQUFXLENBQUM7WUFDMUIsY0FBYyxFQUFFLGtCQUFrQjtTQUNyQyxDQUFDLENBQUM7UUFDSCxPQUFPLE9BQU8sQ0FBQztJQUNuQixDQUFDO0lBSUQsOEJBQVEsR0FBUixVQUFTLElBQVU7UUFDZixJQUFJLElBQUksR0FBRyxJQUFJLHNCQUFlLEVBQUUsQ0FBQztRQUNqQyxJQUFJLENBQUMsTUFBTSxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDekMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ3ZDLElBQUksQ0FBQyxNQUFNLENBQUMsWUFBWSxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUMzQyxJQUFJLENBQUMsTUFBTSxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDdkMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ3ZDLElBQUksQ0FBQyxNQUFNLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUN2QyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2xCLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFNBQVMsR0FBRyxpQkFBaUIsQ0FBQztRQUNwRCxJQUFJLE9BQU8sR0FBRyxJQUFJLENBQUMsb0JBQW9CLEVBQUUsQ0FBQztRQUMxQyxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQ2hDLElBQUksQ0FBQyxRQUFRLEVBQUUsRUFDZixFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsQ0FBQyxDQUFDO0lBQzlCLENBQUM7SUFFRCw0QkFBTSxHQUFOO1FBQ0ksSUFBSSxPQUFPLEdBQUcsSUFBSSxDQUFDLG9CQUFvQixFQUFFLENBQUM7UUFDMUMsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUyxHQUFHLE1BQU0sRUFBRSxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsQ0FBQyxDQUFDO0lBQ3hFLENBQUM7SUEvQlEsV0FBVztRQUR2QixpQkFBVSxFQUFFO3lDQVdpQixpQkFBVTtPQVYzQixXQUFXLENBZ0N2QjtJQUFELGtCQUFDO0NBQUEsQUFoQ0QsSUFnQ0M7QUFoQ1ksa0NBQVciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFVzZXIgfSBmcm9tIFwiLi91c2VyLm1vZGVsXCI7XG5pbXBvcnQgeyBIdHRwQ2xpZW50LCBIdHRwSGVhZGVycyB9IGZyb20gXCJAYW5ndWxhci9jb21tb24vaHR0cFwiO1xuaW1wb3J0IHsgVVJMU2VhcmNoUGFyYW1zIH0gZnJvbSAnQGFuZ3VsYXIvaHR0cCc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBVc2VyU2VydmljZSB7XG4gICAgcHJpdmF0ZSBzZXJ2ZXJVcmwgPSBcImh0dHA6Ly93aXNldDMuYXp1cmV3ZWJzaXRlcy5uZXQvZmlubGl0ZVwiO1xuXG4gICAgcHJpdmF0ZSBjcmVhdGVSZXF1ZXN0T3B0aW9ucygpIHtcbiAgICAgICAgbGV0IGhlYWRlcnMgPSBuZXcgSHR0cEhlYWRlcnMoe1xuICAgICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCJcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBoZWFkZXJzO1xuICAgIH1cblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cENsaWVudCkgeyB9XG5cbiAgICByZWdpc3Rlcih1c2VyOiBVc2VyKSB7XG4gICAgICAgIGxldCBib2R5ID0gbmV3IFVSTFNlYXJjaFBhcmFtcygpO1xuICAgICAgICBib2R5LmFwcGVuZCgnZmlyc3ROYW1lJywgdXNlci5maXJzdE5hbWUpO1xuICAgICAgICBib2R5LmFwcGVuZCgnbGFzdE5hbWUnLCB1c2VyLmxhc3ROYW1lKTtcbiAgICAgICAgYm9keS5hcHBlbmQoJ21lbWJlclR5cGUnLCB1c2VyLm1lbWJlclR5cGUpO1xuICAgICAgICBib2R5LmFwcGVuZCgncGFzc3dvcmQnLCB1c2VyLnBhc3N3b3JkKTtcbiAgICAgICAgYm9keS5hcHBlbmQoJ3VzZXJOYW1lJywgdXNlci51c2VyTmFtZSk7XG4gICAgICAgIGJvZHkuYXBwZW5kKCd1c2VybmFtZScsIHVzZXIudXNlck5hbWUpO1xuICAgICAgICBjb25zb2xlLmxvZyhib2R5KTtcbiAgICAgICAgdGhpcy5zZXJ2ZXJVcmwgPSB0aGlzLnNlcnZlclVybCArICcvbWVtYmVycy9jcmVhdGUnO1xuICAgICAgICBsZXQgb3B0aW9ucyA9IHRoaXMuY3JlYXRlUmVxdWVzdE9wdGlvbnMoKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0KHRoaXMuc2VydmVyVXJsLCBcbiAgICAgICAgICAgIGJvZHkudG9TdHJpbmcoKSwgXG4gICAgICAgICAgICB7IGhlYWRlcnM6IG9wdGlvbnMgfSk7XG4gICAgfVxuXG4gICAgc3VibWl0KCkge1xuICAgICAgICBsZXQgb3B0aW9ucyA9IHRoaXMuY3JlYXRlUmVxdWVzdE9wdGlvbnMoKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQodGhpcy5zZXJ2ZXJVcmwgKyAnL2dldCcsIHsgaGVhZGVyczogb3B0aW9ucyB9KTtcbiAgICB9XG59XG4iXX0=