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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9yZ290LXBhc3N3b3JkLnByb21wdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImZvcmdvdC1wYXNzd29yZC5wcm9tcHQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxtRUFBaUQ7QUFDakQsdURBQTREO0FBQzVELGdFQUF3RDtBQUV4RDtJQUFBO0lBeUNBLENBQUM7SUF2Q0csNkNBQWMsR0FBZDtRQUFBLGlCQWtCQztRQWpCRyxnQkFBTSxDQUFDO1lBQ0gsS0FBSyxFQUFFLGlCQUFpQjtZQUN4QixPQUFPLEVBQUUsc0VBQXNFO1lBQy9FLFNBQVMsRUFBRSxPQUFPO1lBQ2xCLFdBQVcsRUFBRSxtQkFBbUI7WUFDaEMsWUFBWSxFQUFFLElBQUk7WUFDbEIsZ0JBQWdCLEVBQUUsUUFBUTtTQUM3QixDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUMsSUFBSTtZQUNULElBQUksSUFBSSxDQUFDLE1BQU0sRUFBRTtnQkFDYixLQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7cUJBQy9CLElBQUksQ0FBQztvQkFDRixLQUFJLENBQUMsS0FBSyxDQUFDLDRHQUE0RyxDQUFDLENBQUM7Z0JBQzdILENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQztvQkFDTCxLQUFJLENBQUMsS0FBSyxDQUFDLHlDQUF5QyxDQUFDLENBQUM7Z0JBQzFELENBQUMsQ0FBQyxDQUFDO2FBQ1Y7UUFDTCxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFRCw4REFBOEQ7SUFDOUQsMENBQTBDO0lBQzFDLDRDQUFhLEdBQWIsVUFBYyxLQUFjO1FBQ3hCLE9BQU8sZ0NBQU0sQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQzthQUNsQyxLQUFLLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQ2xDLENBQUM7SUFFRCxvQ0FBSyxHQUFMLFVBQU8sT0FBZ0I7UUFDbkIsT0FBTyxlQUFLLENBQUM7WUFDVCxLQUFLLEVBQUUsd0JBQU8sQ0FBQyxVQUFVLEVBQUU7WUFDM0IsWUFBWSxFQUFFLElBQUk7WUFDbEIsT0FBTyxFQUFFLE9BQU87U0FDbkIsQ0FBQyxDQUFBO0lBQ04sQ0FBQztJQUVELDJDQUFZLEdBQVosVUFBYSxLQUF1QjtRQUNoQyxPQUFPLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUNqQyxDQUFDO0lBRUwsMkJBQUM7QUFBRCxDQUFDLEFBekNELElBeUNDO0FBekNZLG9EQUFvQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEtpbnZleSB9IGZyb20gXCJraW52ZXktbmF0aXZlc2NyaXB0LXNka1wiO1xuaW1wb3J0IHsgYWxlcnQsIHByb21wdCB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2RpYWxvZ3NcIjtcbmltcG9ydCB7IENvbnRleHQgfSBmcm9tIFwiLi8uLi8uLi9zaGFyZWQvY29udGV4dC5tb2R1bGVcIjtcblxuZXhwb3J0IGNsYXNzIEZvcmdvdFBhc3N3b3JkUHJvbXB0IHtcblxuICAgIGZvcmdvdFBhc3N3b3JkKCkge1xuICAgICAgICBwcm9tcHQoe1xuICAgICAgICAgICAgdGl0bGU6IFwiRm9yZ290IFBhc3N3b3JkXCIsXG4gICAgICAgICAgICBtZXNzYWdlOiBcIkVudGVyIHRoZSBlbWFpbCBhZGRyZXNzIHlvdSB1c2VkIHRvIHJlZ2lzdGVyIHRvIHJlc2V0IHlvdXIgcGFzc3dvcmQuXCIsXG4gICAgICAgICAgICBpbnB1dFR5cGU6IFwiZW1haWxcIixcbiAgICAgICAgICAgIGRlZmF1bHRUZXh0OiBcImFkZHJlc3NAZW1haWwuY29tXCIsXG4gICAgICAgICAgICBva0J1dHRvblRleHQ6IFwiT2tcIixcbiAgICAgICAgICAgIGNhbmNlbEJ1dHRvblRleHQ6IFwiQ2FuY2VsXCJcbiAgICAgICAgfSkudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICAgICAgaWYgKGRhdGEucmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5yZXNldFBhc3N3b3JkKGRhdGEudGV4dC50cmltKCkpXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYWxlcnQoXCJZb3VyIHBhc3N3b3JkIHdhcyBzdWNjZXNzZnVsbHkgcmVzZXQuIFBsZWFzZSBjaGVjayB5b3VyIGVtYWlsIGZvciBpbnN0cnVjdGlvbnMgb24gY2hvb3NpbmcgYSBuZXcgcGFzc3dvcmQuXCIpO1xuICAgICAgICAgICAgICAgICAgICB9KS5jYXRjaCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmFsZXJ0KFwiRXJyb3Igb2NjdXJyZWQgcmVzZXR0aW5nIHlvdXIgcGFzc3dvcmQuXCIpO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLy8gVG8tZG86IHByb2JhYmx5IHNob3VsZCBtYXRjaCBhZ2FpbnN0IGVtYWlsIHdoZW4gc3VibWl0dGluZy5cbiAgICAvLyBJZiB0aGV5IGRvbid0IG1hdGNoLCBkb24ndCBkbyBhbnl0aGluZy5cbiAgICByZXNldFBhc3N3b3JkKGVtYWlsIDogc3RyaW5nKSB7XG4gICAgICAgIHJldHVybiBLaW52ZXkuVXNlci5yZXNldFBhc3N3b3JkKGVtYWlsKVxuICAgICAgICAgICAgLmNhdGNoKHRoaXMuaGFuZGxlRXJyb3JzKTtcbiAgICB9XG5cbiAgICBhbGVydCggbWVzc2FnZSA6IHN0cmluZykge1xuICAgICAgICByZXR1cm4gYWxlcnQoe1xuICAgICAgICAgICAgdGl0bGU6IENvbnRleHQuZ2V0QXBwTmFtZSgpLFxuICAgICAgICAgICAgb2tCdXR0b25UZXh0OiBcIk9rXCIsXG4gICAgICAgICAgICBtZXNzYWdlOiBtZXNzYWdlXG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgaGFuZGxlRXJyb3JzKGVycm9yOiBLaW52ZXkuQmFzZUVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IubWVzc2FnZSk7XG4gICAgfVxuXG59Il19