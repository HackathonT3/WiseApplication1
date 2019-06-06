"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var certification_test_component_1 = require("./certification-test.component");
var routes = [
    { path: "", component: certification_test_component_1.CertificationTestComponent }
];
var CertificationTestRoutingModule = /** @class */ (function () {
    function CertificationTestRoutingModule() {
    }
    CertificationTestRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.NativeScriptRouterModule.forChild(routes)],
            exports: [router_1.NativeScriptRouterModule]
        })
    ], CertificationTestRoutingModule);
    return CertificationTestRoutingModule;
}());
exports.CertificationTestRoutingModule = CertificationTestRoutingModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2VydGlmaWNhdGlvbi10ZXN0LXJvdXRpbmcubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY2VydGlmaWNhdGlvbi10ZXN0LXJvdXRpbmcubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXlDO0FBRXpDLHNEQUF1RTtBQUN2RSwrRUFBNEU7QUFFNUUsSUFBTSxNQUFNLEdBQVc7SUFDbkIsRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFFLFNBQVMsRUFBRSx5REFBMEIsRUFBRTtDQUN0RCxDQUFDO0FBTUY7SUFBQTtJQUE4QyxDQUFDO0lBQWxDLDhCQUE4QjtRQUoxQyxlQUFRLENBQUM7WUFDUixPQUFPLEVBQUUsQ0FBQyxpQ0FBd0IsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDcEQsT0FBTyxFQUFFLENBQUMsaUNBQXdCLENBQUM7U0FDcEMsQ0FBQztPQUNXLDhCQUE4QixDQUFJO0lBQUQscUNBQUM7Q0FBQSxBQUEvQyxJQUErQztBQUFsQyx3RUFBOEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVzIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZSB9IGZyb20gJ25hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBDZXJ0aWZpY2F0aW9uVGVzdENvbXBvbmVudCB9IGZyb20gJy4vY2VydGlmaWNhdGlvbi10ZXN0LmNvbXBvbmVudCc7XG5cbmNvbnN0IHJvdXRlczogUm91dGVzID0gW1xuICAgIHsgcGF0aDogXCJcIiwgY29tcG9uZW50OiBDZXJ0aWZpY2F0aW9uVGVzdENvbXBvbmVudCB9XG5dO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlLmZvckNoaWxkKHJvdXRlcyldLFxuICBleHBvcnRzOiBbTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlXVxufSlcbmV4cG9ydCBjbGFzcyBDZXJ0aWZpY2F0aW9uVGVzdFJvdXRpbmdNb2R1bGUgeyB9XG4iXX0=