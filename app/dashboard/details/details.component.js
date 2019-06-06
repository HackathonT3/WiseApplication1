"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var enums_1 = require("tns-core-modules/ui/enums");
var platform_1 = require("tns-core-modules/platform");
var landmarks_service_1 = require("../landmarks-service");
var animations_service_1 = require("../animations-service");
var DetailsComponent = /** @class */ (function () {
    function DetailsComponent(animationsService, landmarksService, routerExtensions) {
        this.animationsService = animationsService;
        this.landmarksService = landmarksService;
        this.routerExtensions = routerExtensions;
        this.imageOpacity = 1;
        this.dockedLabelOpacity = 0;
        this.dockedLabelTextOpacity = 0;
        this.offset = this.animationsService.animationOffset;
        this.landmark = "class description shows here";
    }
    DetailsComponent_1 = DetailsComponent;
    Object.defineProperty(DetailsComponent.prototype, "minHeight", {
        get: function () {
            return platform_1.screen.mainScreen.heightDIPs + 2 * DetailsComponent_1.IMAGE_MIN_HEIGHT;
        },
        enumerable: true,
        configurable: true
    });
    DetailsComponent.prototype.animateIn = function (view, duration, delay) {
        view.animate({
            scale: { x: 1, y: 1 },
            translate: { x: 0, y: 0 },
            duration: duration,
            delay: delay,
            curve: enums_1.AnimationCurve.easeOut
        }).catch(function () { });
    };
    DetailsComponent.prototype.animateOut = function (view) {
        view.animate({
            opacity: 0,
            duration: 200
        }).catch(function () { });
    };
    DetailsComponent.prototype.onTap = function (args) {
        this.routerExtensions.back();
    };
    DetailsComponent.prototype.applyTitleTransition = function (scrollOffset, imageHeight) {
        var imageHeightMaxChange = imageHeight - DetailsComponent_1.IMAGE_MIN_HEIGHT;
        var title = this.titleRef.nativeElement;
        if (imageHeightMaxChange < scrollOffset) {
            title.translateX = -(scrollOffset - imageHeightMaxChange) / 1.2;
            title.translateY = -(scrollOffset - imageHeightMaxChange) * 2;
            title.scaleX = 1 - (scrollOffset - imageHeightMaxChange) / imageHeight;
            title.scaleY = 1 - (scrollOffset - imageHeightMaxChange) / imageHeight;
        }
        else {
            title.translateX = 0;
            title.translateY = 0;
            title.scaleX = 1;
            title.scaleY = 1;
        }
    };
    DetailsComponent.prototype.applyDockHeaderTransition = function (scrollOffset, imageHeight) {
        this.dockedLabelOpacity = this.imageOpacity <= 0 ? 1 : 0;
        this.dockedLabelTextOpacity = (scrollOffset - (imageHeight - DetailsComponent_1.IMAGE_MIN_HEIGHT)) / DetailsComponent_1.IMAGE_MIN_HEIGHT - 0.2;
    };
    var DetailsComponent_1;
    DetailsComponent.IMAGE_MIN_HEIGHT = 48;
    __decorate([
        core_1.Input(),
        __metadata("design:type", Number)
    ], DetailsComponent.prototype, "offset", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Number)
    ], DetailsComponent.prototype, "imageOpacity", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Number)
    ], DetailsComponent.prototype, "dockedLabelOpacity", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Number)
    ], DetailsComponent.prototype, "dockedLabelTextOpacity", void 0);
    __decorate([
        core_1.ViewChild("title"),
        __metadata("design:type", core_1.ElementRef)
    ], DetailsComponent.prototype, "titleRef", void 0);
    DetailsComponent = DetailsComponent_1 = __decorate([
        core_1.Component({
            selector: "Details",
            moduleId: module.id,
            templateUrl: "./details.component.html",
            styleUrls: ['./details.component.css']
        }),
        __metadata("design:paramtypes", [animations_service_1.AnimationsService,
            landmarks_service_1.LandmarksService,
            router_1.RouterExtensions])
    ], DetailsComponent);
    return DetailsComponent;
}());
exports.DetailsComponent = DetailsComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGV0YWlscy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJkZXRhaWxzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUF3RTtBQUN4RSxzREFBMEU7QUFFMUUsbURBQTJEO0FBRzNELHNEQUFtRDtBQUVuRCwwREFBd0Q7QUFDeEQsNERBQTBEO0FBUTFEO0lBU0MsMEJBQW9CLGlCQUFvQyxFQUMvQyxnQkFBa0MsRUFDbEMsZ0JBQWtDO1FBRnZCLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBbUI7UUFDL0MscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQUNsQyxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBUmxDLGlCQUFZLEdBQVcsQ0FBQyxDQUFDO1FBQ3pCLHVCQUFrQixHQUFXLENBQUMsQ0FBQztRQUMvQiwyQkFBc0IsR0FBVyxDQUFDLENBQUM7UUFRM0MsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsaUJBQWlCLENBQUMsZUFBZSxDQUFDO1FBQ3JELElBQUksQ0FBQyxRQUFRLEdBQUcsOEJBQThCLENBQUM7SUFDaEQsQ0FBQzt5QkFmVyxnQkFBZ0I7SUFpQjVCLHNCQUFJLHVDQUFTO2FBQWI7WUFDQyxPQUFPLGlCQUFNLENBQUMsVUFBVSxDQUFDLFVBQVUsR0FBRyxDQUFDLEdBQUcsa0JBQWdCLENBQUMsZ0JBQWdCLENBQUM7UUFDN0UsQ0FBQzs7O09BQUE7SUFFRCxvQ0FBUyxHQUFULFVBQVUsSUFBVSxFQUFFLFFBQWdCLEVBQUUsS0FBYTtRQUNwRCxJQUFJLENBQUMsT0FBTyxDQUFDO1lBQ1osS0FBSyxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFO1lBQ3JCLFNBQVMsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRTtZQUN6QixRQUFRLEVBQUUsUUFBUTtZQUNsQixLQUFLLEVBQUUsS0FBSztZQUNaLEtBQUssRUFBRSxzQkFBYyxDQUFDLE9BQU87U0FDN0IsQ0FBQyxDQUFDLEtBQUssQ0FBQyxjQUFRLENBQUMsQ0FBQyxDQUFDO0lBQ3JCLENBQUM7SUFFRCxxQ0FBVSxHQUFWLFVBQVcsSUFBVTtRQUNwQixJQUFJLENBQUMsT0FBTyxDQUFDO1lBQ1osT0FBTyxFQUFFLENBQUM7WUFDVixRQUFRLEVBQUUsR0FBRztTQUNiLENBQUMsQ0FBQyxLQUFLLENBQUMsY0FBUSxDQUFDLENBQUMsQ0FBQztJQUNyQixDQUFDO0lBQ0QsZ0NBQUssR0FBTCxVQUFNLElBQXNCO1FBQzNCLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUM5QixDQUFDO0lBR08sK0NBQW9CLEdBQTVCLFVBQTZCLFlBQW9CLEVBQUUsV0FBbUI7UUFDckUsSUFBSSxvQkFBb0IsR0FBRyxXQUFXLEdBQUcsa0JBQWdCLENBQUMsZ0JBQWdCLENBQUM7UUFDM0UsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUM7UUFFeEMsSUFBSSxvQkFBb0IsR0FBRyxZQUFZLEVBQUU7WUFDeEMsS0FBSyxDQUFDLFVBQVUsR0FBRyxDQUFDLENBQUMsWUFBWSxHQUFHLG9CQUFvQixDQUFDLEdBQUcsR0FBRyxDQUFDO1lBQ2hFLEtBQUssQ0FBQyxVQUFVLEdBQUcsQ0FBQyxDQUFDLFlBQVksR0FBRyxvQkFBb0IsQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUM5RCxLQUFLLENBQUMsTUFBTSxHQUFHLENBQUMsR0FBRyxDQUFDLFlBQVksR0FBRyxvQkFBb0IsQ0FBQyxHQUFHLFdBQVcsQ0FBQztZQUN2RSxLQUFLLENBQUMsTUFBTSxHQUFHLENBQUMsR0FBRyxDQUFDLFlBQVksR0FBRyxvQkFBb0IsQ0FBQyxHQUFHLFdBQVcsQ0FBQztTQUN2RTthQUFNO1lBQ04sS0FBSyxDQUFDLFVBQVUsR0FBRyxDQUFDLENBQUM7WUFDckIsS0FBSyxDQUFDLFVBQVUsR0FBRyxDQUFDLENBQUM7WUFDckIsS0FBSyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7WUFDakIsS0FBSyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7U0FDakI7SUFDRixDQUFDO0lBRU8sb0RBQXlCLEdBQWpDLFVBQWtDLFlBQW9CLEVBQUUsV0FBbUI7UUFDMUUsSUFBSSxDQUFDLGtCQUFrQixHQUFHLElBQUksQ0FBQyxZQUFZLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN6RCxJQUFJLENBQUMsc0JBQXNCLEdBQUcsQ0FBQyxZQUFZLEdBQUcsQ0FBQyxXQUFXLEdBQUcsa0JBQWdCLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxHQUFHLGtCQUFnQixDQUFDLGdCQUFnQixHQUFHLEdBQUcsQ0FBQztJQUM1SSxDQUFDOztJQXZETSxpQ0FBZ0IsR0FBRyxFQUFFLENBQUM7SUFMcEI7UUFBUixZQUFLLEVBQUU7O29EQUFnQjtJQUNmO1FBQVIsWUFBSyxFQUFFOzswREFBMEI7SUFDekI7UUFBUixZQUFLLEVBQUU7O2dFQUFnQztJQUMvQjtRQUFSLFlBQUssRUFBRTs7b0VBQW9DO0lBQ3hCO1FBQW5CLGdCQUFTLENBQUMsT0FBTyxDQUFDO2tDQUFXLGlCQUFVO3NEQUFDO0lBTjdCLGdCQUFnQjtRQU41QixnQkFBUyxDQUFDO1lBQ1YsUUFBUSxFQUFFLFNBQVM7WUFDbkIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFdBQVcsRUFBRSwwQkFBMEI7WUFDdkMsU0FBUyxFQUFFLENBQUMseUJBQXlCLENBQUM7U0FDdEMsQ0FBQzt5Q0FVc0Msc0NBQWlCO1lBQzdCLG9DQUFnQjtZQUNoQix5QkFBZ0I7T0FYL0IsZ0JBQWdCLENBK0Q1QjtJQUFELHVCQUFDO0NBQUEsQUEvREQsSUErREM7QUEvRFksNENBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgVmlld0NoaWxkLCBFbGVtZW50UmVmIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFBhZ2VSb3V0ZSwgUm91dGVyRXh0ZW5zaW9ucyB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7IFZpZXcgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9jb3JlL3ZpZXdcIjtcbmltcG9ydCB7IEFuaW1hdGlvbkN1cnZlIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvZW51bXNcIjtcbmltcG9ydCB7IEdlc3R1cmVFdmVudERhdGEgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9nZXN0dXJlc1wiO1xuaW1wb3J0IHsgU2Nyb2xsRXZlbnREYXRhIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvc2Nyb2xsLXZpZXdcIjtcbmltcG9ydCB7IHNjcmVlbiB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3BsYXRmb3JtXCI7XG5pbXBvcnQgeyBMYW5kbWFyayB9IGZyb20gXCIuLi9sYW5kbWFya1wiO1xuaW1wb3J0IHsgTGFuZG1hcmtzU2VydmljZSB9IGZyb20gXCIuLi9sYW5kbWFya3Mtc2VydmljZVwiO1xuaW1wb3J0IHsgQW5pbWF0aW9uc1NlcnZpY2UgfSBmcm9tIFwiLi4vYW5pbWF0aW9ucy1zZXJ2aWNlXCI7XG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogXCJEZXRhaWxzXCIsXG5cdG1vZHVsZUlkOiBtb2R1bGUuaWQsXG5cdHRlbXBsYXRlVXJsOiBcIi4vZGV0YWlscy5jb21wb25lbnQuaHRtbFwiLFxuXHRzdHlsZVVybHM6IFsnLi9kZXRhaWxzLmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBEZXRhaWxzQ29tcG9uZW50IHtcblx0bGFuZG1hcms6IHN0cmluZztcblx0QElucHV0KCkgb2Zmc2V0OiBudW1iZXI7XG5cdEBJbnB1dCgpIGltYWdlT3BhY2l0eTogbnVtYmVyID0gMTtcblx0QElucHV0KCkgZG9ja2VkTGFiZWxPcGFjaXR5OiBudW1iZXIgPSAwO1xuXHRASW5wdXQoKSBkb2NrZWRMYWJlbFRleHRPcGFjaXR5OiBudW1iZXIgPSAwO1xuXHRAVmlld0NoaWxkKFwidGl0bGVcIikgdGl0bGVSZWY6IEVsZW1lbnRSZWY7XG5cdHN0YXRpYyBJTUFHRV9NSU5fSEVJR0hUID0gNDg7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSBhbmltYXRpb25zU2VydmljZTogQW5pbWF0aW9uc1NlcnZpY2UsXG5cdFx0cHJpdmF0ZSBsYW5kbWFya3NTZXJ2aWNlOiBMYW5kbWFya3NTZXJ2aWNlLFxuXHRcdHByaXZhdGUgcm91dGVyRXh0ZW5zaW9uczogUm91dGVyRXh0ZW5zaW9ucykge1xuXHRcdFx0XG5cdFx0dGhpcy5vZmZzZXQgPSB0aGlzLmFuaW1hdGlvbnNTZXJ2aWNlLmFuaW1hdGlvbk9mZnNldDtcblx0XHR0aGlzLmxhbmRtYXJrID0gXCJjbGFzcyBkZXNjcmlwdGlvbiBzaG93cyBoZXJlXCI7XG5cdH1cblxuXHRnZXQgbWluSGVpZ2h0KCkge1xuXHRcdHJldHVybiBzY3JlZW4ubWFpblNjcmVlbi5oZWlnaHRESVBzICsgMiAqIERldGFpbHNDb21wb25lbnQuSU1BR0VfTUlOX0hFSUdIVDtcblx0fVxuXG5cdGFuaW1hdGVJbih2aWV3OiBWaWV3LCBkdXJhdGlvbjogbnVtYmVyLCBkZWxheTogbnVtYmVyKSB7XG5cdFx0dmlldy5hbmltYXRlKHtcblx0XHRcdHNjYWxlOiB7IHg6IDEsIHk6IDEgfSxcblx0XHRcdHRyYW5zbGF0ZTogeyB4OiAwLCB5OiAwIH0sXG5cdFx0XHRkdXJhdGlvbjogZHVyYXRpb24sXG5cdFx0XHRkZWxheTogZGVsYXksXG5cdFx0XHRjdXJ2ZTogQW5pbWF0aW9uQ3VydmUuZWFzZU91dFxuXHRcdH0pLmNhdGNoKCgpID0+IHsgfSk7XG5cdH1cblxuXHRhbmltYXRlT3V0KHZpZXc6IFZpZXcpIHtcblx0XHR2aWV3LmFuaW1hdGUoe1xuXHRcdFx0b3BhY2l0eTogMCxcblx0XHRcdGR1cmF0aW9uOiAyMDBcblx0XHR9KS5jYXRjaCgoKSA9PiB7IH0pO1xuXHR9XG5cdG9uVGFwKGFyZ3M6IEdlc3R1cmVFdmVudERhdGEpIHtcblx0XHR0aGlzLnJvdXRlckV4dGVuc2lvbnMuYmFjaygpO1xuXHR9XG5cblxuXHRwcml2YXRlIGFwcGx5VGl0bGVUcmFuc2l0aW9uKHNjcm9sbE9mZnNldDogbnVtYmVyLCBpbWFnZUhlaWdodDogbnVtYmVyKSB7XG5cdFx0bGV0IGltYWdlSGVpZ2h0TWF4Q2hhbmdlID0gaW1hZ2VIZWlnaHQgLSBEZXRhaWxzQ29tcG9uZW50LklNQUdFX01JTl9IRUlHSFQ7XG5cdFx0bGV0IHRpdGxlID0gdGhpcy50aXRsZVJlZi5uYXRpdmVFbGVtZW50O1xuXG5cdFx0aWYgKGltYWdlSGVpZ2h0TWF4Q2hhbmdlIDwgc2Nyb2xsT2Zmc2V0KSB7XG5cdFx0XHR0aXRsZS50cmFuc2xhdGVYID0gLShzY3JvbGxPZmZzZXQgLSBpbWFnZUhlaWdodE1heENoYW5nZSkgLyAxLjI7XG5cdFx0XHR0aXRsZS50cmFuc2xhdGVZID0gLShzY3JvbGxPZmZzZXQgLSBpbWFnZUhlaWdodE1heENoYW5nZSkgKiAyO1xuXHRcdFx0dGl0bGUuc2NhbGVYID0gMSAtIChzY3JvbGxPZmZzZXQgLSBpbWFnZUhlaWdodE1heENoYW5nZSkgLyBpbWFnZUhlaWdodDtcblx0XHRcdHRpdGxlLnNjYWxlWSA9IDEgLSAoc2Nyb2xsT2Zmc2V0IC0gaW1hZ2VIZWlnaHRNYXhDaGFuZ2UpIC8gaW1hZ2VIZWlnaHQ7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRpdGxlLnRyYW5zbGF0ZVggPSAwO1xuXHRcdFx0dGl0bGUudHJhbnNsYXRlWSA9IDA7XG5cdFx0XHR0aXRsZS5zY2FsZVggPSAxO1xuXHRcdFx0dGl0bGUuc2NhbGVZID0gMTtcblx0XHR9XG5cdH1cblxuXHRwcml2YXRlIGFwcGx5RG9ja0hlYWRlclRyYW5zaXRpb24oc2Nyb2xsT2Zmc2V0OiBudW1iZXIsIGltYWdlSGVpZ2h0OiBudW1iZXIpIHtcblx0XHR0aGlzLmRvY2tlZExhYmVsT3BhY2l0eSA9IHRoaXMuaW1hZ2VPcGFjaXR5IDw9IDAgPyAxIDogMDtcblx0XHR0aGlzLmRvY2tlZExhYmVsVGV4dE9wYWNpdHkgPSAoc2Nyb2xsT2Zmc2V0IC0gKGltYWdlSGVpZ2h0IC0gRGV0YWlsc0NvbXBvbmVudC5JTUFHRV9NSU5fSEVJR0hUKSkgLyBEZXRhaWxzQ29tcG9uZW50LklNQUdFX01JTl9IRUlHSFQgLSAwLjI7XG5cdH1cbn0iXX0=