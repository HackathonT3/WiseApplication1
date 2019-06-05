"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var classes_routing_module_1 = require("./classes-routing.module");
var common_1 = require("nativescript-angular/common");
var classes_component_1 = require("./classes.component");
var ClassesModule = /** @class */ (function () {
    function ClassesModule() {
    }
    ClassesModule = __decorate([
        core_1.NgModule({
            declarations: [classes_component_1.ClassesComponent],
            imports: [
                classes_routing_module_1.ClassesRoutingModule,
                common_1.NativeScriptCommonModule
            ],
            schemas: [core_1.NO_ERRORS_SCHEMA]
        })
    ], ClassesModule);
    return ClassesModule;
}());
exports.ClassesModule = ClassesModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xhc3Nlcy5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjbGFzc2VzLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEyRDtBQUUzRCxtRUFBZ0U7QUFDaEUsc0RBQXVFO0FBQ3ZFLHlEQUF1RDtBQVV2RDtJQUFBO0lBQTZCLENBQUM7SUFBakIsYUFBYTtRQVJ6QixlQUFRLENBQUM7WUFDUixZQUFZLEVBQUUsQ0FBQyxvQ0FBZ0IsQ0FBQztZQUNoQyxPQUFPLEVBQUU7Z0JBQ1AsNkNBQW9CO2dCQUNwQixpQ0FBd0I7YUFDekI7WUFDRCxPQUFPLEVBQUUsQ0FBQyx1QkFBZ0IsQ0FBQztTQUM1QixDQUFDO09BQ1csYUFBYSxDQUFJO0lBQUQsb0JBQUM7Q0FBQSxBQUE5QixJQUE4QjtBQUFqQixzQ0FBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBOT19FUlJPUlNfU0NIRU1BIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IENsYXNzZXNSb3V0aW5nTW9kdWxlIH0gZnJvbSAnLi9jbGFzc2VzLXJvdXRpbmcubW9kdWxlJztcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdENvbW1vbk1vZHVsZSB9IGZyb20gJ25hdGl2ZXNjcmlwdC1hbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBDbGFzc2VzQ29tcG9uZW50IH0gZnJvbSAnLi9jbGFzc2VzLmNvbXBvbmVudCc7XG5cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW0NsYXNzZXNDb21wb25lbnRdLFxuICBpbXBvcnRzOiBbXG4gICAgQ2xhc3Nlc1JvdXRpbmdNb2R1bGUsXG4gICAgTmF0aXZlU2NyaXB0Q29tbW9uTW9kdWxlXG4gIF0sXG4gIHNjaGVtYXM6IFtOT19FUlJPUlNfU0NIRU1BXVxufSlcbmV4cG9ydCBjbGFzcyBDbGFzc2VzTW9kdWxlIHsgfVxuIl19