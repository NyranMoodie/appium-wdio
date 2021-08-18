const LoginScreen = require('../screenObjects/LoginScreen.page');
const TabBar = require('../screenObjects/components/TabBar.page');

describe('WebdriverIO and Appium, when interacting with a login form,', () => {

    beforeEach(() => {
        TabBar.waitForTabBarShown();
        TabBar.openLogin();
        LoginScreen.waitForIsShown()
    })

    it('should be able login successfully', async () => {
        // Always make sure you are on the right tab
        LoginScreen.clickLoginContainerButton()
        // Submit the data
        LoginScreen.submitLoginForm('test@webdriver.io', 'Test1234!');

        await browser.pause(5000)
        // Wait for the alert and validate it
        // NativeAlert.waitForIsShown();
        // expect(NativeAlert.text()).toEqual('Success\nYou are logged in!');

        // // Close the alert
        // NativeAlert.pressButton('OK');
        // NativeAlert.waitForIsShown(false);
    });

});


