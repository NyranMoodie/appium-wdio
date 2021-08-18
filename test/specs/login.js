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

        await browser.pause(1000)
        // WebViewScreen.waitForWebsiteLoaded();
    });
});


