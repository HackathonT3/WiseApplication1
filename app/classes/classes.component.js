"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var page_1 = require("tns-core-modules/ui/page/page");
var nativescript_angular_1 = require("nativescript-angular");
var frame = require("tns-core-modules/ui/frame");
var platform = require("tns-core-modules/platform");
var ClassesComponent = /** @class */ (function () {
    function ClassesComponent(page, routerExtensions) {
        this.page = page;
        this.routerExtensions = routerExtensions;
        this.textFieldValue = "";
        this.listViewData = [
            {
                title: "Financial Literacy",
                artist: "Basic introductory questions",
                year: "2019",
                imageUrl: "~/images/calculator-desk-finance-1253591.jpg"
            },
            {
                title: "Financial Literacy II",
                artist: "Intermediate practice",
                year: "2014",
                imageUrl: "~/images/calculator-desk-finance-1253591.jpg"
            },
            {
                title: "Financial Literacy III",
                artist: "Advanced practice",
                year: "2017",
                imageUrl: "~/images/calculator-desk-finance-1253591.jpg"
            }
        ];
        page.actionBarHidden = false;
        if (platform.isIOS) {
            this.isIOS = true;
            page.statusBarStyle = "light";
        }
        else {
            page.backgroundSpanUnderStatusBar = true;
            this.isIOS = false;
        }
    }
    ClassesComponent.prototype.ngOnInit = function () {
    };
    ClassesComponent.prototype.onItemTap = function (args) {
        this.routerExtensions.navigate(["/selector"]);
    };
    ClassesComponent.prototype.onButtonTap = function () {
    };
    ClassesComponent.prototype.goBack = function () {
        this.routerExtensions.back();
    };
    ClassesComponent = __decorate([
        core_1.Component({
            selector: 'ns-classes',
            templateUrl: './classes.component.html',
            styleUrls: ['./classes.component.css'],
            moduleId: module.id,
        }),
        __metadata("design:paramtypes", [page_1.Page, nativescript_angular_1.RouterExtensions])
    ], ClassesComponent);
    return ClassesComponent;
}());
exports.ClassesComponent = ClassesComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xhc3Nlcy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjbGFzc2VzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFrRDtBQUVsRCxzREFBcUQ7QUFDckQsNkRBQXdEO0FBRXhELElBQUksS0FBSyxHQUFHLE9BQU8sQ0FBQywyQkFBMkIsQ0FBQyxDQUFDO0FBQ2pELElBQUksUUFBUSxHQUFHLE9BQU8sQ0FBQywyQkFBMkIsQ0FBQyxDQUFDO0FBT3BEO0lBNkJJLDBCQUFvQixJQUFVLEVBQVUsZ0JBQWtDO1FBQXRELFNBQUksR0FBSixJQUFJLENBQU07UUFBVSxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBM0IxRSxtQkFBYyxHQUFXLEVBQUUsQ0FBQztRQUc1QixpQkFBWSxHQUFHO1lBQ1g7Z0JBQ0ksS0FBSyxFQUFFLG9CQUFvQjtnQkFDM0IsTUFBTSxFQUFFLDhCQUE4QjtnQkFDdEMsSUFBSSxFQUFFLE1BQU07Z0JBQ1osUUFBUSxFQUFFLDhDQUE4QzthQUMzRDtZQUNEO2dCQUNJLEtBQUssRUFBRSx1QkFBdUI7Z0JBQzlCLE1BQU0sRUFBRSx1QkFBdUI7Z0JBQy9CLElBQUksRUFBRSxNQUFNO2dCQUNaLFFBQVEsRUFBRSw4Q0FBOEM7YUFDM0Q7WUFDRDtnQkFDSSxLQUFLLEVBQUUsd0JBQXdCO2dCQUMvQixNQUFNLEVBQUUsbUJBQW1CO2dCQUMzQixJQUFJLEVBQUUsTUFBTTtnQkFDWixRQUFRLEVBQUUsOENBQThDO2FBQzNEO1NBQ0osQ0FBQTtRQU1HLElBQUksQ0FBQyxlQUFlLEdBQUcsS0FBSyxDQUFDO1FBRTdCLElBQUksUUFBUSxDQUFDLEtBQUssRUFBRTtZQUNoQixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQztZQUNsQixJQUFJLENBQUMsY0FBYyxHQUFHLE9BQU8sQ0FBQztTQUNqQzthQUNJO1lBQ0QsSUFBSSxDQUFDLDRCQUE0QixHQUFHLElBQUksQ0FBQztZQUN6QyxJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztTQUN0QjtJQUNMLENBQUM7SUFFRCxtQ0FBUSxHQUFSO0lBQ0EsQ0FBQztJQUVELG9DQUFTLEdBQVQsVUFBVSxJQUFtQjtRQUN6QixJQUFJLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQztJQUNsRCxDQUFDO0lBRUQsc0NBQVcsR0FBWDtJQUNBLENBQUM7SUFFRCxpQ0FBTSxHQUFOO1FBQ0ksSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksRUFBRSxDQUFDO0lBQ2pDLENBQUM7SUF0RFEsZ0JBQWdCO1FBTjVCLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsWUFBWTtZQUN0QixXQUFXLEVBQUUsMEJBQTBCO1lBQ3ZDLFNBQVMsRUFBRSxDQUFDLHlCQUF5QixDQUFDO1lBQ3RDLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtTQUN0QixDQUFDO3lDQThCNEIsV0FBSSxFQUE0Qix1Q0FBZ0I7T0E3QmpFLGdCQUFnQixDQXVENUI7SUFBRCx1QkFBQztDQUFBLEFBdkRELElBdURDO0FBdkRZLDRDQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBJdGVtRXZlbnREYXRhIH0gZnJvbSAndG5zLWNvcmUtbW9kdWxlcy91aS9saXN0LXZpZXcvbGlzdC12aWV3JztcbmltcG9ydCB7IFBhZ2UgfSBmcm9tICd0bnMtY29yZS1tb2R1bGVzL3VpL3BhZ2UvcGFnZSc7XG5pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWFuZ3VsYXInO1xuaW1wb3J0IHsga25vd25Gb2xkZXJzLCBGb2xkZXIsIEZpbGUgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy9maWxlLXN5c3RlbVwiO1xudmFyIGZyYW1lID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvdWkvZnJhbWVcIik7XG52YXIgcGxhdGZvcm0gPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy9wbGF0Zm9ybVwiKTtcbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnbnMtY2xhc3NlcycsXG4gICAgdGVtcGxhdGVVcmw6ICcuL2NsYXNzZXMuY29tcG9uZW50Lmh0bWwnLFxuICAgIHN0eWxlVXJsczogWycuL2NsYXNzZXMuY29tcG9uZW50LmNzcyddLFxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG59KVxuZXhwb3J0IGNsYXNzIENsYXNzZXNDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gICAgdGV4dEZpZWxkVmFsdWU6IHN0cmluZyA9IFwiXCI7XG4gICAgaXNJT1M6IGJvb2xlYW47XG5cbiAgICBsaXN0Vmlld0RhdGEgPSBbXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRpdGxlOiBcIkZpbmFuY2lhbCBMaXRlcmFjeVwiLFxuICAgICAgICAgICAgYXJ0aXN0OiBcIkJhc2ljIGludHJvZHVjdG9yeSBxdWVzdGlvbnNcIixcbiAgICAgICAgICAgIHllYXI6IFwiMjAxOVwiLFxuICAgICAgICAgICAgaW1hZ2VVcmw6IFwifi9pbWFnZXMvY2FsY3VsYXRvci1kZXNrLWZpbmFuY2UtMTI1MzU5MS5qcGdcIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICB0aXRsZTogXCJGaW5hbmNpYWwgTGl0ZXJhY3kgSUlcIixcbiAgICAgICAgICAgIGFydGlzdDogXCJJbnRlcm1lZGlhdGUgcHJhY3RpY2VcIixcbiAgICAgICAgICAgIHllYXI6IFwiMjAxNFwiLFxuICAgICAgICAgICAgaW1hZ2VVcmw6IFwifi9pbWFnZXMvY2FsY3VsYXRvci1kZXNrLWZpbmFuY2UtMTI1MzU5MS5qcGdcIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICB0aXRsZTogXCJGaW5hbmNpYWwgTGl0ZXJhY3kgSUlJXCIsXG4gICAgICAgICAgICBhcnRpc3Q6IFwiQWR2YW5jZWQgcHJhY3RpY2VcIixcbiAgICAgICAgICAgIHllYXI6IFwiMjAxN1wiLFxuICAgICAgICAgICAgaW1hZ2VVcmw6IFwifi9pbWFnZXMvY2FsY3VsYXRvci1kZXNrLWZpbmFuY2UtMTI1MzU5MS5qcGdcIlxuICAgICAgICB9XG4gICAgXVxuXG5cbiAgICBzZWFyY2hQaHJhc2U6IHN0cmluZztcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcGFnZTogUGFnZSwgcHJpdmF0ZSByb3V0ZXJFeHRlbnNpb25zOiBSb3V0ZXJFeHRlbnNpb25zKSB7XG4gICAgICAgIHBhZ2UuYWN0aW9uQmFySGlkZGVuID0gZmFsc2U7XG5cbiAgICAgICAgaWYgKHBsYXRmb3JtLmlzSU9TKSB7XG4gICAgICAgICAgICB0aGlzLmlzSU9TID0gdHJ1ZTtcbiAgICAgICAgICAgIHBhZ2Uuc3RhdHVzQmFyU3R5bGUgPSBcImxpZ2h0XCI7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBwYWdlLmJhY2tncm91bmRTcGFuVW5kZXJTdGF0dXNCYXIgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5pc0lPUyA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgbmdPbkluaXQoKSB7XG4gICAgfVxuXG4gICAgb25JdGVtVGFwKGFyZ3M6IEl0ZW1FdmVudERhdGEpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5yb3V0ZXJFeHRlbnNpb25zLm5hdmlnYXRlKFtcIi9zZWxlY3RvclwiXSk7XG4gICAgfVxuXG4gICAgb25CdXR0b25UYXAoKTogdm9pZCB7XG4gICAgfVxuXG4gICAgZ29CYWNrKCkge1xuICAgICAgICB0aGlzLnJvdXRlckV4dGVuc2lvbnMuYmFjaygpO1xuICAgIH1cbn1cbiJdfQ==