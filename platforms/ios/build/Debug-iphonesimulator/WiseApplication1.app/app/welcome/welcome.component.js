"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var page_1 = require("ui/page");
var grid_layout_1 = require("ui/layouts/grid-layout");
var animation_1 = require("ui/animation");
var platform_1 = require("platform");
var app = require("application");
var builder = require("ui/builder");
var welcome_slides_service_1 = require("./welcome-slides.service");
var WelcomeComponent = /** @class */ (function () {
    function WelcomeComponent(page, nav, slidesService) {
        this.page = page;
        this.nav = nav;
        this.slidesService = slidesService;
        this.slidesPath = 'pages/welcome/slides';
        this.slideFiles = ['slide1.xml', 'slide2.xml', 'slide3.xml'];
        this.currentSlideNum = 0;
        this.slideCount = 3;
        this.screenWidth = platform_1.screen.mainScreen.widthDIPs;
        // Span the background under status bar on Android
        if (platform_1.isAndroid && platform_1.device.sdkVersion >= '21') {
            var View = android.view.View;
            var window = app.android.startActivity.getWindow();
            window.setStatusBarColor(0x000000);
            var decorView = window.getDecorView();
            decorView.setSystemUiVisibility(View.SYSTEM_UI_FLAG_LAYOUT_STABLE
                | View.SYSTEM_UI_FLAG_LAYOUT_HIDE_NAVIGATION
                | View.SYSTEM_UI_FLAG_LAYOUT_FULLSCREEN
                | View.SYSTEM_UI_FLAG_IMMERSIVE_STICKY);
        }
    }
    WelcomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.page.actionBarHidden = true;
        this.page.cssClasses.add("welcome-page-background");
        this.page.backgroundSpanUnderStatusBar = true;
        this.slideView = this.slideElement.nativeElement;
        this.loadSlides(this.slidesService.getSlides()).then(function (slides) {
            var row = new grid_layout_1.ItemSpec(1, grid_layout_1.GridUnitType.STAR);
            var gridLayout = new grid_layout_1.GridLayout();
            slides.forEach(function (element, i) {
                grid_layout_1.GridLayout.setColumn(element, 0);
                if (i > 0)
                    element.opacity = 0;
                gridLayout.addChild(element);
            });
            gridLayout.addRow(row);
            _this.slideView.content = (_this.slidesView = gridLayout);
        });
    };
    WelcomeComponent.prototype.loadSlides = function (slides) {
        return new Promise(function (resolve, reject) {
            var slideViews = [];
            slides.forEach(function (slide, i) {
                slideViews.push(builder.parse(slide));
            });
            resolve(slideViews);
        });
    };
    WelcomeComponent.prototype.skipIntro = function () {
        // this.nav.navigate(["/home"], { clearHistory: true });
        this.nav.navigate(["/dashboard"]);
    };
    WelcomeComponent.prototype.onSwipe = function (args) {
        var prevSlideNum = this.currentSlideNum;
        var count = this.slideCount;
        if (args.direction == 2) {
            this.currentSlideNum = (this.currentSlideNum + 1) % count;
        }
        else if (args.direction == 1) {
            this.currentSlideNum = (this.currentSlideNum - 1 + count) % count;
        }
        else {
            // We are interested in left and right directions
            return;
        }
        var currSlide = this.slidesView.getChildAt(prevSlideNum);
        var nextSlide = this.slidesView.getChildAt(this.currentSlideNum);
        this.animate(currSlide, nextSlide, args.direction);
    };
    WelcomeComponent.prototype.animate = function (currSlide, nextSlide, direction) {
        nextSlide.translateX = (direction == 2 ? this.screenWidth : -this.screenWidth);
        nextSlide.opacity = 1;
        var definitions = new Array();
        var defn1 = {
            target: currSlide,
            translate: { x: (direction == 2 ? -this.screenWidth : this.screenWidth), y: 0 },
            duration: 10
        };
        definitions.push(defn1);
        var defn2 = {
            target: nextSlide,
            translate: { x: 0, y: 0 },
            duration: 10
        };
        definitions.push(defn2);
        var animationSet = new animation_1.Animation(definitions);
        animationSet.play()
            .then(function () {
            // console.log("Animation finished");
        })
            .catch(function (e) {
            console.log(e.message);
        });
    };
    WelcomeComponent.prototype.itemSelected = function (item) {
        console.log(item);
    };
    WelcomeComponent.prototype.getSliderItemClass = function (item) {
        if (item == this.currentSlideNum)
            return "caro-item-dot caro-item-dot-selected";
        return "caro-item-dot";
    };
    __decorate([
        core_1.ViewChild('slideContent'),
        __metadata("design:type", core_1.ElementRef)
    ], WelcomeComponent.prototype, "slideElement", void 0);
    WelcomeComponent = __decorate([
        core_1.Component({
            selector: "welcome",
            moduleId: module.id,
            templateUrl: "./welcome.component.html"
        }),
        __metadata("design:paramtypes", [page_1.Page,
            router_1.RouterExtensions,
            welcome_slides_service_1.WelcomeSlidesService])
    ], WelcomeComponent);
    return WelcomeComponent;
}());
exports.WelcomeComponent = WelcomeComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2VsY29tZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ3ZWxjb21lLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUF5RTtBQUN6RSxzREFBK0Q7QUFFL0QsZ0NBQTRDO0FBRTVDLHNEQUE0RTtBQUM1RSwwQ0FBOEQ7QUFDOUQscUNBQXFEO0FBRXJELGlDQUFtQztBQUVuQyxvQ0FBc0M7QUFFdEMsbUVBQWdFO0FBU2hFO0lBYUksMEJBQ1ksSUFBVSxFQUNWLEdBQXFCLEVBQ3JCLGFBQW1DO1FBRm5DLFNBQUksR0FBSixJQUFJLENBQU07UUFDVixRQUFHLEdBQUgsR0FBRyxDQUFrQjtRQUNyQixrQkFBYSxHQUFiLGFBQWEsQ0FBc0I7UUFmdkMsZUFBVSxHQUFHLHNCQUFzQixDQUFDO1FBQ3BDLGVBQVUsR0FBRyxDQUFDLFlBQVksRUFBRSxZQUFZLEVBQUUsWUFBWSxDQUFDLENBQUM7UUFFeEQsb0JBQWUsR0FBVyxDQUFDLENBQUM7UUFDNUIsZUFBVSxHQUFHLENBQUMsQ0FBQztRQWFuQixJQUFJLENBQUMsV0FBVyxHQUFHLGlCQUFNLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQztRQUUvQyxrREFBa0Q7UUFDbEQsSUFBSSxvQkFBUyxJQUFJLGlCQUFNLENBQUMsVUFBVSxJQUFJLElBQUksRUFBRTtZQUN4QyxJQUFJLElBQUksR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztZQUM3QixJQUFJLE1BQU0sR0FBRyxHQUFHLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxTQUFTLEVBQUUsQ0FBQztZQUNuRCxNQUFNLENBQUMsaUJBQWlCLENBQUMsUUFBUSxDQUFDLENBQUM7WUFFbkMsSUFBSSxTQUFTLEdBQUcsTUFBTSxDQUFDLFlBQVksRUFBRSxDQUFDO1lBQ3RDLFNBQVMsQ0FBQyxxQkFBcUIsQ0FDM0IsSUFBSSxDQUFDLDRCQUE0QjtrQkFDL0IsSUFBSSxDQUFDLHFDQUFxQztrQkFD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Q0FBQzthQUNELEtBQUssQ0FBQyxVQUFDLENBQUM7WUFDTCxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUMzQixDQUFDLENBQUMsQ0FBQztJQUNYLENBQUM7SUFFRCx1Q0FBWSxHQUFaLFVBQWEsSUFBWTtRQUVyQixPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFBO0lBQ3JCLENBQUM7SUFFRCw2Q0FBa0IsR0FBbEIsVUFBbUIsSUFBWTtRQUMzQixJQUFJLElBQUksSUFBSSxJQUFJLENBQUMsZUFBZTtZQUM1QixPQUFPLHNDQUFzQyxDQUFDO1FBRWxELE9BQU8sZUFBZSxDQUFDO0lBQzNCLENBQUM7SUF0SDBCO1FBQTFCLGdCQUFTLENBQUMsY0FBYyxDQUFDO2tDQUFlLGlCQUFVOzBEQUFDO0lBVjNDLGdCQUFnQjtRQUw1QixnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLFNBQVM7WUFDbkIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFdBQVcsRUFBRSwwQkFBMEI7U0FDMUMsQ0FBQzt5Q0Flb0IsV0FBSTtZQUNMLHlCQUFnQjtZQUNOLDZDQUFvQjtPQWhCdEMsZ0JBQWdCLENBaUk1QjtJQUFELHVCQUFDO0NBQUEsQUFqSUQsSUFpSUM7QUFqSVksNENBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIFZpZXdDaGlsZCwgRWxlbWVudFJlZiB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xuXG5pbXBvcnQgeyBQYWdlLCBDb250ZW50VmlldyB9IGZyb20gXCJ1aS9wYWdlXCI7XG5pbXBvcnQgeyBTd2lwZUdlc3R1cmVFdmVudERhdGEgfSBmcm9tIFwidWkvZ2VzdHVyZXMvZ2VzdHVyZXNcIjtcbmltcG9ydCB7IEdyaWRMYXlvdXQsIEdyaWRVbml0VHlwZSwgSXRlbVNwZWMgfSBmcm9tIFwidWkvbGF5b3V0cy9ncmlkLWxheW91dFwiO1xuaW1wb3J0IHsgQW5pbWF0aW9uRGVmaW5pdGlvbiwgQW5pbWF0aW9uIH0gZnJvbSAndWkvYW5pbWF0aW9uJztcbmltcG9ydCB7IHNjcmVlbiwgaXNBbmRyb2lkLCBkZXZpY2UgfSBmcm9tIFwicGxhdGZvcm1cIjtcblxuaW1wb3J0ICogYXMgYXBwIGZyb20gXCJhcHBsaWNhdGlvblwiO1xuaW1wb3J0ICogYXMgZnMgZnJvbSBcImZpbGUtc3lzdGVtXCI7XG5pbXBvcnQgKiBhcyBidWlsZGVyIGZyb20gXCJ1aS9idWlsZGVyXCI7XG5cbmltcG9ydCB7IFdlbGNvbWVTbGlkZXNTZXJ2aWNlIH0gZnJvbSBcIi4vd2VsY29tZS1zbGlkZXMuc2VydmljZVwiO1xuXG5kZWNsYXJlIHZhciBhbmRyb2lkOiBhbnk7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcIndlbGNvbWVcIixcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHRlbXBsYXRlVXJsOiBcIi4vd2VsY29tZS5jb21wb25lbnQuaHRtbFwiXG59KVxuZXhwb3J0IGNsYXNzIFdlbGNvbWVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICAgIHByaXZhdGUgc2xpZGVzUGF0aCA9ICdwYWdlcy93ZWxjb21lL3NsaWRlcyc7XG4gICAgcHJpdmF0ZSBzbGlkZUZpbGVzID0gWydzbGlkZTEueG1sJywgJ3NsaWRlMi54bWwnLCAnc2xpZGUzLnhtbCddO1xuXG4gICAgcHJpdmF0ZSBjdXJyZW50U2xpZGVOdW06IG51bWJlciA9IDA7XG4gICAgcHJpdmF0ZSBzbGlkZUNvdW50ID0gMztcblxuICAgIHByaXZhdGUgc2NyZWVuV2lkdGg7XG4gICAgcHJpdmF0ZSBzbGlkZXNWaWV3OiBHcmlkTGF5b3V0O1xuXG4gICAgQFZpZXdDaGlsZCgnc2xpZGVDb250ZW50Jykgc2xpZGVFbGVtZW50OiBFbGVtZW50UmVmO1xuICAgIHByaXZhdGUgc2xpZGVWaWV3OiBDb250ZW50VmlldztcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcml2YXRlIHBhZ2U6IFBhZ2UsXG4gICAgICAgIHByaXZhdGUgbmF2OiBSb3V0ZXJFeHRlbnNpb25zLFxuICAgICAgICBwcml2YXRlIHNsaWRlc1NlcnZpY2U6IFdlbGNvbWVTbGlkZXNTZXJ2aWNlXG4gICAgKSB7XG4gICAgICAgIHRoaXMuc2NyZWVuV2lkdGggPSBzY3JlZW4ubWFpblNjcmVlbi53aWR0aERJUHM7XG5cbiAgICAgICAgLy8gU3BhbiB0aGUgYmFja2dyb3VuZCB1bmRlciBzdGF0dXMgYmFyIG9uIEFuZHJvaWRcbiAgICAgICAgaWYgKGlzQW5kcm9pZCAmJiBkZXZpY2Uuc2RrVmVyc2lvbiA+PSAnMjEnKSB7XG4gICAgICAgICAgICB2YXIgVmlldyA9IGFuZHJvaWQudmlldy5WaWV3O1xuICAgICAgICAgICAgdmFyIHdpbmRvdyA9IGFwcC5hbmRyb2lkLnN0YXJ0QWN0aXZpdHkuZ2V0V2luZG93KCk7XG4gICAgICAgICAgICB3aW5kb3cuc2V0U3RhdHVzQmFyQ29sb3IoMHgwMDAwMDApO1xuXG4gICAgICAgICAgICB2YXIgZGVjb3JWaWV3ID0gd2luZG93LmdldERlY29yVmlldygpO1xuICAgICAgICAgICAgZGVjb3JWaWV3LnNldFN5c3RlbVVpVmlzaWJpbGl0eShcbiAgICAgICAgICAgICAgICBWaWV3LlNZU1RFTV9VSV9GTEFHX0xBWU9VVF9TVEFCTEVcbiAgICAgICAgICAgICAgICB8IFZpZXcuU1lTVEVNX1VJX0ZMQUdfTEFZT1VUX0hJREVfTkFWSUdBVElPTlxuICAgICAgICAgICAgICAgIHwgVmlldy5TWVNURU1fVUlfRkxBR19MQVlPVVRfRlVMTFNDUkVFTlxuICAgICAgICAgICAgICAgIHwgVmlldy5TWVNURU1fVUlfRkxBR19JTU1FUlNJVkVfU1RJQ0tZKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG5nT25Jbml0KCkge1xuICAgICAgICB0aGlzLnBhZ2UuYWN0aW9uQmFySGlkZGVuID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5wYWdlLmNzc0NsYXNzZXMuYWRkKFwid2VsY29tZS1wYWdlLWJhY2tncm91bmRcIik7XG4gICAgICAgIHRoaXMucGFnZS5iYWNrZ3JvdW5kU3BhblVuZGVyU3RhdHVzQmFyID0gdHJ1ZTtcblxuICAgICAgICB0aGlzLnNsaWRlVmlldyA9IHRoaXMuc2xpZGVFbGVtZW50Lm5hdGl2ZUVsZW1lbnQ7XG5cbiAgICAgICAgdGhpcy5sb2FkU2xpZGVzKHRoaXMuc2xpZGVzU2VydmljZS5nZXRTbGlkZXMoKSkudGhlbigoc2xpZGVzOiBhbnkpID0+IHtcbiAgICAgICAgICAgIHZhciByb3cgPSBuZXcgSXRlbVNwZWMoMSwgR3JpZFVuaXRUeXBlLlNUQVIpO1xuICAgICAgICAgICAgbGV0IGdyaWRMYXlvdXQgPSBuZXcgR3JpZExheW91dCgpO1xuICAgICAgICAgICAgc2xpZGVzLmZvckVhY2goKGVsZW1lbnQsIGkpID0+IHtcbiAgICAgICAgICAgICAgICBHcmlkTGF5b3V0LnNldENvbHVtbihlbGVtZW50LCAwKTtcbiAgICAgICAgICAgICAgICBpZiAoaSA+IDApXG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnQub3BhY2l0eSA9IDBcbiAgICAgICAgICAgICAgICBncmlkTGF5b3V0LmFkZENoaWxkKGVsZW1lbnQpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBncmlkTGF5b3V0LmFkZFJvdyhyb3cpO1xuICAgICAgICAgICAgdGhpcy5zbGlkZVZpZXcuY29udGVudCA9ICh0aGlzLnNsaWRlc1ZpZXcgPSBncmlkTGF5b3V0KTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBsb2FkU2xpZGVzKHNsaWRlcykge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICAgICAgY29uc3Qgc2xpZGVWaWV3cyA9IFtdXG4gICAgICAgICAgICBzbGlkZXMuZm9yRWFjaCgoc2xpZGUsIGkpID0+IHtcbiAgICAgICAgICAgICAgICBzbGlkZVZpZXdzLnB1c2goYnVpbGRlci5wYXJzZShzbGlkZSkpXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgcmVzb2x2ZShzbGlkZVZpZXdzKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgc2tpcEludHJvKCkge1xuICAgICAgICAvLyB0aGlzLm5hdi5uYXZpZ2F0ZShbXCIvaG9tZVwiXSwgeyBjbGVhckhpc3Rvcnk6IHRydWUgfSk7XG4gICAgICAgIHRoaXMubmF2Lm5hdmlnYXRlKFtcIi9kYXNoYm9hcmRcIl0pO1xuICAgIH1cblxuICAgIG9uU3dpcGUoYXJnczogU3dpcGVHZXN0dXJlRXZlbnREYXRhKSB7XG4gICAgICAgIGxldCBwcmV2U2xpZGVOdW0gPSB0aGlzLmN1cnJlbnRTbGlkZU51bTtcbiAgICAgICAgbGV0IGNvdW50ID0gdGhpcy5zbGlkZUNvdW50O1xuICAgICAgICBpZiAoYXJncy5kaXJlY3Rpb24gPT0gMikge1xuICAgICAgICAgICAgdGhpcy5jdXJyZW50U2xpZGVOdW0gPSAodGhpcy5jdXJyZW50U2xpZGVOdW0gKyAxKSAlIGNvdW50O1xuICAgICAgICB9IGVsc2UgaWYgKGFyZ3MuZGlyZWN0aW9uID09IDEpIHtcbiAgICAgICAgICAgIHRoaXMuY3VycmVudFNsaWRlTnVtID0gKHRoaXMuY3VycmVudFNsaWRlTnVtIC0gMSArIGNvdW50KSAlIGNvdW50O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gV2UgYXJlIGludGVyZXN0ZWQgaW4gbGVmdCBhbmQgcmlnaHQgZGlyZWN0aW9uc1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgY3VyclNsaWRlID0gdGhpcy5zbGlkZXNWaWV3LmdldENoaWxkQXQocHJldlNsaWRlTnVtKTtcbiAgICAgICAgY29uc3QgbmV4dFNsaWRlID0gdGhpcy5zbGlkZXNWaWV3LmdldENoaWxkQXQodGhpcy5jdXJyZW50U2xpZGVOdW0pO1xuXG4gICAgICAgIHRoaXMuYW5pbWF0ZShjdXJyU2xpZGUsIG5leHRTbGlkZSwgYXJncy5kaXJlY3Rpb24pO1xuICAgIH1cblxuICAgIGFuaW1hdGUoY3VyclNsaWRlLCBuZXh0U2xpZGUsIGRpcmVjdGlvbikge1xuICAgICAgICBuZXh0U2xpZGUudHJhbnNsYXRlWCA9IChkaXJlY3Rpb24gPT0gMiA/IHRoaXMuc2NyZWVuV2lkdGggOiAtdGhpcy5zY3JlZW5XaWR0aCk7XG4gICAgICAgIG5leHRTbGlkZS5vcGFjaXR5ID0gMTtcbiAgICAgICAgdmFyIGRlZmluaXRpb25zID0gbmV3IEFycmF5PEFuaW1hdGlvbkRlZmluaXRpb24+KCk7XG4gICAgICAgIHZhciBkZWZuMTogQW5pbWF0aW9uRGVmaW5pdGlvbiA9IHtcbiAgICAgICAgICAgIHRhcmdldDogY3VyclNsaWRlLFxuICAgICAgICAgICAgdHJhbnNsYXRlOiB7IHg6IChkaXJlY3Rpb24gPT0gMiA/IC10aGlzLnNjcmVlbldpZHRoIDogdGhpcy5zY3JlZW5XaWR0aCksIHk6IDAgfSxcbiAgICAgICAgICAgIGR1cmF0aW9uOiAxMFxuICAgICAgICB9O1xuICAgICAgICBkZWZpbml0aW9ucy5wdXNoKGRlZm4xKTtcblxuICAgICAgICB2YXIgZGVmbjI6IEFuaW1hdGlvbkRlZmluaXRpb24gPSB7XG4gICAgICAgICAgICB0YXJnZXQ6IG5leHRTbGlkZSxcbiAgICAgICAgICAgIHRyYW5zbGF0ZTogeyB4OiAwLCB5OiAwIH0sXG4gICAgICAgICAgICBkdXJhdGlvbjogMTBcbiAgICAgICAgfTtcbiAgICAgICAgZGVmaW5pdGlvbnMucHVzaChkZWZuMik7XG5cbiAgICAgICAgdmFyIGFuaW1hdGlvblNldCA9IG5ldyBBbmltYXRpb24oZGVmaW5pdGlvbnMpO1xuICAgICAgICBhbmltYXRpb25TZXQucGxheSgpXG4gICAgICAgICAgICAudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJBbmltYXRpb24gZmluaXNoZWRcIik7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmNhdGNoKChlKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZS5tZXNzYWdlKTtcbiAgICAgICAgICAgIH0pO1xuICAgIH1cblxuICAgIGl0ZW1TZWxlY3RlZChpdGVtOiBudW1iZXIpIHtcblxuICAgICAgICBjb25zb2xlLmxvZyhpdGVtKVxuICAgIH1cblxuICAgIGdldFNsaWRlckl0ZW1DbGFzcyhpdGVtOiBudW1iZXIpIHtcbiAgICAgICAgaWYgKGl0ZW0gPT0gdGhpcy5jdXJyZW50U2xpZGVOdW0pXG4gICAgICAgICAgICByZXR1cm4gXCJjYXJvLWl0ZW0tZG90IGNhcm8taXRlbS1kb3Qtc2VsZWN0ZWRcIjtcblxuICAgICAgICByZXR1cm4gXCJjYXJvLWl0ZW0tZG90XCI7XG4gICAgfVxufVxuIl19