"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var kinvey_nativescript_sdk_1 = require("kinvey-nativescript-sdk");
var dialogs_1 = require("tns-core-modules/ui/dialogs");
var context_module_1 = require("./../../shared/context.module");
var ForgotPasswordPrompt = /** @class */ (function () {
    function ForgotPasswordPrompt() {
    }
    ForgotPasswordPrompt.prototype.forgotPassword = function () {
        var _this = this;
        dialogs_1.prompt({
            title: "Forgot Password",
            message: "Enter the email address you used to register to reset your password.",
            inputType: "email",
            defaultText: "address@email.com",
            okButtonText: "Ok",
            cancelButtonText: "Cancel"
        }).then(function (data) {
            if (data.result) {
                _this.resetPassword(data.text.trim())
                    .then(function () {
                    _this.alert("Your password was successfully reset. Please check your email for instructions on choosing a new password.");
                }).catch(function () {
                    _this.alert("Error occurred resetting your password.");
                });
            }
        });
    };
    // To-do: probably should match against email when submitting.
    // If they don't match, don't do anything.
    ForgotPasswordPrompt.prototype.resetPassword = function (email) {
        kinvey_nativescript_sdk_1.Kinvey.init();
        return kinvey_nativescript_sdk_1.Kinvey.User.resetPassword(email)
            .catch(this.handleErrors);
    };
    ForgotPasswordPrompt.prototype.alert = function (message) {
        return dialogs_1.alert({
            title: context_module_1.Context.getAppName(),
            okButtonText: "Ok",
            message: message
        });
    };
    ForgotPasswordPrompt.prototype.handleErrors = function (error) {
        console.error(error.message);
    };
    return ForgotPasswordPrompt;
}());
exports.ForgotPasswordPrompt = ForgotPasswordPrompt;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9yZ290LXBhc3N3b3JkLnByb21wdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImZvcmdvdC1wYXNzd29yZC5wcm9tcHQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxtRUFBaUQ7QUFDakQsdURBQTREO0FBQzVELGdFQUF3RDtBQUV4RDtJQUFBO0lBMENBLENBQUM7SUF4Q0csNkNBQWMsR0FBZDtRQUFBLGlCQWtCQztRQWpCRyxnQkFBTSxDQUFDO1lBQ0gsS0FBSyxFQUFFLGlCQUFpQjtZQUN4QixPQUFPLEVBQUUsc0VBQXNFO1lBQy9FLFNBQVMsRUFBRSxPQUFPO1lBQ2xCLFdBQVcsRUFBRSxtQkFBbUI7WUFDaEMsWUFBWSxFQUFFLElBQUk7WUFDbEIsZ0JBQWdCLEVBQUUsUUFBUTtTQUM3QixDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUMsSUFBSTtZQUNULElBQUksSUFBSSxDQUFDLE1BQU0sRUFBRTtnQkFDYixLQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7cUJBQy9CLElBQUksQ0FBQztvQkFDRixLQUFJLENBQUMsS0FBSyxDQUFDLDRHQUE0RyxDQUFDLENBQUM7Z0JBQzdILENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQztvQkFDTCxLQUFJLENBQUMsS0FBSyxDQUFDLHlDQUF5QyxDQUFDLENBQUM7Z0JBQzFELENBQUMsQ0FBQyxDQUFDO2FBQ1Y7UUFDTCxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFRCw4REFBOEQ7SUFDOUQsMENBQTBDO0lBQzFDLDRDQUFhLEdBQWIsVUFBYyxLQUFjO1FBQ3hCLGdDQUFNLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDZCxPQUFPLGdDQUFNLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUM7YUFDbEMsS0FBSyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUNsQyxDQUFDO0lBRUQsb0NBQUssR0FBTCxVQUFPLE9BQWdCO1FBQ25CLE9BQU8sZUFBSyxDQUFDO1lBQ1QsS0FBSyxFQUFFLHdCQUFPLENBQUMsVUFBVSxFQUFFO1lBQzNCLFlBQVksRUFBRSxJQUFJO1lBQ2xCLE9BQU8sRUFBRSxPQUFPO1NBQ25CLENBQUMsQ0FBQTtJQUNOLENBQUM7SUFFRCwyQ0FBWSxHQUFaLFVBQWEsS0FBdUI7UUFDaEMsT0FBTyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDakMsQ0FBQztJQUVMLDJCQUFDO0FBQUQsQ0FBQyxBQTFDRCxJQTBDQztBQTFDWSxvREFBb0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBLaW52ZXkgfSBmcm9tIFwia2ludmV5LW5hdGl2ZXNjcmlwdC1zZGtcIjtcbmltcG9ydCB7IGFsZXJ0LCBwcm9tcHQgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9kaWFsb2dzXCI7XG5pbXBvcnQgeyBDb250ZXh0IH0gZnJvbSBcIi4vLi4vLi4vc2hhcmVkL2NvbnRleHQubW9kdWxlXCI7XG5cbmV4cG9ydCBjbGFzcyBGb3Jnb3RQYXNzd29yZFByb21wdCB7XG5cbiAgICBmb3Jnb3RQYXNzd29yZCgpIHtcbiAgICAgICAgcHJvbXB0KHtcbiAgICAgICAgICAgIHRpdGxlOiBcIkZvcmdvdCBQYXNzd29yZFwiLFxuICAgICAgICAgICAgbWVzc2FnZTogXCJFbnRlciB0aGUgZW1haWwgYWRkcmVzcyB5b3UgdXNlZCB0byByZWdpc3RlciB0byByZXNldCB5b3VyIHBhc3N3b3JkLlwiLFxuICAgICAgICAgICAgaW5wdXRUeXBlOiBcImVtYWlsXCIsXG4gICAgICAgICAgICBkZWZhdWx0VGV4dDogXCJhZGRyZXNzQGVtYWlsLmNvbVwiLFxuICAgICAgICAgICAgb2tCdXR0b25UZXh0OiBcIk9rXCIsXG4gICAgICAgICAgICBjYW5jZWxCdXR0b25UZXh0OiBcIkNhbmNlbFwiXG4gICAgICAgIH0pLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgICAgIGlmIChkYXRhLnJlc3VsdCkge1xuICAgICAgICAgICAgICAgIHRoaXMucmVzZXRQYXNzd29yZChkYXRhLnRleHQudHJpbSgpKVxuICAgICAgICAgICAgICAgICAgICAudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmFsZXJ0KFwiWW91ciBwYXNzd29yZCB3YXMgc3VjY2Vzc2Z1bGx5IHJlc2V0LiBQbGVhc2UgY2hlY2sgeW91ciBlbWFpbCBmb3IgaW5zdHJ1Y3Rpb25zIG9uIGNob29zaW5nIGEgbmV3IHBhc3N3b3JkLlwiKTtcbiAgICAgICAgICAgICAgICAgICAgfSkuY2F0Y2goKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hbGVydChcIkVycm9yIG9jY3VycmVkIHJlc2V0dGluZyB5b3VyIHBhc3N3b3JkLlwiKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8vIFRvLWRvOiBwcm9iYWJseSBzaG91bGQgbWF0Y2ggYWdhaW5zdCBlbWFpbCB3aGVuIHN1Ym1pdHRpbmcuXG4gICAgLy8gSWYgdGhleSBkb24ndCBtYXRjaCwgZG9uJ3QgZG8gYW55dGhpbmcuXG4gICAgcmVzZXRQYXNzd29yZChlbWFpbCA6IHN0cmluZykge1xuICAgICAgICBLaW52ZXkuaW5pdCgpO1xuICAgICAgICByZXR1cm4gS2ludmV5LlVzZXIucmVzZXRQYXNzd29yZChlbWFpbClcbiAgICAgICAgICAgIC5jYXRjaCh0aGlzLmhhbmRsZUVycm9ycyk7XG4gICAgfVxuXG4gICAgYWxlcnQoIG1lc3NhZ2UgOiBzdHJpbmcpIHtcbiAgICAgICAgcmV0dXJuIGFsZXJ0KHtcbiAgICAgICAgICAgIHRpdGxlOiBDb250ZXh0LmdldEFwcE5hbWUoKSxcbiAgICAgICAgICAgIG9rQnV0dG9uVGV4dDogXCJPa1wiLFxuICAgICAgICAgICAgbWVzc2FnZTogbWVzc2FnZVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIGhhbmRsZUVycm9ycyhlcnJvcjogS2ludmV5LkJhc2VFcnJvcikge1xuICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yLm1lc3NhZ2UpO1xuICAgIH1cblxufSJdfQ==