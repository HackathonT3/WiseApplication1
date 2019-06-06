"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var appSettings = require("tns-core-modules/application-settings/application-settings");
var LocalStorage = /** @class */ (function () {
    function LocalStorage() {
    }
    LocalStorage.prototype.saveValue = function (value, name) {
        appSettings.setString(name, JSON.stringify(value));
        return true;
    };
    LocalStorage.prototype.getValue = function (value) {
        var valueToReturn = appSettings.getString(value);
        return valueToReturn ? JSON.parse(valueToReturn) : null;
    };
    LocalStorage.prototype.removeValue = function (value) {
        appSettings.remove(value);
    };
    LocalStorage.prototype.clear = function () {
        appSettings.clear();
    };
    LocalStorage = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [])
    ], LocalStorage);
    return LocalStorage;
}());
exports.LocalStorage = LocalStorage;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9jYWwtc3RvcmFnZS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibG9jYWwtc3RvcmFnZS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJDO0FBQzNDLHdGQUEwRjtBQUcxRjtJQUNJO0lBQWdCLENBQUM7SUFFakIsZ0NBQVMsR0FBVCxVQUFVLEtBQVUsRUFBRSxJQUFZO1FBQzlCLFdBQVcsQ0FBQyxTQUFTLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztRQUNuRCxPQUFPLElBQUksQ0FBQztJQUNoQixDQUFDO0lBRUQsK0JBQVEsR0FBUixVQUFTLEtBQWE7UUFDbEIsSUFBTSxhQUFhLEdBQUcsV0FBVyxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNuRCxPQUFPLGFBQWEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO0lBQzVELENBQUM7SUFFRCxrQ0FBVyxHQUFYLFVBQVksS0FBYTtRQUNyQixXQUFXLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzlCLENBQUM7SUFFRCw0QkFBSyxHQUFMO1FBQ0ksV0FBVyxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ3hCLENBQUM7SUFuQlEsWUFBWTtRQUR4QixpQkFBVSxFQUFFOztPQUNBLFlBQVksQ0FvQnhCO0lBQUQsbUJBQUM7Q0FBQSxBQXBCRCxJQW9CQztBQXBCWSxvQ0FBWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCAqIGFzIGFwcFNldHRpbmdzIGZyb20gJ3Rucy1jb3JlLW1vZHVsZXMvYXBwbGljYXRpb24tc2V0dGluZ3MvYXBwbGljYXRpb24tc2V0dGluZ3MnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgTG9jYWxTdG9yYWdlIHtcbiAgICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gICAgc2F2ZVZhbHVlKHZhbHVlOiBhbnksIG5hbWU6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgICAgICBhcHBTZXR0aW5ncy5zZXRTdHJpbmcobmFtZSwgSlNPTi5zdHJpbmdpZnkodmFsdWUpKTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgZ2V0VmFsdWUodmFsdWU6IHN0cmluZyk6IGFueSB7XG4gICAgICAgIGNvbnN0IHZhbHVlVG9SZXR1cm4gPSBhcHBTZXR0aW5ncy5nZXRTdHJpbmcodmFsdWUpO1xuICAgICAgICByZXR1cm4gdmFsdWVUb1JldHVybiA/IEpTT04ucGFyc2UodmFsdWVUb1JldHVybikgOiBudWxsO1xuICAgIH1cblxuICAgIHJlbW92ZVZhbHVlKHZhbHVlOiBzdHJpbmcpOiB2b2lkIHtcbiAgICAgICAgYXBwU2V0dGluZ3MucmVtb3ZlKHZhbHVlKTtcbiAgICB9XG5cbiAgICBjbGVhcigpOiB2b2lkIHtcbiAgICAgICAgYXBwU2V0dGluZ3MuY2xlYXIoKTtcbiAgICB9XG59XG4iXX0=