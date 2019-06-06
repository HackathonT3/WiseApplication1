"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var mock_landmarks_1 = require("./mock-landmarks");
var LandmarksService = /** @class */ (function () {
    function LandmarksService() {
        this._selectedId = -1;
    }
    LandmarksService.prototype.getLandmarks = function () {
        return mock_landmarks_1.LANDMARKS;
    };
    LandmarksService.prototype.getLandmark = function (id) {
        return mock_landmarks_1.LANDMARKS.filter(function (landmark) { return landmark.id === id; })[0];
    };
    LandmarksService.prototype.setSelectedId = function (id) {
        if (id < mock_landmarks_1.LANDMARKS.length) {
            this._selectedId = id;
        }
    };
    LandmarksService.prototype.getSelected = function () {
        return this._selectedId < 0 ? null : this.getLandmark(this._selectedId);
    };
    LandmarksService = __decorate([
        core_1.Injectable()
    ], LandmarksService);
    return LandmarksService;
}());
exports.LandmarksService = LandmarksService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGFuZG1hcmtzLXNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJsYW5kbWFya3Mtc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEyQztBQUUzQyxtREFBNkM7QUFHN0M7SUFEQTtRQUVZLGdCQUFXLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFtQjdCLENBQUM7SUFqQkcsdUNBQVksR0FBWjtRQUNJLE9BQU8sMEJBQVMsQ0FBQztJQUNyQixDQUFDO0lBRUQsc0NBQVcsR0FBWCxVQUFZLEVBQVU7UUFDbEIsT0FBTywwQkFBUyxDQUFDLE1BQU0sQ0FBQyxVQUFBLFFBQVEsSUFBSSxPQUFBLFFBQVEsQ0FBQyxFQUFFLEtBQUssRUFBRSxFQUFsQixDQUFrQixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDL0QsQ0FBQztJQUVELHdDQUFhLEdBQWIsVUFBYyxFQUFVO1FBQ3BCLElBQUksRUFBRSxHQUFHLDBCQUFTLENBQUMsTUFBTSxFQUFFO1lBQ3ZCLElBQUksQ0FBQyxXQUFXLEdBQUcsRUFBRSxDQUFDO1NBQ3pCO0lBQ0wsQ0FBQztJQUVELHNDQUFXLEdBQVg7UUFDSSxPQUFPLElBQUksQ0FBQyxXQUFXLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQzVFLENBQUM7SUFuQlEsZ0JBQWdCO1FBRDVCLGlCQUFVLEVBQUU7T0FDQSxnQkFBZ0IsQ0FvQjVCO0lBQUQsdUJBQUM7Q0FBQSxBQXBCRCxJQW9CQztBQXBCWSw0Q0FBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IExhbmRtYXJrIH0gZnJvbSBcIi4vbGFuZG1hcmtcIjtcbmltcG9ydCB7IExBTkRNQVJLUyB9IGZyb20gXCIuL21vY2stbGFuZG1hcmtzXCI7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBMYW5kbWFya3NTZXJ2aWNlIHtcbiAgICBwcml2YXRlIF9zZWxlY3RlZElkID0gLTE7XG5cbiAgICBnZXRMYW5kbWFya3MoKTogTGFuZG1hcmtbXSB7XG4gICAgICAgIHJldHVybiBMQU5ETUFSS1M7XG4gICAgfVxuXG4gICAgZ2V0TGFuZG1hcmsoaWQ6IG51bWJlcik6IExhbmRtYXJrIHtcbiAgICAgICAgcmV0dXJuIExBTkRNQVJLUy5maWx0ZXIobGFuZG1hcmsgPT4gbGFuZG1hcmsuaWQgPT09IGlkKVswXTtcbiAgICB9XG5cbiAgICBzZXRTZWxlY3RlZElkKGlkOiBudW1iZXIpIHtcbiAgICAgICAgaWYgKGlkIDwgTEFORE1BUktTLmxlbmd0aCkge1xuICAgICAgICAgICAgdGhpcy5fc2VsZWN0ZWRJZCA9IGlkO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZ2V0U2VsZWN0ZWQoKTogTGFuZG1hcmsge1xuICAgICAgICByZXR1cm4gdGhpcy5fc2VsZWN0ZWRJZCA8IDAgPyBudWxsIDogdGhpcy5nZXRMYW5kbWFyayh0aGlzLl9zZWxlY3RlZElkKTtcbiAgICB9XG59Il19