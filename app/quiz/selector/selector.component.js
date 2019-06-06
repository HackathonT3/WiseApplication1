"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var page_1 = require("ui/page");
var application_settings_1 = require("tns-core-modules/application-settings");
var fileReader_service_1 = require("../../core/fileReader.service");
var SelectorComponent = /** @class */ (function () {
    function SelectorComponent(routerExtensions, page, fileReader) {
        this.routerExtensions = routerExtensions;
        this.page = page;
        this.fileReader = fileReader;
        this.categories = [];
        this.page.actionBarHidden = true;
    }
    SelectorComponent.prototype.ngOnInit = function () {
        this.getCategories();
    };
    SelectorComponent.prototype.getCategories = function () {
        var _this = this;
        this.fileReader.readJSON('/core/questions.json').then(function (res) {
            _this.categories = res["categories"];
            _this.initializeScore();
        }, function (err) {
            console.log('Error reading json: ' + JSON.stringify(err));
        });
    };
    SelectorComponent.prototype.initializeScore = function () {
        for (var i = 0; i < this.categories.length; i++) {
            this.categories[i].lastScore = application_settings_1.getNumber(this.categories[i].title) || '0';
        }
    };
    SelectorComponent.prototype.navigateToQuiz = function (index) {
        var navigationExtras = {
            queryParams: {
                'category': this.categories[index].title,
                'questions': JSON.stringify(this.categories[index].questions)
            }
        };
        this.routerExtensions.navigate(["/quiz"], navigationExtras);
    };
    SelectorComponent = __decorate([
        core_1.Component({
            selector: "selector",
            moduleId: module.id,
            templateUrl: "./selector.component.html",
            styleUrls: ['./selector.component.css']
        }),
        __metadata("design:paramtypes", [router_1.RouterExtensions,
            page_1.Page,
            fileReader_service_1.FileReaderService])
    ], SelectorComponent);
    return SelectorComponent;
}());
exports.SelectorComponent = SelectorComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0b3IuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsic2VsZWN0b3IuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWtEO0FBQ2xELHNEQUErRDtBQUMvRCxnQ0FBK0I7QUFDL0IsOEVBQTZFO0FBQzdFLG9FQUFrRTtBQVFsRTtJQUlJLDJCQUNZLGdCQUFrQyxFQUNsQyxJQUFVLEVBQ1YsVUFBNkI7UUFGN0IscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQUNsQyxTQUFJLEdBQUosSUFBSSxDQUFNO1FBQ1YsZUFBVSxHQUFWLFVBQVUsQ0FBbUI7UUFMekMsZUFBVSxHQUFVLEVBQUUsQ0FBQztRQU9uQixJQUFJLENBQUMsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUM7SUFDckMsQ0FBQztJQUVELG9DQUFRLEdBQVI7UUFDSSxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7SUFDekIsQ0FBQztJQUVELHlDQUFhLEdBQWI7UUFBQSxpQkFVQztRQVRHLElBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLHNCQUFzQixDQUFDLENBQUMsSUFBSSxDQUNqRCxVQUFBLEdBQUc7WUFDQyxLQUFJLENBQUMsVUFBVSxHQUFHLEdBQUcsQ0FBQyxZQUFZLENBQUMsQ0FBQztZQUNwQyxLQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7UUFDM0IsQ0FBQyxFQUNELFVBQUEsR0FBRztZQUNDLE9BQU8sQ0FBQyxHQUFHLENBQUMsc0JBQXNCLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQzlELENBQUMsQ0FDSixDQUFBO0lBQ0wsQ0FBQztJQUVELDJDQUFlLEdBQWY7UUFDSSxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDN0MsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLEdBQUcsZ0NBQVMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxJQUFJLEdBQUcsQ0FBQztTQUM3RTtJQUNMLENBQUM7SUFFRCwwQ0FBYyxHQUFkLFVBQWUsS0FBYTtRQUN4QixJQUFJLGdCQUFnQixHQUFHO1lBQ25CLFdBQVcsRUFBRTtnQkFDVCxVQUFVLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxLQUFLO2dCQUN4QyxXQUFXLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDLFNBQVMsQ0FBQzthQUNoRTtTQUNKLENBQUM7UUFDRixJQUFJLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLENBQUMsT0FBTyxDQUFDLEVBQUUsZ0JBQWdCLENBQUMsQ0FBQztJQUNoRSxDQUFDO0lBMUNRLGlCQUFpQjtRQU43QixnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLFVBQVU7WUFDcEIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFdBQVcsRUFBRSwyQkFBMkI7WUFDeEMsU0FBUyxFQUFFLENBQUMsMEJBQTBCLENBQUM7U0FDMUMsQ0FBQzt5Q0FNZ0MseUJBQWdCO1lBQzVCLFdBQUk7WUFDRSxzQ0FBaUI7T0FQaEMsaUJBQWlCLENBMkM3QjtJQUFELHdCQUFDO0NBQUEsQUEzQ0QsSUEyQ0M7QUEzQ1ksOENBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgUm91dGVyRXh0ZW5zaW9ucyB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7IFBhZ2UgfSBmcm9tIFwidWkvcGFnZVwiO1xuaW1wb3J0IHsgZ2V0TnVtYmVyLCBnZXRTdHJpbmcgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy9hcHBsaWNhdGlvbi1zZXR0aW5nc1wiO1xuaW1wb3J0IHsgRmlsZVJlYWRlclNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vY29yZS9maWxlUmVhZGVyLnNlcnZpY2VcIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwic2VsZWN0b3JcIixcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHRlbXBsYXRlVXJsOiBcIi4vc2VsZWN0b3IuY29tcG9uZW50Lmh0bWxcIixcbiAgICBzdHlsZVVybHM6IFsnLi9zZWxlY3Rvci5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgU2VsZWN0b3JDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gICAgY2F0ZWdvcmllczogYW55W10gPSBbXTtcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcml2YXRlIHJvdXRlckV4dGVuc2lvbnM6IFJvdXRlckV4dGVuc2lvbnMsXG4gICAgICAgIHByaXZhdGUgcGFnZTogUGFnZSxcbiAgICAgICAgcHJpdmF0ZSBmaWxlUmVhZGVyOiBGaWxlUmVhZGVyU2VydmljZVxuICAgICkge1xuICAgICAgICB0aGlzLnBhZ2UuYWN0aW9uQmFySGlkZGVuID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5nZXRDYXRlZ29yaWVzKCk7XG4gICAgfVxuXG4gICAgZ2V0Q2F0ZWdvcmllcygpIHtcbiAgICAgICAgdGhpcy5maWxlUmVhZGVyLnJlYWRKU09OKCcvY29yZS9xdWVzdGlvbnMuanNvbicpLnRoZW4oXG4gICAgICAgICAgICByZXMgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuY2F0ZWdvcmllcyA9IHJlc1tcImNhdGVnb3JpZXNcIl07XG4gICAgICAgICAgICAgICAgdGhpcy5pbml0aWFsaXplU2NvcmUoKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBlcnIgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdFcnJvciByZWFkaW5nIGpzb246ICcgKyBKU09OLnN0cmluZ2lmeShlcnIpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgKVxuICAgIH1cblxuICAgIGluaXRpYWxpemVTY29yZSgpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmNhdGVnb3JpZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHRoaXMuY2F0ZWdvcmllc1tpXS5sYXN0U2NvcmUgPSBnZXROdW1iZXIodGhpcy5jYXRlZ29yaWVzW2ldLnRpdGxlKSB8fCAnMCc7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBuYXZpZ2F0ZVRvUXVpeihpbmRleDogbnVtYmVyKSB7XG4gICAgICAgIGxldCBuYXZpZ2F0aW9uRXh0cmFzID0ge1xuICAgICAgICAgICAgcXVlcnlQYXJhbXM6IHtcbiAgICAgICAgICAgICAgICAnY2F0ZWdvcnknOiB0aGlzLmNhdGVnb3JpZXNbaW5kZXhdLnRpdGxlLFxuICAgICAgICAgICAgICAgICdxdWVzdGlvbnMnOiBKU09OLnN0cmluZ2lmeSh0aGlzLmNhdGVnb3JpZXNbaW5kZXhdLnF1ZXN0aW9ucylcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5yb3V0ZXJFeHRlbnNpb25zLm5hdmlnYXRlKFtcIi9xdWl6XCJdLCBuYXZpZ2F0aW9uRXh0cmFzKTtcbiAgICB9XG59XG4iXX0=