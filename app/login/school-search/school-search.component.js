"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var observable_array_1 = require("tns-core-modules/data/observable-array/observable-array");
var nativescript_angular_1 = require("nativescript-angular");
var page_1 = require("tns-core-modules/ui/page/page");
var router_1 = require("@angular/router");
var DataItem = /** @class */ (function () {
    function DataItem(name) {
        this.name = name;
    }
    return DataItem;
}());
var SchoolSearchComponent = /** @class */ (function () {
    function SchoolSearchComponent(_params, _page, router, _activeRoute) {
        this._params = _params;
        this._page = _page;
        this.router = router;
        this._activeRoute = _activeRoute;
        this._searchedText = '';
        this.arraySchools = [];
        this.schools = new observable_array_1.ObservableArray();
        this.isFrom = false;
        this.arraySchools.push(new DataItem("Rotterdam The Hague Airport"));
        this.arraySchools.push(new DataItem("Chiclayo Capitán FAP José Quiñones G. Airport"));
        this.arraySchools.push(new DataItem("Lima Jorge Chávez International Airport"));
        this.arraySchools.push(new DataItem("Arequipa Rodríguez Ballón Airport"));
        this.arraySchools.push(new DataItem("Cuzco Alejandro Velazco Astete Airport"));
        this.arraySchools.push(new DataItem("Atlanta Hartsfield-Jackson International Airport"));
        this.arraySchools.push(new DataItem("New York John F. Kennedy International Airport"));
        this.arraySchools.push(new DataItem("New York LaGuardia Airport"));
        this.arraySchools.push(new DataItem("San Diego International Airport"));
        this.schools = new observable_array_1.ObservableArray(this.arraySchools);
        this.isFrom = this._params.context.isFrom;
    }
    SchoolSearchComponent.prototype.ngOnInit = function () {
    };
    SchoolSearchComponent.prototype.onClose = function () {
        this._params.closeCallback("return value");
    };
    SchoolSearchComponent.prototype.onSelectItem = function (args) {
        var school = (this._searchedText !== "") ? this.schools.getItem(args.index) : this.arraySchools[args.index];
        this._params.closeCallback({
            isFrom: this.isFrom,
            school: school
        });
    };
    SchoolSearchComponent.prototype.onSubmit = function (args) {
        var searchBar = args.object;
        var searchValue = searchBar.text.toLowerCase();
        this._searchedText = searchValue;
        this.schools = new observable_array_1.ObservableArray();
        if (searchValue !== "") {
            for (var i = 0; i < this.arraySchools.length; i++) {
                if (this.arraySchools[i].name.toLowerCase().indexOf(searchValue) !== -1) {
                    this.schools.push(this.arraySchools[i]);
                }
            }
        }
    };
    SchoolSearchComponent.prototype.searchBarLoaded = function (args) {
        var searchBar = args.object;
        searchBar.dismissSoftInput();
        if (page_1.isAndroid) {
            searchBar.android.clearFocus();
        }
        searchBar.text = "";
    };
    SchoolSearchComponent.prototype.onClear = function (args) {
        var _this = this;
        var searchBar = args.object;
        searchBar.text = "";
        searchBar.hint = "Search for a school";
        this.schools = new observable_array_1.ObservableArray();
        this.arraySchools.forEach(function (item) {
            _this.schools.push(item);
        });
    };
    SchoolSearchComponent.prototype.onTextChanged = function (args) {
        this.onSubmit(args);
    };
    SchoolSearchComponent = __decorate([
        core_1.Component({
            selector: 'ns-school-search',
            templateUrl: './school-search.component.html',
            styleUrls: ['./school-search.component.css'],
            moduleId: module.id,
        }),
        __metadata("design:paramtypes", [nativescript_angular_1.ModalDialogParams, page_1.Page, nativescript_angular_1.RouterExtensions, router_1.ActivatedRoute])
    ], SchoolSearchComponent);
    return SchoolSearchComponent;
}());
exports.SchoolSearchComponent = SchoolSearchComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2Nob29sLXNlYXJjaC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJzY2hvb2wtc2VhcmNoLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFrRDtBQUNsRCw0RkFBMEY7QUFDMUYsNkRBQTJFO0FBQzNFLHNEQUFnRTtBQUNoRSwwQ0FBaUQ7QUFFakQ7SUFDQyxrQkFBbUIsSUFBWTtRQUFaLFNBQUksR0FBSixJQUFJLENBQVE7SUFDL0IsQ0FBQztJQUNGLGVBQUM7QUFBRCxDQUFDLEFBSEQsSUFHQztBQVFEO0lBT0MsK0JBQW9CLE9BQTBCLEVBQVUsS0FBVyxFQUFVLE1BQXdCLEVBQVUsWUFBNEI7UUFBdkgsWUFBTyxHQUFQLE9BQU8sQ0FBbUI7UUFBVSxVQUFLLEdBQUwsS0FBSyxDQUFNO1FBQVUsV0FBTSxHQUFOLE1BQU0sQ0FBa0I7UUFBVSxpQkFBWSxHQUFaLFlBQVksQ0FBZ0I7UUFMbkksa0JBQWEsR0FBVyxFQUFFLENBQUM7UUFDM0IsaUJBQVksR0FBb0IsRUFBRSxDQUFDO1FBQ3BDLFlBQU8sR0FBOEIsSUFBSSxrQ0FBZSxFQUFZLENBQUM7UUFDckUsV0FBTSxHQUFZLEtBQUssQ0FBQztRQUc5QixJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxJQUFJLFFBQVEsQ0FBQyw2QkFBNkIsQ0FBQyxDQUFDLENBQUM7UUFDcEUsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsSUFBSSxRQUFRLENBQUMsK0NBQStDLENBQUMsQ0FBQyxDQUFDO1FBQ3RGLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLElBQUksUUFBUSxDQUFDLHlDQUF5QyxDQUFDLENBQUMsQ0FBQztRQUNoRixJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxJQUFJLFFBQVEsQ0FBQyxtQ0FBbUMsQ0FBQyxDQUFDLENBQUM7UUFDMUUsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsSUFBSSxRQUFR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UUFFdkMsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLGtDQUFlLEVBQVksQ0FBQztRQUMvQyxJQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxVQUFBLElBQUk7WUFDN0IsS0FBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDekIsQ0FBQyxDQUFDLENBQUM7SUFDSixDQUFDO0lBRU0sNkNBQWEsR0FBcEIsVUFBcUIsSUFBSTtRQUN4QixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3JCLENBQUM7SUE3RVcscUJBQXFCO1FBTmpDLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsa0JBQWtCO1lBQzVCLFdBQVcsRUFBRSxnQ0FBZ0M7WUFDN0MsU0FBUyxFQUFFLENBQUMsK0JBQStCLENBQUM7WUFDNUMsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1NBQ3BCLENBQUM7eUNBUTRCLHdDQUFpQixFQUFpQixXQUFJLEVBQWtCLHVDQUFnQixFQUF3Qix1QkFBYztPQVAvSCxxQkFBcUIsQ0E4RWpDO0lBQUQsNEJBQUM7Q0FBQSxBQTlFRCxJQThFQztBQTlFWSxzREFBcUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZUFycmF5IH0gZnJvbSAndG5zLWNvcmUtbW9kdWxlcy9kYXRhL29ic2VydmFibGUtYXJyYXkvb2JzZXJ2YWJsZS1hcnJheSc7XG5pbXBvcnQgeyBNb2RhbERpYWxvZ1BhcmFtcywgUm91dGVyRXh0ZW5zaW9ucyB9IGZyb20gJ25hdGl2ZXNjcmlwdC1hbmd1bGFyJztcbmltcG9ydCB7IFBhZ2UsIGlzQW5kcm9pZCB9IGZyb20gJ3Rucy1jb3JlLW1vZHVsZXMvdWkvcGFnZS9wYWdlJztcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IFNlYXJjaEJhciB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL3NlYXJjaC1iYXJcIjtcbmNsYXNzIERhdGFJdGVtIHtcblx0Y29uc3RydWN0b3IocHVibGljIG5hbWU6IHN0cmluZykge1xuXHR9XG59XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25zLXNjaG9vbC1zZWFyY2gnLFxuICB0ZW1wbGF0ZVVybDogJy4vc2Nob29sLXNlYXJjaC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3NjaG9vbC1zZWFyY2guY29tcG9uZW50LmNzcyddLFxuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxufSlcbmV4cG9ydCBjbGFzcyBTY2hvb2xTZWFyY2hDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG5cdHByaXZhdGUgX3NlYXJjaGVkVGV4dDogc3RyaW5nID0gJyc7XG5cdHByaXZhdGUgYXJyYXlTY2hvb2xzOiBBcnJheTxEYXRhSXRlbT4gPSBbXTtcblx0cHVibGljIHNjaG9vbHM6IE9ic2VydmFibGVBcnJheTxEYXRhSXRlbT4gPSBuZXcgT2JzZXJ2YWJsZUFycmF5PERhdGFJdGVtPigpO1xuXHRwdWJsaWMgaXNGcm9tOiBib29sZWFuID0gZmFsc2U7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSBfcGFyYW1zOiBNb2RhbERpYWxvZ1BhcmFtcywgcHJpdmF0ZSBfcGFnZTogUGFnZSwgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlckV4dGVuc2lvbnMsIHByaXZhdGUgX2FjdGl2ZVJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSkge1xuXHRcdHRoaXMuYXJyYXlTY2hvb2xzLnB1c2gobmV3IERhdGFJdGVtKFwiUm90dGVyZGFtIFRoZSBIYWd1ZSBBaXJwb3J0XCIpKTtcblx0XHR0aGlzLmFycmF5U2Nob29scy5wdXNoKG5ldyBEYXRhSXRlbShcIkNoaWNsYXlvIENhcGl0w6FuIEZBUCBKb3PDqSBRdWnDsW9uZXMgRy4gQWlycG9ydFwiKSk7XG5cdFx0dGhpcy5hcnJheVNjaG9vbHMucHVzaChuZXcgRGF0YUl0ZW0oXCJMaW1hIEpvcmdlIENow6F2ZXogSW50ZXJuYXRpb25hbCBBaXJwb3J0XCIpKTtcblx0XHR0aGlzLmFycmF5U2Nob29scy5wdXNoKG5ldyBEYXRhSXRlbShcIkFyZXF1aXBhIFJvZHLDrWd1ZXogQmFsbMOzbiBBaXJwb3J0XCIpKTtcblx0XHR0aGlzLmFycmF5U2Nob29scy5wdXNoKG5ldyBEYXRhSXRlbShcIkN1emNvIEFsZWphbmRybyBWZWxhemNvIEFzdGV0ZSBBaXJwb3J0XCIpKTtcblx0XHR0aGlzLmFycmF5U2Nob29scy5wdXNoKG5ldyBEYXRhSXRlbShcIkF0bGFudGEgSGFydHNmaWVsZC1KYWNrc29uIEludGVybmF0aW9uYWwgQWlycG9ydFwiKSk7XG5cdFx0dGhpcy5hcnJheVNjaG9vbHMucHVzaChuZXcgRGF0YUl0ZW0oXCJOZXcgWW9yayBKb2huIEYuIEtlbm5lZHkgSW50ZXJuYXRpb25hbCBBaXJwb3J0XCIpKTtcblx0XHR0aGlzLmFycmF5U2Nob29scy5wdXNoKG5ldyBEYXRhSXRlbShcIk5ldyBZb3JrIExhR3VhcmRpYSBBaXJwb3J0XCIpKTtcblx0XHR0aGlzLmFycmF5U2Nob29scy5wdXNoKG5ldyBEYXRhSXRlbShcIlNhbiBEaWVnbyBJbnRlcm5hdGlvbmFsIEFpcnBvcnRcIikpO1xuXG5cdFx0dGhpcy5zY2hvb2xzID0gbmV3IE9ic2VydmFibGVBcnJheTxEYXRhSXRlbT4odGhpcy5hcnJheVNjaG9vbHMpO1xuXG5cdFx0dGhpcy5pc0Zyb20gPSB0aGlzLl9wYXJhbXMuY29udGV4dC5pc0Zyb207XG5cdH1cblxuXHRuZ09uSW5pdCgpIHtcblx0fVxuXG5cdG9uQ2xvc2UoKTogdm9pZCB7XG5cdFx0dGhpcy5fcGFyYW1zLmNsb3NlQ2FsbGJhY2soXCJyZXR1cm4gdmFsdWVcIik7XG5cdH1cblxuXHRvblNlbGVjdEl0ZW0oYXJncykge1xuXHRcdGxldCBzY2hvb2wgPSAodGhpcy5fc2VhcmNoZWRUZXh0ICE9PSBcIlwiKSA/IHRoaXMuc2Nob29scy5nZXRJdGVtKGFyZ3MuaW5kZXgpIDogdGhpcy5hcnJheVNjaG9vbHNbYXJncy5pbmRleF07XG5cdFx0dGhpcy5fcGFyYW1zLmNsb3NlQ2FsbGJhY2soe1xuXHRcdFx0aXNGcm9tOiB0aGlzLmlzRnJvbSxcblx0XHRcdHNjaG9vbDogc2Nob29sXG5cdFx0fSk7XG5cdH1cblxuXHRwdWJsaWMgb25TdWJtaXQoYXJncykge1xuXHRcdGxldCBzZWFyY2hCYXIgPSA8U2VhcmNoQmFyPmFyZ3Mub2JqZWN0O1xuXHRcdGxldCBzZWFyY2hWYWx1ZSA9IHNlYXJjaEJhci50ZXh0LnRvTG93ZXJDYXNlKCk7XG5cdFx0dGhpcy5fc2VhcmNoZWRUZXh0ID0gc2VhcmNoVmFsdWU7XG5cblx0XHR0aGlzLnNjaG9vbHMgPSBuZXcgT2JzZXJ2YWJsZUFycmF5PERhdGFJdGVtPigpO1xuXHRcdGlmIChzZWFyY2hWYWx1ZSAhPT0gXCJcIikge1xuXHRcdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmFycmF5U2Nob29scy5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRpZiAodGhpcy5hcnJheVNjaG9vbHNbaV0ubmFtZS50b0xvd2VyQ2FzZSgpLmluZGV4T2Yoc2VhcmNoVmFsdWUpICE9PSAtMSkge1xuXHRcdFx0XHRcdHRoaXMuc2Nob29scy5wdXNoKHRoaXMuYXJyYXlTY2hvb2xzW2ldKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdHB1YmxpYyBzZWFyY2hCYXJMb2FkZWQoYXJncykge1xuXHRcdGxldCBzZWFyY2hCYXIgPSA8U2VhcmNoQmFyPmFyZ3Mub2JqZWN0O1xuXHRcdHNlYXJjaEJhci5kaXNtaXNzU29mdElucHV0KCk7XG5cblx0XHRpZiAoaXNBbmRyb2lkKSB7XG5cdFx0XHRzZWFyY2hCYXIuYW5kcm9pZC5jbGVhckZvY3VzKCk7XG5cdFx0fVxuXG5cdFx0c2VhcmNoQmFyLnRleHQgPSBcIlwiO1xuXHR9XG5cblx0cHVibGljIG9uQ2xlYXIoYXJncykge1xuXHRcdGxldCBzZWFyY2hCYXIgPSA8U2VhcmNoQmFyPmFyZ3Mub2JqZWN0O1xuXHRcdHNlYXJjaEJhci50ZXh0ID0gXCJcIjtcblx0XHRzZWFyY2hCYXIuaGludCA9IFwiU2VhcmNoIGZvciBhIHNjaG9vbFwiO1xuXG5cdFx0dGhpcy5zY2hvb2xzID0gbmV3IE9ic2VydmFibGVBcnJheTxEYXRhSXRlbT4oKTtcblx0XHR0aGlzLmFycmF5U2Nob29scy5mb3JFYWNoKGl0ZW0gPT4ge1xuXHRcdFx0dGhpcy5zY2hvb2xzLnB1c2goaXRlbSk7XG5cdFx0fSk7XG5cdH1cblxuXHRwdWJsaWMgb25UZXh0Q2hhbmdlZChhcmdzKSB7XG5cdFx0dGhpcy5vblN1Ym1pdChhcmdzKTtcblx0fVxufVxuIl19