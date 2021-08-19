const NativeAlert = require('../screenObjects/components/NativeAlert');
const TabBar = require('../screenObjects/components/TabBar');
const LoginScreen = require('../screenObjects/LoginScreen');

describe('WebdriverIO and Appium, when interacting with a login form,', () => {

    beforeEach(async () => {
        await TabBar.waitForTabBarShown();
        await TabBar.openLogin();
        await LoginScreen.waitForIsShown()
    });

    it('should be able login successfully', async () => {
        // Always make sure you are on the right tab
        await LoginScreen.loginContainerButton.click();
        // Submit the data
        await LoginScreen.submitLoginForm('ss@dd.com', 'Password1!')
        // Wait for the alert and validate it
        await NativeAlert.waitForIsShown()
        expect(await NativeAlert.text()).toEqual('Success\nYou are logged in!');
        await browser.pause(1000)

        // Close the alert
        await NativeAlert.pressButton('OK');
        await NativeAlert.waitForIsShown(false);
    });

    it('should be able sign up successfully', async () => {
        // Always make sure you are on the right tab
        await LoginScreen.signUpContainerButton.click();
        // Submit the data
        await LoginScreen.submitSignUpForm('test@webdriver.io', 'Test1234!');

        // Wait for the alert and validate it
        await NativeAlert.waitForIsShown();
        expect(await NativeAlert.text()).toEqual('Signed Up!\nYou successfully signed up!');
        // Close the alert
        await NativeAlert.pressButton('OK');
        await NativeAlert.waitForIsShown(false);
    });

});


