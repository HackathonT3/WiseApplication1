"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var dialogs_1 = require("nativescript-angular/directives/dialogs");
var forms_1 = require("nativescript-angular/forms");
var student_register_routing_module_1 = require("./student-register-routing.module");
var common_1 = require("nativescript-angular/common");
var student_register_component_1 = require("./student-register.component");
var dob_modal_1 = require("./modal/dob/dob.modal");
var StudentRegisterModule = /** @class */ (function () {
    function StudentRegisterModule() {
    }
    StudentRegisterModule = __decorate([
        core_1.NgModule({
            declarations: [
                student_register_component_1.StudentRegisterComponent,
                dob_modal_1.DOBModalComponent
            ],
            entryComponents: [dob_modal_1.DOBModalComponent],
            imports: [
                student_register_routing_module_1.StudentRegisterRoutingModule,
                common_1.NativeScriptCommonModule,
                forms_1.NativeScriptFormsModule
            ],
            providers: [dialogs_1.ModalDialogService],
            schemas: [core_1.NO_ERRORS_SCHEMA]
        })
    ], StudentRegisterModule);
    return StudentRegisterModule;
}());
exports.StudentRegisterModule = StudentRegisterModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3R1ZGVudC1yZWdpc3Rlci5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJzdHVkZW50LXJlZ2lzdGVyLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEyRDtBQUMzRCxtRUFBNkU7QUFDN0Usb0RBQXFFO0FBQ3JFLHFGQUFpRjtBQUNqRixzREFBdUU7QUFDdkUsMkVBQXdFO0FBQ3hFLG1EQUEwRDtBQWdCMUQ7SUFBQTtJQUFxQyxDQUFDO0lBQXpCLHFCQUFxQjtRQWRqQyxlQUFRLENBQUM7WUFDUixZQUFZLEVBQUU7Z0JBQ1oscURBQXdCO2dCQUN4Qiw2QkFBaUI7YUFDbEI7WUFDRCxlQUFlLEVBQUUsQ0FBQyw2QkFBaUIsQ0FBQztZQUNwQyxPQUFPLEVBQUU7Z0JBQ1AsOERBQTRCO2dCQUM1QixpQ0FBd0I7Z0JBQ3hCLCtCQUF1QjthQUN4QjtZQUNELFNBQVMsRUFBRSxDQUFDLDRCQUFrQixDQUFDO1lBQy9CLE9BQU8sRUFBRSxDQUFDLHVCQUFnQixDQUFDO1NBQzVCLENBQUM7T0FDVyxxQkFBcUIsQ0FBSTtJQUFELDRCQUFDO0NBQUEsQUFBdEMsSUFBc0M7QUFBekIsc0RBQXFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIE5PX0VSUk9SU19TQ0hFTUEgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE1vZGFsRGlhbG9nU2VydmljZSB9IGZyb20gJ25hdGl2ZXNjcmlwdC1hbmd1bGFyL2RpcmVjdGl2ZXMvZGlhbG9ncyc7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRGb3Jtc01vZHVsZSB9IGZyb20gJ25hdGl2ZXNjcmlwdC1hbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IFN0dWRlbnRSZWdpc3RlclJvdXRpbmdNb2R1bGUgfSBmcm9tICcuL3N0dWRlbnQtcmVnaXN0ZXItcm91dGluZy5tb2R1bGUnO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Q29tbW9uTW9kdWxlIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IFN0dWRlbnRSZWdpc3RlckNvbXBvbmVudCB9IGZyb20gJy4vc3R1ZGVudC1yZWdpc3Rlci5jb21wb25lbnQnO1xuaW1wb3J0IHsgRE9CTW9kYWxDb21wb25lbnQgfSBmcm9tICcuL21vZGFsL2RvYi9kb2IubW9kYWwnO1xuXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFtcbiAgICBTdHVkZW50UmVnaXN0ZXJDb21wb25lbnQsXG4gICAgRE9CTW9kYWxDb21wb25lbnRcbiAgXSxcbiAgZW50cnlDb21wb25lbnRzOiBbRE9CTW9kYWxDb21wb25lbnRdLFxuICBpbXBvcnRzOiBbXG4gICAgU3R1ZGVudFJlZ2lzdGVyUm91dGluZ01vZHVsZSxcbiAgICBOYXRpdmVTY3JpcHRDb21tb25Nb2R1bGUsXG4gICAgTmF0aXZlU2NyaXB0Rm9ybXNNb2R1bGVcbiAgXSxcbiAgcHJvdmlkZXJzOiBbTW9kYWxEaWFsb2dTZXJ2aWNlXSxcbiAgc2NoZW1hczogW05PX0VSUk9SU19TQ0hFTUFdXG59KVxuZXhwb3J0IGNsYXNzIFN0dWRlbnRSZWdpc3Rlck1vZHVsZSB7IH1cbiJdfQ==