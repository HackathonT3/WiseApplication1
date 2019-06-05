import { Kinvey } from "kinvey-nativescript-sdk";
import { alert, prompt } from "tns-core-modules/ui/dialogs";
import { Context } from "./../../shared/context.module";

export class ForgotPasswordPrompt {

    forgotPassword() {
        prompt({
            title: "Forgot Password",
            message: "Enter the email address you used to register to reset your password.",
            inputType: "email",
            defaultText: "address@email.com",
            okButtonText: "Ok",
            cancelButtonText: "Cancel"
        }).then((data) => {
            if (data.result) {
                this.resetPassword(data.text.trim())
                    .then(() => {
                        this.alert("Your password was successfully reset. Please check your email for instructions on choosing a new password.");
                    }).catch(() => {
                        this.alert("Error occurred resetting your password.");
                    });
            }
        });
    }

    // To-do: probably should match against email when submitting.
    // If they don't match, don't do anything.
    resetPassword(email : string) {
        return Kinvey.User.resetPassword(email)
            .catch(this.handleErrors);
    }

    alert( message : string) {
        return alert({
            title: Context.getAppName(),
            okButtonText: "Ok",
            message: message
        })
    }

    handleErrors(error: Kinvey.BaseError) {
        console.error(error.message);
    }

}