import { Component } from "@angular/core";
import { ModalDialogParams } from "nativescript-angular/directives/dialogs";

@Component({
    selector: "dob-modal",
    templateUrl: "./dob.modal.html",
    moduleId: module.id
})
export class DOBModalComponent {
    dateSelector = new Date();

    onDateChanged(args) {
        let date: Date = args.value;
        this.dateSelector = date;
    }

    public constructor(private params: ModalDialogParams) {

    }

    public close(res: string) {
        this.params.closeCallback(res);
    }

}