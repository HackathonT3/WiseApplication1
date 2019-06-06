"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var router_2 = require("nativescript-angular/router");
var page_1 = require("ui/page");
var application_settings_1 = require("tns-core-modules/application-settings");
var timer_1 = require("timer");
var dialogs = require("tns-core-modules/ui/dialogs");
var QuizComponent = /** @class */ (function () {
    function QuizComponent(route, routerExtensions, page) {
        this.route = route;
        this.routerExtensions = routerExtensions;
        this.page = page;
        this.questions = [];
        this.currentQuestionIndex = 0;
        this.score = 0;
        this.wrongSelected = false;
        this.page.actionBarHidden = true;
    }
    QuizComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.queryParams.subscribe(function (params) {
            _this.category = params['category'];
            _this.questions = JSON.parse(params['questions']);
        });
    };
    // -------------------------- QUIZ ----------------------------
    QuizComponent.prototype.selectAnswer = function (answerIndex, args) {
        var _this = this;
        var option = args.object;
        if (this.questions[this.currentQuestionIndex].correctAnswerIndex == answerIndex) {
            // correct answer
            this.score += 1;
            option.backgroundColor = '#B6EB81';
            timer_1.setTimeout(function () {
                _this.nextQuestion();
            }, 500);
        }
        else {
            // wrong answer
            option.backgroundColor = '#ff4b60';
            this.rationalePrompt(this.questions[this.currentQuestionIndex].rationale);
        }
    };
    QuizComponent.prototype.rationalePrompt = function (rationale) {
        var _this = this;
        dialogs.confirm({
            title: "Not quite right...",
            message: rationale,
            okButtonText: "Next Question"
        }).then(function (result) {
            _this.nextQuestion();
        });
    };
    QuizComponent.prototype.nextQuestion = function () {
        if (this.currentQuestionIndex == this.questions.length - 1) {
            this.end();
        }
        else {
            this.currentQuestionIndex += 1;
        }
        this.wrongSelected = false;
    };
    QuizComponent.prototype.saveScore = function () {
        var scorePercentage = Math.round(this.score * 100 / this.questions.length);
        application_settings_1.setNumber(this.category, scorePercentage);
    };
    QuizComponent.prototype.end = function () {
        this.saveScore();
        this.navigateToScore();
    };
    // ------------------------- NAVIGATION -----------------------------
    QuizComponent.prototype.navigateToScore = function () {
        var navigationExtras = {
            queryParams: {
                'score': Math.round(this.score * 100 / this.questions.length)
            }
        };
        this.routerExtensions.navigate(["/score"], navigationExtras);
    };
    QuizComponent.prototype.navigateToPrevious = function () {
        this.routerExtensions.backToPreviousPage();
    };
    QuizComponent = __decorate([
        core_1.Component({
            selector: "quiz",
            moduleId: module.id,
            templateUrl: "./quiz.component.html",
            styleUrls: ['./quiz.component.css']
        }),
        __metadata("design:paramtypes", [router_1.ActivatedRoute,
            router_2.RouterExtensions,
            page_1.Page])
    ], QuizComponent);
    return QuizComponent;
}());
exports.QuizComponent = QuizComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicXVpei5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJxdWl6LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFrRDtBQUNsRCwwQ0FBaUQ7QUFDakQsc0RBQStEO0FBQy9ELGdDQUErQjtBQUMvQiw4RUFBa0U7QUFFbEUsK0JBQW1DO0FBQ25DLHFEQUF1RDtBQVF2RDtJQWlCQyx1QkFDUyxLQUFxQixFQUNyQixnQkFBa0MsRUFDbEMsSUFBVTtRQUZWLFVBQUssR0FBTCxLQUFLLENBQWdCO1FBQ3JCLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFDbEMsU0FBSSxHQUFKLElBQUksQ0FBTTtRQWhCbkIsY0FBUyxHQUtILEVBQUUsQ0FBQztRQUVULHlCQUFvQixHQUFXLENBQUMsQ0FBQztRQUNqQyxVQUFLLEdBQVcsQ0FBQyxDQUFDO1FBRWxCLGtCQUFhLEdBQUcsS0FBSyxDQUFDO1FBUXJCLElBQUksQ0FBQyxJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQztJQUNsQyxDQUFDO0lBRUQsZ0NBQVEsR0FBUjtRQUFBLGlCQUtDO1FBSkEsSUFBSSxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLFVBQUEsTUFBTTtZQUN0QyxLQUFJLENBQUMsUUFBUSxHQUFHLE1BQU0sQ0FBQyxVQUFVLENBQUMsQ0FBQztZQUNuQyxLQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUM7UUFDbEQsQ0FBQyxDQUFDLENBQUE7SUFDSCxDQUFDO0lBRUQsK0RBQStEO0lBRS9ELG9DQUFZLEdBQVosVUFBYSxXQUFtQixFQUFFLElBQVM7UUFBM0MsaUJBY0M7UUFiQSxJQUFJLE1BQU0sR0FBZSxJQUFJLENBQUMsTUFBTSxDQUFDO1FBQ3JDLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsb0JBQW9CLENBQUMsQ0FBQyxrQkFBa0IsSUFBSSxXQUFXLEVBQUU7WUFDaEYsaUJBQWlCO1lBQ2pCLElBQUksQ0FBQyxLQUFLLElBQUksQ0FBQyxDQUFDO1lBQ2hCLE1BQU0sQ0FBQyxlQUFlLEdBQUcsU0FBUyxDQUFDO1lBQ25DLGtCQUFVLENBQUU7Z0JBQ1gsS0FBSSxDQUFDLFlBQVksRUFBRSxDQUFDO1lBQ3JCLENBQUMsRUFBRSxHQUFHLENBQUUsQ0FBQTtTQUNSO2FBQU07WUFDTixlQUFlO1lBQ2YsTUFBTSxDQUFDLGVBQWUsR0FBRyxTQUFTLENBQUM7WUFDbkMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1NBQzFFO0lBQ0YsQ0FBQztJQUVELHVDQUFlLEdBQWYsVUFBZ0IsU0FBaUI7UUFBakMsaUJBUUk7UUFQRyxPQUFPLENBQUMsT0FBTyxDQUFFO1lBQ2IsS0FBSyxFQUFFLG9CQUFvQjtZQUMzQixPQUFPLEVBQUUsU0FBUztZQUNsQixZQUFZLEVBQUUsZUFBZTtTQUNoQyxDQUFFLENBQUMsSUFBSSxDQUFFLFVBQUEsTUFBTTtZQUNyQixLQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDZixDQUFDLENBQUUsQ0FBQztJQUNSLENBQUM7SUFFSixvQ0FBWSxHQUFaO1FBQ0MsSUFBSSxJQUFJLENBQUMsb0JBQW9CLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO1lBQzNELElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQztTQUNYO2FBQU07WUFDTixJQUFJLENBQUMsb0JBQW9CLElBQUksQ0FBQyxDQUFDO1NBQy9CO1FBQ0QsSUFBSSxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUE7SUFDM0IsQ0FBQztJQUVELGlDQUFTLEdBQVQ7UUFDQyxJQUFJLGVBQWUsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsR0FBRyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDM0UsZ0NBQVMsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLGVBQWUsQ0FBQyxDQUFDO0lBQzNDLENBQUM7SUFFRCwyQkFBRyxHQUFIO1FBQ0MsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBQ2pCLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztJQUN4QixDQUFDO0lBRUQscUVBQXFFO0lBRXJFLHVDQUFlLEdBQWY7UUFDQyxJQUFJLGdCQUFnQixHQUFHO1lBQ3RCLFdBQVcsRUFBRTtnQkFDWixPQUFPLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLEdBQUcsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQzthQUM3RDtTQUNELENBQUM7UUFDRixJQUFJLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLENBQUMsUUFBUSxDQUFDLEVBQUUsZ0JBQWdCLENBQUMsQ0FBQztJQUM5RCxDQUFDO0lBRUQsMENBQWtCLEdBQWxCO1FBQ0MsSUFBSSxDQUFDLGdCQUFnQixDQUFDLGtCQUFrQixFQUFFLENBQUM7SUFDNUMsQ0FBQztJQTVGVyxhQUFhO1FBTnpCLGdCQUFTLENBQUM7WUFDVixRQUFRLEVBQUUsTUFBTTtZQUNoQixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsV0FBVyxFQUFFLHVCQUF1QjtZQUNwQyxTQUFTLEVBQUUsQ0FBQyxzQkFBc0IsQ0FBQztTQUNuQyxDQUFDO3lDQW1CZSx1QkFBYztZQUNILHlCQUFnQjtZQUM1QixXQUFJO09BcEJQLGFBQWEsQ0E4RnpCO0lBQUQsb0JBQUM7Q0FBQSxBQTlGRCxJQThGQztBQTlGWSxzQ0FBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHsgUm91dGVyRXh0ZW5zaW9ucyB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7IFBhZ2UgfSBmcm9tIFwidWkvcGFnZVwiO1xuaW1wb3J0IHsgc2V0TnVtYmVyIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvYXBwbGljYXRpb24tc2V0dGluZ3NcIjtcbmltcG9ydCB7IEdyaWRMYXlvdXQgfSBmcm9tIFwidWkvbGF5b3V0cy9ncmlkLWxheW91dFwiO1xuaW1wb3J0IHsgc2V0VGltZW91dCB9IGZyb20gXCJ0aW1lclwiO1xuaW1wb3J0ICogYXMgZGlhbG9ncyBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9kaWFsb2dzXCI7XG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogXCJxdWl6XCIsXG5cdG1vZHVsZUlkOiBtb2R1bGUuaWQsXG5cdHRlbXBsYXRlVXJsOiBcIi4vcXVpei5jb21wb25lbnQuaHRtbFwiLFxuXHRzdHlsZVVybHM6IFsnLi9xdWl6LmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBRdWl6Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuXHRjYXRlZ29yeTogc3RyaW5nO1xuXG5cdHF1ZXN0aW9uczogeyBcblx0XHRxdWVzdGlvbjogc3RyaW5nLCBcblx0XHRvcHRpb25zOiBzdHJpbmdbXSwgXG5cdFx0Y29ycmVjdEFuc3dlckluZGV4OiBudW1iZXIsXG5cdFx0cmF0aW9uYWxlOiBzdHJpbmdcblx0fVtdID0gW107XG5cblx0Y3VycmVudFF1ZXN0aW9uSW5kZXg6IG51bWJlciA9IDA7XG5cdHNjb3JlOiBudW1iZXIgPSAwO1xuXG5cdHdyb25nU2VsZWN0ZWQgPSBmYWxzZTtcblxuXG5cdGNvbnN0cnVjdG9yKFxuXHRcdHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlLFxuXHRcdHByaXZhdGUgcm91dGVyRXh0ZW5zaW9uczogUm91dGVyRXh0ZW5zaW9ucyxcblx0XHRwcml2YXRlIHBhZ2U6IFBhZ2Vcblx0KSB7XG5cdFx0dGhpcy5wYWdlLmFjdGlvbkJhckhpZGRlbiA9IHRydWU7XG5cdH1cblxuXHRuZ09uSW5pdCgpOiB2b2lkIHtcblx0XHR0aGlzLnJvdXRlLnF1ZXJ5UGFyYW1zLnN1YnNjcmliZShwYXJhbXMgPT4ge1xuXHRcdFx0dGhpcy5jYXRlZ29yeSA9IHBhcmFtc1snY2F0ZWdvcnknXTtcblx0XHRcdHRoaXMucXVlc3Rpb25zID0gSlNPTi5wYXJzZShwYXJhbXNbJ3F1ZXN0aW9ucyddKTtcblx0XHR9KVxuXHR9XG5cblx0Ly8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gUVVJWiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cblx0c2VsZWN0QW5zd2VyKGFuc3dlckluZGV4OiBudW1iZXIsIGFyZ3M6IGFueSkge1xuXHRcdGxldCBvcHRpb24gPSA8R3JpZExheW91dD5hcmdzLm9iamVjdDtcblx0XHRpZiAodGhpcy5xdWVzdGlvbnNbdGhpcy5jdXJyZW50UXVlc3Rpb25JbmRleF0uY29ycmVjdEFuc3dlckluZGV4ID09IGFuc3dlckluZGV4KSB7XG5cdFx0XHQvLyBjb3JyZWN0IGFuc3dlclxuXHRcdFx0dGhpcy5zY29yZSArPSAxO1xuXHRcdFx0b3B0aW9uLmJhY2tncm91bmRDb2xvciA9ICcjQjZFQjgxJztcblx0XHRcdHNldFRpbWVvdXQoICgpID0+IHtcblx0XHRcdFx0dGhpcy5uZXh0UXVlc3Rpb24oKTtcblx0XHRcdH0sIDUwMCApXG5cdFx0fSBlbHNlIHtcblx0XHRcdC8vIHdyb25nIGFuc3dlclxuXHRcdFx0b3B0aW9uLmJhY2tncm91bmRDb2xvciA9ICcjZmY0YjYwJztcblx0XHRcdHRoaXMucmF0aW9uYWxlUHJvbXB0KHRoaXMucXVlc3Rpb25zW3RoaXMuY3VycmVudFF1ZXN0aW9uSW5kZXhdLnJhdGlvbmFsZSk7XG5cdFx0fVxuXHR9XG5cblx0cmF0aW9uYWxlUHJvbXB0KHJhdGlvbmFsZTogc3RyaW5nKSB7XG4gICAgICAgIGRpYWxvZ3MuY29uZmlybSgge1xuICAgICAgICAgICAgdGl0bGU6IFwiTm90IHF1aXRlIHJpZ2h0Li4uXCIsXG4gICAgICAgICAgICBtZXNzYWdlOiByYXRpb25hbGUsXG4gICAgICAgICAgICBva0J1dHRvblRleHQ6IFwiTmV4dCBRdWVzdGlvblwiXG4gICAgICAgIH0gKS50aGVuKCByZXN1bHQgPT4ge1xuXHRcdFx0dGhpcy5uZXh0UXVlc3Rpb24oKTtcbiAgICAgICAgfSApO1xuICAgIH1cblxuXHRuZXh0UXVlc3Rpb24oKSB7XG5cdFx0aWYgKHRoaXMuY3VycmVudFF1ZXN0aW9uSW5kZXggPT0gdGhpcy5xdWVzdGlvbnMubGVuZ3RoIC0gMSkge1xuXHRcdFx0dGhpcy5lbmQoKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy5jdXJyZW50UXVlc3Rpb25JbmRleCArPSAxO1xuXHRcdH1cblx0XHR0aGlzLndyb25nU2VsZWN0ZWQgPSBmYWxzZVxuXHR9XG5cblx0c2F2ZVNjb3JlKCkge1xuXHRcdGxldCBzY29yZVBlcmNlbnRhZ2UgPSBNYXRoLnJvdW5kKHRoaXMuc2NvcmUgKiAxMDAgLyB0aGlzLnF1ZXN0aW9ucy5sZW5ndGgpO1xuXHRcdHNldE51bWJlcih0aGlzLmNhdGVnb3J5LCBzY29yZVBlcmNlbnRhZ2UpO1xuXHR9XG5cblx0ZW5kKCkge1xuXHRcdHRoaXMuc2F2ZVNjb3JlKCk7XG5cdFx0dGhpcy5uYXZpZ2F0ZVRvU2NvcmUoKTtcblx0fVxuXG5cdC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gTkFWSUdBVElPTiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5cdG5hdmlnYXRlVG9TY29yZSgpIHtcblx0XHRsZXQgbmF2aWdhdGlvbkV4dHJhcyA9IHtcblx0XHRcdHF1ZXJ5UGFyYW1zOiB7XG5cdFx0XHRcdCdzY29yZSc6IE1hdGgucm91bmQodGhpcy5zY29yZSAqIDEwMCAvIHRoaXMucXVlc3Rpb25zLmxlbmd0aClcblx0XHRcdH1cblx0XHR9O1xuXHRcdHRoaXMucm91dGVyRXh0ZW5zaW9ucy5uYXZpZ2F0ZShbXCIvc2NvcmVcIl0sIG5hdmlnYXRpb25FeHRyYXMpO1xuXHR9XG5cblx0bmF2aWdhdGVUb1ByZXZpb3VzKCkge1xuXHRcdHRoaXMucm91dGVyRXh0ZW5zaW9ucy5iYWNrVG9QcmV2aW91c1BhZ2UoKTtcblx0fVxuXG59Il19