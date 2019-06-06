"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var nativescript_camera_1 = require("nativescript-camera");
var core_1 = require("@angular/core");
var CameraService = /** @class */ (function () {
    function CameraService() {
        this.saveToGallery = false;
        this.keepAspectRatio = true;
        this.width = 200;
        this.height = 200;
        nativescript_camera_1.requestPermissions();
    }
    CameraService.prototype.takePhoto = function () {
        var options = {
            width: this.width,
            height: this.height,
            keepAspectRatio: this.keepAspectRatio,
            saveToGallery: this.saveToGallery
        };
        return nativescript_camera_1.takePicture(options);
    };
    CameraService.prototype.onCheckForCamera = function () {
        var isCameraAvailable = nativescript_camera_1.isAvailable();
        console.log("Is camera hardware available: " + isCameraAvailable);
    };
    CameraService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [])
    ], CameraService);
    return CameraService;
}());
exports.CameraService = CameraService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FtZXJhLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjYW1lcmEuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDJEQUFtRjtBQUVuRixzQ0FBMkM7QUFHM0M7SUFRSTtRQU5PLGtCQUFhLEdBQVksS0FBSyxDQUFDO1FBQy9CLG9CQUFlLEdBQVksSUFBSSxDQUFDO1FBQ2hDLFVBQUssR0FBVyxHQUFHLENBQUM7UUFDcEIsV0FBTSxHQUFXLEdBQUcsQ0FBQztRQUl4Qix3Q0FBa0IsRUFBRSxDQUFDO0lBQ3pCLENBQUM7SUFFRCxpQ0FBUyxHQUFUO1FBRUksSUFBSSxPQUFPLEdBQUc7WUFDVixLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUs7WUFDakIsTUFBTSxFQUFFLElBQUksQ0FBQyxNQUFNO1lBQ25CLGVBQWUsRUFBRSxJQUFJLENBQUMsZUFBZTtZQUNyQyxhQUFhLEVBQUUsSUFBSSxDQUFDLGFBQWE7U0FDcEMsQ0FBQztRQUVGLE9BQU8saUNBQVcsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUVoQyxDQUFDO0lBRUQsd0NBQWdCLEdBQWhCO1FBQ0ksSUFBSSxpQkFBaUIsR0FBRyxpQ0FBVyxFQUFFLENBQUM7UUFDdEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxnQ0FBZ0MsR0FBRyxpQkFBaUIsQ0FBQyxDQUFDO0lBQ3RFLENBQUM7SUE1QlEsYUFBYTtRQUR6QixpQkFBVSxFQUFFOztPQUNBLGFBQWEsQ0ErQnpCO0lBQUQsb0JBQUM7Q0FBQSxBQS9CRCxJQStCQztBQS9CWSxzQ0FBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHRha2VQaWN0dXJlLCByZXF1ZXN0UGVybWlzc2lvbnMsIGlzQXZhaWxhYmxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1jYW1lcmFcIjtcblxuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQ2FtZXJhU2VydmljZSB7XG5cbiAgICBwdWJsaWMgc2F2ZVRvR2FsbGVyeTogYm9vbGVhbiA9IGZhbHNlO1xuICAgIHB1YmxpYyBrZWVwQXNwZWN0UmF0aW86IGJvb2xlYW4gPSB0cnVlO1xuICAgIHB1YmxpYyB3aWR0aDogbnVtYmVyID0gMjAwO1xuICAgIHB1YmxpYyBoZWlnaHQ6IG51bWJlciA9IDIwMDtcblxuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHJlcXVlc3RQZXJtaXNzaW9ucygpO1xuICAgIH1cblxuICAgIHRha2VQaG90bygpIHtcblxuICAgICAgICBsZXQgb3B0aW9ucyA9IHtcbiAgICAgICAgICAgIHdpZHRoOiB0aGlzLndpZHRoLFxuICAgICAgICAgICAgaGVpZ2h0OiB0aGlzLmhlaWdodCxcbiAgICAgICAgICAgIGtlZXBBc3BlY3RSYXRpbzogdGhpcy5rZWVwQXNwZWN0UmF0aW8sXG4gICAgICAgICAgICBzYXZlVG9HYWxsZXJ5OiB0aGlzLnNhdmVUb0dhbGxlcnlcbiAgICAgICAgfTtcblxuICAgICAgICByZXR1cm4gdGFrZVBpY3R1cmUob3B0aW9ucyk7XG5cbiAgICB9XG5cbiAgICBvbkNoZWNrRm9yQ2FtZXJhKCkge1xuICAgICAgICBsZXQgaXNDYW1lcmFBdmFpbGFibGUgPSBpc0F2YWlsYWJsZSgpO1xuICAgICAgICBjb25zb2xlLmxvZyhcIklzIGNhbWVyYSBoYXJkd2FyZSBhdmFpbGFibGU6IFwiICsgaXNDYW1lcmFBdmFpbGFibGUpO1xuICAgIH1cblxuXG59Il19