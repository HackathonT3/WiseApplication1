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
                title: "I Don't Wanna Live Forever (Fifty Shades of Grey)",
                artist: "Taylor Swift, Zayn Malik",
                year: "2016",
                imageUrl: "~/images/calculator-desk-finance-1253591.jpg"
            },
            {
                title: "Blank Space",
                artist: "Taylor Swift",
                year: "2014",
                imageUrl: "~/images/calculator-desk-finance-1253591.jpg"
            },
            {
                title: "End Game",
                artist: "Taylor Swift, Ed Sheeran, Future",
                year: "2017",
                imageUrl: "~/images/calculator-desk-finance-1253591.jpg"
            },
            {
                title: "Love Story",
                artist: "Taylor Swift",
                year: "2009",
                imageUrl: "~/images/calculator-desk-finance-1253591.jpg"
            },
            {
                title: "Everything Has Changed",
                artist: "Taylor Swift, Ed Sheeran",
                year: "2012",
                imageUrl: "~/images/calculator-desk-finance-1253591.jpg"
            },
            {
                title: "Teardrops On My Guitar",
                artist: "Taylor Swift",
                year: "2006",
                imageUrl: "~/images/calculator-desk-finance-1253591.jpg"
            },
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xhc3Nlcy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjbGFzc2VzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFrRDtBQUVsRCxzREFBcUQ7QUFDckQsNkRBQXdEO0FBRXhELElBQUksS0FBSyxHQUFHLE9BQU8sQ0FBQywyQkFBMkIsQ0FBQyxDQUFDO0FBQ2pELElBQUksUUFBUSxHQUFHLE9BQU8sQ0FBQywyQkFBMkIsQ0FBQyxDQUFDO0FBT3BEO0lBK0NJLDBCQUFvQixJQUFVLEVBQVUsZ0JBQWtDO1FBQXRELFNBQUksR0FBSixJQUFJLENBQU07UUFBVSxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBN0MxRSxtQkFBYyxHQUFXLEVBQUUsQ0FBQztRQUc1QixpQkFBWSxHQUFHO1lBQ1g7Z0JBQ0ksS0FBSyxFQUFFLG1EQUFtRDtnQkFDMUQsTUFBTSxFQUFFLDBCQUEwQjtnQkFDbEMsSUFBSSxFQUFFLE1BQU07Z0JBQ1osUUFBUSxFQUFFLDhDQUE4QzthQUMzRDtZQUNEO2dCQUNJLEtBQUssRUFBRSxhQUFhO2dCQUNwQixNQUFNLEVBQUUsY0FBYztnQkFDdEIsSUFBSSxFQUFFLE1BQU07Z0JBQ1osUUFBUSxFQUFFLDhDQUE4QzthQUMzRDtZQUNEO2dCQUNJLEtBQUssRUFBRSxVQUFVO2dCQUNqQixNQUFNLEVBQUUsa0NBQWtDO2dCQUMxQyxJQUFJLEVBQUUsTUFBTTtnQkFDWixRQUFRLEVBQUUsOENBQThDO2FBQzNEO1lBQ0Q7Z0JBQ0ksS0FBSyxFQUFFLFlBQVk7Z0JBQ25CLE1BQU0sRUFBRSxjQUFjO2dCQUN0QixJQUFJLEVBQUUsTUFBTTtnQkFDWixRQUFRLEVBQUUsOENBQThDO2FBQzNEO1lBQ0Q7Z0JBQ0ksS0FBSyxFQUFFLHdCQUF3QjtnQkFDL0IsTUFBTSxFQUFFLDBCQUEwQjtnQkFDbEMsSUFBSSxFQUFFLE1BQU07Z0JBQ1osUUFBUSxFQUFFLDhDQUE4QzthQUMzRDtZQUNEO2dCQUNJLEtBQUssRUFBRSx3QkFBd0I7Z0JBQy9CLE1BQU0sRUFBRSxjQUFjO2dCQUN0QixJQUFJLEVBQUUsTUFBTTtnQkFDWixRQUFRLEVBQUUsOENBQThDO2FBQzNEO1NBQ0osQ0FBQTtRQU1HLElBQUksQ0FBQyxlQUFlLEdBQUcsS0FBSyxDQUFDO1FBRTdCLElBQUksUUFBUSxDQUFDLEtBQUssRUFBRTtZQUNoQixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQztZQUNsQixJQUFJLENBQUMsY0FBYyxHQUFHLE9BQU8sQ0FBQztTQUNqQzthQUNJO1lBQ0QsSUFBSSxDQUFDLDRCQUE0QixHQUFHLElBQUksQ0FBQztZQUN6QyxJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztTQUN0QjtJQUNMLENBQUM7SUFFRCxtQ0FBUSxHQUFSO0lBQ0EsQ0FBQztJQUVELG9DQUFTLEdBQVQsVUFBVSxJQUFtQjtJQUU3QixDQUFDO0lBRUQsc0NBQVcsR0FBWDtJQUNBLENBQUM7SUFFRCxpQ0FBTSxHQUFOO1FBQ0ksSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksRUFBRSxDQUFDO0lBQ2pDLENBQUM7SUF4RVEsZ0JBQWdCO1FBTjVCLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsWUFBWTtZQUN0QixXQUFXLEVBQUUsMEJBQTBCO1lBQ3ZDLFNBQVMsRUFBRSxDQUFDLHlCQUF5QixDQUFDO1lBQ3RDLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtTQUN0QixDQUFDO3lDQWdENEIsV0FBSSxFQUE0Qix1Q0FBZ0I7T0EvQ2pFLGdCQUFnQixDQXlFNUI7SUFBRCx1QkFBQztDQUFBLEFBekVELElBeUVDO0FBekVZLDRDQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBJdGVtRXZlbnREYXRhIH0gZnJvbSAndG5zLWNvcmUtbW9kdWxlcy91aS9saXN0LXZpZXcvbGlzdC12aWV3JztcbmltcG9ydCB7IFBhZ2UgfSBmcm9tICd0bnMtY29yZS1tb2R1bGVzL3VpL3BhZ2UvcGFnZSc7XG5pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWFuZ3VsYXInO1xuaW1wb3J0IHsga25vd25Gb2xkZXJzLCBGb2xkZXIsIEZpbGUgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy9maWxlLXN5c3RlbVwiO1xudmFyIGZyYW1lID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvdWkvZnJhbWVcIik7XG52YXIgcGxhdGZvcm0gPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy9wbGF0Zm9ybVwiKTtcbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnbnMtY2xhc3NlcycsXG4gICAgdGVtcGxhdGVVcmw6ICcuL2NsYXNzZXMuY29tcG9uZW50Lmh0bWwnLFxuICAgIHN0eWxlVXJsczogWycuL2NsYXNzZXMuY29tcG9uZW50LmNzcyddLFxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG59KVxuZXhwb3J0IGNsYXNzIENsYXNzZXNDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gICAgdGV4dEZpZWxkVmFsdWU6IHN0cmluZyA9IFwiXCI7XG4gICAgaXNJT1M6IGJvb2xlYW47XG5cbiAgICBsaXN0Vmlld0RhdGEgPSBbXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRpdGxlOiBcIkkgRG9uJ3QgV2FubmEgTGl2ZSBGb3JldmVyIChGaWZ0eSBTaGFkZXMgb2YgR3JleSlcIixcbiAgICAgICAgICAgIGFydGlzdDogXCJUYXlsb3IgU3dpZnQsIFpheW4gTWFsaWtcIixcbiAgICAgICAgICAgIHllYXI6IFwiMjAxNlwiLFxuICAgICAgICAgICAgaW1hZ2VVcmw6IFwifi9pbWFnZXMvY2FsY3VsYXRvci1kZXNrLWZpbmFuY2UtMTI1MzU5MS5qcGdcIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICB0aXRsZTogXCJCbGFuayBTcGFjZVwiLFxuICAgICAgICAgICAgYXJ0aXN0OiBcIlRheWxvciBTd2lmdFwiLFxuICAgICAgICAgICAgeWVhcjogXCIyMDE0XCIsXG4gICAgICAgICAgICBpbWFnZVVybDogXCJ+L2ltYWdlcy9jYWxjdWxhdG9yLWRlc2stZmluYW5jZS0xMjUzNTkxLmpwZ1wiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRpdGxlOiBcIkVuZCBHYW1lXCIsXG4gICAgICAgICAgICBhcnRpc3Q6IFwiVGF5bG9yIFN3aWZ0LCBFZCBTaGVlcmFuLCBGdXR1cmVcIixcbiAgICAgICAgICAgIHllYXI6IFwiMjAxN1wiLFxuICAgICAgICAgICAgaW1hZ2VVcmw6IFwifi9pbWFnZXMvY2FsY3VsYXRvci1kZXNrLWZpbmFuY2UtMTI1MzU5MS5qcGdcIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICB0aXRsZTogXCJMb3ZlIFN0b3J5XCIsXG4gICAgICAgICAgICBhcnRpc3Q6IFwiVGF5bG9yIFN3aWZ0XCIsXG4gICAgICAgICAgICB5ZWFyOiBcIjIwMDlcIixcbiAgICAgICAgICAgIGltYWdlVXJsOiBcIn4vaW1hZ2VzL2NhbGN1bGF0b3ItZGVzay1maW5hbmNlLTEyNTM1OTEuanBnXCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgdGl0bGU6IFwiRXZlcnl0aGluZyBIYXMgQ2hhbmdlZFwiLFxuICAgICAgICAgICAgYXJ0aXN0OiBcIlRheWxvciBTd2lmdCwgRWQgU2hlZXJhblwiLFxuICAgICAgICAgICAgeWVhcjogXCIyMDEyXCIsXG4gICAgICAgICAgICBpbWFnZVVybDogXCJ+L2ltYWdlcy9jYWxjdWxhdG9yLWRlc2stZmluYW5jZS0xMjUzNTkxLmpwZ1wiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRpdGxlOiBcIlRlYXJkcm9wcyBPbiBNeSBHdWl0YXJcIixcbiAgICAgICAgICAgIGFydGlzdDogXCJUYXlsb3IgU3dpZnRcIixcbiAgICAgICAgICAgIHllYXI6IFwiMjAwNlwiLFxuICAgICAgICAgICAgaW1hZ2VVcmw6IFwifi9pbWFnZXMvY2FsY3VsYXRvci1kZXNrLWZpbmFuY2UtMTI1MzU5MS5qcGdcIlxuICAgICAgICB9LFxuICAgIF1cblxuXG4gICAgc2VhcmNoUGhyYXNlOiBzdHJpbmc7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHBhZ2U6IFBhZ2UsIHByaXZhdGUgcm91dGVyRXh0ZW5zaW9uczogUm91dGVyRXh0ZW5zaW9ucykge1xuICAgICAgICBwYWdlLmFjdGlvbkJhckhpZGRlbiA9IGZhbHNlO1xuXG4gICAgICAgIGlmIChwbGF0Zm9ybS5pc0lPUykge1xuICAgICAgICAgICAgdGhpcy5pc0lPUyA9IHRydWU7XG4gICAgICAgICAgICBwYWdlLnN0YXR1c0JhclN0eWxlID0gXCJsaWdodFwiO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcGFnZS5iYWNrZ3JvdW5kU3BhblVuZGVyU3RhdHVzQmFyID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMuaXNJT1MgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG5nT25Jbml0KCkge1xuICAgIH1cblxuICAgIG9uSXRlbVRhcChhcmdzOiBJdGVtRXZlbnREYXRhKTogdm9pZCB7XG5cbiAgICB9XG5cbiAgICBvbkJ1dHRvblRhcCgpOiB2b2lkIHtcbiAgICB9XG5cbiAgICBnb0JhY2soKSB7XG4gICAgICAgIHRoaXMucm91dGVyRXh0ZW5zaW9ucy5iYWNrKCk7XG4gICAgfVxufVxuIl19