const TabBar = require('../screenObjects/components/TabBar');
const LoginScreen = require('../screenObjects/LoginScreen');

describe('WebdriverIO and Appium, when using navigation through the tab bar', () => {

    beforeEach(async () => {
        await TabBar.waitForTabBarShown();
    });

    it('should be able to open the webview', async () => {
        await TabBar.openWebView();
        await browser.pause(1000)
    });

    it('should be able to open the login form screen', async () => {
        await TabBar.openLogin();
        await browser.pause(1000)
        await LoginScreen.waitForIsShown()
    });

    it('should be able to open the forms screen', async () => {
        await TabBar.openForms();
        await browser.pause(1000)
        // FormsScreen.waitForIsShown(true);
    });

    it('should be able to open the swipe screen', async () => {
        await TabBar.openSwipe();
        await browser.pause(1000)
        // SwipeScreen.waitForIsShown(true);
    });

    it('should be able to open the drag and drop screen', async () => {
        await TabBar.openDrag();
        await browser.pause(1000)
        // DragScreen.waitForIsShown(true);
    });

    it('should be able to open the home screen', async () => {
        await TabBar.openHome();
        await browser.pause(1000)
        // HomeScreen.waitForIsShown(true);
    });
});


