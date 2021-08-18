class LoginScreen {

    get loginContainerButton() { return $('~button-login-container'); }
    get signUpContainerButton() { return $('~button-sign-up-container'); }
    get loginButton() { return $('~button-LOGIN'); }
    get signUpButton() { return $('~button-SIGN UP'); }
    get email() { return $('~input-email'); }
    get password() { return $('~input-password'); }
    get repeatPassword() { return $('~input-repeat-password'); }
    get biometricButton() { return $('~button-biometric'); }

    async submitLoginForm(username, password) {
        await this.email.setValue(username);
        await this.password.setValue(password);

        if (driver.isKeyboardShown()) {
            /**
             * Normally we would hide the keyboard with this command `driver.hideKeyboard()`, but there is an issue for hiding the keyboard
             * on iOS when using the command. You will get an error like below
             *
             *  Request failed with status 400 due to Error Domain=com.facebook.WebDriverAgent Code=1 "The keyboard on iPhone cannot be
             *  dismissed because of a known XCTest issue. Try to dismiss it in the way supported by your application under test."
             *  UserInfo={NSLocalizedDescription=The keyboard on iPhone cannot be dismissed because of a known XCTest issue. Try to dismiss
             *  it in the way supported by your application under test.}
             *
             * That's why we click outside of the keyboard.
             */
            await $('~Login-screen').click();
        }
        // On smaller screens there could be a possibility that the login button is not shown
        // Gestures.checkIfDisplayedWithSwipeUp(this.loginButton, 2);
        this.loginButton.click();
    }

    async clickLoginContainerButton() {
        await this.loginContainerButton.click()
    }
    async waitForIsShown() {
        await $('~Login-screen').waitForDisplayed({ timeout: 10000 })
    }
}
module.exports = new LoginScreen();