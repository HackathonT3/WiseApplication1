import { Component, OnInit } from "@angular/core";
import { RouterExtensions } from "nativescript-angular/router";
import { Page } from "ui/page";
import { getNumber, getString } from "tns-core-modules/application-settings";
import { FileReaderService } from "../../core/fileReader.service";

@Component({
    selector: "selector",
    moduleId: module.id,
    templateUrl: "./selector.component.html",
    styleUrls: ['./selector.component.css']
})
export class SelectorComponent implements OnInit {

    categories: any[] = [];

    constructor(
        private routerExtensions: RouterExtensions,
        private page: Page,
        private fileReader: FileReaderService
    ) {
        this.page.actionBarHidden = true;
    }

    ngOnInit(): void {
        this.getCategories();
    }

    getCategories() {
        this.fileReader.readJSON('/core/questions.json').then(
            res => {
                this.categories = res["categories"];
                this.initializeScore();
            },
            err => {
                console.log('Error reading json: ' + JSON.stringify(err));
            }
        )
    }

    initializeScore() {
        for (let i = 0; i < this.categories.length; i++) {
            this.categories[i].lastScore = getNumber(this.categories[i].title) || '0';
        }
    }

    navigateToQuiz(index: number) {
        let navigationExtras = {
            queryParams: {
                'category': this.categories[index].title,
                'questions': JSON.stringify(this.categories[index].questions)
            }
        };
        this.routerExtensions.navigate(["/quiz"], navigationExtras);
    }
}
