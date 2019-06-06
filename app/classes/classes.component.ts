import { Component, OnInit } from '@angular/core';
import { ItemEventData } from 'tns-core-modules/ui/list-view/list-view';
import { Page } from 'tns-core-modules/ui/page/page';
import { RouterExtensions } from 'nativescript-angular';
import { knownFolders, Folder, File } from "tns-core-modules/file-system";
var frame = require("tns-core-modules/ui/frame");
var platform = require("tns-core-modules/platform");
@Component({
    selector: 'ns-classes',
    templateUrl: './classes.component.html',
    styleUrls: ['./classes.component.css'],
    moduleId: module.id,
})
export class ClassesComponent implements OnInit {

    textFieldValue: string = "";
    isIOS: boolean;

    listViewData = [
        {
            title: "Financial Literacy",
            artist: "Basic introductory course",
            year: "2019",
            imageUrl: "~/images/calculator-desk-finance-1253591.jpg"
        },
        {
            title: "Financial Literacy II",
            artist: "Intermediate course",
            year: "2014",
            imageUrl: "~/images/calculator-desk-finance-1253591.jpg"
        },
        {
            title: "Financial Literacy III",
            artist: "Advanced Financial Literacy",
            year: "2017",
            imageUrl: "~/images/calculator-desk-finance-1253591.jpg"
        }
    ]


    searchPhrase: string;

    constructor(private page: Page, private routerExtensions: RouterExtensions) {
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

    ngOnInit() {
    }

    onItemTap(args: ItemEventData): void {

    }

    onButtonTap(): void {
    }

    goBack() {
        this.routerExtensions.back();
    }
}
