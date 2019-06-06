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
        this.landmark = "class deThe financial techniques of personal finance are easy to understand. This is not rocket science and the foundation of personal finance is easy to understand. Where people have issues is getting and staying motivated. Just like with a lot of things in life, getting distracted is very easy." +
            "I’m going to teach you about the core four tenants of personal finance. We will go into detail about the core 4 pillars of personal finance." +
            "At the end of this course, you will know how to get your finances under control, get and stay motivated. Later on, if you want to become an expert on personal finance and retire early for example, you will have a strong foundation to understand how to do so. You’ll also understand the advantages and disadvantages of different personal finance paths." +
            "My goal for you is to understand the core four principals of personal finance and to have a strong foundation." +
            "Personal finance is a lifelong journey. Personal finance is a marathon, not a sprint.scription shows here";
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGV0YWlscy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJkZXRhaWxzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUF3RTtBQUN4RSxzREFBMEU7QUFFMUUsbURBQTJEO0FBRzNELHNEQUFtRDtBQUVuRCwwREFBd0Q7QUFDeEQsNERBQTBEO0FBUTFEO0lBU0MsMEJBQW9CLGlCQUFvQyxFQUMvQyxnQkFBa0MsRUFDbEMsZ0JBQWtDO1FBRnZCLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBbUI7UUFDL0MscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQUNsQyxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBUmxDLGlCQUFZLEdBQVcsQ0FBQyxDQUFDO1FBQ3pCLHVCQUFrQixHQUFXLENBQUMsQ0FBQztRQUMvQiwyQkFBc0IsR0FBVyxDQUFDLENBQUM7UUFRM0MsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsaUJBQWlCLENBQUMsZUFBZSxDQUFDO1FBQ3JELElBQUksQ0FBQyxRQUFRLEdBQUcsMlNBQTJTO1lBQzNULDhJQUE4STtZQUM5SSxpV0FBaVc7WUFDalcsZ0hBQWdIO1lBQ2hILDJHQUEyRyxDQUFDO0lBQzdHLENBQUM7eUJBbkJXLGdCQUFnQjtJQXFCNUIsc0JBQUksdUNBQVM7YUFBYjtZQUNDLE9BQU8saUJBQU0sQ0FBQyxVQUFVLENBQUMsVUFBVSxHQUFHLENBQUMsR0FBRyxrQkFBZ0IsQ0FBQyxnQkFBZ0IsQ0FBQztRQUM3RSxDQUFDOzs7T0FBQTtJQUVELG9DQUFTLEdBQVQsVUFBVSxJQUFVLEVBQUUsUUFBZ0IsRUFBRSxLQUFhO1FBQ3BELElBQUksQ0FBQyxPQUFPLENBQUM7WUFDWixLQUFLLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUU7WUFDckIsU0FBUyxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUs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IEVsZW1lbnRSZWYgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgUGFnZVJvdXRlLCBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHsgVmlldyB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2NvcmUvdmlld1wiO1xuaW1wb3J0IHsgQW5pbWF0aW9uQ3VydmUgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9lbnVtc1wiO1xuaW1wb3J0IHsgR2VzdHVyZUV2ZW50RGF0YSB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2dlc3R1cmVzXCI7XG5pbXBvcnQgeyBTY3JvbGxFdmVudERhdGEgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9zY3JvbGwtdmlld1wiO1xuaW1wb3J0IHsgc2NyZWVuIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvcGxhdGZvcm1cIjtcbmltcG9ydCB7IExhbmRtYXJrIH0gZnJvbSBcIi4uL2xhbmRtYXJrXCI7XG5pbXBvcnQgeyBMYW5kbWFya3NTZXJ2aWNlIH0gZnJvbSBcIi4uL2xhbmRtYXJrcy1zZXJ2aWNlXCI7XG5pbXBvcnQgeyBBbmltYXRpb25zU2VydmljZSB9IGZyb20gXCIuLi9hbmltYXRpb25zLXNlcnZpY2VcIjtcblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiBcIkRldGFpbHNcIixcblx0bW9kdWxlSWQ6IG1vZHVsZS5pZCxcblx0dGVtcGxhdGVVcmw6IFwiLi9kZXRhaWxzLmNvbXBvbmVudC5odG1sXCIsXG5cdHN0eWxlVXJsczogWycuL2RldGFpbHMuY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIERldGFpbHNDb21wb25lbnQge1xuXHRsYW5kbWFyazogc3RyaW5nO1xuXHRASW5wdXQoKSBvZmZzZXQ6IG51bWJlcjtcblx0QElucHV0KCkgaW1hZ2VPcGFjaXR5OiBudW1iZXIgPSAxO1xuXHRASW5wdXQoKSBkb2NrZWRMYWJlbE9wYWNpdHk6IG51bWJlciA9IDA7XG5cdEBJbnB1dCgpIGRvY2tlZExhYmVsVGV4dE9wYWNpdHk6IG51bWJlciA9IDA7XG5cdEBWaWV3Q2hpbGQoXCJ0aXRsZVwiKSB0aXRsZVJlZjogRWxlbWVudFJlZjtcblx0c3RhdGljIElNQUdFX01JTl9IRUlHSFQgPSA0ODtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIGFuaW1hdGlvbnNTZXJ2aWNlOiBBbmltYXRpb25zU2VydmljZSxcblx0XHRwcml2YXRlIGxhbmRtYXJrc1NlcnZpY2U6IExhbmRtYXJrc1NlcnZpY2UsXG5cdFx0cHJpdmF0ZSByb3V0ZXJFeHRlbnNpb25zOiBSb3V0ZXJFeHRlbnNpb25zKSB7XG5cdFx0XHRcblx0XHR0aGlzLm9mZnNldCA9IHRoaXMuYW5pbWF0aW9uc1NlcnZpY2UuYW5pbWF0aW9uT2Zmc2V0O1xuXHRcdHRoaXMubGFuZG1hcmsgPSBcImNsYXNzIGRlVGhlIGZpbmFuY2lhbCB0ZWNobmlxdWVzIG9mIHBlcnNvbmFsIGZpbmFuY2UgYXJlIGVhc3kgdG8gdW5kZXJzdGFuZC4gVGhpcyBpcyBub3Qgcm9ja2V0IHNjaWVuY2UgYW5kIHRoZSBmb3VuZGF0aW9uIG9mIHBlcnNvbmFsIGZpbmFuY2UgaXMgZWFzeSB0byB1bmRlcnN0YW5kLiBXaGVyZSBwZW9wbGUgaGF2ZSBpc3N1ZXMgaXMgZ2V0dGluZyBhbmQgc3RheWluZyBtb3RpdmF0ZWQuIEp1c3QgbGlrZSB3aXRoIGEgbG90IG9mIHRoaW5ncyBpbiBsaWZlLCBnZXR0aW5nIGRpc3RyYWN0ZWQgaXMgdmVyeSBlYXN5LlwiICtcblx0XHRcIknigJltIGdvaW5nIHRvIHRlYWNoIHlvdSBhYm91dCB0aGUgY29yZSBmb3VyIHRlbmFudHMgb2YgcGVyc29uYWwgZmluYW5jZS4gV2Ugd2lsbCBnbyBpbnRvIGRldGFpbCBhYm91dCB0aGUgY29yZSA0IHBpbGxhcnMgb2YgcGVyc29uYWwgZmluYW5jZS5cIiArXG5cdFx0XCJBdCB0aGUgZW5kIG9mIHRoaXMgY291cnNlLCB5b3Ugd2lsbCBrbm93IGhvdyB0byBnZXQgeW91ciBmaW5hbmNlcyB1bmRlciBjb250cm9sLCBnZXQgYW5kIHN0YXkgbW90aXZhdGVkLiBMYXRlciBvbiwgaWYgeW91IHdhbnQgdG8gYmVjb21lIGFuIGV4cGVydCBvbiBwZXJzb25hbCBmaW5hbmNlIGFuZCByZXRpcmUgZWFybHkgZm9yIGV4YW1wbGUsIHlvdSB3aWxsIGhhdmUgYSBzdHJvbmcgZm91bmRhdGlvbiB0byB1bmRlcnN0YW5kIGhvdyB0byBkbyBzby4gWW914oCZbGwgYWxzbyB1bmRlcnN0YW5kIHRoZSBhZHZhbnRhZ2VzIGFuZCBkaXNhZHZhbnRhZ2VzIG9mIGRpZmZlcmVudCBwZXJzb25hbCBmaW5hbmNlIHBhdGhzLlwiICsgXG5cdFx0XCJNeSBnb2FsIGZvciB5b3UgaXMgdG8gdW5kZXJzdGFuZCB0aGUgY29yZSBmb3VyIHByaW5jaXBhbHMgb2YgcGVyc29uYWwgZmluYW5jZSBhbmQgdG8gaGF2ZSBhIHN0cm9uZyBmb3VuZGF0aW9uLlwiICsgXG5cdFx0XCJQZXJzb25hbCBmaW5hbmNlIGlzIGEgbGlmZWxvbmcgam91cm5leS4gUGVyc29uYWwgZmluYW5jZSBpcyBhIG1hcmF0aG9uLCBub3QgYSBzcHJpbnQuc2NyaXB0aW9uIHNob3dzIGhlcmVcIjtcblx0fVxuXG5cdGdldCBtaW5IZWlnaHQoKSB7XG5cdFx0cmV0dXJuIHNjcmVlbi5tYWluU2NyZWVuLmhlaWdodERJUHMgKyAyICogRGV0YWlsc0NvbXBvbmVudC5JTUFHRV9NSU5fSEVJR0hUO1xuXHR9XG5cblx0YW5pbWF0ZUluKHZpZXc6IFZpZXcsIGR1cmF0aW9uOiBudW1iZXIsIGRlbGF5OiBudW1iZXIpIHtcblx0XHR2aWV3LmFuaW1hdGUoe1xuXHRcdFx0c2NhbGU6IHsgeDogMSwgeTogMSB9LFxuXHRcdFx0dHJhbnNsYXRlOiB7IHg6IDAsIHk6IDAgfSxcblx0XHRcdGR1cmF0aW9uOiBkdXJhdGlvbixcblx0XHRcdGRlbGF5OiBkZWxheSxcblx0XHRcdGN1cnZlOiBBbmltYXRpb25DdXJ2ZS5lYXNlT3V0XG5cdFx0fSkuY2F0Y2goKCkgPT4geyB9KTtcblx0fVxuXG5cdGFuaW1hdGVPdXQodmlldzogVmlldykge1xuXHRcdHZpZXcuYW5pbWF0ZSh7XG5cdFx0XHRvcGFjaXR5OiAwLFxuXHRcdFx0ZHVyYXRpb246IDIwMFxuXHRcdH0pLmNhdGNoKCgpID0+IHsgfSk7XG5cdH1cblx0b25UYXAoYXJnczogR2VzdHVyZUV2ZW50RGF0YSkge1xuXHRcdHRoaXMucm91dGVyRXh0ZW5zaW9ucy5iYWNrKCk7XG5cdH1cblxuXG5cdHByaXZhdGUgYXBwbHlUaXRsZVRyYW5zaXRpb24oc2Nyb2xsT2Zmc2V0OiBudW1iZXIsIGltYWdlSGVpZ2h0OiBudW1iZXIpIHtcblx0XHRsZXQgaW1hZ2VIZWlnaHRNYXhDaGFuZ2UgPSBpbWFnZUhlaWdodCAtIERldGFpbHNDb21wb25lbnQuSU1BR0VfTUlOX0hFSUdIVDtcblx0XHRsZXQgdGl0bGUgPSB0aGlzLnRpdGxlUmVmLm5hdGl2ZUVsZW1lbnQ7XG5cblx0XHRpZiAoaW1hZ2VIZWlnaHRNYXhDaGFuZ2UgPCBzY3JvbGxPZmZzZXQpIHtcblx0XHRcdHRpdGxlLnRyYW5zbGF0ZVggPSAtKHNjcm9sbE9mZnNldCAtIGltYWdlSGVpZ2h0TWF4Q2hhbmdlKSAvIDEuMjtcblx0XHRcdHRpdGxlLnRyYW5zbGF0ZVkgPSAtKHNjcm9sbE9mZnNldCAtIGltYWdlSGVpZ2h0TWF4Q2hhbmdlKSAqIDI7XG5cdFx0XHR0aXRsZS5zY2FsZVggPSAxIC0gKHNjcm9sbE9mZnNldCAtIGltYWdlSGVpZ2h0TWF4Q2hhbmdlKSAvIGltYWdlSGVpZ2h0O1xuXHRcdFx0dGl0bGUuc2NhbGVZID0gMSAtIChzY3JvbGxPZmZzZXQgLSBpbWFnZUhlaWdodE1heENoYW5nZSkgLyBpbWFnZUhlaWdodDtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGl0bGUudHJhbnNsYXRlWCA9IDA7XG5cdFx0XHR0aXRsZS50cmFuc2xhdGVZID0gMDtcblx0XHRcdHRpdGxlLnNjYWxlWCA9IDE7XG5cdFx0XHR0aXRsZS5zY2FsZVkgPSAxO1xuXHRcdH1cblx0fVxuXG5cdHByaXZhdGUgYXBwbHlEb2NrSGVhZGVyVHJhbnNpdGlvbihzY3JvbGxPZmZzZXQ6IG51bWJlciwgaW1hZ2VIZWlnaHQ6IG51bWJlcikge1xuXHRcdHRoaXMuZG9ja2VkTGFiZWxPcGFjaXR5ID0gdGhpcy5pbWFnZU9wYWNpdHkgPD0gMCA/IDEgOiAwO1xuXHRcdHRoaXMuZG9ja2VkTGFiZWxUZXh0T3BhY2l0eSA9IChzY3JvbGxPZmZzZXQgLSAoaW1hZ2VIZWlnaHQgLSBEZXRhaWxzQ29tcG9uZW50LklNQUdFX01JTl9IRUlHSFQpKSAvIERldGFpbHNDb21wb25lbnQuSU1BR0VfTUlOX0hFSUdIVCAtIDAuMjtcblx0fVxufSJdfQ==