"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var router_2 = require("nativescript-angular/router");
var page_1 = require("ui/page");
var ScoreComponent = /** @class */ (function () {
    function ScoreComponent(route, routerExtensions, page) {
        this.route = route;
        this.routerExtensions = routerExtensions;
        this.page = page;
        this.page.actionBarHidden = true;
    }
    ScoreComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.queryParams.subscribe(function (params) {
            _this.score = params['score'];
        });
    };
    ScoreComponent.prototype.navigateToSelector = function () {
        this.routerExtensions.navigate(["/selector"], { clearHistory: true });
    };
    ScoreComponent.prototype.navigateToDashboard = function () {
        this.routerExtensions.navigate(["/dashboard"], { clearHistory: true });
    };
    ScoreComponent = __decorate([
        core_1.Component({
            selector: "score",
            moduleId: module.id,
            templateUrl: "./score.component.html",
            styleUrls: ['./score.component.css']
        }),
        __metadata("design:paramtypes", [router_1.ActivatedRoute,
            router_2.RouterExtensions,
            page_1.Page])
    ], ScoreComponent);
    return ScoreComponent;
}());
exports.ScoreComponent = ScoreComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NvcmUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsic2NvcmUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWtEO0FBQ2xELDBDQUFpRDtBQUNqRCxzREFBK0Q7QUFDL0QsZ0NBQStCO0FBUS9CO0lBSUMsd0JBQ1MsS0FBcUIsRUFDckIsZ0JBQWtDLEVBQ2xDLElBQVU7UUFGVixVQUFLLEdBQUwsS0FBSyxDQUFnQjtRQUNyQixxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBQ2xDLFNBQUksR0FBSixJQUFJLENBQU07UUFFbEIsSUFBSSxDQUFDLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDO0lBQ2xDLENBQUM7SUFFRCxpQ0FBUSxHQUFSO1FBQUEsaUJBSUM7UUFIQSxJQUFJLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsVUFBQSxNQUFNO1lBQ3RDLEtBQUksQ0FBQyxLQUFLLEdBQUcsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQzlCLENBQUMsQ0FBQyxDQUFBO0lBQ0gsQ0FBQztJQUVELDJDQUFrQixHQUFsQjtRQUNDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsQ0FBQyxXQUFXLENBQUMsRUFBRSxFQUFFLFlBQVksRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO0lBQ3ZFLENBQUM7SUFFRCw0Q0FBbUIsR0FBbkI7UUFDQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUUsRUFBRSxZQUFZLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQztJQUN4RSxDQUFDO0lBeEJXLGNBQWM7UUFOMUIsZ0JBQVMsQ0FBQztZQUNWLFFBQVEsRUFBRSxPQUFPO1lBQ2pCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixXQUFXLEVBQUUsd0JBQXdCO1lBQ3JDLFNBQVMsRUFBRSxDQUFDLHVCQUF1QixDQUFDO1NBQ3BDLENBQUM7eUNBTWUsdUJBQWM7WUFDSCx5QkFBZ0I7WUFDNUIsV0FBSTtPQVBQLGNBQWMsQ0F5QjFCO0lBQUQscUJBQUM7Q0FBQSxBQXpCRCxJQXlCQztBQXpCWSx3Q0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHsgUm91dGVyRXh0ZW5zaW9ucyB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7IFBhZ2UgfSBmcm9tIFwidWkvcGFnZVwiO1xuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6IFwic2NvcmVcIixcblx0bW9kdWxlSWQ6IG1vZHVsZS5pZCxcblx0dGVtcGxhdGVVcmw6IFwiLi9zY29yZS5jb21wb25lbnQuaHRtbFwiLFxuXHRzdHlsZVVybHM6IFsnLi9zY29yZS5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgU2NvcmVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG5cdHNjb3JlOiBudW1iZXI7XG5cblx0Y29uc3RydWN0b3IoXG5cdFx0cHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGUsXG5cdFx0cHJpdmF0ZSByb3V0ZXJFeHRlbnNpb25zOiBSb3V0ZXJFeHRlbnNpb25zLFxuXHRcdHByaXZhdGUgcGFnZTogUGFnZVxuXHQpIHtcblx0XHR0aGlzLnBhZ2UuYWN0aW9uQmFySGlkZGVuID0gdHJ1ZTtcblx0fVxuXG5cdG5nT25Jbml0KCk6IHZvaWQge1xuXHRcdHRoaXMucm91dGUucXVlcnlQYXJhbXMuc3Vic2NyaWJlKHBhcmFtcyA9PiB7XG5cdFx0XHR0aGlzLnNjb3JlID0gcGFyYW1zWydzY29yZSddO1xuXHRcdH0pXG5cdH1cblxuXHRuYXZpZ2F0ZVRvU2VsZWN0b3IoKSB7XG5cdFx0dGhpcy5yb3V0ZXJFeHRlbnNpb25zLm5hdmlnYXRlKFtcIi9zZWxlY3RvclwiXSwgeyBjbGVhckhpc3Rvcnk6IHRydWUgfSk7XG5cdH1cblxuXHRuYXZpZ2F0ZVRvRGFzaGJvYXJkKCkge1xuXHRcdHRoaXMucm91dGVyRXh0ZW5zaW9ucy5uYXZpZ2F0ZShbXCIvZGFzaGJvYXJkXCJdLCB7IGNsZWFySGlzdG9yeTogdHJ1ZSB9KTtcblx0fVxufSJdfQ==