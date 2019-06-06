import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { RouterExtensions } from "nativescript-angular/router";
import { Page } from "ui/page";
import { setNumber } from "tns-core-modules/application-settings";
import { GridLayout } from "ui/layouts/grid-layout";
import { setTimeout } from "timer";
import * as dialogs from "tns-core-modules/ui/dialogs";

@Component({
	selector: "quiz",
	moduleId: module.id,
	templateUrl: "./quiz.component.html",
	styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {

	category: string;

	questions: { 
		question: string, 
		options: string[], 
		correctAnswerIndex: number,
		rationale: string
	}[] = [];

	currentQuestionIndex: number = 0;
	score: number = 0;

	wrongSelected = false;


	constructor(
		private route: ActivatedRoute,
		private routerExtensions: RouterExtensions,
		private page: Page
	) {
		this.page.actionBarHidden = true;
	}

	ngOnInit(): void {
		this.route.queryParams.subscribe(params => {
			this.category = params['category'];
			this.questions = JSON.parse(params['questions']);
		})
	}

	// -------------------------- QUIZ ----------------------------

	selectAnswer(answerIndex: number, args: any) {
		let option = <GridLayout>args.object;
		if (this.questions[this.currentQuestionIndex].correctAnswerIndex == answerIndex) {
			// correct answer
			this.score += 1;
			option.backgroundColor = '#B6EB81';
			setTimeout( () => {
				this.nextQuestion();
			}, 500 )
		} else {
			// wrong answer
			option.backgroundColor = '#ff4b60';
			this.rationalePrompt(this.questions[this.currentQuestionIndex].rationale);
		}
	}

	rationalePrompt(rationale: string) {
        dialogs.confirm( {
            title: "Not quite right...",
            message: rationale,
            okButtonText: "Next Question"
        } ).then( result => {
			this.nextQuestion();
        } );
    }

	nextQuestion() {
		if (this.currentQuestionIndex == this.questions.length - 1) {
			this.end();
		} else {
			this.currentQuestionIndex += 1;
		}
		this.wrongSelected = false
	}

	saveScore() {
		let scorePercentage = Math.round(this.score * 100 / this.questions.length);
		setNumber(this.category, scorePercentage);
	}

	end() {
		this.saveScore();
		this.navigateToScore();
	}

	// ------------------------- NAVIGATION -----------------------------

	navigateToScore() {
		let navigationExtras = {
			queryParams: {
				'score': Math.round(this.score * 100 / this.questions.length)
			}
		};
		this.routerExtensions.navigate(["/score"], navigationExtras);
	}

	navigateToPrevious() {
		this.routerExtensions.backToPreviousPage();
	}

}