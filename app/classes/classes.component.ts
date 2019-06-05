import { Component, OnInit } from '@angular/core';
import { ItemEventData } from 'tns-core-modules/ui/list-view/list-view';
import { Page } from 'tns-core-modules/ui/page/page';
import { RouterExtensions } from 'nativescript-angular';
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
            title: "I Don't Wanna Live Forever (Fifty Shades of Grey)",
            artist: "Taylor Swift, Zayn Malik",
            year: "2016",
            imageUrl: "~/images/calculator-desk-finance-1253591.jpg"
        },
        {
            title: "Blank Space",
            artist: "Taylor Swift",
            year: "2014",
            imageUrl: "~/images/calculator-desk-finance-1253591.jpg"
        },
        {
            title: "End Game",
            artist: "Taylor Swift, Ed Sheeran, Future",
            year: "2017",
            imageUrl: "~/images/calculator-desk-finance-1253591.jpg"
        },
        {
            title: "Love Story",
            artist: "Taylor Swift",
            year: "2009",
            imageUrl: "~/images/calculator-desk-finance-1253591.jpg"
        },
        {
            title: "Everything Has Changed",
            artist: "Taylor Swift, Ed Sheeran",
            year: "2012",
            imageUrl: "~/images/calculator-desk-finance-1253591.jpg"
        },
        {
            title: "Teardrops On My Guitar",
            artist: "Taylor Swift",
            year: "2006",
            imageUrl: "~/images/calculator-desk-finance-1253591.jpg"
        },
    ]


    searchPhrase: string;

    constructor(private page: Page, private routerExtensions: RouterExtensions) {
        page.actionBarHidden = true;

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
        console.log('Item with index: ' + args.index + ' tapped');
    }

    onButtonTap(): void {
        console.log("Button was pressed");
    }

    goBack() {
        this.routerExtensions.back();
    }
}
