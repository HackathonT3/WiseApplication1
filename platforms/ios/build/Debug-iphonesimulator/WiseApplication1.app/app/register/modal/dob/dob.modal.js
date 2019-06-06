"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var dialogs_1 = require("nativescript-angular/directives/dialogs");
var DOBModalComponent = /** @class */ (function () {
    function DOBModalComponent(params) {
        this.params = params;
        this.dateSelector = new Date();
    }
    DOBModalComponent.prototype.onDateChanged = function (args) {
        var date = args.value;
        this.dateSelector = date;
    };
    DOBModalComponent.prototype.close = function (res) {
        this.params.closeCallback(res);
    };
    DOBModalComponent = __decorate([
        core_1.Component({
            selector: "dob-modal",
            templateUrl: "./dob.modal.html",
            moduleId: module.id
        }),
        __metadata("design:paramtypes", [dialogs_1.ModalDialogParams])
    ], DOBModalComponent);
    return DOBModalComponent;
}());
exports.DOBModalComponent = DOBModalComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG9iLm1vZGFsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZG9iLm1vZGFsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTBDO0FBQzFDLG1FQUE0RTtBQU81RTtJQVFJLDJCQUEyQixNQUF5QjtRQUF6QixXQUFNLEdBQU4sTUFBTSxDQUFtQjtRQVBwRCxpQkFBWSxHQUFHLElBQUksSUFBSSxFQUFFLENBQUM7SUFTMUIsQ0FBQztJQVBELHlDQUFhLEdBQWIsVUFBYyxJQUFJO1FBQ2QsSUFBSSxJQUFJLEdBQVMsSUFBSSxDQUFDLEtBQUssQ0FBQztRQUM1QixJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQztJQUM3QixDQUFDO0lBTU0saUNBQUssR0FBWixVQUFhLEdBQVc7UUFDcEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDbkMsQ0FBQztJQWRRLGlCQUFpQjtRQUw3QixnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLFdBQVc7WUFDckIsV0FBVyxFQUFFLGtCQUFrQjtZQUMvQixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7U0FDdEIsQ0FBQzt5Q0FTcUMsMkJBQWlCO09BUjNDLGlCQUFpQixDQWdCN0I7SUFBRCx3QkFBQztDQUFBLEFBaEJELElBZ0JDO0FBaEJZLDhDQUFpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBNb2RhbERpYWxvZ1BhcmFtcyB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9kaXJlY3RpdmVzL2RpYWxvZ3NcIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwiZG9iLW1vZGFsXCIsXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9kb2IubW9kYWwuaHRtbFwiLFxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWRcbn0pXG5leHBvcnQgY2xhc3MgRE9CTW9kYWxDb21wb25lbnQge1xuICAgIGRhdGVTZWxlY3RvciA9IG5ldyBEYXRlKCk7XG5cbiAgICBvbkRhdGVDaGFuZ2VkKGFyZ3MpIHtcbiAgICAgICAgbGV0IGRhdGU6IERhdGUgPSBhcmdzLnZhbHVlO1xuICAgICAgICB0aGlzLmRhdGVTZWxlY3RvciA9IGRhdGU7XG4gICAgfVxuXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKHByaXZhdGUgcGFyYW1zOiBNb2RhbERpYWxvZ1BhcmFtcykge1xuXG4gICAgfVxuXG4gICAgcHVibGljIGNsb3NlKHJlczogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMucGFyYW1zLmNsb3NlQ2FsbGJhY2socmVzKTtcbiAgICB9XG5cbn0iXX0=