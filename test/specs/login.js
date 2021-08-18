const NativeAlert = require('../screenObjects/components/NativeAlert');
const TabBar = require('../screenObjects/components/TabBar');
const LoginScreen = require('../screenObjects/LoginScreen');

describe('WebdriverIO and Appium, when using navigation through the tab bar', () => {

    beforeEach(() => {
        TabBar.waitForTabBarShown();
        TabBar.openLogin();
        LoginScreen.waitForIsShown()
    });

    it('should be able to open the webview', async () => {
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


});


